import "./globals.css";
import { Inter, Cal_Sans } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Created with Next.js",
  icons: {
    icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="0.9em" font-size="90">🦪</text></svg>`,
  },
};

const inter = Inter({
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-inter', 
  display: 'swap'
});

const calsans = Cal_Sans({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
  variable: '--font-calsans',
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${calsans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
