import { useState } from "react";
import { ChevronLeft, Moon, Activity, AlertCircle, Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import { motion, AnimatePresence } from "motion/react";
import * as Slider from "@radix-ui/react-slider";

export function LutealDashboard() {
  const navigate = useNavigate();
  const [showTracker, setShowTracker] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [intensities, setIntensities] = useState<Record<string, number>>({});

  const symptomsList = [
    { id: "kram", label: "Kram", icon: "🔴" },
    { id: "kembung", label: "Kembung", icon: "🎈" },
    { id: "mood", label: "Mood ↓", icon: "😔" },
    { id: "sakit_kepala", label: "Sakit kepala", icon: "⚡" },
    { id: "jerawat", label: "Jerawat", icon: "🧴" },
    { id: "lelah", label: "Lelah", icon: "🥱" },
    { id: "ngidam", label: "Ngidam", icon: "🍫" }
  ];

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(prev => prev.filter(s => s !== id));
      const newIntensities = { ...intensities };
      delete newIntensities[id];
      setIntensities(newIntensities);
    } else {
      setSelectedSymptoms(prev => [...prev, id]);
      setIntensities(prev => ({ ...prev, [id]: 3 }));
    }
  };

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-y-auto pb-24 relative">
        
        {/* Header */}
        <div className="pt-14 pb-4 px-6 flex items-center justify-between sticky top-0 z-10 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800">
            <ChevronLeft size={24} className="text-[#1A1A1A] dark:text-white" />
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#C4A8F5]/10 rounded-full border border-[#C4A8F5]/30">
            <Moon className="w-4 h-4 text-[#C4A8F5]" />
            <span className="text-[12px] font-bold text-[#1A1A1A] dark:text-white">Luteal Intel</span>
          </div>
        </div>

        {/* Hero Card */}
        <div className="px-6 mb-6">
          <div className="bg-gradient-to-br from-[#A88AEB] to-[#D5C2F9] rounded-[24px] p-6 text-white shadow-[0_8px_30px_rgba(196,168,245,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
            
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Moon className="w-6 h-6 fill-white" />
              <h2 className="text-[20px] font-bold">Fase Luteal — Hari ke-18</h2>
            </div>
            
            <p className="text-[14px] leading-relaxed relative z-10 opacity-95">
              Ovella mendeteksi potensi gejala PMS dalam 4–5 hari ke-depan berdasarkan pola 3 siklus terakhirmu.
            </p>
          </div>
        </div>

        {/* Prediction Cards */}
        <div className="px-6 mb-8">
          <h3 className="text-[16px] font-bold text-[#1A1A1A] dark:text-white mb-4">Prediksi Gejala 5 Hari Kedepan</h3>
          <div className="space-y-3">
            <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-4 shadow-sm border border-gray-100 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-[18px]">🥱</div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Kelelahan</h4>
                  <p className="text-[12px] text-[#6B6B6B]">Meningkat hari ke 23–25</p>
                </div>
              </div>
              <div className="flex items-center text-[12px] font-bold text-orange-500">⚡→📉</div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-4 shadow-sm border border-gray-100 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[18px]">😔</div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Mood Sensitif</h4>
                  <p className="text-[12px] text-[#6B6B6B]">Diprediksi hari ke 24–26</p>
                </div>
              </div>
              <div className="flex items-center text-[12px] font-bold text-blue-500">😊→😔</div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-4 shadow-sm border border-gray-100 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-[18px]">🔴</div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Kram</h4>
                  <p className="text-[12px] text-[#6B6B6B]">Onset hari ke-27</p>
                </div>
              </div>
              <div className="text-[11px] px-2 py-1 bg-red-100 text-red-600 rounded-md font-bold">Ringan</div>
            </div>
          </div>
        </div>

        {/* Proactive Suggestions */}
        <div className="px-6">
          <div className="bg-[#FAFAFA] dark:bg-zinc-900 border-l-[3px] border-[#C4A8F5] border border-gray-100 dark:border-zinc-800 rounded-[16px] p-5">
            <h3 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#C4A8F5]" /> Persiapan Proaktif
            </h3>
            <p className="text-[12px] text-[#6B6B6B] mb-4">Berdasarkan polamu, ini yang bisa kamu siapkan:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[13px] text-[#1A1A1A] dark:text-zinc-300">
                <span className="text-[16px]">💊</span> Magnesium supplement (3 hari sebelum)
              </li>
              <li className="flex items-start gap-2 text-[13px] text-[#1A1A1A] dark:text-zinc-300">
                <span className="text-[16px]">🥦</span> Perbanyak sayuran cruciferous
              </li>
              <li className="flex items-start gap-2 text-[13px] text-[#1A1A1A] dark:text-zinc-300">
                <span className="text-[16px]">😴</span> Tidur 15–30 menit lebih awal
              </li>
            </ul>
          </div>
        </div>

        {/* Floating Action Button for Check-in */}
        <button 
          onClick={() => setShowTracker(true)}
          className="absolute bottom-6 right-6 w-14 h-14 bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
        >
          <Plus className="w-6 h-6" />
        </button>

        {/* PMS Check-in Bottom Sheet */}
        <AnimatePresence>
          {showTracker && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                className="absolute inset-0 bg-black/40 z-40 backdrop-blur-sm"
                onClick={() => setShowTracker(false)}
              />
              <motion.div 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 rounded-t-[32px] z-50 p-6 shadow-2xl flex flex-col max-h-[85vh] overflow-y-auto"
              >
                <div className="w-12 h-1.5 bg-gray-200 dark:bg-zinc-800 rounded-full mx-auto mb-6"></div>
                <h2 className="text-[20px] font-bold text-[#1A1A1A] dark:text-white mb-6">PMS Check-in Hari Ini</h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  {symptomsList.map(s => (
                    <button 
                      key={s.id}
                      onClick={() => toggleSymptom(s.id)}
                      className={`px-4 py-2 rounded-full border text-[13px] font-medium flex items-center gap-1.5 transition-all active:scale-95
                        ${selectedSymptoms.includes(s.id) 
                          ? "bg-[#C4A8F5] border-[#C4A8F5] text-white" 
                          : "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 text-[#1A1A1A] dark:text-white hover:bg-gray-50"}`}
                    >
                      <span>{s.icon}</span> {s.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-6 mb-8">
                  {selectedSymptoms.map(id => {
                    const s = symptomsList.find(x => x.id === id);
                    return (
                      <div key={id} className="bg-[#FAFAFA] dark:bg-zinc-800/50 p-4 rounded-[16px]">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[13px] font-bold text-[#1A1A1A] dark:text-white flex items-center gap-1">
                            {s?.icon} {s?.label}
                          </span>
                          <span className="text-[11px] font-bold text-[#C4A8F5]">Intensitas: {intensities[id]}</span>
                        </div>
                        <Slider.Root 
                          className="relative flex items-center select-none touch-none w-full h-5" 
                          defaultValue={[3]} 
                          max={5} 
                          min={1} 
                          step={1}
                          onValueChange={(val) => setIntensities(prev => ({...prev, [id]: val[0]}))}
                        >
                          <Slider.Track className="bg-gray-200 dark:bg-zinc-700 relative grow rounded-full h-1.5">
                            <Slider.Range className="absolute bg-[#C4A8F5] rounded-full h-full" />
                          </Slider.Track>
                          <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-[#C4A8F5] shadow-md rounded-[10px] focus:outline-none" />
                        </Slider.Root>
                        <div className="flex justify-between mt-2 text-[10px] text-[#A8A8A8]">
                          <span>Ringan</span>
                          <span>Parah</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {selectedSymptoms.includes("kembung") && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mb-6">
                    <div className="p-4 bg-[#E6F4EA] dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 rounded-[16px] flex items-start gap-3">
                      <div className="text-[16px]">🌿</div>
                      <div>
                        <p className="text-[11px] font-bold text-green-700 dark:text-green-400 mb-1">Ovella Tip</p>
                        <p className="text-[12px] text-green-800 dark:text-green-300 leading-snug">
                          Kamu mencatat kembung hari ini. Cobalah kurangi sodium dan tambah air putih. Gejala ini biasanya membaik dalam 1–2 hari.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <button 
                  onClick={() => setShowTracker(false)}
                  className="w-full py-4 bg-gradient-to-r from-[#A88AEB] to-[#D5C2F9] text-white rounded-full font-bold text-[15px] shadow-[0_4px_15px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform"
                >
                  Simpan Catatan
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </MobileContainer>
  );
}