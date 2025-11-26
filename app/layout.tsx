// app/layout.jsx

// Import link module.
import Link from "next/link";

// Import css.
import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meine Rezeptseite",
  description: "Next.js Tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="de">
      <body>
        <header
          style={{
            padding: "1rem",
            borderBottom: "1px solid #ccc",
          }}
        >
          <nav
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Link href="/">Startseite</Link>
            <Link href="/rezepte">Rezepte</Link>
            <Link href="/zutaten">Zutaten</Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
