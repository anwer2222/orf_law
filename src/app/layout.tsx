import type { Metadata } from "next";
import { Oswald, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/context/LanguageContext';

// 2. Configure Oswald (for English)
const oswald = Oswald({ 
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

// 3. Configure Cairo (for Arabic)
const cairo = Cairo({ 
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "العُرف",
  description: "مكتب العُرف للمحاماة والاستشارات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      
      <body
        className={`${oswald.variable} ${cairo.variable} antialiased`}
      >
        <LanguageProvider>
           {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
