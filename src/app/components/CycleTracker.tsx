import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { DailyLogEntry } from "./DailyLogEntry";
import { HeaderActions } from "./HeaderActions";

const daysOfWeek = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

// Mock month data starting on a Wednesday (index 2)
const monthDays = Array.from({ length: 30 }, (_, i) => i + 1);
const offset = 2; // Wednesday
const calendarGrid = Array(offset).fill(null).concat(monthDays);

function getDayStyle(day: number | null) {
  if (!day) return "opacity-0 pointer-events-none";
  if (day >= 1 && day <= 5) return "bg-[#FF2D78] text-white"; // Menstruation
  if (day >= 6 && day <= 12) return "bg-[#FF6B9D]/20 text-[#1A1A1A] dark:text-white"; // Follicular
  if (day === 14) return "bg-gradient-to-tr from-[#FF6B9D] to-[#C4A8F5] text-white shadow-md relative"; // Ovulation
  if (day >= 15 && day <= 28) return "bg-[#E5D4FF]/50 text-[#1A1A1A] dark:text-white"; // Luteal
  if (day >= 29) return "border border-dashed border-[#FF2D78]/50 text-[#6B6B6B] dark:text-zinc-400"; // Predicted
  return "text-[#1A1A1A] dark:text-white";
}

export function CycleTracker() {
  const [selectedDay, setSelectedDay] = useState(6);
  const [isLogOpen, setIsLogOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col p-6 space-y-6 pb-24">
        <header className="flex justify-between items-center pt-2">
          <h1 className="text-xl font-bold text-[#1A1A1A] dark:text-white">Siklusmu</h1>
          <HeaderActions />
        </header>

        <div className="bg-white dark:bg-zinc-900 rounded-[24px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
          <div className="flex justify-between items-center mb-6">
            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full text-[#1A1A1A] dark:text-white"><ChevronLeft size={20}/></button>
            <h2 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white">Juni 2026</h2>
            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full text-[#1A1A1A] dark:text-white"><ChevronRight size={20}/></button>
          </div>

          <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center mb-2">
            {daysOfWeek.map((d) => (
              <div key={d} className="text-[12px] font-medium text-[#A8A8A8]">{d}</div>
            ))}
            
            {calendarGrid.map((day, i) => (
              <button
                key={i}
                onClick={() => day && setSelectedDay(day)}
                className={`
                  aspect-square rounded-full flex items-center justify-center text-[15px] font-medium transition-all
                  ${getDayStyle(day)}
                  ${selectedDay === day ? 'ring-2 ring-offset-2 ring-[#C4A8F5] dark:ring-offset-zinc-900' : ''}
                `}
              >
                {day}
                {day === 14 && <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#FF6B9D] rounded-full" /></div>}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#6B6B6B] dark:text-zinc-400">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF2D78]" /> Menstruasi
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#6B6B6B] dark:text-zinc-400">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B9D]/20" /> Folikular
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#6B6B6B] dark:text-zinc-400">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]" /> Ovulasi
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#6B6B6B] dark:text-zinc-400">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E5D4FF]/50" /> Luteal
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#FF6B9D]/10 to-[#C4A8F5]/10 rounded-[20px] p-5 border border-[#FF6B9D]/20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-800 text-[#FF6B9D] text-[13px] font-bold mb-3 shadow-sm">
            🌸 Fase Folikular
          </div>
          <h3 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white mb-2">Membangun Energi</h3>
          <p className="text-[14px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed">
            Hormon estrogen sedang meningkat. Kamu mungkin merasa lebih energik, optimis, dan kulit terlihat lebih cerah.
          </p>
        </div>

        <button 
          onClick={() => setIsLogOpen(true)}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white font-semibold text-[17px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform"
        >
          <Plus className="w-5 h-5" /> Catat Hari Ini
        </button>
      </div>

      <DailyLogEntry isOpen={isLogOpen} onClose={() => setIsLogOpen(false)} selectedDate={`Sabtu, ${selectedDay} Juni 2026`} />
    </>
  );
}
