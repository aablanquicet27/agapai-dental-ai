const leads = {
  nuevo: [
    { name: 'María González', treatment: 'Blanqueamiento dental', source: 'Instagram', time: 'Hace 5 min', score: 85 },
    { name: 'Carlos Ruiz', treatment: 'Consulta general', source: 'WhatsApp', time: 'Hace 12 min', score: 72 },
    { name: 'Ana Martínez', treatment: 'Ortodoncia invisible', source: 'Web', time: 'Hace 25 min', score: 91 },
  ],
  contactado: [
    { name: 'Luis Herrera', treatment: 'Implantes dentales', source: 'WhatsApp', time: 'Hace 1h', score: 88 },
    { name: 'Sofía Ramírez', treatment: 'Limpieza dental', source: 'Instagram', time: 'Hace 2h', score: 65 },
  ],
  citaAgendada: [
    { name: 'Pedro Vargas', treatment: 'Diseño de sonrisa', source: 'WhatsApp', time: 'Mañana 9:00 AM', score: 95 },
    { name: 'Laura Castro', treatment: 'Endodoncia', source: 'Web', time: 'Mañana 11:30 AM', score: 78 },
    { name: 'Diego Morales', treatment: 'Blanqueamiento', source: 'Instagram', time: 'Viernes 3:00 PM', score: 82 },
  ],
  completado: [
    { name: 'Valentina Díaz', treatment: 'Limpieza + Consulta', source: 'WhatsApp', time: 'Hoy 10:00 AM', score: 70 },
  ],
}

const columns = [
  { key: 'nuevo', label: '🆕 Nuevo', color: 'blue' },
  { key: 'contactado', label: '📞 Contactado', color: 'yellow' },
  { key: 'citaAgendada', label: '📅 Cita Agendada', color: 'green' },
  { key: 'completado', label: '✅ Completado', color: 'gray' },
]

const colorMap: Record<string, { bg: string; badge: string; score: string }> = {
  blue: { bg: 'bg-blue-50', badge: 'bg-blue-100 text-blue-700', score: 'bg-blue-500' },
  yellow: { bg: 'bg-yellow-50', badge: 'bg-yellow-100 text-yellow-700', score: 'bg-yellow-500' },
  green: { bg: 'bg-green-50', badge: 'bg-green-100 text-green-700', score: 'bg-green-500' },
  gray: { bg: 'bg-gray-50', badge: 'bg-gray-100 text-gray-700', score: 'bg-gray-500' },
}

const sourceIcon: Record<string, string> = {
  Instagram: '📸',
  WhatsApp: '💬',
  Web: '🌐',
}

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Pipeline de Leads</h1>
        <p className="text-gray-500 text-sm mt-1">Gestión en tiempo real de leads entrantes · Hoy: 12 leads nuevos</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Leads hoy', value: '12', change: '+23%', up: true },
          { label: 'Tasa respuesta', value: '94%', change: '+5%', up: true },
          { label: 'Citas agendadas', value: '8', change: '+12%', up: true },
          { label: 'Tiempo respuesta', value: '28s', change: '-15s', up: true },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-100">
            <div className="text-sm text-gray-500">{stat.label}</div>
            <div className="text-2xl font-bold mt-1">{stat.value}</div>
            <div className={`text-xs mt-1 ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} vs ayer
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {columns.map((col) => {
          const items = leads[col.key as keyof typeof leads]
          const colors = colorMap[col.color]
          return (
            <div key={col.key}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm">{col.label}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${colors.badge}`}>{items.length}</span>
              </div>
              <div className="space-y-3">
                {items.map((lead, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-medium text-sm">{lead.name}</div>
                      <div className={`w-8 h-8 rounded-full ${colors.score} text-white text-xs flex items-center justify-center font-bold`}>
                        {lead.score}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mb-2">{lead.treatment}</div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{sourceIcon[lead.source]} {lead.source}</span>
                      <span>{lead.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
