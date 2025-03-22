import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/themeProvider";
import { TextProvider } from "@/providers/textContext";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FormatTopia - Your Ultimate Text Formatting Tool",
  description:
    "Transform your text with ease using FormatTopia. Features include case conversion, markdown preview, JSON formatting, and more.",
  keywords: [
    "text formatter",
    "markdown editor",
    "json formatter",
    "text tools",
    "code formatting",
  ],
  authors: [{ name: "Ragab Eid" }],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: "FormatTopia",
    title: "FormatTopia - Your Ultimate Text Formatting Tool",
    description: "Transform your text with ease using FormatTopia",
    // images: [
    //   {
    //     url: "https://formattopia.com/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "FormatTopia",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen max-w-6xl mx-auto bg-background">
            <TextProvider>{children}</TextProvider>
            <Toaster />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
