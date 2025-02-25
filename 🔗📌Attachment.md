## Project:Next.js Authentication
---

# **Next.js Authentication Starter Pack** 🚀  

A fully functional **Next.js authentication system** with **NextAuth**, **custom authentication**, **GitHub & Google OAuth**, and **server actions** for user registration and login. Includes **protected routes, user sessions, middleware-based authorization, and deployment on Vercel**.  

---
Live Link:[Click  Here to see live demo](https://nextjs-authentication-lac.vercel.app/)
---

## **📌 Features**  

✅ **NextAuth.js Integration** for authentication  
✅ **OAuth Login** with **GitHub** and **Google**  
✅ **Custom User Authentication** using **Next.js Server Actions**  
✅ **Protected Routes** with **Middleware**  
✅ **Session Management** for logged-in users  
✅ **Server-side & Client-side Data Fetching**  
✅ **Deployable on Vercel**  

---

## **📂 Folder Structure**  

```
📦 nextjs-authentication
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 api
 ┃ ┃ ┃ ┣ 📂 auth
 ┃ ┃ ┃ ┃ ┗ 📄 [...nextAuth]/route.ts
 ┃ ┃ ┣ 📂 login
 ┃ ┃ ┃ ┗ 📄 page.tsx
 ┃ ┃ ┣ 📂 register
 ┃ ┃ ┃ ┗ 📄 page.tsx
 ┃ ┃ ┣ 📂 dashboard
 ┃ ┃ ┃ ┗ 📄 page.tsx
 ┃ ┃ ┣ 📄 layout.tsx
 ┃ ┃ ┗ 📄 middleware.ts
 ┃ ┣ 📂 components
 ┃ ┣ 📂 utils
 ┃ ┃ ┣ 📂 actions
 ┃ ┃ ┃ ┣ 📄 registerUser.ts
 ┃ ┃ ┃ ┗ 📄 loginUser.ts
 ┃ ┃ ┗ 📄 authOptions.ts
 ┃ ┗ 📂 styles
 ┣ 📄 .env
 ┣ 📄 next.config.mjs
 ┣ 📄 package.json
 ┗ 📄 README.md
```

---

## **🛠 Installation & Setup**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/nextjs-authentication.git
cd nextjs-authentication
npm install
```

### **2️⃣ Configure Environment Variables**  
Create a **`.env`** file in the root directory and add:  

```ini
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

NEXTAUTH_SECRET=your-random-secret-key
BACKEND_URL=http://localhost:5000
```

### **3️⃣ Start the Development Server**  
```bash
npm run dev
```
Your app will be running on **`http://localhost:3000`** 🎉  

---

## **🔐 Authentication System**  

### **1️⃣ NextAuth.js Setup**  
> **File:** `src/app/api/auth/[...nextAuth]/route.ts`  

```typescript
import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

### **2️⃣ Configure Authentication Providers**  
> **File:** `src/utils/authOptions.ts`  

```typescript
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
};
```

### **3️⃣ User Login with NextAuth**  
> **File:** `src/app/login/page.tsx`  

```typescript
"use client";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <button
      onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
      className="btn"
    >
      Login with GitHub
    </button>
  );
};

export default LoginPage;
```

---

## **👤 Custom Authentication (Server Actions)**  

### **1️⃣ Register User**  
> **File:** `src/utils/actions/registerUser.ts`  

```typescript
"use server";

export const registerUser = async (data: any) => {
    const res = await fetch(`${process.env.BACKEND_URL}/register`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        cache: "no-store",
    });
    return res.json();
};
```

### **2️⃣ Login User**  
> **File:** `src/utils/actions/loginUser.ts`  

```typescript
"use server";

export const loginUser = async (data: any) => {
    const res = await fetch(`${process.env.BACKEND_URL}/login`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        cache: "no-store",
    });
    return res.json();
};
```

---

## **🔐 Protecting Routes (Middleware Authorization)**  

> **File:** `src/app/middleware.ts`  

```typescript
export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard", "/"] };
```

This ensures that only **authenticated users** can access `/dashboard`.

---

## **📊 Getting Logged-in User Session**  

> **File:** `src/app/layout.tsx`  

```typescript
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <Navbar session={session} />
        {children}
      </body>
    </html>
  );
}
```

---

## **📌 Deployment on Vercel**  

### **1️⃣ Build & Optimize Project**
```bash
npm run build
```

### **2️⃣ Deploy to Vercel**
```bash
vercel deploy
```
Your Next.js authentication project is now live on **Vercel** 🚀  

---

## **📞 Contact**
For queries or suggestions:  
📧 **Email:** [rbiswas01999@gmail.com](mailto:rbiswas01999@gmail.com)

---
