import { Check, Copy, FileText, MessageCircle, Home } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import { motion } from "motion/react";

export function ReportSent() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#0A0A0A] px-6 py-12 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF6B9D]/10 to-[#C4A8F5]/10 rounded-full blur-3xl translate-x-20 -translate-y-20"></div>

        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.5 }} className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] flex items-center justify-center text-white shadow-xl mb-6 relative z-10">
          <Check className="w-10 h-10" />
        </motion.div>
        
        <h1 className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] mb-8 text-center leading-tight relative z-10">Laporan Berhasil Dikirim! 📋</h1>

        <div className="w-full max-w-sm bg-white dark:bg-zinc-900 rounded-[24px] p-6 shadow-[0_8px_30px_rgba(196,168,245,0.15)] border border-gray-100 dark:border-zinc-800 mb-8 relative z-10">
          <h3 className="text-[16px] font-bold text-[#1A1A1A] dark:text-white mb-2">Laporan Klinik Juni 2026</h3>
          <p className="text-[14px] text-[#1A1A1A] dark:text-white mb-1">Dikirim ke: Dr. Anita Wijaya</p>
          <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-400 mb-1">Melalui: WhatsApp</p>
          <p className="text-[11px] text-[#A8A8A8] mb-4">Waktu: Sabtu, 6 Juni 2026 · 10:45</p>

          <div className="h-px bg-gray-100 dark:bg-zinc-800 w-full my-4"></div>

          <p className="text-[12px] text-[#1A1A1A] dark:text-white mb-1">Tautan laporan aktif selama 7 hari.</p>
          <p className="text-[12px] text-[#FF2D78] font-medium mb-4">Kadaluarsa: 13 Juni 2026</p>

          <button className="px-4 py-2 border-2 border-gray-200 dark:border-zinc-700 rounded-full text-[13px] font-bold text-[#1A1A1A] dark:text-white flex items-center gap-2 mx-auto active:scale-95 transition-transform">
            <Copy className="w-4 h-4" /> Salin Tautan
          </button>
        </div>

        <div className="w-full max-w-sm relative z-10">
          <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-4">Apa selanjutnya?</h3>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <button onClick={() => navigate("/doctor-report-gen")} className="shrink-0 flex items-center gap-2 px-4 py-3 bg-[#FAFAFA] dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl text-[13px] font-bold active:scale-95 transition-transform">
              <FileText className="w-4 h-4 text-[#FF6B9D]" /> Buat Laporan Baru
            </button>
            <button onClick={() => navigate("/ai-chat")} className="shrink-0 flex items-center gap-2 px-4 py-3 bg-[#FAFAFA] dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl text-[13px] font-bold active:scale-95 transition-transform">
              <MessageCircle className="w-4 h-4 text-[#C4A8F5]" /> Tanya Ovella AI
            </button>
            <button onClick={() => navigate("/app")} className="shrink-0 flex items-center gap-2 px-4 py-3 bg-[#FAFAFA] dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl text-[13px] font-bold active:scale-95 transition-transform">
              <Home className="w-4 h-4 text-[#A8A8A8]" /> Ke Beranda
            </button>
          </div>
        </div>

      </div>
    </MobileContainer>
  );
}