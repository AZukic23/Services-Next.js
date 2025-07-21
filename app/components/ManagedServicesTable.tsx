import React from "react";

type Edition = "Bronze" | "Silber" | "Gold";

interface Feature {
    name: string;
    editions: { [key in Edition]?: string | boolean }; // true/false oder Text
}

interface PriceRow {
    label: string;
    values: { [key in Edition]?: string };
}

interface ManagedServiceTableProps {
    serviceName: string;
    features: Feature[];
    prices: PriceRow[];
}

export const ManagedServicesTable: React.FC<ManagedServiceTableProps> = ({
                                                                             serviceName,
                                                                             features,
                                                                             prices,
                                                                         }) => {
    const editions: Edition[] = ["Bronze", "Silber", "Gold"];
    // Helper: Checkbox or Text
    const renderCell = (value: string | boolean | undefined) => {
        if (typeof value === "boolean") {
            return value ? "✔️" : "";
        }
        return value || "";
    };

    return (
        <div className="managed-services-table">
            <h2>{serviceName}</h2>
            <table>
                <thead>
                <tr>
                    <th>Leistungsmerkmal</th>
                    {editions.map((edition) => (
                        <th key={edition}>{edition}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {features.map((feature, idx) => (
                    <tr key={idx}>
                        <td>{feature.name}</td>
                        {editions.map((ed) => (
                            <td key={ed}>{renderCell(feature.editions[ed])}</td>
                        ))}
                    </tr>
                ))}
                {/* Preiszeilen */}
                {prices.map((row, idx) => (
                    <tr key={`price-${idx}`}>
                        <td><strong>{row.label}</strong></td>
                        {editions.map((ed) => (
                            <td key={ed}><strong>{row.values[ed] || ""}</strong></td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <style jsx>{`
        .managed-services-table {
          overflow-x: auto;
        }
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 0.5em 0.8em;
          text-align: left;
        }
        th {
          background: #f4f4f4;
        }
      `}</style>
        </div>
    );
};