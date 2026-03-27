export type Priority = 'Alta' | 'Media' | 'Baja';
export type PipelineStage = 'Nuevo Lead' | 'Cualificado' | 'Cita Agendada' | 'En Tratamiento' | 'Cerrado';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  treatment: string;
  priority: Priority;
  stage: PipelineStage;
  date: string;
  score: number;
  lastMessage?: string;
}

export interface Message {
  id: string;
  sender: 'bot' | 'patient';
  content: string;
  time: string;
}

export interface Conversation {
  id: string;
  patientName: string;
  lastMessage: string;
  time: string;
  unread: number;
  messages: Message[];
}

export interface CalendarEvent {
  id: string;
  patientName: string;
  treatment: string;
  day: number; // 0=Monday...6=Sunday
  startHour: number;
  duration: number; // in hours
  color: string;
}

export interface Metrics {
  totalLeads: number;
  conversionRate: number;
  avgResponseTime: string;
  appointmentsScheduled: number;
  weeklyLeads: { week: string; count: number }[];
}

export const leads: Lead[] = [
  { id: '1', name: 'María Rodríguez', phone: '+57 301 234 5678', treatment: 'Ortodoncia', priority: 'Alta', stage: 'Nuevo Lead', date: '2026-03-27', score: 92, lastMessage: 'Me interesa el tratamiento de brackets' },
  { id: '2', name: 'Carlos Mejía', phone: '+57 312 456 7890', treatment: 'Implantes', priority: 'Alta', stage: 'Cualificado', date: '2026-03-26', score: 88, lastMessage: 'Cuánto cuestan los implantes dentales?' },
  { id: '3', name: 'Valentina Torres', phone: '+57 321 567 8901', treatment: 'Blanqueamiento', priority: 'Media', stage: 'Cita Agendada', date: '2026-03-25', score: 74, lastMessage: 'Ya tengo mi cita agendada para el viernes' },
  { id: '4', name: 'Andrés García', phone: '+57 315 678 9012', treatment: 'Endodoncia', priority: 'Alta', stage: 'Cita Agendada', date: '2026-03-25', score: 95, lastMessage: 'Tengo mucho dolor en una muela' },
  { id: '5', name: 'Laura Martínez', phone: '+57 320 789 0123', treatment: 'Limpieza', priority: 'Baja', stage: 'Nuevo Lead', date: '2026-03-24', score: 55, lastMessage: 'Quisiera hacer una limpieza dental' },
  { id: '6', name: 'Sebastián López', phone: '+57 316 890 1234', treatment: 'Coronas', priority: 'Media', stage: 'Cualificado', date: '2026-03-24', score: 78, lastMessage: 'Necesito información sobre coronas dentales' },
  { id: '7', name: 'Camila Herrera', phone: '+57 313 901 2345', treatment: 'Ortodoncia', priority: 'Media', stage: 'En Tratamiento', date: '2026-03-23', score: 82, lastMessage: 'Cuándo es mi próxima cita de ajuste?' },
  { id: '8', name: 'Diego Ramírez', phone: '+57 318 012 3456', treatment: 'Implantes', priority: 'Alta', stage: 'Cualificado', date: '2026-03-23', score: 91, lastMessage: 'Perdí un diente y necesito implante urgente' },
  { id: '9', name: 'Isabella Vargas', phone: '+57 311 123 4567', treatment: 'Blanqueamiento', priority: 'Baja', stage: 'Cerrado', date: '2026-03-22', score: 62, lastMessage: 'Gracias, volveré a contactarlos más adelante' },
  { id: '10', name: 'Juan Morales', phone: '+57 317 234 5678', treatment: 'Endodoncia', priority: 'Alta', stage: 'En Tratamiento', date: '2026-03-22', score: 89, lastMessage: 'Listo para la segunda sesión del tratamiento' },
  { id: '11', name: 'Daniela Castro', phone: '+57 314 345 6789', treatment: 'Limpieza', priority: 'Baja', stage: 'Nuevo Lead', date: '2026-03-21', score: 48, lastMessage: 'Vi su publicidad en Instagram' },
  { id: '12', name: 'Miguel Ospina', phone: '+57 319 456 7890', treatment: 'Coronas', priority: 'Media', stage: 'Cita Agendada', date: '2026-03-21', score: 76, lastMessage: 'Confirmada mi cita para el lunes' },
  { id: '13', name: 'Sofía Peñaloza', phone: '+57 310 567 8901', treatment: 'Ortodoncia', priority: 'Alta', stage: 'Cualificado', date: '2026-03-20', score: 85, lastMessage: 'Tengo 16 años, soy candidata para brackets?' },
  { id: '14', name: 'Tomás Ríos', phone: '+57 322 678 9012', treatment: 'Limpieza', priority: 'Baja', stage: 'Cerrado', date: '2026-03-20', score: 51, lastMessage: 'Gracias por la información' },
  { id: '15', name: 'Natalia Guerrero', phone: '+57 323 789 0123', treatment: 'Implantes', priority: 'Alta', stage: 'Nuevo Lead', date: '2026-03-27', score: 93, lastMessage: 'Necesito información urgente sobre implantes' },
];

export const conversations: Conversation[] = [
  {
    id: '1',
    patientName: 'María Rodríguez',
    lastMessage: 'Perfecto, ¡nos vemos el viernes!',
    time: '10:32',
    unread: 0,
    messages: [
      { id: '1', sender: 'bot', content: '¡Hola María! Soy el asistente virtual de AGAPAI Dental. ¿En qué puedo ayudarte hoy? 😊', time: '10:15' },
      { id: '2', sender: 'patient', content: 'Hola! Me interesa saber sobre el tratamiento de brackets', time: '10:16' },
      { id: '3', sender: 'bot', content: 'Claro, con mucho gusto te informo. Ofrecemos ortodoncia con brackets metálicos, cerámicos y alineadores invisibles. ¿Tienes alguna preferencia? También podría preguntarte tu edad para recomendarte la mejor opción 🦷', time: '10:16' },
      { id: '4', sender: 'patient', content: 'Tengo 24 años, quisiera los cerámicos para que no se noten tanto', time: '10:18' },
      { id: '5', sender: 'bot', content: 'Excelente elección! Los brackets cerámicos son muy populares en adultos por su discreción. Para darte un presupuesto exacto, necesitamos una valoración inicial gratuita. ¿Te gustaría agendar una cita esta semana?', time: '10:18' },
      { id: '6', sender: 'patient', content: 'Sí me gustaría, ¿tienen disponibilidad el viernes?', time: '10:20' },
      { id: '7', sender: 'bot', content: 'Revisando disponibilidad... ✅ Tenemos el viernes 29 de marzo a las 10:00 AM o 3:00 PM. ¿Cuál te queda mejor?', time: '10:20' },
      { id: '8', sender: 'patient', content: 'Las 10 AM está perfecto', time: '10:30' },
      { id: '9', sender: 'bot', content: '¡Listo! Cita confirmada para el viernes 29 de marzo a las 10:00 AM. Te enviaré un recordatorio el día anterior. ¿Hay algo más en que pueda ayudarte? 😊', time: '10:31' },
      { id: '10', sender: 'patient', content: 'Perfecto, ¡nos vemos el viernes!', time: '10:32' },
    ],
  },
  {
    id: '2',
    patientName: 'Andrés García',
    lastMessage: 'Por favor, el dolor es insoportable',
    time: '09:45',
    unread: 2,
    messages: [
      { id: '1', sender: 'bot', content: '¡Hola! Soy el asistente de AGAPAI Dental. ¿Cómo puedo ayudarte?', time: '09:30' },
      { id: '2', sender: 'patient', content: 'Tengo un dolor terrible en una muela del fondo, llevo 2 días así', time: '09:31' },
      { id: '3', sender: 'bot', content: 'Entiendo, eso suena muy incómodo 😟. El dolor persistente en una muela puede indicar una infección o necesidad de endodoncia. Esto requiere atención prioritaria. ¿El dolor es constante o solo al morder?', time: '09:31' },
      { id: '4', sender: 'patient', content: 'Es constante, también siento que la zona está inflamada', time: '09:33' },
      { id: '5', sender: 'bot', content: '⚠️ Esto requiere atención urgente. Tenemos una cita de emergencia disponible hoy a las 2:00 PM. Te recomiendo no esperar más. ¿Puedes venir hoy?', time: '09:33' },
      { id: '6', sender: 'patient', content: 'Por favor, el dolor es insoportable', time: '09:45' },
    ],
  },
  {
    id: '3',
    patientName: 'Carlos Mejía',
    lastMessage: 'Entendido, coordinaremos eso en la cita',
    time: 'Ayer',
    unread: 0,
    messages: [
      { id: '1', sender: 'bot', content: '¡Hola Carlos! ¿En qué te puedo ayudar hoy?', time: '15:00' },
      { id: '2', sender: 'patient', content: 'Quiero saber sobre implantes dentales, perdí un diente hace 6 meses', time: '15:02' },
      { id: '3', sender: 'bot', content: 'Los implantes son la solución más duradera y natural para dientes perdidos. El proceso incluye: evaluación, colocación del implante (titanio), periodo de oseointegración (3-6 meses) y colocación de la corona. ¿Tienes alguna condición médica que debamos considerar?', time: '15:02' },
      { id: '4', sender: 'patient', content: 'No, estoy sano. ¿Cuánto puede costar aproximadamente?', time: '15:05' },
      { id: '5', sender: 'bot', content: 'El costo varía según el caso específico. Para darte un presupuesto exacto necesitamos radiografías y evaluación del hueso disponible. Lo que sí puedo decirte es que ofrecemos planes de financiación. ¿Agendamos una valoración gratuita?', time: '15:05' },
      { id: '6', sender: 'patient', content: 'Sí, ¿manejan pagos en cuotas?', time: '15:08' },
      { id: '7', sender: 'bot', content: 'Entendido, coordinaremos eso en la cita', time: '15:10' },
    ],
  },
  {
    id: '4',
    patientName: 'Valentina Torres',
    lastMessage: '¡Muchas gracias!',
    time: 'Ayer',
    unread: 0,
    messages: [
      { id: '1', sender: 'bot', content: '¡Hola Valentina! ¿Cómo puedo ayudarte?', time: '11:00' },
      { id: '2', sender: 'patient', content: 'Quiero blanquearme los dientes para una boda el próximo mes', time: '11:01' },
      { id: '3', sender: 'bot', content: '¡Perfecto! Para una ocasión especial te recomendamos el blanqueamiento profesional en clínica, que da resultados en 1-2 sesiones. ¿Tienes dientes sensibles?', time: '11:01' },
      { id: '4', sender: 'patient', content: 'Un poquito sí, ¿eso es problema?', time: '11:03' },
      { id: '5', sender: 'bot', content: 'No te preocupes, usamos un gel especial para dientes sensibles. También recomendamos una limpieza previa para mejores resultados. ¿Te agendo para esta semana?', time: '11:03' },
      { id: '6', sender: 'patient', content: '¡Muchas gracias!', time: '11:05' },
    ],
  },
  {
    id: '5',
    patientName: 'Diego Ramírez',
    lastMessage: '¿Pueden atenderme hoy?',
    time: '08:20',
    unread: 1,
    messages: [
      { id: '1', sender: 'patient', content: 'Buenas, se me cayó un diente ayer, ¿pueden atenderme hoy?', time: '08:20' },
    ],
  },
];

export const calendarEvents: CalendarEvent[] = [
  { id: '1', patientName: 'María Rodríguez', treatment: 'Ortodoncia', day: 0, startHour: 9, duration: 1, color: 'bg-blue-500' },
  { id: '2', patientName: 'Carlos Mejía', treatment: 'Implantes', day: 0, startHour: 11, duration: 1.5, color: 'bg-purple-500' },
  { id: '3', patientName: 'Valentina Torres', treatment: 'Blanqueamiento', day: 1, startHour: 10, duration: 1, color: 'bg-yellow-500' },
  { id: '4', patientName: 'Andrés García', treatment: 'Endodoncia', day: 1, startHour: 14, duration: 2, color: 'bg-red-500' },
  { id: '5', patientName: 'Laura Martínez', treatment: 'Limpieza', day: 2, startHour: 9, duration: 0.5, color: 'bg-green-500' },
  { id: '6', patientName: 'Sebastián López', treatment: 'Coronas', day: 2, startHour: 15, duration: 1, color: 'bg-orange-500' },
  { id: '7', patientName: 'Camila Herrera', treatment: 'Ortodoncia', day: 3, startHour: 10, duration: 1, color: 'bg-blue-500' },
  { id: '8', patientName: 'Diego Ramírez', treatment: 'Implantes', day: 3, startHour: 13, duration: 1.5, color: 'bg-purple-500' },
  { id: '9', patientName: 'Sofía Peñaloza', treatment: 'Ortodoncia', day: 4, startHour: 11, duration: 1, color: 'bg-blue-500' },
  { id: '10', patientName: 'Miguel Ospina', treatment: 'Coronas', day: 4, startHour: 16, duration: 1, color: 'bg-orange-500' },
];

export const metrics: Metrics = {
  totalLeads: 127,
  conversionRate: 68,
  avgResponseTime: '28s',
  appointmentsScheduled: 84,
  weeklyLeads: [
    { week: 'Sem 1', count: 24 },
    { week: 'Sem 2', count: 31 },
    { week: 'Sem 3', count: 28 },
    { week: 'Sem 4', count: 44 },
  ],
};
