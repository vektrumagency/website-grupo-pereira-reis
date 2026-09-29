import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "APR 360° Capital Group",
  description:
    "Projetos e construção, mediação imobiliária, investimento imobiliário e capital e financiamento.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt" className={montserrat.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
