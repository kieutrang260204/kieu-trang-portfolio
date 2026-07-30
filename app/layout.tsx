import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Parisienne } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

// Signature-style font used only for the large hero name (see Hero.tsx)
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
  display: "swap",
});

const siteUrl = "https://kieutrang-portfolio.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KieuTrang — Digital Marketing Specialist",
  description:
    "Portfolio of KieuTrang (Nguyen Thi Kieu Trang), a Digital Marketing Specialist creating marketing campaigns, visual content, and digital experiences that connect brands with people.",
  keywords: [
    "KieuTrang",
    "Digital Marketing Specialist",
    "Portfolio",
    "Content Marketing",
    "Graphic Design",
    "Photography",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "KieuTrang — Digital Marketing Specialist",
    description:
      "Marketing campaigns, visual content, and digital experiences that connect brands with people.",
    url: siteUrl,
    siteName: "KieuTrang — Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KieuTrang — Digital Marketing Specialist",
    description:
      "Marketing campaigns, visual content, and digital experiences that connect brands with people.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${parisienne.variable}`}
    >
      <body className="font-body bg-bg text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
