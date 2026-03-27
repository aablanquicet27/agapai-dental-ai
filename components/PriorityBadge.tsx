import { Priority } from '@/data/mockData';

export default function PriorityBadge({ priority }: { priority: Priority }) {
  const styles: Record<Priority, string> = {
    Alta: 'bg-red-100 text-red-700 border border-red-200',
    Media: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
    Baja: 'bg-green-100 text-green-700 border border-green-200',
  };
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles[priority]}`}>
      {priority}
    </span>
  );
}
