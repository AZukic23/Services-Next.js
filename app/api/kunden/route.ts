import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function GET() {
    const customers = await prisma.customer.findMany({
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