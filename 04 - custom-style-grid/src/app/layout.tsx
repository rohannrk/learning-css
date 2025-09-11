import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Code for all my Tailwind Series Youtube Videos",
  description:
    "A comprehensive collection of Tailwind CSS tutorials and examples from my YouTube series, featuring modern web development techniques and best practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="bg-background text-foreground">{children}</main>
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}