import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          🦷 <span className="text-blue-600">AGAPAI</span> Dental AI
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
            Ver Demo
          </Link>
          <a href="#contacto" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Solicitar Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
