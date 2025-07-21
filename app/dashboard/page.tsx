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
                return <KundenTab kunden={customers} onKundenUpdate={setCustomers}  />;
            case 'leistungen':
                return <LeistungenTab />;
            case 'managed':
                return <ManagedServicesOverview services={[]} onSelect={function(key: string): void {
                    throw new Error('Function not implemented.');
                } }/>;
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