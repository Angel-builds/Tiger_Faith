import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiger Faith",
  description:
    "Serving the students of Grambling State University and Lancaster through faith, fellowship, and purpose-driven growth.",
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
