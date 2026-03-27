import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-xl">AGAPAI <span className="text-brand-600">Dental AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-brand-600 transition">Funcionalidades</a>
            <a href="#how" className="hover:text-brand-600 transition">Cómo funciona</a>
            <a href="#pricing" className="hover:text-brand-600 transition">Planes</a>
          </div>
          <Link href="/dashboard" className="bg-brand-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition">
            Ver Demo →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🤖 Potenciado por IA — Claude 3.5 + GPT-4o
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Tu clínica dental<br />
            <span className="text-brand-600">nunca duerme</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Agente de IA que captura leads desde Instagram, WhatsApp y web,
            agenda citas automáticamente y hace seguimiento inteligente.
            24/7, sin intervención humana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="bg-brand-600 text-white px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-brand-700 transition shadow-lg shadow-brand-600/25">
              Explorar Demo en Vivo
            </Link>
            <a href="#features" className="border border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-gray-50 transition">
              Ver Funcionalidades
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '93%', label: 'Tasa de respuesta' },
            { value: '<30s', label: 'Tiempo de respuesta' },
            { value: '3.2x', label: 'Más citas agendadas' },
            { value: '24/7', label: 'Disponibilidad' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-brand-600">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Todo lo que necesita tu clínica</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16">Un agente inteligente que gestiona todo el ciclo de vida del paciente, desde el primer contacto hasta la cita agendada.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💬', title: 'Captura Omnicanal', desc: 'Recibe leads desde Instagram DM, WhatsApp Business, formulario web y Facebook. Todo unificado en un solo inbox.' },
              { icon: '🧠', title: 'Conversación con IA', desc: 'Responde en lenguaje natural, califica interés, responde preguntas sobre tratamientos y precios con contexto RAG.' },
              { icon: '📅', title: 'Agendamiento Automático', desc: 'Consulta disponibilidad real en Google Calendar y agenda citas sin intervención humana. Envía confirmación automática.' },
              { icon: '📊', title: 'Lead Scoring', desc: 'Califica cada lead con un score inteligente basado en intención, urgencia y valor potencial. Sincroniza con HubSpot.' },
              { icon: '🔔', title: 'Seguimiento Inteligente', desc: 'Envía recordatorios de citas, follow-ups post-consulta y campañas de reactivación a leads fríos.' },
              { icon: '👤', title: 'Handoff a Humano', desc: 'Detecta cuándo escalar a un agente humano y transfiere la conversación con todo el contexto.' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-brand-200 transition">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">¿Cómo funciona?</h2>
          <div className="space-y-12">
            {[
              { step: '01', title: 'El paciente escribe', desc: 'Un mensaje llega por Instagram, WhatsApp o el formulario web de tu clínica.' },
              { step: '02', title: 'La IA responde al instante', desc: 'Nuestro agente entiende la intención, responde preguntas sobre tratamientos y califica al lead.' },
              { step: '03', title: 'Agenda automáticamente', desc: 'Consulta tu calendario real, ofrece horarios disponibles y confirma la cita.' },
              { step: '04', title: 'Tu equipo se enfoca en atender', desc: 'Los datos van a tu CRM, recibes alertas y solo intervienes cuando es necesario.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-gray-500 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-brand-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para transformar tu clínica?</h2>
          <p className="text-brand-100 text-lg mb-8">Agenda una demo personalizada y descubre cómo AGAPAI puede multiplicar tus citas.</p>
          <Link href="/dashboard" className="inline-block bg-white text-brand-700 px-8 py-3.5 rounded-xl text-lg font-semibold hover:bg-brand-50 transition">
            Ver el Demo Ahora →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>© 2026 AGAPAI — Inteligencia Artificial para Clínicas Dentales</span>
          <span>Hecho con 🤖 en Colombia</span>
        </div>
      </footer>
    </div>
  )
}
