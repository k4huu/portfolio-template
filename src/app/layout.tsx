
import { Inter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

// Load Inter and Poppins fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700", "900"], // Normal, Bold, Extra-Bold
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700", "900"], // Normal, Bold, Extra-Bold
});

export const metadata: Metadata = {
  title: "K4hu.pl",
  description: "K4HU.PL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
