import "./globals.css";
import { Inter, Cal_Sans } from "next/font/google";

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
