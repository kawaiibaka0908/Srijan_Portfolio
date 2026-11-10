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
  title: "Srijan Tiwari | Software Engineer & ML Developer | IIT Guwahati",
  description: "Portfolio of Srijan Tiwari - Final-Year B.Tech Undergraduate at IIT Guwahati. Specializing in high-performance C++20 systems, scalable distributed architectures, and production Machine Learning pipelines.",
  keywords: ["Srijan Tiwari", "IIT Guwahati", "Software Engineer", "C++", "Machine Learning", "Portfolio", "SDE", "Deep Learning", "Next.js"],
  authors: [{ name: "Srijan Tiwari", url: "https://github.com/kawaiibaka0908" }],
  openGraph: {
    title: "Srijan Tiwari | Portfolio",
    description: "Final-Year B.Tech Undergraduate at IIT Guwahati. C++20 systems, distributed architectures, and ML.",
    url: "https://github.com/kawaiibaka0908",
    siteName: "Srijan Tiwari Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#09090b] text-zinc-100 selection:bg-blue-600/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
