import { calendarEvents } from '@/data/mockData';

const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17];

const treatmentColorMap: Record<string, string> = {
  'Ortodoncia': 'bg-blue-500 text-white',
  'Implantes': 'bg-purple-500 text-white',
  'Blanqueamiento': 'bg-yellow-400 text-gray-900',
  'Endodoncia': 'bg-red-500 text-white',
  'Limpieza': 'bg-green-500 text-white',
  'Coronas': 'bg-orange-500 text-white',
};

export default function CalendarPage() {
  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendario</h1>
          <p className="text-gray-500 text-sm mt-1">Semana del 24–28 de Marzo, 2026</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {Object.entries(treatmentColorMap).map(([treatment, color]) => (
            <div key={treatment} className={`${color} text-xs px-3 py-1 rounded-full font-medium`}>
              {treatment}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-auto">
        <div className="grid grid-cols-6 border-b border-gray-200">
          <div className="p-3 border-r border-gray-100 bg-gray-50" />
          {DAYS.map((day) => (
            <div key={day} className="p-3 text-center border-r border-gray-100 bg-gray-50 last:border-r-0">
              <p className="font-semibold text-sm text-gray-700">{day}</p>
            </div>
          ))}
        </div>

        {HOURS.map((hour) => (
          <div key={hour} className="grid grid-cols-6 border-b border-gray-100 last:border-b-0">
            <div className="p-3 border-r border-gray-100 bg-gray-50 text-xs text-gray-400 font-medium text-right pr-4">
              {hour}:00
            </div>
            {DAYS.map((_, dayIndex) => {
              const events = calendarEvents.filter(
                (e) => e.day === dayIndex && e.startHour === hour
              );
              return (
                <div key={dayIndex} className="border-r border-gray-100 last:border-r-0 p-1 min-h-[60px] relative">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className={`${treatmentColorMap[event.treatment] || 'bg-gray-400 text-white'} rounded-lg p-2 mb-1 text-xs cursor-pointer hover:opacity-90 transition-opacity`}
                    >
                      <p className="font-semibold truncate">{event.patientName}</p>
                      <p className="opacity-80">{event.treatment}</p>
                      <p className="opacity-70">{hour}:00 – {hour + event.duration}:00</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
