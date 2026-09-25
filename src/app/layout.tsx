import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const sourceSerif = Source_Serif_4({ variable: "--font-source-serif", subsets: ["latin"], display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sela — Berhenti sejenak. Kembali kepada Tuhan.",
    template: "%s — Sela",
  },
  description: "Ruang jeda digital untuk menemukan ayat yang relevan dengan pertanyaan, keadaan, atau perasaan yang sedang kamu bawa.",
  applicationName: "Sela",
  authors: [{ name: "Sela" }],
  creator: "Sela",
  publisher: "Sela",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Sela",
    title: "Sela — Berhenti sejenak. Kembali kepada Tuhan.",
    description: "Temukan apa yang Firman katakan tentang hal yang sedang kamu cari.",
    url: siteUrl,
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={inter.variable + " " + sourceSerif.variable}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
