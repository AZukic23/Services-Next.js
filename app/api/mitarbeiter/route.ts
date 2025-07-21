import { NextResponse } from 'next/server';

export async function GET() {
    // Dummy-Daten als Beispiel:
    const mitarbeiter = [
        { id: 1, name: "Max Mustermann", abteilung: "IT", rolle: "Admin" },
        { id: 2, name: "Julia Schmidt", abteilung: "Support", rolle: "User" },
    ];
    return NextResponse.json({ mitarbeiter });
}