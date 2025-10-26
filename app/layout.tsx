import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The PACK RAT",
  description: "PACK RAT - Full-stack web developer building modern applications and creative digital experiences. Code, creativity, and gaming expertise.",
  openGraph: {
    title: "The PACK RAT",
    description: "Full-stack web developer building modern applications and creative digital experiences. Code, creativity, and gaming expertise.",
    type: "website",
    siteName: "PACK RAT",
  },
  twitter: {
    card: "summary_large_image",
    title: "The PACK RAT",
    description: "Full-stack web developer building modern applications and creative digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Navigation />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
