import localFont from "next/font/local";
import { Source_Sans_3 } from "next/font/google";

export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

