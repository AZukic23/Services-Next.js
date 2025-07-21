"use client";
import { useEffect, useState } from "react";
import KundenTab from "../components/KundenTab";

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
        fetch("/api/kunden")
            .then((res) => res.json())
            .then(setCustomers);
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r px-6 py-8">
                <h2 className="text-2xl font-bold mb-10">IT Works</h2>
                <nav>
                    <div className="text-lg font-semibold mb-4 text-lime-700">Kunden</div>
                </nav>
            </aside>
            {/* Main Content */}
            <main className="flex-1 p-10">
                <div className="flex justify-between items-center mb-8">
                    <div className="text-xl font-semibold">Kunden anlegen:</div>
                    <button className="border-2 border-gray-900 rounded-lg px-8 py-2 font-bold hover:bg-lime-100">
                        anlegen
                    </button>
                </div>
                <KundenTab kunden={customers} />
            </main>
        </div>
    );
}