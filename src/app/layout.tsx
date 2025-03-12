import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Santiago Getial's portfolio",
  description: "My portolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
