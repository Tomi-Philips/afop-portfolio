import "./globals.css";

export const metadata = {
  title: "AFOP | Favour Oluwatomi Adegoke - Developer Portfolio",
  description: "Software Engineer from Nigeria building scalable applications. Full-stack developer portfolio built with Next.js App Router.",
  icons: {
    icon: '/afop-logo icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}