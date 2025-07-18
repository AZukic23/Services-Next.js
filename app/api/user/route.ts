import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import prisma from '../../lib/prisma';

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.name) {
        return NextResponse.json({ error: 'Nicht eingeloggt' }, { status: 401 });
    }
    const user = await prisma.user.findUnique({
        where: { username: session.user.name },
        select: { username: true }
    });
    if (!user) {
        return NextResponse.json({ error: 'User nicht gefunden' }, { status: 404 });
    }
    return NextResponse.json({ username: user.username });
}