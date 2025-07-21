import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { name } = await request.json();
    const Customer = await prisma.customer.create({ data: { name } });
    return NextResponse.json({ Customer });
}