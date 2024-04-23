import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { RootLayoutProps } from "@/types/rootLayout";
import { Navbar, Footer } from "./_components";
import {ThemeProvider} from '@/app/_components/providers/ThemeProvider';
import ToastProvider from "./providers/ToastProvider";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NateLog",
  description: "This is a basic blog app",
};

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html lang="en">
      
        <body className={`${manrope.className} dark:bg-background`}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
         <ToastProvider/>
         <Navbar />
          {children}
         <Footer/>
          </ThemeProvider>
        </body>
   

    </html>
  );
}
