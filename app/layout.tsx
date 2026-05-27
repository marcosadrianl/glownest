import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlowNest — Software para el mundo real",
  description: "Desarrollamos aplicaciones web pensadas para profesionales independientes: peluqueros, manicuras y odontólogos.",
  keywords: ["software", "aplicaciones web", "peluquería", "manicura", "odontología", "gestión"],
  openGraph: {
    title: "GlowNest",
    description: "Software diseñado para profesionales del mundo real.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
