import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Session } from "./components/Session";
import UserButton from "./components/UserButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GPT Chat",
  description: "GPT Chat",
};

export default function RootLayout({
  children,
  chats,
}: Readonly<{
  children: React.ReactNode;
  chats: React.ReactNode;
}>) {
  return (
    <Session>
      <html lang="en">
        <body className={`${geistSans.className} dark px-2 md:px-5`}>
          <header className="flex bg-green-500 px-5 rounded-lg">
            <div className="flex flex-grow items-center">
              <Link href="/">GPT Chat</Link>
              <Link href="/about" className="ml-5 font-light">
                About
              </Link>
            </div>
            <div>
              <UserButton />
            </div>
          </header>
          <div className="flex flex-col md:flex-row">
            {chats}
            <div className="flex-grow">{children}</div>
          </div>
        </body>
      </html>
    </Session>
  );
}
