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
  openGraph: {
    title: "Quentin Abbes",
    description: "Quentin Abbes Portfolio",

    images: [
      {
        url: "/assets/work/opengraph-img.png",
        width: 800,
        height: 600,
      },
      {
        url: "/assets/work/opengraph-img.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
