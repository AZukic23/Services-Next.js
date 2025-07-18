'use client';

import { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ManagedImage } from '../components/ManagedImage';

export default function DashboardPage() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Username aus LocalStorage holen (wurde beim Login gespeichert)
        const storedUser = localStorage.getItem('username');
        setUsername(storedUser || '');
    }, []);

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar />
            <main className="flex-1 p-10 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Willkommen, <span className="text-lime-700">{username}</span>!
                </h2>
                <ManagedImage />
            </main>
        </div>
    );
}