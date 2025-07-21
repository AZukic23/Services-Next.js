import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

// Hardcoded user for demo purposes since Prisma engines can't be downloaded
const DEMO_USER = {
    id: '2',
    username: 'admin',
    password: '$2b$10$dpPHbEYmKC56HKxFFKsc6u1epi4eMZ.umXlnGhHtJVWYYF6g3.31i' // Securepassword123
};

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Benutzername", type: "text" },
                password: { label: "Passwort", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials) return null;
                
                try {
                    // For demo: use hardcoded user instead of database
                    if (credentials.username === DEMO_USER.username) {
                        const valid = await bcrypt.compare(credentials.password, DEMO_USER.password);
                        if (valid) {
                            return { id: DEMO_USER.id, name: DEMO_USER.username };
                        }
                    }
                    return null;
                } catch (error) {
                    console.error('Auth error:', error);
                    return null;
                }
            }
        })
    ],
    session: { strategy: "jwt" } as const
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };