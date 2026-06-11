import { useState, useEffect } from "react";
import { ChevronLeft, Info, Users, ArrowRight, ShieldCheck, CheckCircle2, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import { motion, AnimatePresence } from "motion/react";
import * as Popover from '@radix-ui/react-popover';

const matches = [
  { id: "#A2891", match: 94, cycle: 28, condition: "PCOS", loc: "Jakarta", tip: "Inositol supplement sangat membantu siklus aku", detail: ["Diet rendah karbohidrat", "Suplemen Inositol & Vitamin D", "Olahraga beban 3x seminggu"] },
  { id: "#B4423", match: 87, cycle: 30, condition: "Akne hormonal", loc: "Bandung", tip: "Kurangi gula di fase luteal, perbedaannya besar banget", detail: ["Spearmint tea di pagi hari", "Skincare BHA di minggu ke-3", "Kurangi dairy products"] },
  { id: "#C7751", match: 81, cycle: 29, condition: "Normal", loc: "Surabaya", tip: "Tidur 8 jam sangat pengaruh ke kram haid aku", detail: ["Yoga ringan sebelum haid", "Magnesium di malam hari", "Heat pad 2 hari sebelum"] },
];

export function TwinMatch() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [matchPct, setMatchPct] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (loading) {
      let current = 0;
      const interval = setInterval(() => {
        current += 5;
        if (current >= 100) {
          clearInterval(interval);
          setLoading(false);
        } else {
          setMatchPct(current);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-y-auto pb-20">
        
        <div className="pt-14 pb-4 px-6 flex items-center justify-between bg-white dark:bg-zinc-900 sticky top-0 z-10 border-b border-gray-100 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
              <ChevronLeft size={24} className="text-[#1A1A1A] dark:text-white" />
            </button>
            <div>
              <h1 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white flex items-center gap-2">
                Hormonal Twin™
              </h1>
              <p className="text-[12px] text-[#6B6B6B]">Temukan profil serupa denganmu</p>
            </div>
          </div>
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="p-2 rounded-full text-[#A8A8A8] hover:bg-gray-100">
                <Info className="w-5 h-5" />
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="z-50 bg-[#1A1A1A] text-white p-3 rounded-lg text-[12px] w-[220px] shadow-xl" sideOffset={5}>
                Pencocokan menggunakan AI berdasarkan pola siklus dan gejala yang tercatat.
                <Popover.Arrow className="fill-[#1A1A1A]" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>

        <div className="p-6 space-y-6">
          
          <div className="bg-white dark:bg-zinc-900 rounded-[24px] p-5 shadow-[0_8px_30px_rgba(255,107,157,0.1)] border-2 border-[#FF6B9D]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6B9D]/10 to-[#C4A8F5]/10 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] p-0.5">
                <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900">
                  <span className="text-[20px]">🌸</span>
                </div>
              </div>
              <div>
                <h2 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white">Profil Kamu</h2>
                <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-400">PCOS Ringan • Siklus 29 Hari</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 relative z-10">
              <div className="bg-[#FAFAFA] dark:bg-zinc-800 rounded-lg p-2 text-center">
                <p className="text-[10px] text-[#A8A8A8] uppercase font-bold tracking-wider mb-0.5">Gejala Utama</p>
                <p className="text-[12px] font-semibold">Jerawat</p>
              </div>
              <div className="bg-[#FAFAFA] dark:bg-zinc-800 rounded-lg p-2 text-center">
                <p className="text-[10px] text-[#A8A8A8] uppercase font-bold tracking-wider mb-0.5">Luteal</p>
                <p className="text-[12px] font-semibold">12 Hari</p>
              </div>
              <div className="bg-[#FAFAFA] dark:bg-zinc-800 rounded-lg p-2 text-center">
                <p className="text-[10px] text-[#A8A8A8] uppercase font-bold tracking-wider mb-0.5">Tipe</p>
                <p className="text-[12px] font-semibold">Androgenik</p>
              </div>
            </div>
          </div>

          <div className="bg-[#E6F4EA] dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 rounded-[12px] p-3 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0" />
            <p className="text-[11px] text-green-800 dark:text-green-300 leading-snug">Semua identitas disamarkan. Hanya pola hormonal yang dicocokkan secara anonim.</p>
          </div>

          {loading ? (
            <div className="bg-white dark:bg-zinc-900 rounded-[24px] p-8 text-center shadow-sm border border-gray-100 dark:border-zinc-800 mt-8">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] mx-auto flex items-center justify-center text-white shadow-lg mb-4">
                <Users className="w-8 h-8" />
              </motion.div>
              <h3 className="text-[16px] font-bold text-[#1A1A1A] dark:text-white mb-2">AI sedang mencocokkan...</h3>
              <div className="w-full h-2 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]" style={{ width: `${matchPct}%` }}></div>
              </div>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <h3 className="text-[16px] font-bold text-[#1A1A1A] dark:text-white flex items-center gap-2">
                Cocok Untukmu <span className="px-2 py-0.5 bg-[#FF6B9D] text-white text-[10px] rounded-full">3 Ditemukan</span>
              </h3>
              
              {matches.map((m) => (
                <div key={m.id} className="bg-white dark:bg-zinc-900 rounded-[20px] shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden transition-all">
                  <div className="p-4 cursor-pointer" onClick={() => setExpandedId(expandedId === m.id ? null : m.id)}>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
                          <Users className="w-5 h-5 text-gray-500 dark:text-zinc-400" />
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Pengguna {m.id}</h4>
                          <p className="text-[11px] text-[#6B6B6B]">Siklus {m.cycle} hari • {m.condition}</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-[#FF6B9D] to-[#FF2D78] text-white px-2.5 py-1 rounded-full text-[11px] font-bold shadow-sm">
                        {m.match}% Cocok
                      </div>
                    </div>
                    
                    <div className="bg-[#FAFAFA] dark:bg-zinc-800/50 rounded-xl p-3 border-l-[3px] border-l-[#C4A8F5]">
                      <p className="text-[12px] text-[#1A1A1A] dark:text-zinc-300 font-medium italic">"{m.tip}"</p>
                    </div>

                    <div className="mt-3 flex justify-center">
                      <ChevronDown className={`w-4 h-4 text-[#A8A8A8] transition-transform ${expandedId === m.id ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === m.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-[#FAFAFA] dark:bg-zinc-800/20">
                          <h5 className="text-[13px] font-bold text-[#1A1A1A] dark:text-white mb-3">Tips yang dipelajari Twin ini:</h5>
                          <ul className="space-y-2 mb-4">
                            {m.detail.map((d, i) => (
                              <li key={i} className="flex items-start gap-2 text-[12px] text-[#6B6B6B] dark:text-zinc-300">
                                <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                                {d}
                              </li>
                            ))}
                          </ul>
                          <div className="p-3 bg-[#FF6B9D]/10 rounded-xl border border-[#FF6B9D]/20 flex items-start gap-2">
                            <span className="text-[14px]">✨</span>
                            <div>
                              <p className="text-[11px] font-bold text-[#FF2D78] mb-0.5">Rekomendasi AI Ovella</p>
                              <p className="text-[11px] text-[#1A1A1A] dark:text-white">Profilmu sangat mirip dengan {m.id}. Mungkin kamu bisa mencoba rutinitas ini. Mau pelajari lebih lanjut?</p>
                              <button onClick={() => navigate("/ai-chat")} className="mt-2 text-[11px] font-bold bg-[#FF2D78] text-white px-3 py-1.5 rounded-full hover:opacity-90 active:scale-95 transition-all inline-flex items-center gap-1">
                                Tanya Ovella AI <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}

        </div>
      </div>
    </MobileContainer>
  );
}