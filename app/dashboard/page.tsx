'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import MitarbeiterTab from '../components/MitarbeiterTab';
import KundenTab from '../components/KundenTab';
import LeistungenTab from '../components/LeistungenTab';
import ManagedTab from '../components/ManagedTab';
import WelcomeTab from "../components/WelcomeTab";
import {ManagedServicesTable} from "../components/ManagedServicesTable";
import {ManagedServicesOverview} from "../components/ManagedServicesOverview";
import { services } from "../data/managedServices";
import { managedServerV1Features, managedServerV1Prices } from "../data/managedServerV1";

export default function DashboardPage() {

    type ServiceAssignment = {
        amount: number;
        type: string;
        price: number;
        service: {
            name: string;
            version: string;
        };
    };
    type Customer = {
        id: number;
        name: string;
        services: ServiceAssignment[];
    };

    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedVersion, setSelectedVersion] = useState<string | null>(null);

    // Tab auslesen (default: mitarbeiter)
    const [username, setUsername] = useState('');
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab') || 'home';

    useEffect(() => {
        fetch('/api/user', { credentials: 'include' }) // <--- wichtig!
            .then(res => res.json())
            .then(data => setUsername(data.username || ''));
    }, []);
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        if (tab === 'kunden') {
            fetch('/api/kunden')
                .then(res => res.json())
                .then(data => setCustomers(data));
        }
    }, [tab]);

    function renderTab() {
        switch (tab) {
            case 'home':
                return <WelcomeTab username={username} />;
            case 'mitarbeiter':
                return <MitarbeiterTab />;
            case 'kunden':
                return <KundenTab kunden={customers} onKundenUpdate={setCustomers} />;
            case 'leistungen':
                return <LeistungenTab />;
            case 'managed':
                // Managed Server ist ausgewählt und Version 1.0 ist gewählt
                if (selectedService === "managed-server" && selectedVersion === "1.0") {
                    return (
                        <>
                            <h2 className="text-3xl font-bold mb-8 text-gray-900">Managed Server &gt; Version 1.0</h2>
                            <ManagedServicesTable
                                serviceName="Managed Server 1.0"
                                features={managedServerV1Features}
                                prices={managedServerV1Prices}
                            />
                            <button
                                className="mt-6 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded font-semibold shadow"
                                onClick={() => setSelectedVersion(null)}
                            >
                                Zurück zu den Versionen
                            </button>
                        </>
                    );
                }
                // Managed Server ist ausgewählt, aber keine Version
                if (selectedService === "managed-server") {
                    return (
                        <>
                            <h2 className="text-3xl font-bold mb-8 text-gray-900">Managed Server – Versionen</h2>
                            <button
                                className="px-6 py-3 bg-lime-600 text-white rounded font-semibold hover:bg-lime-700"
                                onClick={() => setSelectedVersion("1.0")}
                            >
                                Version 1.0
                            </button>
                            <button
                                className="mt-6 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded font-semibold shadow"
                                onClick={() => setSelectedService(null)}
                            >
                                Zurück zu allen Services
                            </button>
                        </>
                    );
                }
                // Übersicht, kein Service ausgewählt
                return (
                    <>
                        <h2 className="text-3xl font-bold mb-8 text-gray-900">Managed Services</h2>
                        <ManagedServicesOverview
                            services={services}
                            onSelect={(key) => {
                                if (key === "managed-server") setSelectedService("managed-server");
                            }}
                        />
                    </>
                );
            default:
                return <WelcomeTab username={username} />;
        }
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar mit Logo */}
            <Sidebar />
            {/* Hauptbereich */}
            <main className="flex-1 p-10 flex flex-col items-center">
                {renderTab()}
            </main>
        </div>
    );
}