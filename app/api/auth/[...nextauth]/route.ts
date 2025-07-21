import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

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
                
                const user = await prisma.user.findUnique({
                    where: { username: credentials.username }
                });
                
                if (!user) return null;
                
                // Use bcrypt to compare password
                const valid = await bcrypt.compare(credentials.password, user.password);
                if (valid) {
                    return { id: String(user.id), name: user.username };
                }
                return null;
            }
        })
    ],
    session: { strategy: "jwt" } as const
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };