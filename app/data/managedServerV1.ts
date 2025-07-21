export const managedServerV1Features = [
    { name: "Monitoring", editions: { Bronze: true, Silber: true, Gold: true } },
    { name: "Patch-Management", editions: { Bronze: false, Silber: true, Gold: true } },
    { name: "Backup", editions: { Bronze: false, Silber: false, Gold: true } },
    // ...weitere Merkmale
];

export const managedServerV1Prices = [
    { label: "Preis pro Monat", values: { Bronze: "49 €", Silber: "69 €", Gold: "99 €" } }
];