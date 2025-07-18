'use client';

import { useSearchParams } from 'next/navigation';
import { Sidebar } from '../components/Sidebar';
import { ManagedImage } from '../components/ManagedImage';

export default function DashboardPage() {
    const tab = useSearchParams().get('tab');

    // Dummy-Content je nach Tab
    let content;
    switch (tab) {
        case 'mitarbeiter':
            content = <div>Mitarbeiter-Übersicht kommt hier.</div>;
            break;
        case 'kunden':
            content = <div>Kunden-Übersicht kommt hier.</div>;
            break;
        case 'leistungen':
            content = <div>Kunden Leistungen kommen hier.</div>;
            break;
        case 'managed':
            content = <div>Managed Services Details kommen hier.</div>;
            break;
        default:
            content = <ManagedImage />;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-10">{content}</main>
        </div>
    );
}