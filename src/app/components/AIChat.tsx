import { useState, useRef, useEffect } from "react";
import { ChevronLeft, Info, Send, Sparkles, BookOpen } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import { motion, AnimatePresence } from "motion/react";

export function AIChat() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "ai",
      text: "Halo Nama 🌸 Aku Ovella AI. Kamu sedang di Fase Folikular hari ke-7.\nAda yang ingin kamu tanyakan tentang hormon, siklus, atau gejalamu hari ini?",
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showInsight, setShowInsight] = useState(true);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: "user", text }]);
    setInput("");
    setShowInsight(false);
    setIsTyping(true);
    
    // Mock AI Response based on input
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "";
      let type = "text";
      
      if (text.includes("sakit kepala") || text.includes("Normal nggak")) {
        replyText = "Berdasarkan data catatanmu selama 3 bulan terakhir, aku mendeteksi bahwa sakit kepala pra-menstruasi kamu muncul konsisten di hari ke-26–27. Ini bisa berkaitan dengan penurunan estrogen menjelang menstruasi 🩸\n\nYang bisa kamu coba:\n• Jaga hidrasi extra 1–2 hari sebelumnya\n• Kurangi kafein di fase luteal akhir\n• Catat jika disertai gejala lain (mual, sensitif cahaya)\n\nJika frekuensinya meningkat, pertimbangkan untuk dibawa ke konsultasi dokter ya. Aku bisa buatkan ringkasan gejalamu. 📋";
      } else if (text.includes("PCOS") || text.includes("Jelaskan")) {
        type = "education";
        replyText = "Tentang PCOS";
      } else if (text.includes("ringkasan")) {
        replyText = "Tentu! Aku sedang menyiapkan Laporan Klinik dari data 3 bulanmu...\n\n✅ Laporan siap! Buka di tab Laporan →";
      } else {
        replyText = "Aku mencatatnya. Berdasarkan pola siklusmu, hal ini wajar terjadi di fase folikular. Ada lagi yang ingin kamu ketahui?";
      }
      
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: "ai", text: replyText, type }]);
    }, 1500);
  };

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A]">
        {/* Top Bar */}
        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md pt-14 pb-4 px-4 flex items-center justify-between border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
              <ChevronLeft className="w-6 h-6 text-[#1A1A1A] dark:text-white" />
            </button>
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white leading-tight">Ovella AI</h1>
              <p className="text-[11px] text-green-500 font-medium">Online</p>
            </div>
          </div>
          <button className="p-2 rounded-full text-[#A8A8A8]">
            <Info className="w-5 h-5" />
          </button>
        </div>

        {/* Insight Banner */}
        <AnimatePresence>
          {showInsight && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 shadow-sm"
            >
              <div className="p-3 mx-4 my-3 bg-gradient-to-r from-[#FF6B9D]/10 to-[#C4A8F5]/10 rounded-xl border border-[#FF6B9D]/20 flex items-start gap-3 cursor-pointer" onClick={() => handleSend("Hari ini energimu diprediksi tinggi...")}>
                <div className="text-[16px] mt-0.5">🌸</div>
                <div>
                  <h3 className="text-[13px] font-bold text-[#1A1A1A] dark:text-white">Fase Folikular hari ke-7</h3>
                  <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-400 mt-0.5 leading-snug">Ovella punya insight untukmu. Ketuk untuk melihat.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => {
            const isAI = msg.sender === "ai";
            
            if (msg.type === "education") {
              return (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={msg.id} className="w-full">
                  <div className="bg-white dark:bg-zinc-900 rounded-[20px] rounded-tl-sm border-l-4 border-l-[#FF6B9D] shadow-sm p-4 text-[#1A1A1A] dark:text-white border border-gray-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2 mb-3 border-b border-gray-100 dark:border-zinc-800 pb-3">
                      <BookOpen className="w-5 h-5 text-[#C4A8F5]" />
                      <h3 className="font-bold text-[15px]">📚 Tentang PCOS</h3>
                    </div>
                    <div className="space-y-3 text-[13px]">
                      <div>
                        <h4 className="font-semibold mb-1">Apa itu PCOS</h4>
                        <p className="text-[#6B6B6B] dark:text-zinc-400">Sindrom ovarium polikistik adalah gangguan hormon yang terjadi pada wanita di usia subur...</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Gejala Umum</h4>
                        <p className="text-[#6B6B6B] dark:text-zinc-400">Siklus tidak teratur, jerawat, pertumbuhan rambut berlebih.</p>
                      </div>
                      <div className="bg-[#FAFAFA] dark:bg-zinc-800 p-2 rounded-lg text-[11px] text-[#A8A8A8]">
                        Berdasarkan panduan HIFERI 2023
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                key={msg.id} 
                className={`flex flex-col ${isAI ? "items-start" : "items-end"}`}
              >
                <div 
                  className={`max-w-[85%] p-3.5 text-[14px] leading-relaxed whitespace-pre-wrap shadow-sm
                    ${isAI 
                      ? "bg-white dark:bg-zinc-900 rounded-[20px] rounded-tl-sm text-[#1A1A1A] dark:text-white border-l-[3px] border-l-[#C4A8F5] border border-gray-100 dark:border-zinc-800" 
                      : "bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] rounded-[20px] rounded-tr-sm"
                    }`}
                >
                  {msg.text}
                </div>
                
                {isAI && msg.text.includes("dibawa ke konsultasi dokter") && (
                  <div className="flex gap-2 mt-2 ml-1 overflow-x-auto w-full no-scrollbar pb-1">
                    <button className="whitespace-nowrap px-3 py-1.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full text-[12px] font-medium text-[#FF6B9D] shadow-sm active:scale-95 transition-transform" onClick={() => navigate("/doctor-report-gen")}>
                      Buat ringkasan dokter →
                    </button>
                    <button className="whitespace-nowrap px-3 py-1.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full text-[12px] font-medium text-[#1A1A1A] dark:text-white shadow-sm active:scale-95 transition-transform" onClick={() => navigate("/app/reports")}>
                      Lihat laporan →
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
          
          {isTyping && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start">
              <div className="bg-white dark:bg-zinc-900 rounded-[20px] rounded-tl-sm p-4 border-l-[3px] border-l-[#FF6B9D] border border-gray-100 dark:border-zinc-800 shadow-sm flex items-center gap-1.5">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-[#FF6B9D]"></motion.div>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[#C4A8F5]"></motion.div>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[#FF2D78]"></motion.div>
              </div>
            </motion.div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick Replies (Only show if messages is 1 and not typing) */}
        {messages.length === 1 && !isTyping && (
          <div className="flex gap-2 px-4 pb-3 overflow-x-auto no-scrollbar">
            {[
              "Akhir-akhir ini aku sering sakit kepala 2 hari sebelum menstruasi. Normal nggak ya?",
              "Jelaskan kondisi PCOS itu gimana?",
              "Kenapa aku lelah minggu ini?",
              "Kapan ovulasiku?"
            ].map((q, i) => (
              <button 
                key={i} 
                onClick={() => handleSend(q)}
                className="whitespace-nowrap px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full text-[13px] font-medium text-[#1A1A1A] dark:text-white shadow-sm active:scale-95 transition-transform"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <div className="p-4 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 pb-8">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend(input)}
              placeholder="Tanyakan Ovella AI..."
              className="flex-1 bg-[#FAFAFA] dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-3 text-[14px] text-[#1A1A1A] dark:text-white outline-none focus:border-[#C4A8F5] transition-colors placeholder-[#A8A8A8]"
            />
            <button 
              onClick={() => handleSend(input)}
              disabled={!input.trim()}
              className="w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(196,168,245,0.4)] disabled:opacity-50 disabled:shadow-none active:scale-95 transition-all"
            >
              <Send className="w-5 h-5 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}