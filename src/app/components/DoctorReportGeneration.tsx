import { useState } from "react";
import { ChevronLeft, FileText, CheckCircle2, ChevronRight, Activity } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import { motion, AnimatePresence } from "motion/react";

export function DoctorReportGeneration() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const startGeneration = () => {
    setLoading(true);
    let s = 0;
    const interval = setInterval(() => {
      s += 1;
      setStep(s);
      if (s > 4) {
        clearInterval(interval);
        setTimeout(() => {
          navigate("/doctor-report");
        }, 500);
      }
    }, 1500);
  };

  const steps = [
    "Mengumpulkan data siklus (4 siklus)",
    "Menganalisis pola gejala",
    "Mendeteksi anomali hormonal",
    "Menyusun rekomendasi pertanyaan...",
    "Memformat dokumen PDF"
  ];

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden">
        <div className="pt-14 pb-4 px-6 flex items-center justify-between sticky top-0 z-10">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800" disabled={loading}>
            <ChevronLeft size={24} className="text-[#1A1A1A] dark:text-white" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!loading ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 px-6 pb-6 overflow-y-auto">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B9D]/20 to-[#C4A8F5]/20 flex items-center justify-center relative">
                  <FileText className="w-10 h-10 text-[#FF6B9D]" />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center shadow-md">
                    <Activity className="w-4 h-4 text-[#C4A8F5]" />
                  </div>
                </div>
              </div>

              <h1 className="text-[24px] font-bold text-[#1A1A1A] dark:text-white text-center mb-2">Laporan Klinik Ovella</h1>
              <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400 text-center mb-8 px-4 leading-relaxed">
                AI Ovella akan menyusun ringkasan gejala, pola hormonal, dan anomali yang terdeteksi dari datamu — siap dibawa ke konsultasi.
              </p>

              <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800 space-y-6">
                <div>
                  <label className="text-[12px] font-bold text-[#1A1A1A] dark:text-white mb-2 block">Periode Data</label>
                  <div className="w-full bg-[#FAFAFA] dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-[14px] flex justify-between items-center text-[#1A1A1A] dark:text-white">
                    1 Mar – 6 Jun 2026
                    <ChevronRight className="w-4 h-4 text-[#A8A8A8]" />
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-bold text-[#1A1A1A] dark:text-white mb-2 block">Tujuan Konsultasi (Opsional)</label>
                  <div className="flex flex-wrap gap-2">
                    {["PCOS check", "Siklus tidak teratur", "Program hamil", "Nyeri haid", "Jerawat hormonal", "Infertilitas"].map((t, i) => (
                      <button key={i} className={`px-3 py-1.5 rounded-full border text-[12px] font-medium transition-colors ${i === 0 || i === 4 ? "bg-[#FF6B9D] border-[#FF6B9D] text-white" : "bg-transparent border-gray-200 dark:border-zinc-700 text-[#6B6B6B] dark:text-zinc-300"}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-bold text-[#1A1A1A] dark:text-white mb-2 block">Nama Dokter / Klinik (Opsional)</label>
                  <input type="text" placeholder="Mis: dr. Sarah, Sp.OG" className="w-full bg-[#FAFAFA] dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-[14px] text-[#1A1A1A] dark:text-white outline-none focus:border-[#C4A8F5]" />
                </div>
              </div>

              <div className="mt-8">
                <button onClick={startGeneration} className="w-full py-4 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full font-bold text-[15px] shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform flex justify-center items-center gap-2">
                  Buat Laporan <FileText className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
              <div className="relative mb-12">
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] rounded-full blur-xl"></motion.div>
                <div className="w-24 h-24 rounded-full bg-white dark:bg-zinc-900 relative z-10 flex items-center justify-center shadow-lg">
                  <span className="text-[40px]">🌸</span>
                </div>
              </div>

              <div className="w-full max-w-sm space-y-4">
                {steps.map((text, i) => {
                  const isCompleted = step > i;
                  const isActive = step === i;
                  const isPending = step < i;

                  return (
                    <div key={i} className={`flex items-center gap-3 transition-opacity duration-300 ${isPending ? "opacity-30" : "opacity-100"}`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-[#4ADE80] shrink-0" />
                      ) : isActive ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 rounded-full border-2 border-gray-200 border-t-[#C4A8F5] shrink-0" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-zinc-700 shrink-0" />
                      )}
                      <p className={`text-[13px] ${isActive ? "font-bold text-[#1A1A1A] dark:text-white" : "font-medium text-[#6B6B6B] dark:text-zinc-400"}`}>
                        {text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="text-[12px] text-[#A8A8A8] mt-12 font-medium">Estimasi waktu: ~10 detik</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MobileContainer>
  );
}