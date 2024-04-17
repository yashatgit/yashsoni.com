import "./styles/global.css";
import "./styles/libraryOverrides.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Footer } from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://leerob.io"),
  title: {
    default: "Lee Robinson",
    template: "%s | Lee Robinson",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Lee Robinson",
    description: "Developer, writer, and creator.",
    url: "https://leerob.io",
    siteName: "Lee Robinson",
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
    title: "Lee Robinson",
    card: "summary_large_image",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cx("text-black bg-white dark:text-white dark:bg-[#000]", GeistSans.variable, GeistMono.variable)}
    >
      <head>{/* <SandpackCSS /> */}</head>
      <body className="antialiased mb-40 flex flex-col mt-8 w-full">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 mx-auto max-w-2xl">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </main>
      </body>
    </html>
  );
}
