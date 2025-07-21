'use client';

const dummyLeistungen = [
    { id: 1, name: "Exchange", version: "2022" },
    { id: 2, name: "SharePoint", version: "2023" },
];

export default function LeistungenTab() {
    return (
        <section className="w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Customern Leistungen</h2>
            <div className="flex flex-col gap-6">
                {dummyLeistungen.map(l => (
                    <div key={l.id} className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition">
                        <span className="font-semibold text-lg text-gray-800">{l.name}</span>
                        <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm">
              Version: {l.version}
            </span>
                    </div>
                ))}
            </div>
        </section>
    );
}