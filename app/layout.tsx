import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next13 todo app",
  description: "Todo app created with nextjs version 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="text-white flex flex-row justify-between container mx-auto m-10">
          <Link href={"/"} className="text-xl">
            Todos
          </Link>
          <Link
            href={"/new"}
            className="border border-slate-100 p-2 rounded-lg hover:bg-slate-600"
          >
            New
          </Link>
        </nav>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
