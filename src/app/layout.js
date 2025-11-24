// app/layout.js
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import ChatWidget from "@/components/layout/chat/chat";

// Montserrat import
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "kingpin",
  description: "kingpin Group of Companies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased">
        <Header />
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
