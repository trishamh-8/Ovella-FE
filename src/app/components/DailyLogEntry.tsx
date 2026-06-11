import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";

export function DailyLogEntry({ isOpen, onClose, selectedDate }: { isOpen: boolean; onClose: () => void; selectedDate: string }) {
  const [flow, setFlow] = useState<string | null>(null);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [mood, setMood] = useState<number | null>(null);
  const [energy, setEnergy] = useState<number>(3);
  const [skin, setSkin] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const symptomList = ["Kram", "Kembung", "Nyeri Payudara", "Sakit Kepala", "Jerawat", "Mual", "Kelelahan"];
  const skinList = ["Normal", "Berminyak", "Kering", "Berjerawat"];

  const toggleSymptom = (s: string) => {
    setSymptoms(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-[#FAFAFA] dark:bg-[#0A0A0A] rounded-t-[32px] h-[85vh] z-[101] flex flex-col shadow-2xl"
          >
            {showSuccess ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </motion.div>
                <h2 className="text-xl font-bold text-[#1A1A1A] dark:text-white mb-2">Jurnal Tersimpan!</h2>
                <p className="text-[14px] text-[#6B6B6B] dark:text-zinc-400">Terima kasih sudah mencatat hari ini.</p>
              </div>
            ) : (
              <>
                <div className="flex-none p-4 flex flex-col items-center border-b border-gray-100 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-t-[32px] z-10">
                  <div className="w-12 h-1.5 bg-gray-200 dark:bg-zinc-700 rounded-full mb-4" />
                  <div className="w-full flex justify-between items-center px-2">
                    <span className="w-8" />
                    <h2 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white">{selectedDate}</h2>
                    <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 text-[#1A1A1A] dark:text-white">
                      <X size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-32">
                  <section>
                    <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-3">Menstruasi</h3>
                    <div className="flex bg-gray-100 dark:bg-zinc-800 p-1 rounded-xl">
                      {["Tidak ada", "Ringan", "Sedang", "Deras"].map(level => (
                        <button
                          key={level}
                          onClick={() => setFlow(level)}
                          className={`flex-1 py-2 text-[14px] font-medium rounded-lg transition-colors ${flow === level ? 'bg-white dark:bg-zinc-700 text-[#FF2D78] shadow-sm' : 'text-[#6B6B6B] dark:text-zinc-400'}`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-3">Gejala Fisik</h3>
                    <div className="flex flex-wrap gap-2">
                      {symptomList.map(s => (
                        <button
                          key={s}
                          onClick={() => toggleSymptom(s)}
                          className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all border ${symptoms.includes(s) ? 'bg-[#E5D4FF] border-[#C4A8F5] text-[#FF2D78] dark:bg-[#C4A8F5]/20' : 'bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-[#6B6B6B] dark:text-zinc-400'}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-3">Suasana Hati</h3>
                    <div className="flex justify-between">
                      {[
                        { emoji: "😭", id: 1 }, { emoji: "😔", id: 2 }, { emoji: "😐", id: 3 }, { emoji: "🙂", id: 4 }, { emoji: "🥰", id: 5 }
                      ].map(m => (
                        <button 
                          key={m.id} 
                          onClick={() => setMood(m.id)}
                          className={`text-3xl transition-transform ${mood === m.id ? 'scale-125 drop-shadow-md' : 'opacity-50 grayscale'}`}
                        >
                          {m.emoji}
                        </button>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white">Energi</h3>
                    </div>
                    <input type="range" min="1" max="5" value={energy} onChange={(e) => setEnergy(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#FF6B9D]" />
                    <div className="flex justify-between text-xl mt-2">
                      <span>🔋</span><span>⚡️</span>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-3">Kulit</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {skinList.map(s => (
                        <button
                          key={s}
                          onClick={() => setSkin(s)}
                          className={`py-3 rounded-xl text-[14px] font-medium transition-all border ${skin === s ? 'bg-[#FF6B9D]/10 border-[#FF6B9D] text-[#FF6B9D]' : 'bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-[#6B6B6B] dark:text-zinc-400'}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-3">Catatan</h3>
                    <textarea 
                      placeholder="Catatan bebas untuk harimu..." 
                      className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 min-h-[100px] text-[15px] text-[#1A1A1A] dark:text-white outline-none focus:ring-2 focus:ring-[#C4A8F5]/50 resize-none"
                    />
                  </section>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#FAFAFA] dark:from-[#0A0A0A] via-[#FAFAFA]/95 dark:via-[#0A0A0A]/95 to-transparent z-20 pb-safe">
                  <button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white font-semibold text-[17px] shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform disabled:opacity-70"
                  >
                    {isSaving ? "Menyimpan..." : "Simpan Jurnal"}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}