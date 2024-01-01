import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import BackToTopButton from "./components/backToTopButton/backToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NXT Progression",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <BackToTopButton scrollThreshold={200} />
          <Footer />
        </div>
      </body>
    </html>
  );
}
