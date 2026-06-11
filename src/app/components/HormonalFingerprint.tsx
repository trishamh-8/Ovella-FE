import { useState } from "react";
import { ChevronLeft, Info, RefreshCw, X, ChevronRight, Activity, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { motion, AnimatePresence } from "motion/react";

const radarData = [
  { subject: 'Akurasi Prediksi', A: 82, fullMark: 100 },
  { subject: 'Konsistensi Siklus', A: 74, fullMark: 100 },
  { subject: 'Keseimbangan Hormon', A: 68, fullMark: 100 },
  { subject: 'Pola Mood', A: 79, fullMark: 100 },
  { subject: 'Kualitas Tidur', A: 71, fullMark: 100 },
  { subject: 'Respons Gejala', A: 65, fullMark: 100 },
];

export function HormonalFingerprint() {
  const navigate = useNavigate();
  const [view, setView] = useState<"overview" | "insight" | "progress">("overview");

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-y-auto pb-20">
        
        {/* Navigation */}
        <div className="pt-14 pb-4 px-6 flex items-center gap-4 bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] text-white sticky top-0 z-20">
          <button onClick={() => view === "overview" ? navigate(-1) : setView("overview")} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ChevronLeft size={24} />
          </button>
          <div>
            <h1 className="text-[17px] font-bold">
              {view === "overview" ? "Hormonal Fingerprint™" : view === "insight" ? "Pola Jerawat Hormonal" : "Akurasi Model"}
            </h1>
            <p className="text-[12px] opacity-90">
              {view === "overview" ? "Model AI khusus untukmu" : "Detail Analisis Ovella"}
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "overview" && (
            <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] rounded-b-[40px] px-6 pb-12 shadow-md">
                <div className="h-[300px] w-full mt-4 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-full p-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                      <PolarGrid stroke="rgba(255,255,255,0.4)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: 'white', fontSize: 10, fontWeight: 600 }} />
                      <Radar name="Model" dataKey="A" stroke="#FFF" strokeWidth={2} fill="#FFF" fillOpacity={0.3} isAnimationActive={false} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-center text-white/80 text-[12px] mt-4 font-medium">Terakhir diperbarui: 2 hari lalu • Data dari 4 siklus</p>
              </div>

              <div className="px-6 mt-8 space-y-6">
                <div>
                  <h2 className="text-[16px] font-bold text-[#1A1A1A] dark:text-white mb-4">Insight Terbaru</h2>
                  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
                    
                    <div onClick={() => setView("insight")} className="shrink-0 w-[240px] bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800 cursor-pointer active:scale-95 transition-transform">
                      <div className="w-8 h-8 rounded-full bg-[#FF2D78]/10 flex items-center justify-center mb-3">
                        <Activity className="w-4 h-4 text-[#FF2D78]" />
                      </div>
                      <p className="text-[14px] font-bold text-[#1A1A1A] dark:text-white mb-2 leading-tight">Jerawat 73% lebih sering muncul di hari ke-24–26</p>
                      <span className="text-[12px] text-[#FF6B9D] font-semibold flex items-center gap-1">Lihat Pola <ChevronRight className="w-3 h-3" /></span>
                    </div>

                    <div className="shrink-0 w-[240px] bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
                      <div className="w-8 h-8 rounded-full bg-[#C4A8F5]/10 flex items-center justify-center mb-3">
                        <TrendingUp className="w-4 h-4 text-[#C4A8F5]" />
                      </div>
                      <p className="text-[14px] font-bold text-[#1A1A1A] dark:text-white mb-2 leading-tight">Fase lutealmu 1–2 hari lebih pendek dari rata-rata</p>
                    </div>

                  </div>
                </div>

                <div onClick={() => setView("progress")} className="bg-white dark:bg-zinc-900 rounded-[20px] p-4 shadow-sm border border-gray-100 dark:border-zinc-800 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B9D]/20 to-[#C4A8F5]/20 flex items-center justify-center">
                      <Info className="w-5 h-5 text-[#FF6B9D]" />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Bagaimana AI membangun model ini?</h3>
                      <p className="text-[12px] text-[#6B6B6B]">Lihat akurasi dari 4 siklusmu</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#A8A8A8]" />
                </div>

                <button className="w-full py-4 bg-transparent border-2 border-gray-200 dark:border-zinc-800 rounded-full text-[#1A1A1A] dark:text-white font-bold flex items-center justify-center gap-2">
                  <RefreshCw className="w-4 h-4" /> Perbarui Model
                </button>
              </div>
            </motion.div>
          )}

          {view === "insight" && (
            <motion.div key="insight" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6">
              <div className="bg-white dark:bg-zinc-900 rounded-[24px] p-6 shadow-sm border-l-[4px] border-l-[#FF2D78] border border-gray-100 dark:border-zinc-800 mb-6">
                <div className="h-[120px] w-full mb-6 flex items-end gap-2 border-b border-gray-100 dark:border-zinc-800 pb-2">
                  {/* Mock Timeline Chart */}
                  {[10, 20, 15, 60, 80, 90, 75, 30, 10].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#FF2D78]/20 rounded-t-sm relative" style={{ height: `${h}%` }}>
                      {h > 70 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF2D78]"></div>}
                    </div>
                  ))}
                </div>
                <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-2">Analisis Ovella AI</h3>
                <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed">
                  Ovella mendeteksi korelasi 73% antara jerawat kamu dan fase luteal hari ke-24 hingga ke-26. Ini konsisten dengan pola hiperandrogenisme ringan yang umum terjadi pada perempuan dengan siklus 28–30 hari.
                </p>
              </div>

              <h3 className="text-[16px] font-bold text-[#1A1A1A] dark:text-white mb-4">Rekomendasi</h3>
              <div className="space-y-3 mb-8">
                <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-4 shadow-sm border border-gray-100 dark:border-zinc-800">
                  <h4 className="text-[14px] font-bold mb-1">🥗 Kurangi Gula di Fase Luteal</h4>
                  <p className="text-[12px] text-[#6B6B6B]">Membantu menekan produksi sebum berlebih.</p>
                </div>
                <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-4 shadow-sm border border-gray-100 dark:border-zinc-800">
                  <h4 className="text-[14px] font-bold mb-1">🧴 Skincare BHA/Salicylic Acid</h4>
                  <p className="text-[12px] text-[#6B6B6B]">Mulai gunakan di hari ke-22 sebagai pencegahan.</p>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] rounded-full text-white font-bold shadow-lg active:scale-95 transition-transform" onClick={() => navigate("/doctor-report-gen")}>
                Tambahkan ke Laporan Dokter
              </button>
            </motion.div>
          )}

          {view === "progress" && (
            <motion.div key="progress" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6">
              <h2 className="text-[20px] font-bold text-[#1A1A1A] dark:text-white mb-2 leading-tight">Model Ovella-mu terus belajar</h2>
              <p className="text-[14px] text-[#6B6B6B] dark:text-zinc-400 mb-8">Semakin banyak data yang kamu catat, prediksi model semakin akurat untuk tubuhmu.</p>

              <div className="space-y-6 mb-10">
                {[
                  { name: "Siklus 1", desc: "Data terbatas", pct: 30, color: "bg-gray-300 dark:bg-zinc-700" },
                  { name: "Siklus 2", desc: "Mulai mengenali pola", pct: 55, color: "bg-[#FFB4D1]" },
                  { name: "Siklus 3", desc: "Prediksi meningkat", pct: 72, color: "bg-gradient-to-r from-[#FFB4D1] to-[#FF6B9D]" },
                  { name: "Siklus 4 (Sekarang)", desc: "Model stabil & akurat", pct: 82, color: "bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <h4 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">{s.name}</h4>
                        <p className="text-[12px] text-[#A8A8A8]">{s.desc}</p>
                      </div>
                      <span className="text-[14px] font-bold">{s.pct}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#FAFAFA] dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-[20px] p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-[#FF2D78]/10 flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-6 h-6 text-[#FF2D78]" />
                </div>
                <h3 className="text-[15px] font-bold mb-1">Catat Gejala Hari Ini</h3>
                <p className="text-[12px] text-[#6B6B6B] mb-4">Bantu tingkatkan akurasi modelmu hingga 90% bulan ini.</p>
                <button className="px-6 py-2 bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] rounded-full text-[13px] font-bold" onClick={() => navigate("/app")}>
                  Catat Sekarang
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MobileContainer>
  );
}