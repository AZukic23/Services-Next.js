// managedServerV1.ts

export type ManagedServerPackage = {
    name: string;
    features: {
        webServiceStatus: boolean;
        remoteSoftware: boolean;
        monthlyReport: boolean;
        inventory: boolean;
        serverHardwareProvision: boolean;
        securityUpdates: string; // "", "automatisch", "manuell"
        vulnerabilityManagement: boolean;
        managedAntivirus: boolean;
        monitoring: string; // z.B. "täglich", "24x7 15min", "24x7 5min"
        alerting: string;
        responseTime: string;
        tempCleanup: string; // z.B. "quartalsweise", "monatlich"
        partitionService: boolean;
        quarterlyConsulting: boolean;
        repairDevices: boolean;
        directContact: boolean;
        freeHotline: boolean;
        conception: boolean;
        softwareIssueHandling: boolean;
        serviceDiscount: string; // z.B. "5% nach 2 Verträgen", ""
    };
    setupFee: number;
    monthlyFee: number;
    notes?: string;
};

export const managedServerPackages: ManagedServerPackage[] = [
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
];

// Zusatzoptionen (Security, Backup usw.)
export type ManagedServerOption = {
    name: string;
    priceMonthly?: number;
    priceOnce?: number;
    securityLevel?: string;
    appliesTo?: ("Bronze" | "Silber" | "Gold")[];
    details?: string;
};

export const managedServerOptions: ManagedServerOption[] = [
    {
        name: "Antivirus Sophos Central Intercept X Essential für Server",
        priceMonthly: 6.9,
        securityLevel: "Normal",
    },
    {
        name: "Antivirus Sophos Central Intercept X Advanced für Server",
        priceMonthly: 9.9,
        securityLevel: "Normal",
    },
    {
        name: "Antivirus Sophos Central Intercept X Advanced mit EDR & XDR für Server",
        priceMonthly: 13.4,
        securityLevel: "Hoch",
    },
    {
        name: "Antivirus Sophos Central MDR Essential für Server",
        priceMonthly: 27.4,
        securityLevel: "Sehr Hoch",
    },
    {
        name: "Antivirus Sophos Central MDR Complete für Server",
        priceMonthly: 37.4,
        securityLevel: "Sehr Hoch",
    },
    {
        name: "Server (physikalisch) online Backup pro Server",
        priceMonthly: 45.5,
        priceOnce: 30.0,
        details: "max. 30 Tage Vorhaltung",
    },
    {
        name: "VM online Backup pro VM",
        priceMonthly: 26.26,
        priceOnce: 30.0,
        details: "max. 30 Tage Vorhaltung",
    },
    {
        name: "Continuity Backup Überprüfung und Recovery-Test",
        priceMonthly: 8.8,
    },
    {
        name: "ServerAuth pro User",
        priceMonthly: 25.0,
        priceOnce: 15.0,
        securityLevel: "Sehr Hoch",
    },
    {
        name: "Basis-Dokumentation (einmalig)",
        priceOnce: 546.0,
        details: "bis zu 2 Servern",
    },
    {
        name: "Basis-Dokumentation (einmalig)",
        priceOnce: 1456.0,
        details: "bis zu 10 Servern",
    },
    {
        name: "Basis-Dokumentation (einmalig)",
        priceOnce: 136.5,
        details: "ab 11 Servern, pro Server",
    },
    {
        name: "Erweiterte Dokumentation (einmalig)",
        priceOnce: 1456.0,
        details: "bis zu 2 Servern",
    },
    {
        name: "Erweiterte Dokumentation (einmalig)",
        priceOnce: 2912.0,
        details: "bis zu 10 Servern",
    },
    {
        name: "Erweiterte Dokumentation (einmalig)",
        priceOnce: 273.0,
        details: "ab 11 Servern, pro Server",
    },
];

