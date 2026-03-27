const CHART_HEIGHT = 160

function BarChart({ data, maxVal }: { data: Array<{ day: string; leads: number; citas: number }>; maxVal: number }) {
  return (
    <div className="flex items-end gap-3 h-48">
      {data.map((d) => {
        const leadsHeight = Math.round((d.leads / maxVal) * CHART_HEIGHT)
        const citasHeight = Math.round((d.citas / maxVal) * CHART_HEIGHT)
        return (
          <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex gap-1 items-end justify-center h-40">
              <div
                className="w-5 bg-brand-200 rounded-t"
                style={makeHeight(leadsHeight)}
              />
              <div
                className="w-5 bg-brand-600 rounded-t"
                style={makeHeight(citasHeight)}
              />
            </div>
            <span className="text-xs text-gray-400">{d.day}</span>
          </div>
        )
      })}
    </div>
  )
}

function makeHeight(px: number): React.CSSProperties {
  return { height: px + 'px' }
}

function makeWidth(pct: number): React.CSSProperties {
  return { width: pct + '%' }
}

export default function Analytics() {
  const weeklyData = [
    { day: 'Lun', leads: 15, citas: 8 },
    { day: 'Mar', leads: 22, citas: 12 },
    { day: 'Mié', leads: 18, citas: 10 },
    { day: 'Jue', leads: 25, citas: 14 },
    { day: 'Vie', leads: 20, citas: 11 },
    { day: 'Sáb', leads: 12, citas: 6 },
    { day: 'Dom', leads: 8, citas: 3 },
  ]

  const maxLeads = Math.max(...weeklyData.map((d) => d.leads))

  const sources = [
    { name: 'WhatsApp', leads: 45, pct: 38, color: 'bg-green-500' },
    { name: 'Instagram', leads: 42, pct: 35, color: 'bg-pink-500' },
    { name: 'Web', leads: 23, pct: 19, color: 'bg-blue-500' },
    { name: 'Facebook', leads: 10, pct: 8, color: 'bg-indigo-500' },
  ]

  const treatments = [
    { name: 'Blanqueamiento dental', count: 32, revenue: '$14.4M', convRate: 70 },
    { name: 'Diseño de sonrisa', count: 18, revenue: '$144M', convRate: 62 },
    { name: 'Ortodoncia invisible', count: 15, revenue: '$90M', convRate: 54 },
    { name: 'Implantes dentales', count: 12, revenue: '$42M', convRate: 46 },
    { name: 'Limpieza dental', count: 28, revenue: '$5.6M', convRate: 38 },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-gray-500 text-sm mt-1">Métricas de rendimiento · Últimos 30 días</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Leads', value: '120', change: '+34%', icon: '👥' },
          { label: 'Citas Agendadas', value: '84', change: '+28%', icon: '📅' },
          { label: 'Tasa Conversión', value: '70%', change: '+12%', icon: '🎯' },
          { label: 'Revenue Estimado', value: '$296M', change: '+45%', icon: '💰' },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white rounded-xl p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">{kpi.label}</span>
              <span className="text-xl">{kpi.icon}</span>
            </div>
            <div className="text-2xl font-bold">{kpi.value}</div>
            <div className="text-xs text-green-600 mt-1">{kpi.change} vs mes anterior</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="font-semibold mb-6">Leads vs Citas por Día</h3>
          <BarChart data={weeklyData} maxVal={maxLeads} />
          <div className="flex gap-4 mt-4 justify-center text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-brand-200 rounded" /> Leads
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-brand-600 rounded" /> Citas
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="font-semibold mb-6">Leads por Canal</h3>
          <div className="space-y-4">
            {sources.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{s.name}</span>
                  <span className="text-gray-400">
                    {s.leads} leads ({s.pct}%)
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${s.color}`} style={makeWidth(s.pct)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="font-semibold mb-4">Top Tratamientos Solicitados</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-50">
              <th className="pb-3 font-medium">Tratamiento</th>
              <th className="pb-3 font-medium">Consultas</th>
              <th className="pb-3 font-medium">Revenue Potencial</th>
              <th className="pb-3 font-medium">Conversión</th>
            </tr>
          </thead>
          <tbody>
            {treatments.map((t) => (
              <tr key={t.name} className="border-b border-gray-50 last:border-0">
                <td className="py-3 font-medium">{t.name}</td>
                <td className="py-3">{t.count}</td>
                <td className="py-3">{t.revenue} COP</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-500 rounded-full" style={makeWidth(t.convRate)} />
                    </div>
                    <span className="text-gray-400">{t.convRate}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
