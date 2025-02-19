# NextAuth.js Authentication in Next.js Project

## 📚 Documentation Links

- [NextAuth.js Official Documentation](https://next-auth.js.org/)
- [Getting Started Guide](https://next-auth.js.org/getting-started/example)
- [Configuration Initialization](https://next-auth.js.org/configuration/initialization#route-handlers-app)
- [GitHub Provider Docs](https://next-auth.js.org/providers/github)
- [Google Provider Docs](https://next-auth.js.org/providers/google)

## 🚀 Project Overview

A comprehensive Next.js authentication solution using NextAuth.js, supporting multiple authentication methods including social login and custom credentials.

## 📦 Features

- GitHub OAuth Authentication
- Google OAuth Authentication
- Custom Credentials Authentication
- Server-side Session Management
- Route Protection
- Social Login Integration

## 🛠 Prerequisites

- Node.js (v18 or later)
- Next.js (v13 or later)
- npm/yarn/pnpm

## 📥 Installation

```bash
# Install NextAuth.js
npm install next-auth

# Clone the project
git clone https://your-repo-url.git
cd your-project-name

# Install dependencies
npm install
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the project root:

```plaintext
# NextAuth Configuration
NEXTAUTH_SECRET=your_generated_secret
NEXTAUTH_URL=http://localhost:3000

# OAuth Provider Credentials
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret

# Backend API URL
BACKEND_URL=your_backend_api_url
```

### Secret Generation

Generate a secure secret:

```bash
# Using OpenSSL
openssl rand -base64 32
```

## 📁 Project Structure

```
src/
├── app/
│   └── api/
│       └── auth/
│           └── [...nextauth]/
│               └── route.ts
├── utils/
│   ├── authOptions.ts
│   └── actions/
│       ├── loginUser.ts
│       └── registerUser.ts
└── middleware.ts
```

## 🔐 Authentication Providers

### GitHub Provider Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Callback URL: `http://localhost:3000/api/auth/callback/github`

### Google Provider Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Configure OAuth consent screen
4. Create credentials
5. Set Callback URL: `http://localhost:3000/api/auth/callback/google`

## 📝 Key Files

### NextAuth Route Handler
`src/app/api/auth/[...nextauth]/route.ts`
```typescript
import { authOptions } from "@/utils/authOptions"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

### Auth Options
`src/utils/authOptions.ts`
```typescript
import { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
}
```

## 🛡️ Route Protection

### Middleware
`middleware.ts`
```typescript
export { default } from "next-auth/middleware"

export const config = { 
  matcher: ["/dashboard", "/profile"] 
}
```

## 🚦 Authentication Methods

### Server-Side Session
```typescript
import { getServerSession } from "next-auth"
import { authOptions } from "@/utils/authOptions"

const session = await getServerSession(authOptions);
```

### Client-Side Authentication
```typescript
import { useSession, signIn, signOut } from "next-auth/react"

function AuthComponent() {
  const { data: session } = useSession()
  
  return session 
    ? <button onClick={() => signOut()}>Sign Out</button>
    : <button onClick={() => signIn()}>Sign In</button>
}
```

## 🔍 Debugging

- Enable debug mode in `authOptions`
- Check browser console
- Verify environment variables

## 🚢 Deployment

### Vercel Deployment
1. Connect GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy

### Environment Variable Tips
- Set `NEXTAUTH_URL` in production
- Use Vercel's environment settings
- Keep secrets confidential

## 🛠 Troubleshooting

- Regenerate OAuth app credentials
- Verify callback URLs
- Check network tab for authentication errors

## 📋 Best Practices

- Use strong, unique `NEXTAUTH_SECRET`
- Implement proper error handling
- Regularly update dependencies
- Use environment-specific configurations

## 🌟 Acknowledgements

- [NextAuth.js](https://next-auth.js.org/)
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)

---

**Happy Authenticating! 🔐** 

## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the project using `npm run dev`.
