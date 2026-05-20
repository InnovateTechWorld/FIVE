import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIVE — The Card That Pays You Back",
  description: "Founding access to FIVE. Hoard Sparks, erase expenses, get your money back. UNILAG First Drop 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
