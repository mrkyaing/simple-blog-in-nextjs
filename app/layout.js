import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Import Link from next/link
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "my profile",
  description: "Developed by MG",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
        <div className="flex flex-col flex-grow">
          <header className="bg-yellow-500 shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">My Blog</h1>
            <nav className="space-x-4">
              <Link href="/home">Home</Link>
              <Link href="/education">Education</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/hobby">Hobby</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </header>
          <main className="p-6 max-w-4xl mx-auto flex-grow">{children}</main>
        </div>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-dark-100 p-4">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <p className="row-start-3">Developed By @MG</p>
        </footer>
      </body>
    </html>
  );
}