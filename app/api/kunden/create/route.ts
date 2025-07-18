import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { name } = await request.json();
    const kunde = await prisma.kunde.create({ data: { name } });
    return NextResponse.json({ kunde });
}