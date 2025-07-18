'use client';

import { useEffect, useState } from 'react';

export default function KundenPage() {
    const [kunden, setKunden] = useState([]);
    const [newName, setNewName] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchKunden() {
        setLoading(true);
        const res = await fetch('/api/kunden');
        const data = await res.json();
        setKunden(data.kunden);
        setLoading(false);
    }

    useEffect(() => {
        fetchKunden();
    }, []);

    async function handleCreate(e) {
        e.preventDefault();
        if (!newName) return;

        await fetch('/api/kunden/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName }),
        });
        setNewName('');
        fetchKunden();
    }

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6">Kunden</h1>
            <form onSubmit={handleCreate} className="mb-6 flex gap-2">
                <input
                    type="text"
                    placeholder="Neuer Kunde"
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-lime-600 text-white px-4 py-2 rounded">Erstellen</button>
            </form>
            {loading ? (
                <div>Lade Kunden...</div>
            ) : kunden.length === 0 ? (
                <div>Keine Kunden vorhanden.</div>
            ) : (
                <ul>
                    {kunden.map(k => (
                        <li key={k.id} className="mb-4 border-b pb-2">
                            <strong>{k.name}</strong>
                            <ul className="ml-4">
                                {k.services.length === 0 ? (
                                    <li>Keine Services.</li>
                                ) : (
                                    k.services.map(s => (
                                        <li key={s.id}>
                                            {s.service.name} (Version: {s.service.version})
                                        </li>
                                    ))
                                )}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}