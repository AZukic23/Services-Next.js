import { ManagedServicesTable } from "../components/ManagedServicesTable";

const features = [
    {
        name: "Web-Zugriff auf Service-Status",
        editions: { Bronze: true, Silber: true, Gold: true },
    },
    {
        name: "Fernwartungssoftware",
        editions: { Bronze: true, Silber: true, Gold: true },
    },
    {
        name: "monatlich zusammengefasster Bericht",
        editions: { Bronze: true, Silber: true, Gold: true },
    },
    {
        name: "Inventarisierung",
        editions: { Bronze: true, Silber: true, Gold: true },
    },
    {
        name: "Installation aktueller Sicherheitsupdates",
        editions: { Bronze: false, Silber: "automatische Freigabe", Gold: "0,5h/Monat inkl." },
    },
    // ...weitere Features
];

const prices = [
    {
        label: "Einrichtungspreis pro Server",
        values: { Bronze: "€ 199,00", Silber: "€ 199,00", Gold: "€ 0,00" },
    },
    {
        label: "Betreuungspauschale pro Server",
        values: { Bronze: "€ 49,39 mtl.", Silber: "€ 69,80 mtl.", Gold: "€ 115,85 mtl." },
    },
    // ...weitere Preiszeilen/Optionen
];

export default function DemoManagedService() {
    return (
        <ManagedServicesTable
            serviceName="Managed Server"
            features={features}
            prices={prices}
        />
    );
}