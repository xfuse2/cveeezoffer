import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PACKAGES, FAQS } from '../constants';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'مرحباً بك في CVEEEZ! 👋 أنا مساعدك الذكي. إزاي أقدر أساعدك النهاردة؟ ممكن تسألني عن الباكدجات، الأسعار، أو نصائح للـ CV.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    
    // Create new messages array with the user's message
    const newMessages = [...messages, { role: 'user' as const, text: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Robust API Key access to prevent "process is not defined" crashes
      let apiKey = '';
      try {
        if (typeof process !== 'undefined' && process.env) {
          apiKey = process.env.API_KEY || '';
        }
      } catch (err) {
        console.warn("API Key access warning:", err);
      }

      if (!apiKey) {
        console.error("API Key not found. Please check Vercel environment variables.");
        throw new Error("API Key is missing.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const packagesContext = PACKAGES.map(p => 
        `- ${p.name}: ${p.price} EGP. ${p.description} Features: ${p.features.join(', ')}`
      ).join('\n');
      
      const faqContext = FAQS.map(f => `Q: ${f.question} A: ${f.answer}`).join('\n');

      const systemInstruction = `
        You are a smart, friendly customer support AI assistant for "CVEEEZ", a professional CV and LinkedIn writing service in Egypt.
        
        Your Goal: Help users choose the right package, answer their questions, and encourage them to book via WhatsApp.
        
        Key Information:
        - We provide manual, ATS-friendly CV writing (no generic templates).
        - We analyze the job market and customize the CV for the specific career field.
        - Delivery time: 24-48 hours usually.
        - We offer unlimited revisions until satisfaction.
        - Payment via Vodafone Cash, InstaPay, or Bank Transfer.
        
        Packages & Pricing:
        ${packagesContext}
        
        Common Questions:
        ${faqContext}
        
        Guidelines:
        - Respond in helpful, professional, but friendly Arabic (Egyptian dialect is great).
        - Keep responses concise (under 3-4 sentences if possible) to fit the chat window.
        - If asked about booking, direct them to click the WhatsApp button on the screen.
        - If you don't know an answer, suggest contacting support on WhatsApp for more details.
        - Do not invent prices or services not listed in the context.
      `;

      // Filter out the initial welcome message from the history sent to the API.
      // The API expects the conversation history to start with a user message.
      const apiHistory = newMessages.filter((m, i) => i > 0 || m.role === 'user').map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: apiHistory,
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const reply = response.text || "آسف، مش قادر أرد دلوقتي. ممكن تحاول تاني؟";
      setMessages(prev => [...prev, { role: 'model', text: reply }]);

    } catch (error) {
      console.error("Chat error:", error);
      // More friendly error message
      setMessages(prev => [...prev, { role: 'model', text: "عذراً، في مشكلة في الاتصال حالياً. يا ريت تكلمنا على واتساب عشان نساعدك أسرع! 💚" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-brand-600 hover:bg-brand-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow"
        aria-label="Chat with AI"
        title="المساعد الذكي"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 right-4 md:left-6 md:right-auto md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden max-h-[60vh] md:max-h-[70vh] animate-in fade-in slide-in-from-bottom-10 duration-300 z-50">
          
          {/* Header */}
          <div className="bg-brand-700 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">مساعد CVEEEZ الذكي</h3>
                <span className="flex items-center gap-1 text-[10px] text-brand-100">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  متاح الآن
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-brand-600 p-1 rounded transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4 min-h-[300px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-slate-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
                  <span className="text-xs text-gray-400">جاري الكتابة...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="اكتب استفسارك هنا..."
              className="flex-1 bg-slate-100 border-0 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
              dir="rtl"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-brand-600 text-white p-2 rounded-xl hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5 rtl:rotate-180" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;