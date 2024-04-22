import "./styles/global.css";
import "./styles/libraryOverrides.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Footer } from "./components/footer";

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
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cx("text-black bg-white dark:text-white dark:bg-[#000]", GeistSans.variable, GeistMono.variable)}
    >
      <head>{/* <SandpackCSS /> */}</head>
      <body className="antialiased flex flex-col w-full flex-1">
        <main className="flex-auto min-w-0 mt-6 justify-center flex flex-col px-2 md:px-0 mx-auto max-w-2xl w-full mbb-40 mtt-8">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
