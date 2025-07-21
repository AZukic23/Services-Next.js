import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";  // oder dein Prisma-Pfad

export async function GET() {
    const kunden = await prisma.customer.findMany({ include: { services: { include: { service: true } } } });
    return NextResponse.json(kunden);
}

export async function POST(request: Request) {
    const body = await request.json();
    const { name } = body;

    if (!name) {
        return NextResponse.json({ error: "Name fehlt" }, { status: 400 });
    }

    const neuerKunde = await prisma.customer.create({
        data: { name }
    });

    return NextResponse.json(neuerKunde, { status: 201 });
}