import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-8">
            🤖 Inteligencia Artificial Autónoma
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Tu clínica dental nunca<br />
            <span className="text-blue-400">pierde otro paciente</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Agente de IA que captura, cualifica y agenda citas automáticamente —
            24/7 por WhatsApp, Instagram y Web. Sin perder un solo lead.
          </p>
          <div className="flex justify-center gap-8 mb-12">
            {[
              { num: '80-120', label: 'Leads/mes gestionados' },
              { num: '<30s', label: 'Tiempo de respuesta' },
              { num: '24/7', label: 'Disponibilidad total' },
            ].map((stat) => (
              <div key={stat.num} className="text-center">
                <p className="text-4xl font-extrabold text-blue-400">{stat.num}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Agendar Llamada de Descubrimiento →
            </a>
            <Link
              href="/dashboard"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Ver Demo →
            </Link>
          </div>
        </div>
      </header>

      {/* PROBLEMA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider text-center mb-3">El Problema</p>
          <h2 className="text-4xl font-bold text-center mb-4">
            Tu equipo de recepción está saturado.
          </h2>
          <p className="text-gray-500 text-center mb-12 text-lg">Cada minuto sin responder = una cita perdida.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⏰', title: 'Respuestas lentas', desc: 'Los leads llegan por WhatsApp, Instagram y web. Tu equipo no da abasto y los pacientes se van con la competencia.' },
              { icon: '📉', title: 'Leads sin seguimiento', desc: 'Sin un sistema automatizado, los leads fríos nunca se reactivan. Dinero invertido en marketing que se pierde.' },
              { icon: '🔄', title: 'Procesos manuales', desc: 'Agendar citas, confirmar horarios, enviar recordatorios — todo manual. Tu equipo debería atender pacientes, no gestionar WhatsApp.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider text-center mb-3">La Solución</p>
          <h2 className="text-4xl font-bold text-center mb-12">
            Un agente de IA que trabaja como tu mejor recepcionista — pero nunca descansa
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Captación y Cualificación Inteligente', desc: 'El agente interactúa con cada lead en WhatsApp Business y formularios web. Recoge información clave: síntomas, urgencia, tipo de seguro, disponibilidad. Cualifica automáticamente.', tag: 'WhatsApp Business API · Formularios Web' },
              { num: '02', title: 'Conversación Natural 24/7', desc: 'Conversaciones fluidas y humanas con pacientes potenciales. Entiende contexto, responde preguntas sobre tratamientos, precios y disponibilidad. Siempre amable, siempre preciso.', tag: 'LLMs Avanzados · RAG · Contexto Clínico' },
              { num: '03', title: 'Agenda Automática', desc: 'Integración directa con Google Calendar y el sistema de gestión de pacientes. El agente verifica disponibilidad, propone horarios y confirma citas — sin intervención humana.', tag: 'Google Calendar · Sistema de Gestión' },
              { num: '04', title: 'Scoring y CRM Automático', desc: 'Cada lead recibe una prioridad (alta, media, baja) basada en urgencia, valor del tratamiento y probabilidad de conversión. Se envía automáticamente a HubSpot con toda la información.', tag: 'HubSpot CRM · Lead Scoring · Pipeline' },
              { num: '05', title: 'Seguimiento y Recordatorios', desc: 'Sistema de follow-up automático para leads que no responden. Recordatorios de citas 24h y 1h antes. Reducción drástica de no-shows.', tag: 'Secuencias Automáticas · Recordatorios' },
              { num: '06', title: 'Hand-off Inteligente a Humanos', desc: 'El agente sabe cuándo escalar: citas complejas, quejas, emergencias. Transfiere la conversación con todo el contexto al equipo humano. Sin fricciones.', tag: 'Escalamiento · Contexto Completo' },
            ].map((item) => (
              <div key={item.num} className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-blue-600 font-bold text-2xl mb-3">{item.num}</div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="text-xs text-blue-600 font-medium bg-blue-50 px-3 py-1.5 rounded-full inline-block">{item.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARQUITECTURA */}
      <section className="py-20 bg-[#1a1a2e] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider text-center mb-3">Arquitectura Técnica</p>
          <h2 className="text-4xl font-bold text-center mb-12">Stack probado en producción</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🧠', title: 'Motor de IA', desc: 'LLMs de última generación (GPT-4o / Claude 3.5) con RAG para conocimiento específico de la clínica. Respuestas precisas y contextuales.' },
              { icon: '⚡', title: 'Orquestación', desc: 'LangGraph / CrewAI para flujos autónomos multi-paso. El agente decide, actúa y aprende.' },
              { icon: '🔗', title: 'Integraciones', desc: 'WhatsApp Business API, Google Calendar, HubSpot CRM. Todo conectado con n8n para workflows robustos.' },
              { icon: '🚀', title: 'Infraestructura', desc: 'Deploy en producción con baja latencia. Manejo robusto de errores. Monitoreo 24/7. Escalable.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLUJO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider text-center mb-3">Flujo del Paciente</p>
          <h2 className="text-4xl font-bold text-center mb-12">De lead a cita confirmada en minutos</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[
              { num: '1', title: 'Lead entra', desc: 'Por WhatsApp, Instagram o formulario web' },
              { num: '2', title: 'IA cualifica', desc: 'Preguntas inteligentes sobre síntomas y necesidades' },
              { num: '3', title: 'Scoring', desc: 'Prioridad asignada y enviado a HubSpot' },
              { num: '4', title: 'Cita agendada', desc: 'Google Calendar + confirmación + recordatorio' },
            ].map((step, i) => (
              <div key={step.num} className="flex items-center gap-4">
                <div className="text-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm w-44">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
                {i < 3 && <div className="text-3xl text-blue-400 font-bold hidden md:block">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE AGAPAI */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Sobre Nosotros</p>
          <h2 className="text-4xl font-bold mb-8">AGAPAI — Inteligencia Artificial que transforma negocios</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Somos una empresa especializada en <strong>asistentes de IA conversacionales, automatización inteligente y transformación digital</strong>. No somos teóricos — construimos agentes que ya están en producción.
              </p>
              <div className="space-y-3">
                {[
                  '🏛️ Destacados en revista del Congreso de la República de Colombia',
                  '🎤 Ponentes en la Primera Cumbre de IA de Latinoamérica',
                  '🎓 Docentes en Universidad de Cartagena y Universidad Comfenalco',
                  '☁️ Respaldados por AWS, Notion, Supabase y Fireworks AI Startup Programs',
                ].map((cred) => (
                  <div key={cred} className="flex items-start gap-3 bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                    {cred}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Clientes en producción:</h4>
              <div className="space-y-3">
                {[
                  { name: 'La Qatrie (Cali)', desc: 'Chat IA + asistente de voz para restaurante' },
                  { name: 'Chikilin (México)', desc: 'Clon de IA para influencer' },
                  { name: 'IPS Fonoaudiológica', desc: 'Agente IA para recolección de datos + agendamiento' },
                  { name: 'Vero Nova Group', desc: 'WhatsApp automation + Meta Ads' },
                ].map((client) => (
                  <div key={client.name} className="border border-gray-200 rounded-xl p-4">
                    <p className="font-semibold text-gray-900">{client.name}</p>
                    <p className="text-sm text-gray-500">{client.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider text-center mb-3">Inversión</p>
          <h2 className="text-4xl font-bold text-center mb-12">Propuesta de implementación</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                phase: 'Fase 1 — MVP (4-6 semanas)',
                title: 'Agente Core',
                featured: false,
                items: [
                  'Captación y cualificación por WhatsApp',
                  'Conversación natural con LLM',
                  'Integración Google Calendar',
                  'Scoring básico de leads',
                  'Integración HubSpot CRM',
                  'Dashboard de métricas',
                ],
                note: 'Incluye: setup, entrenamiento con datos de la clínica, testing y deploy en producción.',
              },
              {
                phase: 'Fase 2 — Expansión (2-3 semanas)',
                title: 'Automatización Total',
                featured: true,
                items: [
                  'Todo de Fase 1',
                  'Seguimiento automático multi-canal',
                  'Recordatorios inteligentes de citas',
                  'Hand-off a humanos con contexto',
                  'Captación desde Instagram DMs',
                  'Reporting avanzado',
                ],
                note: 'Incluye: optimización basada en datos reales del MVP + expansión de canales.',
              },
              {
                phase: 'Ongoing — Soporte',
                title: 'Mantenimiento & Mejora',
                featured: false,
                items: [
                  'Monitoreo 24/7 del agente',
                  'Actualizaciones de modelos',
                  'Optimización continua de prompts',
                  'Soporte técnico prioritario',
                  'Reportes mensuales de rendimiento',
                  'Iteraciones basadas en feedback',
                ],
                note: 'Retainer mensual con SLA definido.',
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`rounded-2xl p-8 ${
                  plan.featured
                    ? 'bg-blue-600 text-white shadow-xl scale-105'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                <p className={`text-sm font-medium mb-2 ${plan.featured ? 'text-blue-200' : 'text-blue-600'}`}>
                  {plan.phase}
                </p>
                <h3 className={`text-2xl font-bold mb-6 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  {plan.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {plan.items.map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-sm ${plan.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                      <span className="text-green-400 mt-0.5">✅</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={`text-xs leading-relaxed ${plan.featured ? 'text-blue-200' : 'text-gray-400'}`}>
                  {plan.note}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            Los valores específicos se presentarán en la llamada de descubrimiento, adaptados a las necesidades exactas de su clínica.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#2563eb] text-white" id="contacto">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para que tu clínica nunca pierda otro paciente?</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Agenda una llamada de 30 minutos. Sin compromiso. Te mostramos exactamente cómo funcionará el agente con tu flujo actual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20el%20agente%20IA%20para%20mi%20cl%C3%ADnica%20dental"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              💬 WhatsApp Directo
            </a>
            <a
              href="mailto:contacto@agapai.com.co?subject=Propuesta%20Agente%20IA%20Cl%C3%ADnica%20Dental"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              ✉️ Enviar Email
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            📧 contacto@agapai.com.co &nbsp;|&nbsp; 🌐 agapai.com.co &nbsp;|&nbsp; NIT: 901829672-7
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm">
          <p>© 2026 AGAPAI SAS — contacto@agapai.com.co — agapai.com.co — NIT: 901829672-7</p>
        </div>
      </footer>
    </main>
  );
}
