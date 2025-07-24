import React from "react";
import { ManagedServerPackage } from "../data/managedServerV1";

type Edition = "Bronze" | "Silber" | "Gold";

interface Feature {
    name: string;
    editions: { [key in Edition]?: string | boolean | { check?: boolean; label?: string } };
}

interface PriceRow {
    label: string;
    values: { [key in Edition]?: string };
}

interface ManagedServicesTableProps {
    serviceName: string;
    packages: ManagedServerPackage[];
    onBack?: () => void;
    onVersionSelect?: (version: string) => void;
    versions?: string[];
}

const editionStyles: Record<Edition, string> = {
    Bronze: "bg-[#cd7f32] text-white",
    Silber: "bg-[#c0c0c0] text-gray-900",
    Gold: "bg-[#ffd700] text-gray-900",
};

export const ManagedServicesTable: React.FC<ManagedServicesTableProps> = ({
                                                                              serviceName,
                                                                              packages,
                                                                              onBack,
                                                                              onVersionSelect,
                                                                              versions,
                                                                          }) => {
    const editions: Edition[] = ["Bronze", "Silber", "Gold"];

    // Alle Feature-Keys (aus dem ersten Paket)
    const featureKeys = Object.keys(packages[0].features) as (keyof typeof packages[0]['features'])[];

    // Für schönere Namen ggf. Mapping (optional, sonst raw)
    const featureNameMap: { [key: string]: string } = {
        webServiceStatus: "Web-Zugriff auf Service-Status",
        remoteSoftware: "Fernwartungssoftware",
        monthlyReport: "Monatlich zusammengefasster Bericht",
        inventory: "Inventarisierung",
        serverHardwareProvision: "Vorhaltung Server-Hardware",
        securityUpdates: "Installation aktueller Sicherheitsupdates",
        vulnerabilityManagement: "Vulnerability Management",
        managedAntivirus: "Managed Anti-Virus (Bitdefender)",
        monitoring: "Monitoring",
        alerting: "Alarmierungsart",
        responseTime: "Interventionszeit (kritisch)",
        tempCleanup: "Bereinigung temporärer Dateien / Eventlog",
        partitionService: "Partitionsfüllstand & Partitionsservice",
        quarterlyConsulting: "Quartalsweises Beratungsgespräch",
        repairDevices: "Instandsetzung Devices",
        directContact: "Direkter Ansprechpartner",
        freeHotline: "Kostenlose Supporthotline",
        conception: "Konzeptionsleistungen",
        softwareIssueHandling: "Software-Problembehandlungen",
        serviceDiscount: "Rabatt auf Dienstleistungspreise",
    };

    // Preise auslesen
    const setupFees = Object.fromEntries(packages.map(pkg => [pkg.name, pkg.setupFee + " €"]));
    const monthlyFees = Object.fromEntries(packages.map(pkg => [pkg.name, pkg.monthlyFee + " €"]));
    const notes = Object.fromEntries(packages.map(pkg => [pkg.name, pkg.notes || ""]));

    // Zelle hübsch machen (Check, Label, etc.)
    const renderCell = (value: any) => {
        if (typeof value === "boolean") return value ? "✔️" : "";
        if (typeof value === "string") return value;
        return value || "";
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
                    {featureKeys.map((featureKey, idx) => (
                        <tr key={featureKey as string} className="border-b">
                            <td className="text-center text-[#18181b] p-3">{idx + 1}</td>
                            <td className="p-3 text-[#18181b]">
                                {featureNameMap[featureKey as string] || featureKey}
                            </td>
                            {editions.map((ed) => (
                                <td key={ed} className="text-center text-[#18181b] p-3">
                                    {renderCell(packages.find(p => p.name === ed)?.features[featureKey])}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr className="border-t">
                        <td className="p-3" />
                        <td className="p-3 font-bold text-[#18181b]">Setup-Gebühr</td>
                        {editions.map((ed) => (
                            <td key={ed} className="text-center font-bold text-[#18181b] p-3">
                                {setupFees[ed]}
                            </td>
                        ))}
                    </tr>
                    <tr className="border-t">
                        <td className="p-3" />
                        <td className="p-3 font-bold text-[#18181b]">Monatliche Gebühr</td>
                        {editions.map((ed) => (
                            <td key={ed} className="text-center font-bold text-[#18181b] p-3">
                                {monthlyFees[ed]}
                            </td>
                        ))}
                    </tr>
                    {/* Optional: Notizen (z.B. Mengenrabatt Gold) */}
                    {Object.values(notes).some(n => n) && (
                        <tr className="border-t">
                            <td className="p-3" />
                            <td className="p-3 font-bold text-[#18181b]">Hinweis</td>
                            {editions.map((ed) => (
                                <td key={ed} className="text-center italic text-[#666] p-3">
                                    {notes[ed]}
                                </td>
                            ))}
                        </tr>
                    )}
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