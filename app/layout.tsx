import "./globals.css";

import Navbar from "./(components)/navbar";
import Footer from "./(components)/footer";
import { ThemeProvider } from "../config/theme/provider";
import { cn } from "../utils/cn";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import QueryProvider from "@/config/query/provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dusk Explorer",
  description: "Explorer for the Dusk blockchain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="format-detection" content="telephone=no" />
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <QueryProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
