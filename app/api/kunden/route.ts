import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
    // Holt alle Kunden inkl. deren zugewiesener Services
    const customers = await prisma.Customer.findMany({
        include: {
            services: {
                include: {
                    service: true,
                },
            },
        },
    });
    return NextResponse.json(customers);
}