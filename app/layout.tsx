import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google"; // Corrected imports
import "./globals.css";
import Navbar from "../components/layout/navbar";
import Footer from "@/components/layout/footer";

// Primary Font (e.g., for Headings)
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

// Secondary Font (e.g., for Body text)
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tobams Group",
  description: "Innovative consultancy firm reshaping tech talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Apply the font variables and the default font class here
      className={`${nunito.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className={`${nunitoSans.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
