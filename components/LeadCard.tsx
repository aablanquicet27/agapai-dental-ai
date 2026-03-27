import { Lead } from '@/data/mockData';
import PriorityBadge from './PriorityBadge';

export default function LeadCard({ lead }: { lead: Lead }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-2">
        <p className="font-semibold text-gray-900 text-sm">{lead.name}</p>
        <PriorityBadge priority={lead.priority} />
      </div>
      <p className="text-xs text-gray-500 mb-1">{lead.phone}</p>
      <p className="text-xs text-blue-600 font-medium mb-2">{lead.treatment}</p>
      {lead.lastMessage && (
        <p className="text-xs text-gray-400 truncate">{lead.lastMessage}</p>
      )}
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-gray-400">{lead.date}</span>
        <span className="text-xs font-medium text-gray-600">Score: {lead.score}</span>
      </div>
    </div>
  );
}
