import Navbar from "@/layouts/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myselfrakib.com"),
  title: {
    default: "Rakib | Web Developer",
    template: `%s | Rakib | Web Developer`,
  },
  description:
    "Full Stack web developer, MERN stack developer, React.js Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
