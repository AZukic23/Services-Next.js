import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';
import bcrypt from 'bcryptjs';

// @deprecated This route is obsolete. Use NextAuth signIn instead.
export async function POST(request: Request) {
    const { username, password } = await request.json();

    // Suche User in Datenbank
    const user = await prisma.user.findUnique({
        where: { username },
    });

    if (!user) {
        return NextResponse.json({ error: 'Benutzer existiert nicht.' }, { status: 401 });
    }

    // Prüfe Passwort mit bcrypt
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return NextResponse.json({ error: 'Passwort falsch.' }, { status: 401 });
    }

    // Optional: Session/Token erzeugen
    return NextResponse.json({ success: true, username: user.username });
}