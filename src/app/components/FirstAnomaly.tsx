import { useState } from "react";
import { Sparkles, AlertTriangle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";

export function AnomalyDetection({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [view, setView] = useState<"milestone" | "detail">("milestone");

  return (
    <AnimatePresence>
      <div className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
        
        {view === "milestone" && (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white dark:bg-zinc-900 w-full max-w-sm rounded-[32px] p-8 shadow-2xl relative text-center">
            
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="w-24 h-24 absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] rounded-full blur-2xl opacity-40"></motion.div>
            
            <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg border border-gray-100 dark:border-zinc-800">
              <Sparkles className="w-8 h-8 text-[#FF6B9D]" />
            </div>

            <h1 className="text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] mb-2 leading-tight">Ovella Mendeteksi<br/>Pola Pertama 🔍</h1>
            <p className="text-[14px] text-[#6B6B6B] dark:text-zinc-400 mb-8">Setelah 2 siklus penuh, model AI-mu mulai bekerja.</p>

            <div className="bg-[#F5F3FF] dark:bg-[#C4A8F5]/10 rounded-[16px] p-5 text-left border-2 border-transparent bg-clip-border relative mb-6" style={{ borderColor: 'rgba(196,168,245,0.3)' }}>
              <p className="text-[12px] font-bold text-[#A8A8A8] uppercase tracking-wider mb-2">Pola yang Baru Terdeteksi:</p>
              <div className="flex items-start gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-[#FBBF24] shrink-0 mt-0.5" />
                <p className="text-[14px] font-bold text-[#1A1A1A] dark:text-white leading-snug">Fase lutealmu tampak 1–2 hari lebih pendek dari normal (11 hari)</p>
              </div>
              <p className="text-[11px] text-[#A8A8A8] mb-3">Muncul di 2 dari 2 siklus · Perlu konfirmasi 1–2 siklus lagi</p>
              <p className="text-[11px] text-[#9B9BB0] italic leading-relaxed">Ini bukan diagnosis — ini observasi AI dari datamu.</p>
            </div>

            <div className="space-y-3">
              <button onClick={() => setView("detail")} className="w-full py-3.5 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full font-bold text-[14px] shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2">
                Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={onClose} className="w-full py-2 text-[13px] font-bold text-[#A8A8A8] hover:text-[#1A1A1A] dark:hover:text-white transition-colors">
                Nanti Saja
              </button>
            </div>
          </motion.div>
        )}

        {view === "detail" && (
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 rounded-t-[32px] p-6 shadow-2xl flex flex-col max-h-[85vh] overflow-y-auto">
            <div className="w-12 h-1.5 bg-gray-200 dark:bg-zinc-800 rounded-full mx-auto mb-6"></div>
            
            <h2 className="text-[20px] font-bold text-[#1A1A1A] dark:text-white mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#FBBF24]" /> Anomali: Luteal Phase Pendek
            </h2>
            
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#FF6B9D]/10 to-[#C4A8F5]/10 border border-[#FF6B9D]/20 rounded-full text-[11px] font-bold text-[#FF6B9D] mb-6 self-start">
              Konfiden: Sedang (2 siklus data)
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-2">Apa artinya ini?</h3>
                <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed">
                  Fase luteal normal berlangsung 12–16 hari. Fase lutealmu yang berulang di 11 hari bisa berkaitan dengan berbagai faktor hormonal, termasuk kadar progesteron atau LH.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-2">Apakah ini berbahaya?</h3>
                <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed">
                  Fase luteal pendek bisa memengaruhi kesuburan dan regularitas siklus, namun banyak perempuan hidup normal tanpa masalah. Pemeriksaan hormonal oleh dokter dapat memberikan kejelasan.
                </p>
              </div>
            </div>

            <div className="bg-[#FAFAFA] dark:bg-zinc-800 rounded-[16px] p-4 mb-6">
              <p className="text-[13px] font-medium text-[#1A1A1A] dark:text-white">Tambahkan ke Laporan Klinik sebagai pertanyaan untuk dokter</p>
            </div>

            <div className="space-y-3 mt-auto">
              <button onClick={() => { navigate("/doctor-report-gen"); onClose(); }} className="w-full py-4 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full font-bold text-[15px] shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform">
                Tambahkan Sekarang
              </button>
              <button onClick={onClose} className="w-full py-3 text-[14px] font-bold text-[#A8A8A8] hover:text-[#1A1A1A] dark:hover:text-white transition-colors">
                Pantau dulu di siklus berikutnya
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </AnimatePresence>
  );
}