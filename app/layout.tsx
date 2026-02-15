import "./globals.css";
import { satoshi, sourceSans } from "./fonts";

export const metadata = {
  title: "MedMethod - Sites internet professionels",
  description:
    "MedMethod conçois et réalise des sites internet pour professionels, avec une approche simple et structurée",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${sourceSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
