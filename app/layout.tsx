import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AGAPAI Dental AI — Agente Inteligente para Clínicas Dentales',
  description: 'Plataforma de IA para gestión de leads, agendamiento automático y seguimiento inteligente en clínicas dentales.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
