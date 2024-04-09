import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootLayoutProps } from "@/types/rootLayout";
import { Navbar } from "./_components";
import Provider from "./_components/providers/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NateLog",
  description: "This is a basic blog app",
};

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html lang="en">
      
        <body className={`${inter.className} dark:bg-red-400`}>
        <Provider>
          <Navbar />
          {children}
          </Provider>
        </body>
   

    </html>
  );
}
