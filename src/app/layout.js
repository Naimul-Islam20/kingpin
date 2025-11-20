import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import ChatWidget from "@/components/layout/chat/chat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "kingpin",
  description: "kingpin Group of Companies ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <ChatWidget/>
        <Footer/>
      </body>
    </html>
  );
}
