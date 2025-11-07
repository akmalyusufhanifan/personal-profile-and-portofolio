import type { Metadata } from "next";
import "./globals.css";
import Header from "./section/header";
import Footer from "./section/footer";

export const metadata: Metadata = {
  title: "Akmal Yusuf Hanifan | Full Stack Developer",
  description: "Building modern and responsive web experiences",
  keywords: [
    "Web Developer",
    "Frontend",
    "Backend",
    "Android",
    "IOS",
    "Typescript",
    "Phyton",
    "Figma",
  ],
  openGraph: {
    title: "Akmal Yusuf Hanifan | Full Stack Developer",
    description: "Building modern and responsive web experiences",
    siteName: "Akmal Yusuf Hanifan",
    images: [
      {
        url: "/home-page.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akmal Yusuf Hanifan | Full Stack Developer",
    description: "Building modern and responsive web experiences",
    images: "/home-page.jpeg",
  },
  authors: [
    { name: "Akmal Yusuf Hanifan" },
    { url: "https://github.com/akmalyusufhanifan" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
