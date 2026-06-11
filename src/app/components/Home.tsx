import { Bell, Plus, Sparkles, ChevronRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { DailyLogEntry } from "./DailyLogEntry";
import { HeaderActions } from "./HeaderActions";

export function Home() {
  const navigate = useNavigate();
  const [isLogOpen, setIsLogOpen] = useState(false);

  return (
    <div className="flex flex-col p-6 space-y-8">
      <header className="flex justify-between items-center pt-2">
        <h1 className="text-xl font-bold text-[#1A1A1A] dark:text-white">Selamat pagi, Sarah 👋</h1>
        <HeaderActions />
      </header>

      <div className="bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] rounded-[24px] p-6 text-white shadow-[0_4px_20px_rgba(196,168,245,0.25)] relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md mb-4 text-sm font-medium">
          🌸 Fase Folikular — Hari ke-7
        </div>
        <h2 className="text-2xl font-bold mb-2">Hormonal Weather: Energi Tinggi</h2>
        <p className="text-[15px] opacity-90 leading-relaxed mb-6">
          Estrogen sedang naik. Waktu terbaik untuk produktivitas dan olahraga intensitas tinggi.
        </p>

        <div className="flex justify-between items-center pt-4 border-t border-white/20">
          {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((day, i) => (
            <div key={day} className="flex flex-col items-center gap-2">
              <span className="text-[11px] opacity-80">{day}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${i === 2 ? 'bg-white text-[#FF6B9D] font-bold' : 'bg-white/10'}`}>
                {i < 3 ? '⚡️' : i === 3 ? '🌸' : '✨'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white">Catat Cepat</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {["Catat Gejala", "Suasana Hati", "Kulit Hari Ini", "Tidur"].map((item) => (
            <button key={item} onClick={() => setIsLogOpen(true)} className="whitespace-nowrap flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[100px] text-[14px] font-medium text-[#1A1A1A] dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
              <Plus className="w-4 h-4 text-[#FF6B9D]" />
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[20px] shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden flex cursor-pointer" onClick={() => navigate("/app/ai")}>
        <div className="w-1.5 bg-gradient-to-b from-[#FF6B9D] to-[#C4A8F5]" />
        <div className="p-4 flex gap-4 items-start flex-1">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-1">Insight Hari Ini</h4>
            <p className="text-[14px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed mb-2">
              Ovella mendeteksi pola luteal lebih pendek bulan lalu. Cek insight lengkap
            </p>
            <span className="text-[#FF2D78] text-[13px] font-semibold flex items-center">
              Lihat detail <ChevronRight className="w-4 h-4 ml-0.5" />
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white">Mendatang</h3>
        <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[15px] font-semibold text-[#1A1A1A] dark:text-white">3 hari menuju ovulasi</span>
            <span className="text-[13px] text-[#FF2D78] bg-[#FF2D78]/10 px-2.5 py-1 rounded-full font-medium">Masa Subur</span>
          </div>
          <div className="h-2.5 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden flex">
            <div className="h-full bg-gray-200 dark:bg-zinc-700 w-1/4" />
            <div className="h-full bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] w-2/4" />
            <div className="h-full bg-gray-200 dark:bg-zinc-700 w-1/4" />
          </div>
        </div>
      </div>

      <DailyLogEntry isOpen={isLogOpen} onClose={() => setIsLogOpen(false)} selectedDate="Sabtu, 6 Juni 2026" />
    </div>
  );
}
