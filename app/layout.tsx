// app/layout.jsx

// Import link module.
import Link from "next/link";
import Image from "next/image";

import { twc } from "@/data/tailwind-presets";

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
      <body className="bg-[#EAE5DF]">
        <header className="py-4">

            <div className="px-10">
            <div className="grid grid-cols-12">
              
              <div className="col-span-6 lg:col-span-4 order-2 lg:order-1">
                <nav className="flex flex-row justify-start gap-5">
                  <Link href="/rezepte">Rezepte</Link>
                  <Link href="/zutaten">Zutaten</Link>
                </nav>
              </div>
              <div className="col-span-6 lg:col-span-4 order-1 lg:order-2">
                <Link href="/" className="w-fit block mx-auto">
                  <Image src="/images/branding/logo-v3.svg" width="300" height="100" alt="" className="h-16" />
                </Link>
              </div>
              <div className="hidden lg:block lg:col-span-4 lg:order-3">
                <div className="flex flex-row justify-end gap-5">
                  <button>Rezept vorschlagen</button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="px-10 py-20 bg-[#1A3C34]">
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <p className="text-white text-xs">&copy; 2025 - koreanisch-kochen.de</p>
              </div>
              <div className="col-span-6">
              <nav className="flex flex-row justify-start gap-5 text-white text-xs">
                <Link href="/rezepte">Kontakt</Link>
                <Link href="/rezepte">Impressum</Link>
                <Link href="/zutaten">Datenschutz</Link>
              </nav>

              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
