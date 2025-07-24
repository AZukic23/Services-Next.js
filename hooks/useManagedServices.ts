import { useEffect, useState } from "react";

// Typen für ManagedServerPackage und ManagedServerOption
type ManagedServerPackage = {
    id: number;
    name: string;
    features: object; // oder genauer typisieren!
    setupFee: number;
    monthlyFee: number;
    notes?: string;
};

type ManagedServerOption = {
    id: number;
    name: string;
    priceMonthly?: number;
    priceOnce?: number;
    securityLevel?: string;
    details?: string;
    serviceId?: number;
};

type ManagedService = {
    id: number;
    key: string;
    name: string;
    description: string;
    packages: ManagedServerPackage[];
    options?: ManagedServerOption[];
};

export function useManagedServices() {
    const [services, setServices] = useState<ManagedService[]>([]);
    useEffect(() => {
        fetch("/api/managed-services")
            .then(res => res.json())
            .then(setServices);
    }, []);
    return services;
}