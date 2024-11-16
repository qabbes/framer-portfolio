import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({
  weights: ["100..900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata = {
  title: "Quentin Abbes",
  description: "Quentin Abbes Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}
