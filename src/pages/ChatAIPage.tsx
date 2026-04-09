import React, { useState } from 'react';
import {
  MessageSquare, Plus, Search, X, Zap, AlertTriangle,
  Globe, ArrowRight, BrainCircuit, Lightbulb,
  Bot, Clock, XCircle, Search as SearchIcon,
  Trash2, Edit2, Sparkles, Send
} from 'lucide-react';

const ChatAIPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-[calc(100vh-76px)] overflow-hidden bg-[#f8f9fa] relative text-gray-800 mb-100">

      {/* Main Chat Area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'mr-80' : ''}`}>

        {/* Top Right Toggle Button */}
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-6 right-6 p-3 bg-gray-200/50 hover:bg-gray-200 rounded-xl transition-colors shrink-0 z-10"
          >
            <MessageSquare size={20} className="text-gray-600" />
          </button>
        )}

        {/* Upgrade Tab */}
        {!isSidebarOpen && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-2 py-6 rounded-l-xl cursor-pointer hover:bg-blue-600 transition-colors flex items-center justify-center flex-col gap-2 shadow-lg z-10">
            <span className="writing-vertical text-sm font-medium tracking-wider" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              Upgrade to Pro
            </span>
            <Sparkles size={16} />
          </div>
        )}

        {/* Center Content */}
        <div className="flex-1 overflow-y-auto w-full flex flex-col items-center justify-center px-4 md:px-10 pb-32 pt-10">

          <div className="bg-white px-6 py-2 rounded-full shadow-sm mb-8 font-bold tracking-widest text-sm flex items-center gap-1 border border-gray-100">
            CHAT A.I+
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Good day! How may I assist you today?
          </h1>

          {/* Grid Container */}
          <div className=" max-w-5xl w-full flex flex-col gap-4">

            {/* Row 1: Explore */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
              <div className="bg-[#1e1e2d] text-white p-5 rounded-2xl flex-1 md:max-w-[200px] flex flex-col items-start justify-center shadow-md">
                <Globe className="mb-2 text-gray-300" size={24} />
                <h3 className="font-semibold text-lg mb-1">Explore</h3>
                <p className="text-xs text-gray-400">Learn how to use chat.ai platform for your needs</p>
              </div>
              <div className="hidden md:flex items-center text-gray-300">
                <div className="w-1 h-8 border-l-2 border-r-2 border-gray-300 w-[10px]"></div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <ActionCard
                  icon={<BrainCircuit className="text-purple-500 bg-purple-100 p-1.5 rounded-full" size={32} />}
                  title='"Explain"'
                  desc="Quantum computing in simple terms"
                />
                <ActionCard
                  icon={<Globe className="text-blue-500 bg-blue-100 p-1.5 rounded-full" size={32} />}
                  title='"How to"'
                  desc="Make a search engine platform like google"
                />
              </div>
            </div>

            {/* Row 2: Capabilities */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
              <div className="bg-[#1e1e2d] text-white p-5 rounded-2xl flex-1 md:max-w-[200px] flex flex-col items-start justify-center shadow-md">
                <Zap className="mb-2 text-gray-300" size={24} />
                <h3 className="font-semibold text-lg mb-1">Capabilities</h3>
                <p className="text-xs text-gray-400">How much capable chat.ai to full-fill your needs</p>
              </div>
              <div className="hidden md:flex items-center text-gray-300">
                <div className="w-1 h-8 border-l-2 border-r-2 border-gray-300 w-[10px]"></div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <ActionCard
                  icon={<Lightbulb className="text-orange-500 bg-orange-100 p-1.5 rounded-full" size={32} />}
                  title='"Remember"'
                  desc="quantum computing in simple terms"
                />
                <ActionCard
                  icon={<Bot className="text-red-500 bg-red-100 p-1.5 rounded-full" size={32} />}
                  title='"Allows"'
                  desc="User to provide follow-up corrections"
                />
              </div>
            </div>

            {/* Row 3: Limitation */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
              <div className="bg-[#1e1e2d] text-white p-5 rounded-2xl flex-1 md:max-w-[200px] flex flex-col items-start justify-center shadow-md">
                <AlertTriangle className="mb-2 text-gray-300" size={24} />
                <h3 className="font-semibold text-lg mb-1">Limitation</h3>
                <p className="text-xs text-gray-400">How much capable chat.ai to full-fill your needs</p>
              </div>
              <div className="hidden md:flex items-center text-gray-300">
                <div className="w-1 h-8 border-l-2 border-r-2 border-gray-300 w-[10px]"></div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <ActionCard
                  icon={<XCircle className="text-red-600 bg-red-100 p-1.5 rounded-full" size={32} />}
                  title='"May"'
                  desc="Occasionally generate incorrect information"
                />
                <ActionCard
                  icon={<Clock className="text-sky-500 bg-sky-100 p-1.5 rounded-full" size={32} />}
                  title='"Limited"'
                  desc="Knowledge of world and events after 2021"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Input Area */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4 transition-all duration-300" style={{ right: isSidebarOpen ? '320px' : '0' }}>
          <div className="w-full max-w-3xl bg-white rounded-full shadow-lg p-2 pl-4 flex items-center border border-gray-100">
            <Bot className="text-pink-500 mr-2" size={24} />
            <input
              type="text"
              placeholder="What's in your mind?..."
              className="flex-1 bg-transparent border-none outline-none text-gray-700 py-3"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors flex items-center justify-center ml-2 shadow-md">
              <Send size={18} className="translate-x-[-1px] translate-y-[1px]" />
            </button>
          </div>
        </div>

      </div>

      {/* Right Sidebar - Chat History */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl border-l border-gray-100 transition-transform duration-300 ease-in-out z-40 w-80 flex flex-col`}
        style={{ transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="p-6 pb-4 flex items-center justify-between border-b border-gray-50">
          <span className="font-bold tracking-widest text-sm">CHAT A.I+</span>
          <button onClick={toggleSidebar} className="text-gray-400 hover:text-gray-700 p-1 rounded-md hover:bg-gray-100 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 flex gap-3">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2.5 flex items-center justify-center gap-2 font-medium transition-colors shadow-sm text-sm">
            <Plus size={16} />
            New chat
          </button>
          <button className="w-10 h-10 bg-black text-white hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors shrink-0 shadow-sm">
            <SearchIcon size={16} />
          </button>
        </div>

        <div className="px-5 py-2 flex items-center justify-between text-xs text-gray-500 font-medium">
          <span>Your conversations</span>
          <button className="text-blue-500 hover:underline">Clear All</button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-1">
          <HistoryItem title="Create Html Game Environment..." isActive={false} />
          <HistoryItem title="Apply To Leave For Emergency" isActive={false} />
          <HistoryItem title="What Is UI UX Design?" isActive={false} />
          <HistoryItem title="Create POS System" isActive={false} />
          <HistoryItem title="What Is UX Audit?" isActive={false} />
          <HistoryItem title="Create Chatbot GPT..." isActive={true} />
          <HistoryItem title="How Chat GPT Work?" isActive={false} />

          <div className="px-2 pt-6 pb-2 text-xs text-gray-400 font-medium">Last 7 Days</div>

          <HistoryItem title="Crypto Lending App Name" isActive={false} />
          <HistoryItem title="Operator Grammar Types" isActive={false} />
          <HistoryItem title="Min States For Binary DFA" isActive={false} />
        </div>

        <div className="p-4 border-t border-gray-50 space-y-3">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-sm font-medium text-gray-700 border border-gray-100">
            <div className="bg-gray-200 p-1.5 rounded-lg"><Zap size={16} className="text-gray-600" /></div>
            Settings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-sm font-medium text-gray-700 border border-gray-100">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User profile" className="w-7 h-7 rounded-full object-cover" />
            Andrew Neilson
          </button>
        </div>

      </div>

    </div>
  );
};

// Reusable Action Card Component
const ActionCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => {
  return (
    <div className="bg-white p-4 pl-5 pr-5 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group shadow-sm border border-gray-100">
      <div className="w-12 h-12 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h4>
        <p className="text-xs text-gray-500 mt-1 leading-snug">{desc}</p>
      </div>
      <ArrowRight size={18} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
    </div>
  );
};

// Reusable History Item Component
const HistoryItem = ({ title, isActive }: { title: string, isActive: boolean }) => {
  return (
    <div className={`group flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-colors ${isActive ? 'bg-blue-50/80 text-blue-700' : 'hover:bg-gray-50 text-gray-700'}`}>
      <div className="flex items-center gap-3 overflow-hidden">
        <MessageSquare size={16} className={isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-600 transition-colors'} />
        <span className="text-sm truncate font-medium">{title}</span>
      </div>
      {isActive && (
        <div className="flex items-center gap-2 text-gray-400">
          <button className="hover:text-blue-600"><Trash2 size={14} /></button>
          <button className="hover:text-blue-600"><Edit2 size={14} /></button>
        </div>
      )}
    </div>
  );
};

export default ChatAIPage;
