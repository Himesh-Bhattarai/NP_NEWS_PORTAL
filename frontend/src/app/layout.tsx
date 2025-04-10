// app/layout.tsx

import "@/styles/index.css"; // ✅ Make sure this is correct
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils"; // ✅ shadcn utility for merging classNames
import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My News Portal",
  description: "Latest news delivered fast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
