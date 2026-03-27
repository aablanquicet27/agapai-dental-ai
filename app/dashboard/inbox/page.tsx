'use client';
import { useState } from 'react';
import { conversations } from '@/data/mockData';
import ChatBubble from '@/components/ChatBubble';

export default function InboxPage() {
  const [activeConv, setActiveConv] = useState(conversations[0]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900">Inbox</h2>
          <p className="text-xs text-gray-400 mt-1">{conversations.filter(c => c.unread > 0).length} no leídos</p>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setActiveConv(conv)}
              className={`w-full text-left p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                activeConv.id === conv.id ? 'bg-blue-50 border-l-2 border-l-blue-600' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm text-gray-900">{conv.patientName}</span>
                <span className="text-xs text-gray-400">{conv.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 truncate max-w-[180px]">{conv.lastMessage}</span>
                {conv.unread > 0 && (
                  <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                    {conv.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat view */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-900">{activeConv.patientName}</h3>
            <p className="text-xs text-gray-400">WhatsApp Business</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">🤖 Bot activo</span>
            <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
              Tomar control
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeConv.messages.map((msg) => (
            <ChatBubble key={msg.id} message={msg} />
          ))}
          <div className="flex justify-start mb-3">
            <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
              <span className="text-gray-400 text-sm italic">Bot está escribiendo...</span>
              <span className="inline-flex gap-1 ml-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
              disabled
            />
            <button className="bg-blue-600 text-white p-2 rounded-lg opacity-50 cursor-not-allowed">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-center text-gray-400 mt-2">El bot gestiona las respuestas automáticamente</p>
        </div>
      </div>
    </div>
  );
}
