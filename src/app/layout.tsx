import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Grupo Pereira dos Reis",
  description:
    "Obra e construção, arquitetura, investimento imobiliário e mediação imobiliária.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${bricolage.variable} ${instrumentSans.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
