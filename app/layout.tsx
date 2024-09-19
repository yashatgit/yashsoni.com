import "./styles/global.css";
import "./styles/libraryOverrides.css";
import React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Footer } from "./components/footer";
import { ThemeScript } from "./components/theme";

export const metadata: Metadata = {
  metadataBase: new URL("https://yashsoni.com"),
  title: {
    default: "Yash Soni",
    template: "%s | Yash Soni",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Yash Soni",
    description: "Developer, writer, and creator.",
    url: "https://yashsoni.com",
    siteName: "Yash Soni",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Yash Soni",
    card: "summary_large_image",
    site: "@yashs0ni",
  },
  icons: [{ rel: "apple-touch-icon", url: "./static/favicons/apple-touch-icon.png" }],
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cx("text-black bg-white dark:text-white dark:bg-[#000]", GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        {/* <SandpackCSS /> */}
      </head>
      <body className="antialiased w-full">
        <div id="app_root" className="flex flex-col mx-4 md:mx-0">
          <main className="flex-1 min-w-0 mt-6 flex flex-col px-2 md:px-0 mx-auto max-w-4xl w-full">
            <Navbar />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
