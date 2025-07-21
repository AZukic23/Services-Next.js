'use client';

type Kunde = {
    id: number;
    name: string;
    services: string[];
};

const dummyKunden: Kunde[] = [
    { id: 1, name: "Firma Müller", services: ["Exchange", "SharePoint"] },
    { id: 2, name: "IT Solutions", services: ["Teams"] },
];

export default function KundenTab() {
    return (
        <section className="w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Kunden</h2>
            <div className="flex flex-col gap-6">
                {dummyKunden.map(k => (
                    <div
                        key={k.id}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-2 hover:shadow-xl transition"
                    >
                        <div className="flex items-center justify-between">
                            <strong className="text-xl text-gray-800">{k.name}</strong>
                            <span className="text-xs px-2 py-1 bg-lime-100 text-lime-700 rounded-full">
                {k.services.length} Service{(k.services.length !== 1) ? 's' : ''}
              </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {k.services.length === 0
                                ? <span className="text-gray-400 italic">Keine Services</span>
                                : k.services.map((s, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                    >
                    {s}
                  </span>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}