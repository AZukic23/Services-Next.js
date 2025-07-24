import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const services = await prisma.managedService.findMany({
        include: {
            packages: true,
            // ggf. Optionen, falls du sie als Relation speicherst
        },
    });
    return NextResponse.json(services);
}