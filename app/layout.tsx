import "./globals.css";
import { satoshi, sourceSans } from "./fonts";

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
