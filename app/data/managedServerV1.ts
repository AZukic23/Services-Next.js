export const managedServerV1Features = [
    { name: "Web-Zugriff auf Service-Status", editions: { Bronze: true, Silber: true, Gold: true } },
    { name: "Fernwartungssoftware", editions: { Bronze: true, Silber: true, Gold: true } },
    { name: "monatlich zusammengefasster Bericht", editions: { Bronze: true, Silber: true, Gold: true } },
    { name: "Inventarisierung", editions: { Bronze: true, Silber: true, Gold: true } },
    { name: "Vorhaltung VMware ESX Server-Hardware", editions: { Bronze: false, Silber: false, Gold: true } },
    { name: "Installation aktueller Sicherheitsupdates", editions: { Bronze: false, Silber: { check: true, label: "automatische Freigabe nach Risiko-Klassifizierung" }, Gold: {check: true, label: "enthaltenes Zeit-Kontingent 0,5h pro Monat pro Server für manuelle Einschätzung und Freigabe"} } },
    { name: "Schutzkomponenten", editions: { Bronze: false, Silber: {check:true, label: 'Antivirus-schutz inklusive:\n' +
                    '-Verhaltensanalyse \n' +
                    '    und \n' +
                    '    Schwachstellenschutz\n' +
                    '-Verschlüsselungs-\n' +
                    '    trojaner-Schutz\n' +
                    '-Geräte-Steuerung \n' +
                    '   (USB)\n' +
                    '-Web-Filter\n' +
                    '-Kontrolle des \n' +
                    '    Abflusses von \n' +
                    '    Firmendaten\n' +
                    '-Applikations-Kontrolle\n'}, Gold: {check: true, label: "wie Silberpaket, erweitert um:\n" +
                    "-Ursachenanalyse\n" +
                    "-Proaktive Suche\n" +
                    "    nach unbekannten \n" +
                    "    Bedrohungen und \n" +
                    "    Hacker-Angriffen\n" +
                    "-Quarantäne-  \n" +
                    "    Verwaltung inkl. \n" +
                    "    Laboruntersuchung\n"} } },
    { name: "Monitoring", editions: { Bronze: "täglich", Silber: "24x7 im 15min-Takt", Gold: "24x7 im 5min-Takt" } },
    { name: "Alarmierungsart", editions: { Bronze: "per E-Mail an Kunde", Silber: "zu zentralem Ticket-System im SYSTEMHAUS", Gold: "zu zentralem Ticket-System im SYSTEMHAUS" } },
    // ...weitere Merkmale
];

export const managedServerV1Prices = [
    { label: "Preis pro Monat", values: { Bronze: "49,39 €", Silber: "69,80 €", Gold: "115,85 €" } }
];