const appointments = [
  { time: '09:00', patient: 'Pedro Vargas', treatment: 'Diseño de sonrisa - Valoración', doctor: 'Dra. Carolina Mejía', duration: '60 min', status: 'confirmed' },
  { time: '10:00', patient: 'Valentina Díaz', treatment: 'Limpieza dental + Consulta', doctor: 'Dr. Alejandro Pérez', duration: '45 min', status: 'confirmed' },
  { time: '11:30', patient: 'Laura Castro', treatment: 'Endodoncia molar #36', doctor: 'Dr. Ricardo Gómez', duration: '90 min', status: 'confirmed' },
  { time: '14:00', patient: 'Ana Martínez', treatment: 'Periodoncia - Valoración', doctor: 'Dr. Alejandro Pérez', duration: '30 min', status: 'pending' },
  { time: '15:00', patient: 'Diego Morales', treatment: 'Blanqueamiento dental', doctor: 'Dra. Carolina Mejía', duration: '60 min', status: 'pending' },
  { time: '16:30', patient: 'María González', treatment: 'Blanqueamiento - Valoración', doctor: 'Dra. Carolina Mejía', duration: '30 min', status: 'ai-scheduled' },
]

const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

const statusMap: Record<string, { label: string; color: string }> = {
  confirmed: { label: 'Confirmada', color: 'bg-green-100 text-green-700' },
  pending: { label: 'Pendiente', color: 'bg-yellow-100 text-yellow-700' },
  'ai-scheduled': { label: '🤖 Agendada por IA', color: 'bg-blue-100 text-blue-700' },
}

export default function Calendario() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Calendario</h1>
        <p className="text-gray-500 text-sm mt-1">Jueves 27 de marzo, 2026 · 6 citas programadas</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-3">
          <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-4">Agenda de Hoy</h3>
          {appointments.map((apt, i) => {
            const status = statusMap[apt.status]
            return (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 flex items-center gap-5 hover:shadow-md transition">
                <div className="text-center min-w-[60px]">
                  <div className="text-lg font-bold text-brand-600">{apt.time}</div>
                  <div className="text-[10px] text-gray-400">{apt.duration}</div>
                </div>
                <div className="w-px h-12 bg-gray-100" />
                <div className="flex-1">
                  <div className="font-medium">{apt.patient}</div>
                  <div className="text-sm text-gray-500">{apt.treatment}</div>
                  <div className="text-xs text-gray-400 mt-1">👨‍⚕️ {apt.doctor}</div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${status.color}`}>{status.label}</span>
              </div>
            )
          })}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-5 border border-gray-100">
            <div className="font-semibold text-sm mb-4">Marzo 2026</div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {days.map((d) => (
                <div key={d} className="text-gray-400 font-medium py-1">{d}</div>
              ))}
              {Array.from({ length: 6 }, (_, i) => (
                <div key={`e-${i}`} />
              ))}
              {Array.from({ length: 31 }, (_, i) => {
                const day = i + 1
                const isToday = day === 27
                const hasAppt = [25, 26, 27, 28, 31].includes(day)
                return (
                  <div
                    key={day}
                    className={`py-1.5 rounded-lg text-xs ${
                      isToday
                        ? 'bg-brand-600 text-white font-bold'
                        : hasAppt
                        ? 'bg-brand-50 text-brand-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {day}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-100">
            <div className="font-semibold text-sm mb-4">Resumen Semanal</div>
            <div className="space-y-3">
              {[
                { label: 'Total citas', value: '24', highlight: false },
                { label: 'Agendadas por IA', value: '18', highlight: true },
                { label: 'Cancelaciones', value: '2', highlight: false },
                { label: 'Tasa asistencia', value: '92%', highlight: false },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <span className={`font-bold ${item.highlight ? 'text-brand-600' : ''}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-600 rounded-xl p-5 text-white">
            <div className="text-sm font-semibold mb-2">🤖 IA Agendó Hoy</div>
            <div className="text-3xl font-extrabold">3 citas</div>
            <div className="text-brand-200 text-xs mt-1">Sin intervención humana</div>
          </div>
        </div>
      </div>
    </div>
  )
}
