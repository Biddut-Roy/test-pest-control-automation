import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FloatingCallButton } from "@/components/shared/call-button";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { getSiteConfig } from "@/lib/get-site-config";
import { SettingsProvider } from "@/lib/settings-context";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = createMetadata();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSiteConfig();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-sans antialiased`}
      >
        <SettingsProvider
          overrides={{
            name: config.name,
            phone: config.phone,
            email: config.email,
            description: config.description,
            address: config.address,
            businessHours: config.businessHours,
            social: config.social,
          }}
        >
          <LocalBusinessJsonLd />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingCallButton />
        </SettingsProvider>
      </body>
    </html>
  );
}

export { siteConfig };
