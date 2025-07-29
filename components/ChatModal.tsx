
import React, { useState, useEffect, useRef } from 'react';
import { mockChatHistory } from '../data/mockData';
import type { Guide, ChatMessage } from '../types';
import { SendIcon, XIcon } from './icons';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  guide: Guide;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose, guide }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatHistory);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, userMessage]);
    setNewMessage('');
    // Mock guide response after a short delay
    setTimeout(() => {
        const guideResponse: ChatMessage = {
             id: messages.length + 2,
             sender: 'guide',
             text: "Thanks for your message! I'll get back to you shortly.",
             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, guideResponse]);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg h-[70vh] flex flex-col transform transition-all duration-300 scale-100" onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img src={guide.profileImage} alt={guide.name} className="h-12 w-12 rounded-full object-cover" />
            <div>
                <h2 className="text-lg font-bold text-gray-800">{guide.name}</h2>
                <p className="text-sm text-gray-500">Typically replies within an hour</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'guide' && <img src={guide.profileImage} alt="guide" className="h-8 w-8 rounded-full" />}
              <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-emerald-600 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}>
                <p className="text-sm">{msg.text}</p>
                 <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-emerald-200' : 'text-gray-500'} text-right`}>{msg.timestamp}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={`Message ${guide.name.split(' ')[0]}...`}
              className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
              autoFocus
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white rounded-full p-3 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all transform hover:scale-110 disabled:bg-gray-400"
              disabled={!newMessage.trim()}
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
