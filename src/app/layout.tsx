import type { Metadata } from "next";
import { Nova_Square } from "next/font/google";
import "./globals.css";

const nova_square = Nova_Square({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nova-square",
});

export const metadata: Metadata = {
  title: "AFOP | Favour Oluwatomi Adegoke - Developer Portfolio",
  description: "Software Engineer from Nigeria building scalable applications. Full-stack developer portfolio built with Next.js App Router.",
  keywords: ["Favour Adegoke", "AFOP", "Software Engineer", "Full-stack Developer", "React Developer", "Next.js Developer", "Web Developer", "Portfolio", "Nigeria"],
  authors: [{ name: "Favour Oluwatomi Adegoke" }],
  creator: "Favour Oluwatomi Adegoke",
  publisher: "Favour Oluwatomi Adegoke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nova_square.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
