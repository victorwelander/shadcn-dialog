import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Nested Shadcn Dialog",
  description: "Nested dialog component built on top of shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Analytics />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
