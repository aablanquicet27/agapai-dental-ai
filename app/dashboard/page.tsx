import { leads, PipelineStage } from '@/data/mockData';
import LeadCard from '@/components/LeadCard';

const stages: PipelineStage[] = ['Nuevo Lead', 'Cualificado', 'Cita Agendada', 'En Tratamiento', 'Cerrado'];

const stageColors: Record<PipelineStage, string> = {
  'Nuevo Lead': 'border-t-gray-400',
  'Cualificado': 'border-t-blue-500',
  'Cita Agendada': 'border-t-green-500',
  'En Tratamiento': 'border-t-yellow-500',
  'Cerrado': 'border-t-purple-500',
};

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Pipeline de Leads</h1>
        <p className="text-gray-500 text-sm mt-1">Vista Kanban — {leads.length} leads activos</p>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const stageLeads = leads.filter((l) => l.stage === stage);
          return (
            <div key={stage} className="flex-shrink-0 w-64">
              <div className={`bg-white rounded-xl border-t-4 ${stageColors[stage]} shadow-sm`}>
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 text-sm">{stage}</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                      {stageLeads.length}
                    </span>
                  </div>
                </div>
                <div className="p-3 space-y-3">
                  {stageLeads.map((lead) => (
                    <LeadCard key={lead.id} lead={lead} />
                  ))}
                  {stageLeads.length === 0 && (
                    <p className="text-center text-gray-400 text-xs py-4">Sin leads</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
