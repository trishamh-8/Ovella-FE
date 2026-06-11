import { ChevronLeft, Download, Send, AlertCircle, CheckCircle2, Copy, Printer, Mail, Share2, X } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function DoctorReportPreview() {
  const navigate = useNavigate();
  const [showShare, setShowShare] = useState(false);

  return (
    <MobileContainer>
      <div className="flex-1 flex flex-col bg-[#F3F4F6] dark:bg-[#0A0A0A]">
        <div className="pt-14 pb-4 px-6 flex items-center gap-4 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-10">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-[#1A1A1A] dark:text-white">
            <ChevronLeft size={24} />
          </button>
          <div>
            <h1 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white">Laporan Klinik Ovella</h1>
            <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-400">1 Mar - 6 Jun 2026</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 pb-32">
          <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
            <h2 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-4 border-b border-gray-100 dark:border-zinc-800 pb-3">Ringkasan Siklus</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] text-[#A8A8A8] uppercase tracking-wider font-semibold">Rata-Rata</span>
                <p className="text-[17px] font-bold text-[#1A1A1A] dark:text-white mt-1">29 Hari</p>
              </div>
              <div>
                <span className="text-[11px] text-[#A8A8A8] uppercase tracking-wider font-semibold">Konsistensi</span>
                <p className="text-[17px] font-bold text-[#1A1A1A] dark:text-white mt-1">78%</p>
              </div>
              <div>
                <span className="text-[11px] text-[#A8A8A8] uppercase tracking-wider font-semibold">Durasi Haid</span>
                <p className="text-[17px] font-bold text-[#1A1A1A] dark:text-white mt-1">5 Hari</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FFF4F6] dark:bg-[#FF2D78]/10 rounded-[16px] p-5 border border-[#FF2D78]/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#FF2D78] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-[14px] font-bold text-[#FF2D78] mb-1">Anomali Terdeteksi AI</h2>
                <p className="text-[13px] text-[#FF2D78]/80 dark:text-[#FF2D78]/70 leading-relaxed">Fase luteal pada siklus bulan Mei tercatat hanya 9 hari (lebih pendek dari normal 12-14 hari), yang bertepatan dengan laporan peningkatan jerawat dan kelelahan.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
            <h2 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-4 border-b border-gray-100 dark:border-zinc-800 pb-3">Gejala Terbanyak</h2>
            <div className="space-y-3">
              {[
                { name: "Kram Perut", freq: 85 },
                { name: "Kelelahan", freq: 65 },
                { name: "Jerawat", freq: 40 },
              ].map(s => (
                <div key={s.name}>
                  <div className="flex justify-between text-[13px] font-medium mb-1.5">
                    <span className="text-[#1A1A1A] dark:text-white">{s.name}</span>
                    <span className="text-[#6B6B6B] dark:text-zinc-400">{s.freq}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]" style={{ width: `${s.freq}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
            <h2 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-4 border-b border-gray-100 dark:border-zinc-800 pb-3">Pertanyaan Disarankan AI</h2>
            <ul className="space-y-3">
              {[
                "Apakah fase luteal pendek bulan lalu bisa disebabkan oleh stres?",
                "Adakah kaitan antara kram hari pertama yang parah dengan pola PCOS saya?",
                "Suplemen apa yang bisa membantu menstabilkan energi di fase luteal?"
              ].map((q, i) => (
                <li key={i} className="flex gap-3 text-[13px] text-[#1A1A1A] dark:text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#C4A8F5] shrink-0 mt-0.5" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute bottom-0 w-full p-6 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 flex gap-3 z-10">
          <button className="flex-1 h-14 rounded-2xl border-2 border-gray-200 dark:border-zinc-700 text-[#1A1A1A] dark:text-white font-semibold text-[15px] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <Download className="w-4 h-4" /> PDF
          </button>
          <button onClick={() => setShowShare(true)} className="flex-[2] h-14 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white font-semibold text-[15px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform">
            <Send className="w-4 h-4" /> Bagikan ke Dokter
          </button>
        </div>

        <AnimatePresence>
          {showShare && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                className="absolute inset-0 bg-black/40 z-40 backdrop-blur-sm"
                onClick={() => setShowShare(false)}
              />
              <motion.div 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 rounded-t-[32px] z-50 p-6 shadow-2xl flex flex-col max-h-[85vh]"
              >
                <div className="w-12 h-1.5 bg-gray-200 dark:bg-zinc-800 rounded-full mx-auto mb-6"></div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-[20px] font-bold text-[#1A1A1A] dark:text-white">Bagikan Laporan</h2>
                  <button onClick={() => setShowShare(false)} className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full">
                    <X className="w-5 h-5 text-[#1A1A1A] dark:text-white" />
                  </button>
                </div>

                <div className="space-y-3 mb-6">
                  <button className="w-full bg-[#FAFAFA] dark:bg-zinc-800/50 p-4 rounded-[16px] flex items-center gap-3 border border-gray-100 dark:border-zinc-700 active:scale-95 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-[20px]">📱</div>
                    <span className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">WhatsApp Dokter</span>
                  </button>
                  <button className="w-full bg-[#FAFAFA] dark:bg-zinc-800/50 p-4 rounded-[16px] flex items-center gap-3 border border-gray-100 dark:border-zinc-700 active:scale-95 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Mail className="w-5 h-5" /></div>
                    <span className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Email</span>
                  </button>
                  <button className="w-full bg-[#FAFAFA] dark:bg-zinc-800/50 p-4 rounded-[16px] flex items-center gap-3 border border-gray-100 dark:border-zinc-700 active:scale-95 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><Copy className="w-5 h-5" /></div>
                    <div className="text-left flex-1">
                      <p className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Salin tautan aman</p>
                      <p className="text-[11px] text-[#A8A8A8]">Kadaluarsa dalam 7 hari</p>
                    </div>
                  </button>
                  <button className="w-full bg-[#FAFAFA] dark:bg-zinc-800/50 p-4 rounded-[16px] flex items-center gap-3 border border-gray-100 dark:border-zinc-700 active:scale-95 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"><Download className="w-5 h-5" /></div>
                    <span className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Unduh PDF</span>
                  </button>
                  <button className="w-full bg-[#FAFAFA] dark:bg-zinc-800/50 p-4 rounded-[16px] flex items-center gap-3 border border-gray-100 dark:border-zinc-700 active:scale-95 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"><Printer className="w-5 h-5" /></div>
                    <span className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Cetak</span>
                  </button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-[12px] flex items-start gap-2 border border-blue-100 dark:border-blue-900/30">
                  <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-blue-800 dark:text-blue-300 leading-relaxed">
                    Laporan ini terenkripsi dan hanya bisa diakses oleh penerima yang kamu pilih.
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </MobileContainer>
  );
}
