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
  icons: {
    icon: '/afop-logo icon.png',
  },
  openGraph: {
    title: "AFOP | Favour Oluwatomi Adegoke - Developer Portfolio",
    description: "Software Engineer from Nigeria building scalable applications. Full-stack developer portfolio built with Next.js App Router.",
    images: [
      {
        url: '/afop-logo icon.png',
        width: 1200,
        height: 630,
        alt: 'AFOP Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AFOP | Favour Oluwatomi Adegoke - Developer Portfolio",
    description: "Software Engineer from Nigeria building scalable applications. Full-stack developer portfolio built with Next.js App Router.",
    images: ['/afop-logo icon.png'],
  },
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
