"use client";
import { useEffect, useState } from "react";

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

export default function CustomersPage() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        fetch("/api/Customern")
            .then((res) => res.json())
            .then(setCustomers);
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r px-6 py-8">
                <h2 className="text-2xl font-bold mb-10">IT Works</h2>
                <nav>
                    <div className="text-lg font-semibold mb-4 text-lime-700">Customern</div>
                </nav>
            </aside>
            {/* Main Content */}
            <main className="flex-1 p-10">
                <div className="flex justify-between items-center mb-8">
                    <div className="text-xl font-semibold">Customern anlegen:</div>
                    <button className="border-2 border-gray-900 rounded-lg px-8 py-2 font-bold hover:bg-lime-100">
                        anlegen
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-separate rounded-2xl border border-gray-900" style={{ borderSpacing: 0 }}>
                        <thead>
                        <tr>
                            <th className="border-b-2 border-gray-900 px-6 py-4 text-left">Customernname</th>
                            <th className="border-b-2 border-gray-900 px-6 py-4 text-left">Services</th>
                            <th className="border-b-2 border-gray-900 px-6 py-4 text-left">Version</th>
                            <th className="border-b-2 border-gray-900 px-6 py-4 text-left">Preis</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((Customer) => (
                            <tr key={Customer.id}>
                                <td className="border-b border-gray-900 px-6 py-4">{Customer.name}</td>
                                <td className="border-b border-gray-900 px-6 py-4">
                                    {Customer.services.map((s, i) => (
                                        <div key={i}>{s.amount}x {s.service.name} {s.type}</div>
                                    ))}
                                </td>
                                <td className="border-b border-gray-900 px-6 py-4">
                                    {Customer.services.map((s, i) => (
                                        <div key={i}>{s.service.name} {s.service.version}</div>
                                    ))}
                                </td>
                                <td className="border-b border-gray-900 px-6 py-4">
                                    {Customer.services.map((s, i) => (
                                        <div key={i}>{s.price}€ monatlich</div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}