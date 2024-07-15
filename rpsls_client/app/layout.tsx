import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Heading from "@/components/heading/heading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSPLS game",
  description: "Generated by create next app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Heading></Heading>
        {children}
      </body>
    </html>
  );
}
