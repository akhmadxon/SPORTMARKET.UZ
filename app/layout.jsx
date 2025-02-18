import { Inter } from "next/font/google";
import { Header , Footer } from "@/components";
import "./globals.css";
import Logo from '@/assets/icons/logo.svg'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Market",
  icon: Logo,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
