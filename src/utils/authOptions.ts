// src/utils/authOptions.ts
import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOODLE_ID as string,
            clientSecret: process.env.GOODLE_SECRET  as string,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // session: {
    //     strategy: "jwt",
    //     maxAge: 30 * 24 * 60 * 60, // 30 days
    // },
    // callbacks: {
    //     async session({ session, token }) {
    //         // Add user info to session
    //         if (session.user) {
    //             session.user.id = token.sub
    //         }
    //         return session
    //     },
    //     async jwt({ token, user }) {
    //         // Add user info to token
    //         if (user) {
    //             token.id = user.id
    //         }
    //         return token
    //     }
    // },
    pages: {
        signIn: '/login',
        error: '/auth/error',
    },
}