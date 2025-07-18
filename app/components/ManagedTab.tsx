'use client';

const dummyManaged = [
    { id: 1, name: "Serverbetrieb", status: "aktiv" },
    { id: 2, name: "Monitoring", status: "inaktiv" },
];

export default function ManagedTab() {
    return (
        <section className="w-full max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Managed Services</h2>
            <div className="flex flex-col gap-6">
                {dummyManaged.map(m => (
                    <div key={m.id} className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition">
                        <span className="font-semibold text-lg text-gray-800">{m.name}</span>
                        <span className={`px-3 py-1 rounded-full text-sm ${m.status === "aktiv" ? "bg-lime-100 text-lime-700" : "bg-gray-200 text-gray-500"}`}>
              {m.status}
            </span>
                    </div>
                ))}
            </div>
        </section>
    );
}