import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from '@clerk/themes'
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["greek"]
})

export const metadata: Metadata = {
  title: "DevProof-AI",
  description: "Build Industry Level Resumes For Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          defaultTheme="system"
        >
          <ClerkProvider
            appearance={{
              theme: shadcn
            }}
          >
            <Toaster />
            <Navbar />
            <div className="px-5 py-20 lg:px-[15vw] ">
              {children}
            </div>
            <Footer />
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
