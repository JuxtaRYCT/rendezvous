import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const noto = Noto_Sans({ subsets: ["latin"], weight: ["300", "400", "700"] });
export const metadata: Metadata = {
  title: "Rendezvous",
  description: "The free online meeting scheduling service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.className} ${noto.className} antialiased`}>
        <main className="container">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
