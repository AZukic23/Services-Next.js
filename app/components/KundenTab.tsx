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
};

export default function KundenTab({ kunden }: KundenTabProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-separate rounded-2xl border border-gray-900" style={{ borderSpacing: 0 }}>
                <thead>
                <tr>
                    <th className="border-b-2 border-gray-900 px-6 py-4 text-left">Kundenname</th>
                    <th className="border-b-2 border-gray-900 px-6 py-4 text-left">Services</th>
                    <th className="border-b-2 border-gray-900 px-6 py-4 text-left">Version</th>
                    <th className="border-b-2 border-gray-900 px-6 py-4 text-left">Preis</th>
                </tr>
                </thead>
                <tbody>
                {kunden.map((kunde) => (
                    <tr key={kunde.id}>
                        <td className="border-b border-gray-900 px-6 py-4">{kunde.name}</td>
                        <td className="border-b border-gray-900 px-6 py-4">
                            {kunde.services.map((s, i) => (
                                <div key={i}>{s.amount}x {s.service.name} {s.type}</div>
                            ))}
                        </td>
                        <td className="border-b border-gray-900 px-6 py-4">
                            {kunde.services.map((s, i) => (
                                <div key={i}>{s.service.name} {s.service.version}</div>
                            ))}
                        </td>
                        <td className="border-b border-gray-900 px-6 py-4">
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