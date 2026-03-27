import { Message } from '@/data/mockData';

export default function ChatBubble({ message }: { message: Message }) {
  const isBot = message.sender === 'bot';
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}>
      <div className={`max-w-xs lg:max-w-md ${isBot ? 'order-2' : 'order-1'}`}>
        {isBot && (
          <span className="text-xs text-gray-500 ml-2 mb-1 block">
            🤖 Bot IA
          </span>
        )}
        <div
          className={`px-4 py-2 rounded-2xl text-sm ${
            isBot
              ? 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
              : 'bg-blue-600 text-white rounded-tr-none'
          }`}
        >
          {message.content}
        </div>
        <p className={`text-xs text-gray-400 mt-1 ${isBot ? 'ml-2' : 'text-right'}`}>
          {message.time}
        </p>
      </div>
    </div>
  );
}
