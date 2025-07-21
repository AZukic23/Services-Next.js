import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.name) {
        return NextResponse.json({ error: 'Nicht eingeloggt' }, { status: 401 });
    }
    
    // For demo: return the username from the session directly
    return NextResponse.json({ username: session.user.name });
}