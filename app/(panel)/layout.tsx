'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/inbox', label: 'Inbox', icon: '💬' },
  { href: '/calendario', label: 'Calendario', icon: '📅' },
  { href: '/analytics', label: 'Analytics', icon: '📈' },
]

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col">
        <div className="h-16 px-6 flex items-center border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold">AGAPAI</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  active
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">Demo Mode</div>
            <div className="text-sm font-medium">Clínica Dental Sonríe</div>
            <div className="text-xs text-gray-400">Bogotá, Colombia</div>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-auto bg-gray-50">
        {children}
      </main>
    </div>
  )
}
