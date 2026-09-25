import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Wake Up Côte d'Ivoire — Mobiliser la jeunesse, Structurer l'éducation",
  description:
    "Plateforme officielle de Wake Up Côte d'Ivoire : inscription aux conférences, formations, programmes de mentorat et communauté jeunesse.",
  keywords: [
    "Wake Up Côte d'Ivoire",
    "jeunesse ivoirienne",
    "éducation",
    "conférence",
    "formation",
    "mentorat",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E64A38",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-slate-50 antialiased">{children}</body>
    </html>
  );
}