'use client';

import { useSearchParams } from 'next/navigation';
import { Sidebar } from '../components/Sidebar';
import MitarbeiterTab from '../components/MitarbeiterTab';
import KundenTab from '../components/KundenTab';
import LeistungenTab from '../components/LeistungenTab';
import ManagedTab from '../components/ManagedTab';
import WelcomeTab from "../components/WelcomeTab";

export default function DashboardPage() {
    // Tab auslesen (default: mitarbeiter)
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab') || 'home';

    function renderTab() {
        switch (tab) {
            case 'home':
                return <WelcomeTab />;
            case 'mitarbeiter':
                return <MitarbeiterTab />;
            case 'kunden':
                return <KundenTab />;
            case 'leistungen':
                return <LeistungenTab />;
            case 'managed':
                return <ManagedTab />;
            default:
                return <WelcomeTab />;
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