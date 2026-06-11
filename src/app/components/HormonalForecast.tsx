import { useState } from "react";
import { ChevronLeft, Info, Zap, Smile, Target, Dumbbell, Coffee, Moon, X, Bell } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import { motion, AnimatePresence } from "motion/react";
import * as Popover from '@radix-ui/react-popover';

const forecastData = [
  { day: 7, phase: "Folikular", mood: "😊", energy: "Mid", fertility: "Low", date: "Minggu, 7 Jun" },
  { day: 8, phase: "Folikular", mood: "💪", energy: "High", fertility: "Low", date: "Senin, 8 Jun" },
  { day: 9, phase: "Folikular", mood: "✨", energy: "High", fertility: "Mid", date: "Selasa, 9 Jun" },
  { day: 10, phase: "Folikular", mood: "🌟", energy: "High", fertility: "Mid", date: "Rabu, 10 Jun" },
  { day: 11, phase: "Ovulasi", mood: "🔥", energy: "High", fertility: "High", date: "Kamis, 11 Jun" },
  { day: 12, phase: "Ovulasi", mood: "🥰", energy: "High", fertility: "High", date: "Jumat, 12 Jun" },
  { day: 13, phase: "Ovulasi", mood: "😌", energy: "Mid", fertility: "High", date: "Sabtu, 13 Jun" },
];

export function HormonalForecast() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const selectedData = selectedDay ? forecastData.find(d => d.day === selectedDay) : forecastData[3];

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden">
        
        {/* Header */}
        <div className="pt-14 pb-4 px-6 flex items-center justify-between bg-white dark:bg-zinc-900 sticky top-0 z-10 border-b border-gray-100 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
              <ChevronLeft size={24} className="text-[#1A1A1A] dark:text-white" />
            </button>
            <div>
              <h1 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white flex items-center gap-2">
                Hormonal Weather 🌤
              </h1>
              <p className="text-[12px] text-[#6B6B6B]">Rabu, 10 Juni 2026</p>
            </div>
          </div>
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="p-2 rounded-full text-[#A8A8A8] hover:bg-gray-100">
                <Info className="w-5 h-5" />
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="z-50 bg-[#1A1A1A] text-white p-3 rounded-lg text-[12px] w-[200px] shadow-xl" sideOffset={5}>
                Prediksi ini dibuat menggunakan model AI Ovella berdasarkan 4 siklus terakhirmu.
                <Popover.Arrow className="fill-[#1A1A1A]" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Hero Today Card */}
          <div className="p-6">
            <div className="bg-gradient-to-br from-[#FF6B9D] to-[#FFB4D1] rounded-[24px] p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
              
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] font-bold mb-4">
                HARI INI • Fase Folikular
              </div>
              
              <div className="flex items-end justify-between mb-6">
                <div>
                  <h2 className="text-[32px] font-bold leading-none mb-1">Cerah</h2>
                  <p className="text-[14px] opacity-90">Energi tinggi & fokus tajam</p>
                </div>
                <div className="text-[48px] leading-none">🌟</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-black/10 rounded-xl p-3 backdrop-blur-sm">
                  <Zap className="w-4 h-4 mb-1" />
                  <p className="text-[11px] opacity-80 mb-0.5">Energi</p>
                  <p className="text-[13px] font-bold">85%</p>
                </div>
                <div className="bg-black/10 rounded-xl p-3 backdrop-blur-sm">
                  <Target className="w-4 h-4 mb-1" />
                  <p className="text-[11px] opacity-80 mb-0.5">Fokus</p>
                  <p className="text-[13px] font-bold">Sangat Baik</p>
                </div>
                <div className="bg-black/10 rounded-xl p-3 backdrop-blur-sm">
                  <div className="w-4 h-4 rounded-full border-2 border-white mb-1"></div>
                  <p className="text-[11px] opacity-80 mb-0.5">Kesuburan</p>
                  <p className="text-[13px] font-bold">Sedang</p>
                </div>
              </div>
            </div>
          </div>

          {/* 7-Day Strip */}
          <div className="px-6 mb-2">
            <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white">Prediksi 7 Hari Kedepan</h3>
          </div>
          
          <div className="flex gap-3 overflow-x-auto no-scrollbar px-6 pb-6">
            {forecastData.map((d, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedDay(d.day)}
                className={`shrink-0 w-[72px] rounded-[20px] p-3 border cursor-pointer flex flex-col items-center gap-2 transition-all active:scale-95
                  ${d.day === 10 
                    ? 'border-[#FF6B9D] bg-[#FF6B9D]/10 dark:bg-[#FF6B9D]/20 shadow-sm' 
                    : 'border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900'}`}
              >
                <span className="text-[12px] font-bold text-[#1A1A1A] dark:text-white">H{d.day}</span>
                <span className="text-[20px]">{d.mood}</span>
                <div className="flex gap-1 mt-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${d.energy === 'High' ? 'bg-[#FF6B9D]' : d.energy === 'Mid' ? 'bg-[#C4A8F5]' : 'bg-gray-300'}`}></div>
                  <div className={`w-1.5 h-1.5 rounded-full ${d.fertility === 'High' ? 'bg-[#4ADE80]' : d.fertility === 'Mid' ? 'bg-[#FBBF24]' : 'bg-gray-300'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Sheet Overlay */}
        <AnimatePresence>
          {selectedDay && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                className="absolute inset-0 bg-black/40 z-40 backdrop-blur-sm"
                onClick={() => setSelectedDay(null)}
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
                  <div>
                    <h2 className="text-[20px] font-bold text-[#1A1A1A] dark:text-white">{selectedData?.date}</h2>
                    <p className="text-[14px] text-[#FF6B9D] font-medium">Fase {selectedData?.phase} Hari ke-{selectedData?.day}</p>
                  </div>
                  <button onClick={() => setSelectedDay(null)} className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full">
                    <X className="w-5 h-5 text-[#1A1A1A] dark:text-white" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6 overflow-y-auto no-scrollbar">
                  <div className="bg-[#FAFAFA] dark:bg-zinc-800 rounded-[16px] p-4 flex items-center gap-3 border border-gray-100 dark:border-zinc-700">
                    <Zap className="w-5 h-5 text-[#FBBF24]" />
                    <div>
                      <p className="text-[11px] text-[#6B6B6B] dark:text-zinc-400">Energi</p>
                      <p className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Tinggi</p>
                    </div>
                  </div>
                  <div className="bg-[#FAFAFA] dark:bg-zinc-800 rounded-[16px] p-4 flex items-center gap-3 border border-gray-100 dark:border-zinc-700">
                    <Smile className="w-5 h-5 text-[#FF6B9D]" />
                    <div>
                      <p className="text-[11px] text-[#6B6B6B] dark:text-zinc-400">Mood</p>
                      <p className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Optimis</p>
                    </div>
                  </div>
                  <div className="bg-[#FAFAFA] dark:bg-zinc-800 rounded-[16px] p-4 flex items-center gap-3 border border-gray-100 dark:border-zinc-700">
                    <Target className="w-5 h-5 text-[#4ADE80]" />
                    <div>
                      <p className="text-[11px] text-[#6B6B6B] dark:text-zinc-400">Fokus</p>
                      <p className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Sangat Baik</p>
                    </div>
                  </div>
                  <div className="bg-[#FAFAFA] dark:bg-zinc-800 rounded-[16px] p-4 flex items-center gap-3 border border-gray-100 dark:border-zinc-700">
                    <Dumbbell className="w-5 h-5 text-[#C4A8F5]" />
                    <div>
                      <p className="text-[11px] text-[#6B6B6B] dark:text-zinc-400">Olahraga</p>
                      <p className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">HIIT / Strength</p>
                    </div>
                  </div>
                  <div className="bg-[#FAFAFA] dark:bg-zinc-800 rounded-[16px] p-4 flex items-center gap-3 border border-gray-100 dark:border-zinc-700">
                    <Coffee className="w-5 h-5 text-[#FF2D78]" />
                    <div>
                      <p className="text-[11px] text-[#6B6B6B] dark:text-zinc-400">Nutrisi</p>
                      <p className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Protein Extra</p>
                    </div>
                  </div>
                  <div className="bg-[#FAFAFA] dark:bg-zinc-800 rounded-[16px] p-4 flex items-center gap-3 border border-gray-100 dark:border-zinc-700">
                    <Moon className="w-5 h-5 text-[#3B82F6]" />
                    <div>
                      <p className="text-[11px] text-[#6B6B6B] dark:text-zinc-400">Tidur</p>
                      <p className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Nyenyak</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#FF6B9D]/10 to-[#C4A8F5]/10 rounded-[16px] p-4 border-l-[3px] border-[#FF6B9D] mb-6">
                  <h4 className="text-[13px] font-bold text-[#1A1A1A] dark:text-white mb-1 flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-[#FF6B9D]"/> Catatan AI</h4>
                  <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-300 leading-relaxed">
                    Berdasarkan 4 siklus terakhir, ini adalah salah satu hari terbaikmu untuk kerja kreatif dan aktivitas sosial.
                  </p>
                </div>

                <button className="w-full py-4 bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] rounded-full font-bold text-[15px] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
                  <Bell className="w-4 h-4" /> Atur Pengingat untuk Hari Ini
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </MobileContainer>
  );
}