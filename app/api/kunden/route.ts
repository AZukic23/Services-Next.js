import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    const kunden = await prisma.kunde.findMany({
        include: {
            services: {
                include: {
                    service: true
                }
            }
        }
    });
    return NextResponse.json({ kunden });
}