import { useState } from "react";

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

type KundenTabProps = {
    kunden: Customer[];
    onKundenUpdate?: (kunden: Customer[]) => void; // optional Callback für Refresh
};

export default function KundenTab({ kunden, onKundenUpdate }: KundenTabProps) {
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const res = await fetch("/api/kunden", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });
        if (res.ok) {
            setName("");
            // Kundenliste neu laden
            if (onKundenUpdate) {
                const kundenRes = await fetch("/api/kunden");
                const neueKunden = await kundenRes.json();
                onKundenUpdate(neueKunden);
            }
        }
        setIsLoading(false);
    };

    return (
        <div className="overflow-x-auto">
            {/* Kunden anlegen Formular */}
            <form onSubmit={handleSubmit} className="mb-8 flex items-center gap-4">
                <input
                    type="text"
                    required
                    placeholder="Kundenname"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="border px-4 py-2 rounded text-black bg-white"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="border-2 border-gray-900 rounded-lg px-8 py-2 font-bold hover:bg-lime-100 text-black"
                >
                    {isLoading ? "Speichern..." : "Kunde anlegen"}
                </button>
            </form>

            {/* Tabelle */}
            <table className="min-w-full border-separate rounded-2xl border border-gray-900" style={{ borderSpacing: 0 }}>
                <thead>
                <tr>
                    <th className="border-b-2 border-gray-900 px-6 py-4 text-left text-black font-bold">Kundenname</th>
                    <th className="border-b-2 border-gray-900 px-6 py-4 text-left text-black font-bold">Services</th>
                    <th className="border-b-2 border-gray-900 px-6 py-4 text-left text-black font-bold">Version</th>
                    <th className="border-b-2 border-gray-900 px-6 py-4 text-left text-black font-bold">Preis</th>
                </tr>
                </thead>
                <tbody>
                {kunden.map((kunde) => (
                    <tr key={kunde.id}>
                        <td className="border-b border-gray-900 px-6 py-4 text-black">{kunde.name}</td>
                        <td className="border-b border-gray-900 px-6 py-4 text-black">
                            {kunde.services.map((s, i) => (
                                <div key={i}>{s.amount}x {s.service.name} {s.type}</div>
                            ))}
                        </td>
                        <td className="border-b border-gray-900 px-6 py-4 text-black">
                            {kunde.services.map((s, i) => (
                                <div key={i}>{s.service.name} {s.service.version}</div>
                            ))}
                        </td>
                        <td className="border-b border-gray-900 px-6 py-4 text-black">
                            {kunde.services.map((s, i) => (
                                <div key={i}>{s.price}€ monatlich</div>
                            ))}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}