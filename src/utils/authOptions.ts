// src/utils/authOptions.ts
import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ],
    // Add these for better security and routing
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
}