import { leads, metrics } from '@/data/mockData';
import StatCard from '@/components/StatCard';
import PriorityBadge from '@/components/PriorityBadge';

const recentLeads = leads.slice(0, 8);
const maxCount = Math.max(...metrics.weeklyLeads.map((w) => w.count));

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500 text-sm mt-1">Métricas del último mes</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Leads" value={metrics.totalLeads} icon="👥" sublabel="Últimos 30 días" />
        <StatCard label="Tasa de Conversión" value={`${metrics.conversionRate}%`} icon="📈" sublabel="+12% vs mes anterior" />
        <StatCard label="Tiempo Prom. Respuesta" value={metrics.avgResponseTime} icon="⚡" sublabel="Promedio del sistema" />
        <StatCard label="Citas Agendadas" value={metrics.appointmentsScheduled} icon="📅" sublabel="Confirmadas este mes" />
      </div>

      {/* Bar chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-6">Leads por Semana</h3>
        <div className="flex items-end gap-6 h-40">
          {metrics.weeklyLeads.map((week) => (
            <div key={week.week} className="flex flex-col items-center flex-1 gap-2">
              <span className="text-sm font-bold text-gray-700">{week.count}</span>
              <div
                className="w-full bg-blue-600 rounded-t-lg transition-all hover:bg-blue-700"
                style={{ height: `${(week.count / maxCount) * 120}px` }}
              />
              <span className="text-xs text-gray-400">{week.week}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">Leads Recientes con Scoring</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 font-semibold text-gray-600">Nombre</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Tratamiento</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Prioridad</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Score</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Etapa</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{lead.name}</td>
                  <td className="px-6 py-4 text-blue-600 font-medium">{lead.treatment}</td>
                  <td className="px-6 py-4">
                    <PriorityBadge priority={lead.priority} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-blue-600 rounded-full h-2"
                          style={{ width: `${lead.score}%` }}
                        />
                      </div>
                      <span className="font-semibold text-gray-700">{lead.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{lead.stage}</td>
                  <td className="px-6 py-4 text-gray-400">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
