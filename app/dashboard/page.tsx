'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import MitarbeiterTab from '../components/MitarbeiterTab';
import KundenTab from '../components/KundenTab';
import LeistungenTab from '../components/LeistungenTab';
import ManagedTab from '../components/ManagedTab';
import WelcomeTab from "../components/WelcomeTab";

export default function DashboardPage() {
    // Tab auslesen (default: mitarbeiter)
    const [username, setUsername] = useState('');
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab') || 'home';

    useEffect(() => {
        fetch('/api/user', { credentials: 'include' }) // <--- wichtig!
            .then(res => res.json())
            .then(data => setUsername(data.username || ''));
    }, []);
    const [customers, setCustomers] = useState([]); // <- Typisierung optional

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
                return <KundenTab kunden={customers} />;
            case 'leistungen':
                return <LeistungenTab />;
            case 'managed':
                return <ManagedTab />;
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