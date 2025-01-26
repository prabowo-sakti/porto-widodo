import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portofolio backend",
  description:
    "Halo, berikut adalah kumpulan portofolio backend yang sudah saya kerjakan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex bg-[#181818] border-[0.1px] border-white-500 w-[638px] h-[905px] m-auto rounded-xl relative top-16 left-1 transform -translate-x-1 -translate-y-1 overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
