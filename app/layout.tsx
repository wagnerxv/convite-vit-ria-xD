import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const dancing = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing' });

export const metadata: Metadata = {
  title: "Um Convite Especial para Você",
  description: "Um convite especial para um momento único",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} ${dancing.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}