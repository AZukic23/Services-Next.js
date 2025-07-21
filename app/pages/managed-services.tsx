import { useState } from "react";
import { ManagedServicesOverview } from "../components/ManagedServicesOverview";
import { ManagedServicesTable } from "../components/ManagedServicesTable"; // Detailansicht

// Beispiel-Daten
const services = [
    {
        key: "managed-server",
        name: "Managed Server",
        description: "Komplette Serververwaltung und Monitoring.",
    },
    {
        key: "managed-backup",
        name: "Managed Backup for Server",
        description: "Professionelle Datensicherungslösungen für Ihre Server.",
    },
    {
        key: "managed-client",
        name: "Managed Client",
        description: "Verwaltung und Schutz Ihrer Arbeitsplatzgeräte.",
    },
    // ...weitere Services
];

export default function ManagedServicesTab() {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    // Hier würdest du die Detaildaten dynamisch laden, je nach ausgewähltem Service
    // Zum Testen ggf. einfach das Demo-Table von vorhin nehmen

    return (
        <div>
            <h1>Managed Services</h1>
            {!selectedService ? (
                <ManagedServicesOverview
                    services={services}
                    onSelect={setSelectedService}
                />
            ) : (
                // Detailansicht anzeigen
                <div>
                    <button onClick={() => setSelectedService(null)}>Zurück</button>
                    {/* Hier würdest du die ManagedServicesTable für den gewählten Service anzeigen */}
                    {/* <ManagedServicesTable ... /> */}
                </div>
            )}
        </div>
    );
}