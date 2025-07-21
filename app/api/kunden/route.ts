import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function GET() {
    // Holt alle Customern inkl. deren zugewiesener Services
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