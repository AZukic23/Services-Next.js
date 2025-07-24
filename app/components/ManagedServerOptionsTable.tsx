import React from "react";


type ManagedServerOption = {
    name: string;
    priceMonthly?: number;
    priceOnce?: number;
    securityLevel?: string;
    details?: string;
};

export const ManagedServerOptionsTable: React.FC<{ options: ManagedServerOption[] }> = ({ options }) => (
    <div className="mt-8">
        <h3 className="text-xl text-black font-bold mb-4">Optionale Zusatzleistungen & Security-Optionen</h3>
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                <tr>
                    <th className="bg-gray-100 text-black p-3 text-left">Leistung</th>
                    <th className="bg-gray-100  text-black p-3 text-center">Monatlich</th>
                    <th className="bg-gray-100  text-black p-3 text-center">Einmalig</th>
                    <th className="bg-gray-100 text-black p-3 text-center">Sicherheits­level</th>
                    <th className="bg-gray-100 text-black p-3 text-left">Details</th>
                </tr>
                </thead>
                <tbody>
                {options.map((opt, idx) => (
                    <tr key={idx} className="border-b">
                        <td className="text-black p-3">{opt.name}</td>
                        <td className="text-black p-3  text-center">{opt.priceMonthly ? opt.priceMonthly.toFixed(2) + " €" : ""}</td>
                        <td className="text-black p-3 text-center">{opt.priceOnce ? opt.priceOnce.toFixed(2) + " €" : ""}</td>
                        <td className="text-black p-3 text-center">{opt.securityLevel || ""}</td>
                        <td className="text-black p-3">{opt.details || ""}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
);
