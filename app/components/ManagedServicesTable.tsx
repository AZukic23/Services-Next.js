import React from "react";

type Edition = "Bronze" | "Silber" | "Gold";

interface Feature {
    name: string;
    editions: { [key in Edition]?: string | boolean | { check?: boolean; label?: string } };
}

interface PriceRow {
    label: string;
    values: { [key in Edition]?: string };
}

interface ManagedServiceTableProps {
    serviceName: string;
    features: Feature[];
    prices: PriceRow[];
    onBack?: () => void;
    onVersionSelect?: (version: string) => void; // falls Versionen als Buttons
    versions?: string[]; // falls du mehrere Versionen hast
}

const editionStyles: Record<Edition, string> = {
    Bronze: "bg-[#cd7f32] text-white",
    Silber: "bg-[#c0c0c0] text-gray-900",
    Gold: "bg-[#ffd700] text-gray-900",
};

export const ManagedServicesTable: React.FC<ManagedServiceTableProps> = ({
                                                                             serviceName,
                                                                             features,
                                                                             prices,
                                                                             onBack,
                                                                             onVersionSelect,
                                                                             versions,
                                                                         }) => {


    const editions: Edition[] = ["Bronze", "Silber", "Gold"];
    const renderCell = (
        value: string | boolean | { check?: boolean; label?: string } | undefined
    ) => {
        if (typeof value === "boolean") {
            return value ? "✔️" : "";
        }
        if (typeof value === "string") {
            return value;
        }
        if (typeof value === "object" && value !== null) {
            return (
                <>
                    {value.check ? "✔️ " : ""}
                    {value.label}
                </>
            );
        }
        return "";
    };

    return (
        <div className="managed-services-table relative w-full max-w-3xl mx-auto shadow-lg rounded-md bg-white p-6">
            {onBack && (
                <button
                    onClick={onBack}
                    className="absolute top-4 left-4 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded font-semibold shadow transition-colors"
                >
                    ← Zurück
                </button>
            )}
            {/* Falls mehrere Versionen als Buttons */}
            {versions && onVersionSelect && (
                <div className="mb-6 flex gap-4">
                    {versions.map((version) => (
                        <button
                            key={version}
                            onClick={() => onVersionSelect(version)}
                            className="px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded font-semibold shadow transition-colors"
                        >
                            Version {version}
                        </button>
                    ))}
                </div>
            )}
            <h2 className="text-2xl font-bold mb-6 text-[#18181b] text-center">{serviceName}</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                    <tr>
                        <th className="bg-gray-100 text-[#18181b] p-3 text-left font-bold w-10">#</th>
                        <th className="bg-gray-100 text-[#18181b] p-3 text-left font-bold">Leistungsmerkmal</th>
                        {editions.map((edition) => (
                            <th
                                key={edition}
                                className={`p-3 text-center font-bold ${editionStyles[edition]}`}
                            >
                                {edition}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {features.map((feature, idx) => (
                        <tr key={idx} className="border-b">
                            <td className="text-center text-[#18181b] p-3">{idx + 1}</td>
                            <td className="p-3 text-[#18181b]">{feature.name}</td>
                            {editions.map((ed) => (
                                <td key={ed} className="text-center text-[#18181b] p-3">
                                    {renderCell(feature.editions[ed])}
                                </td>
                            ))}
                        </tr>
                    ))}
                    {prices.map((row, idx) => (
                        <tr key={`price-${idx}`} className="border-t">
                            <td className="p-3" /> {/* Platzhalter für Nummerierungsspalte */}
                            <td className="p-3 font-bold text-[#18181b]">{row.label}</td>
                            {editions.map((ed) => (
                                <td key={ed} className="text-center font-bold text-[#18181b] p-3">
                                    {row.values[ed] || ""}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <style jsx>{`
                .managed-services-table {
                    position: relative;
                }
            `}</style>
        </div>
    );
};