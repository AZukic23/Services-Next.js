'use client';

import { useEffect, useState } from 'react';

type Mitarbeiter = {
    id: number;
    name: string;
    abteilung: string;
    rolle: string;
};

export default function MitarbeiterTab() {
    const [mitarbeiter, setMitarbeiter] = useState<Mitarbeiter[]>([]);
    const [loading, setLoading] = useState(false);

    async function fetchMitarbeiter() {
        setLoading(true);
        const res = await fetch('/api/mitarbeiter');
        const data = await res.json();
        setMitarbeiter(data.mitarbeiter as Mitarbeiter[]);
        setLoading(false);
    }

    useEffect(() => {
        fetchMitarbeiter();
    }, []);

    async function handleRemove(id: number) {
        await fetch(`/api/mitarbeiter/${id}`, { method: 'DELETE' });
        fetchMitarbeiter();
    }

    return (
        <section className="w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">IT Works Mitarbeiter</h2>
            <div className="flex flex-col gap-6">
                {loading ? (
                    <div className="text-center text-gray-500">Lade Mitarbeiter...</div>
                ) : mitarbeiter.length === 0 ? (
                    <div className="text-center text-gray-400">Keine Mitarbeiter vorhanden.</div>
                ) : (
                    mitarbeiter.map(m => (
                        <div
                            key={m.id}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-xl transition"
                        >
                            <div>
                                <div className="text-xl font-semibold text-gray-900">{m.name}</div>
                                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="bg-lime-100 text-lime-700 px-3 py-1 rounded-full text-sm font-medium">
                    {m.abteilung}
                  </span>
                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {m.rolle}
                  </span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemove(m.id)}
                                className="border border-red-300 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-red-50 hover:border-red-500 transition"
                                title="Mitarbeiter entfernen"
                            >
                                Entfernen
                            </button>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}