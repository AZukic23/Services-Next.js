import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // Managed Services erstellen (aus managedServices.ts)
    const managedServicesData = [
        { key: "managed-server", name: "Managed Server", description: "Komplette Serververwaltung und Monitoring." },
        { key: "managed-backup", name: "Managed Backup for Server", description: "Professionelle Datensicherungslösungen für Ihre Server." },
        { key: "managed-client", name: "Managed Client", description: "Verwaltung und Schutz Ihrer Arbeitsplatzgeräte." },
        { key: "managed-network", name: "Managed Network", description: "Verwaltung und Schutz Ihres Netzwerks." },
        { key: "managed-firewall", name: "Managed Firewall", description: "Verwaltung und Schutz Ihrer Firewall." },
        { key: "managed-mdm", name: "Managed MDM", description: "Verwaltung und Schutz Ihres MDM´s." },
        { key: "sla", name: "SLA", description: "Verwaltung und Schutz Ihres SLA`s." },
        { key: "managed-pbx", name: "Managed PBX", description: "Verwaltung und Schutz Ihrer PBX." },
        { key: "managed-cloud-iaas", name: "Managed Cloud IaaS", description: "Verwaltung und Schutz Ihrer Cloud." },
    ];

    // Nur für "Managed Server" Packages anlegen
    const managedServer = await prisma.managedService.create({
        data: {
            key: "managed-server",
            name: "Managed Server",
            description: "Komplette Serververwaltung und Monitoring.",
            packages: {
                create: [
                    {
                        name: "Bronze",
                        features: {
                            webServiceStatus: true,
                            remoteSoftware: true,
                            monthlyReport: true,
                            inventory: true,
                            serverHardwareProvision: false,
                            securityUpdates: "",
                            vulnerabilityManagement: false,
                            managedAntivirus: true,
                            monitoring: "täglich",
                            alerting: "per E-Mail an Kunde",
                            responseTime: "",
                            tempCleanup: "quartalsweise",
                            partitionService: false,
                            quarterlyConsulting: false,
                            repairDevices: false,
                            directContact: false,
                            freeHotline: false,
                            conception: false,
                            softwareIssueHandling: false,
                            serviceDiscount: "",
                        },
                        setupFee: 199,
                        monthlyFee: 49.39,
                    },
                    {
                        name: "Silber",
                        features: {
                            webServiceStatus: true,
                            remoteSoftware: true,
                            monthlyReport: true,
                            inventory: true,
                            serverHardwareProvision: true,
                            securityUpdates: "automatisch",
                            vulnerabilityManagement: true,
                            managedAntivirus: false,
                            monitoring: "24x7 im 15min-Takt",
                            alerting: "zentral zum Ticket-System im Systemhaus",
                            responseTime: "innerhalb 4h",
                            tempCleanup: "quartalsweise",
                            partitionService: false,
                            quarterlyConsulting: true,
                            repairDevices: false,
                            directContact: true,
                            freeHotline: true,
                            conception: false,
                            softwareIssueHandling: false,
                            serviceDiscount: "5% nach 2 Verträgen",
                        },
                        setupFee: 199,
                        monthlyFee: 69.94,
                    },
                    {
                        name: "Gold",
                        features: {
                            webServiceStatus: true,
                            remoteSoftware: true,
                            monthlyReport: true,
                            inventory: true,
                            serverHardwareProvision: true,
                            securityUpdates: "manuell (0,5h inkl./Monat/Server)",
                            vulnerabilityManagement: true,
                            managedAntivirus: true,
                            monitoring: "24x7 im 5min-Takt",
                            alerting: "zentral zum Ticket-System im Systemhaus",
                            responseTime: "innerhalb 2h",
                            tempCleanup: "monatlich",
                            partitionService: true,
                            quarterlyConsulting: true,
                            repairDevices: true,
                            directContact: true,
                            freeHotline: true,
                            conception: true,
                            softwareIssueHandling: true,
                            serviceDiscount: "5% nach 2 Verträgen",
                        },
                        setupFee: 0,
                        monthlyFee: 115.99,
                        notes: "Mengenrabatt: ab 5 Server 10%, ab 10 Server 15%",
                    },
                ],
            },
        },
    });

    // Optionen separat anlegen und mit serviceId verknüpfen
    const optionsData = [
        {
            name: "Antivirus Sophos Central Intercept X Essential für Server",
            priceMonthly: 6.9,
            securityLevel: "Normal",
            serviceId: managedServer.id,
        },
        {
            name: "Antivirus Sophos Central Intercept X Advanced für Server",
            priceMonthly: 9.9,
            securityLevel: "Normal",
            serviceId: managedServer.id,
        },
        {
            name: "Antivirus Sophos Central Intercept X Advanced mit EDR & XDR für Server",
            priceMonthly: 13.4,
            securityLevel: "Hoch",
            serviceId: managedServer.id,
        },
        {
            name: "Antivirus Sophos Central MDR Essential für Server",
            priceMonthly: 27.4,
            securityLevel: "Sehr Hoch",
            serviceId: managedServer.id,
        },
        {
            name: "Antivirus Sophos Central MDR Complete für Server",
            priceMonthly: 37.4,
            securityLevel: "Sehr Hoch",
            serviceId: managedServer.id,
        },
        {
            name: "Server (physikalisch) online Backup pro Server",
            priceMonthly: 45.5,
            priceOnce: 30.0,
            details: "max. 30 Tage Vorhaltung",
            serviceId: managedServer.id,
        },
        {
            name: "VM online Backup pro VM",
            priceMonthly: 26.26,
            priceOnce: 30.0,
            details: "max. 30 Tage Vorhaltung",
            serviceId: managedServer.id,
        },
        {
            name: "Continuity Backup Überprüfung und Recovery-Test",
            priceMonthly: 8.8,
            serviceId: managedServer.id,
        },
        {
            name: "ServerAuth pro User",
            priceMonthly: 25.0,
            priceOnce: 15.0,
            securityLevel: "Sehr Hoch",
            serviceId: managedServer.id,
        },
        {
            name: "Basis-Dokumentation (einmalig)",
            priceOnce: 546.0,
            details: "bis zu 2 Servern",
            serviceId: managedServer.id,
        },
        {
            name: "Basis-Dokumentation (einmalig)",
            priceOnce: 1456.0,
            details: "bis zu 10 Servern",
            serviceId: managedServer.id,
        },
        {
            name: "Basis-Dokumentation (einmalig)",
            priceOnce: 136.5,
            details: "ab 11 Servern, pro Server",
            serviceId: managedServer.id,
        },
        {
            name: "Erweiterte Dokumentation (einmalig)",
            priceOnce: 1456.0,
            details: "bis zu 2 Servern",
            serviceId: managedServer.id,
        },
        {
            name: "Erweiterte Dokumentation (einmalig)",
            priceOnce: 2912.0,
            details: "bis zu 10 Servern",
            serviceId: managedServer.id,
        },
        {
            name: "Erweiterte Dokumentation (einmalig)",
            priceOnce: 273.0,
            details: "ab 11 Servern, pro Server",
            serviceId: managedServer.id,
        },
    ];

    for (const opt of optionsData) {
        await prisma.managedServerOption.create({ data: opt });
    }

    // Die anderen Services ohne Packages/Optionen anlegen
    for (const svc of managedServicesData) {
        if (svc.key === "managed-server") continue; // Schon oben angelegt
        await prisma.managedService.create({ data: svc });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });