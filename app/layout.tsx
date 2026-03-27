import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGAPAI Dental AI — Agente IA para Clínicas Dentales",
  description: "Agente de IA que captura, cualifica y agenda citas automáticamente — 24/7 por WhatsApp, Instagram y Web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  );
}
