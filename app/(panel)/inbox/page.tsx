'use client'

import { useState } from 'react'

const conversations = [
  {
    id: 1,
    name: 'María González',
    avatar: '👩',
    source: 'Instagram',
    lastMessage: 'Hola, quiero saber el precio del blanqueamiento',
    time: '2:45 PM',
    unread: true,
    messages: [
      { from: 'patient', text: 'Hola! Vi su publicación del blanqueamiento dental. ¿Cuánto cuesta?', time: '2:40 PM' },
      { from: 'ai', text: '¡Hola María! 😊 Gracias por escribirnos. Nuestro blanqueamiento dental profesional tiene un valor de $450.000 COP. Incluye valoración previa, el procedimiento completo y un kit de mantenimiento. ¿Te gustaría agendar una cita de valoración sin costo?', time: '2:40 PM' },
      { from: 'patient', text: 'Sí! Pero necesito que sea en la tarde, trabajo en las mañanas', time: '2:43 PM' },
      { from: 'ai', text: 'Perfecto, entiendo. Tenemos disponibilidad mañana jueves a las 3:00 PM o el viernes a las 4:30 PM. ¿Cuál te funciona mejor? 📅', time: '2:43 PM' },
      { from: 'patient', text: 'El jueves a las 3 por favor!', time: '2:45 PM' },
      { from: 'ai', text: '✅ ¡Listo María! Tu cita de valoración para blanqueamiento dental quedó agendada para mañana jueves a las 3:00 PM con la Dra. Carolina Mejía. Te enviaré un recordatorio mañana a las 10 AM. ¡Te esperamos!', time: '2:45 PM' },
    ],
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    avatar: '👨',
    source: 'WhatsApp',
    lastMessage: '¿Tienen ortodoncia invisible?',
    time: '2:30 PM',
    unread: true,
    messages: [
      { from: 'patient', text: 'Buenas tardes, quisiera información sobre ortodoncia invisible', time: '2:28 PM' },
      { from: 'ai', text: '¡Buenas tardes Carlos! Sí, ofrecemos ortodoncia invisible con alineadores Invisalign. El tratamiento varía entre $4.500.000 y $8.000.000 COP dependiendo de la complejidad del caso. El primer paso es una valoración con nuestro ortodoncista, el Dr. Ricardo Gómez. ¿Te gustaría agendarla?', time: '2:28 PM' },
      { from: 'patient', text: '¿Tienen ortodoncia invisible?', time: '2:30 PM' },
    ],
  },
  {
    id: 3,
    name: 'Ana Martínez',
    avatar: '👩‍💼',
    source: 'Web',
    lastMessage: 'Listo, confirmo la cita del viernes',
    time: '1:15 PM',
    unread: false,
    messages: [
      { from: 'patient', text: 'Necesito una limpieza dental urgente, me sangran las encías', time: '1:00 PM' },
      { from: 'ai', text: 'Hola Ana, entiendo tu preocupación. El sangrado de encías puede indicar gingivitis, que es muy tratable. Te recomiendo una cita con nuestro periodoncista lo antes posible. Tenemos disponibilidad mañana a las 10:00 AM o el viernes a las 2:00 PM. ¿Cuál prefieres?', time: '1:00 PM' },
      { from: 'patient', text: 'El viernes a las 2 por favor', time: '1:10 PM' },
      { from: 'ai', text: '✅ ¡Listo! Tu cita quedó agendada para el viernes 28 de marzo a las 2:00 PM con el Dr. Alejandro Pérez (Periodoncista). Te enviaré un recordatorio el jueves. ¿Necesitas algo más?', time: '1:10 PM' },
      { from: 'patient', text: 'Listo, confirmo la cita del viernes', time: '1:15 PM' },
    ],
  },
  {
    id: 4,
    name: 'Luis Herrera',
    avatar: '🧔',
    source: 'WhatsApp',
    lastMessage: 'Sí, quiero la valoración',
    time: '12:50 PM',
    unread: false,
    messages: [
      { from: 'patient', text: '¿Hacen implantes dentales? Perdí una muela hace poco', time: '12:45 PM' },
      { from: 'ai', text: '¡Hola Luis! Sí, realizamos implantes dentales con tecnología de última generación. Trabajamos con implantes de titanio grado 5. El rango va de $2.800.000 a $4.500.000 COP por implante, dependiendo del caso. El primer paso es una valoración con radiografía panorámica. ¿Te gustaría agendarla?', time: '12:45 PM' },
      { from: 'patient', text: 'Sí, quiero la valoración', time: '12:50 PM' },
      { from: 'ai', text: 'Excelente Luis. Tenemos disponibilidad el lunes 31 a las 9:00 AM o el martes 1 de abril a las 2:30 PM. ¿Cuál te funciona mejor?', time: '12:50 PM' },
    ],
  },
  {
    id: 5,
    name: 'Sofía Ramírez',
    avatar: '👧',
    source: 'Instagram',
    lastMessage: 'Gracias! Ahí estaré 😊',
    time: '11:30 AM',
    unread: false,
    messages: [
      { from: 'patient', text: 'Hola! Quiero un diseño de sonrisa, ¿qué incluye?', time: '11:15 AM' },
      { from: 'ai', text: '¡Hola Sofía! 💫 Nuestro diseño de sonrisa incluye: diagnóstico digital 3D, carillas en porcelana (de 6 a 10 piezas), blanqueamiento previo y ajustes. Precio desde $8.000.000 COP. ¿Quieres agendar una valoración para ver opciones personalizadas?', time: '11:15 AM' },
      { from: 'patient', text: 'Sí! Quiero agendar', time: '11:22 AM' },
      { from: 'ai', text: 'Perfecto. Tenemos el martes 1 de abril a las 4:00 PM con la Dra. Carolina Mejía, especialista en estética dental. ¿Te funciona?', time: '11:22 AM' },
      { from: 'patient', text: 'Sí, el martes a las 4!', time: '11:28 AM' },
      { from: 'ai', text: '✅ ¡Agendado! Martes 1 de abril, 4:00 PM con la Dra. Carolina Mejía. Te llega confirmación por WhatsApp. ¡Te esperamos, Sofía!', time: '11:28 AM' },
      { from: 'patient', text: 'Gracias! Ahí estaré 😊', time: '11:30 AM' },
    ],
  },
]

const sourceColors: Record<string, string> = {
  Instagram: 'bg-pink-100 text-pink-700',
  WhatsApp: 'bg-green-100 text-green-700',
  Web: 'bg-blue-100 text-blue-700',
}

export default function Inbox() {
  const [selected, setSelected] = useState(0)
  const convo = conversations[selected]

  return (
    <div className="flex h-full">
      <div className="w-80 border-r border-gray-100 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-bold text-lg">Inbox</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            {conversations.filter((c) => c.unread).length} sin leer · {conversations.length} conversaciones
          </p>
        </div>
        <div className="flex-1 overflow-auto">
          {conversations.map((c, i) => (
            <div
              key={c.id}
              onClick={() => setSelected(i)}
              className={`p-4 border-b border-gray-50 cursor-pointer transition ${
                selected === i ? 'bg-brand-50' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{c.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{c.name}</span>
                    <span className="text-xs text-gray-400">{c.time}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${sourceColors[c.source]}`}>
                      {c.source}
                    </span>
                    <span className="text-xs text-gray-400 truncate">{c.lastMessage}</span>
                  </div>
                </div>
                {c.unread && <div className="w-2 h-2 bg-brand-500 rounded-full" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="h-16 px-6 flex items-center justify-between border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{convo.avatar}</span>
            <div>
              <div className="font-semibold text-sm">{convo.name}</div>
              <div className="text-xs text-gray-400">{convo.source} · En línea</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-lg font-medium">
              ⚡ Escalar a humano
            </button>
            <button className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-lg font-medium">
              📅 Agendar cita
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-6 space-y-4">
          {convo.messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'ai' ? 'justify-start' : 'justify-end'}`}>
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm ${
                  msg.from === 'ai'
                    ? 'bg-white border border-gray-100 text-gray-800'
                    : 'bg-brand-600 text-white'
                }`}
              >
                {msg.from === 'ai' && (
                  <div className="text-[10px] text-brand-500 font-semibold mb-1">🤖 AGAPAI AI</div>
                )}
                <p>{msg.text}</p>
                <div className={`text-[10px] mt-1 ${msg.from === 'ai' ? 'text-gray-300' : 'text-brand-200'}`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="La IA responde automáticamente..."
              className="flex-1 bg-gray-50 rounded-xl px-4 py-3 text-sm border border-gray-100 focus:outline-none focus:border-brand-300"
              disabled
            />
            <button className="bg-brand-600 text-white px-5 py-3 rounded-xl text-sm font-medium">Enviar</button>
          </div>
          <div className="text-[10px] text-gray-300 mt-2 text-center">
            💡 En modo demo, la IA responde automáticamente. En producción se conecta a WhatsApp Business API e Instagram.
          </div>
        </div>
      </div>
    </div>
  )
}
