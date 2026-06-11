import { Bell, Lock, Sparkles, Link, HelpCircle, Info, ChevronRight, LogOut, X, Check, Activity, Target } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HeaderActions } from "./HeaderActions";

export function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  // Health Profile State
  const [cycleLength, setCycleLength] = useState("29");
  const [condition, setCondition] = useState("PCOS");
  const [goal, setGoal] = useState("Memahami siklus");

  const [tempCycleLength, setTempCycleLength] = useState(cycleLength);
  const [tempCondition, setTempCondition] = useState(condition);
  const [tempGoal, setTempGoal] = useState(goal);

  const handleSave = () => {
    setCycleLength(tempCycleLength);
    setCondition(tempCondition);
    setGoal(tempGoal);
    setIsEditing(false);
  };

  return (
    <>
      <div className="flex flex-col p-6 space-y-6 pb-24 relative">
        <header className="flex justify-between items-center pt-2 mb-2">
          <h1 className="text-xl font-bold text-[#1A1A1A] dark:text-white">Profil</h1>
          <HeaderActions />
        </header>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] flex items-center justify-center text-white text-[20px] font-bold shadow-md">
            SA
          </div>
          <div>
            <h2 className="text-[19px] font-bold text-[#1A1A1A] dark:text-white">Sarah Anindya</h2>
            <p className="text-[13px] text-[#A8A8A8]">Member sejak Mar 2026</p>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
          <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-zinc-800 pb-3">
            <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white">Profil Kesehatan</h3>
            <button onClick={() => {
              setTempCycleLength(cycleLength);
              setTempCondition(condition);
              setTempGoal(goal);
              setIsEditing(true);
            }} className="text-[13px] font-semibold text-[#FF6B9D] active:scale-95 transition-transform">Edit</button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-[#6B6B6B] dark:text-zinc-400">Siklus Rata-rata</span>
              <span className="text-[14px] font-semibold text-[#1A1A1A] dark:text-white">{cycleLength} Hari</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-[#6B6B6B] dark:text-zinc-400">Kondisi</span>
              <span className="text-[14px] font-semibold text-[#1A1A1A] dark:text-white bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded">{condition}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-[#6B6B6B] dark:text-zinc-400">Tujuan</span>
              <span className="text-[14px] font-semibold text-[#1A1A1A] dark:text-white truncate max-w-[200px] text-right">{goal}</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[20px] overflow-hidden shadow-sm border border-gray-100 dark:border-zinc-800">
          <SettingRow icon={Bell} title="Notifikasi & Pengingat" onClick={() => navigate("/reminder-settings")} />
          <SettingRow icon={Lock} title="Privasi & Keamanan" onClick={() => navigate("/privacy")} />
          <SettingRow icon={Sparkles} title="Ovella Premium" badge="PRO" iconColor="text-[#FF2D78]" onClick={() => navigate("/premium")} />
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[20px] overflow-hidden shadow-sm border border-gray-100 dark:border-zinc-800">
          <SettingRow icon={Link} title="Hubungkan Dokter" onClick={() => navigate("/doctor-hub")} />
          <SettingRow icon={HelpCircle} title="Bantuan & FAQ" />
          <SettingRow icon={Info} title="Tentang Ovella" border={false} />
        </div>

        <button onClick={() => navigate("/login")} className="flex items-center justify-center gap-2 w-full py-4 text-[15px] font-semibold text-[#FF2D78] active:opacity-70 transition-opacity">
          <LogOut className="w-5 h-5" /> Keluar
        </button>
      </div>

      {/* Edit Health Profile Bottom Sheet */}
      <AnimatePresence>
        {isEditing && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 z-[60] backdrop-blur-sm"
              onClick={() => setIsEditing(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 rounded-t-[32px] p-6 z-[70] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] pb-safe h-[80vh] flex flex-col"
            >
              <div className="w-12 h-1.5 bg-gray-200 dark:bg-zinc-700 rounded-full mx-auto mb-6" />
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white">Edit Profil Kesehatan</h3>
                <button onClick={() => setIsEditing(false)} className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 rounded-full text-[#1A1A1A] dark:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto no-scrollbar space-y-6 pb-24">
                {/* Cycle Length */}
                <div>
                  <label className="text-[14px] font-semibold text-[#1A1A1A] dark:text-white mb-2 block">
                    Siklus Rata-rata (Hari)
                  </label>
                  <input 
                    type="number" 
                    value={tempCycleLength}
                    onChange={(e) => setTempCycleLength(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-zinc-800 border-none rounded-[16px] px-4 py-4 text-[16px] text-[#1A1A1A] dark:text-white focus:ring-2 focus:ring-[#FF6B9D] outline-none transition-all"
                  />
                </div>

                {/* Condition */}
                <div>
                  <label className="text-[14px] font-semibold text-[#1A1A1A] dark:text-white mb-2 block">
                    Kondisi Kesehatan
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Tidak ada", "PCOS", "Endometriosis", "Tiroid"].map((cond) => (
                      <button
                        key={cond}
                        onClick={() => setTempCondition(cond)}
                        className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all border ${
                          tempCondition === cond 
                            ? 'bg-[#FF6B9D] text-white border-[#FF6B9D]' 
                            : 'bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 text-[#6B6B6B] dark:text-zinc-400'
                        }`}
                      >
                        {cond}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Goal */}
                <div>
                  <label className="text-[14px] font-semibold text-[#1A1A1A] dark:text-white mb-2 block">
                    Tujuan Utama
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: "Memahami siklus", icon: Activity },
                      { id: "Program hamil", icon: Target },
                      { id: "Mencegah kehamilan", icon: Lock }
                    ].map((g) => (
                      <button
                        key={g.id}
                        onClick={() => setTempGoal(g.id)}
                        className={`w-full flex items-center gap-3 p-4 rounded-[16px] border transition-all ${
                          tempGoal === g.id 
                            ? 'bg-gradient-to-r from-[#FF6B9D]/10 to-[#C4A8F5]/10 border-[#FF6B9D] text-[#1A1A1A] dark:text-white' 
                            : 'bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-[#6B6B6B] dark:text-zinc-400'
                        }`}
                      >
                        <g.icon className={`w-5 h-5 ${tempGoal === g.id ? 'text-[#FF6B9D]' : ''}`} />
                        <span className="font-medium text-[15px]">{g.id}</span>
                        {tempGoal === g.id && <Check className="w-5 h-5 text-[#FF6B9D] ml-auto" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white dark:from-zinc-900 pt-10">
                <button 
                  onClick={handleSave}
                  className="w-full py-4 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full font-bold text-[16px] shadow-lg active:scale-95 transition-transform"
                >
                  Simpan Perubahan
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function SettingRow({ icon: Icon, title, badge, iconColor = "text-[#6B6B6B] dark:text-zinc-400", border = true, onClick }: { icon: any, title: string, badge?: string, iconColor?: string, border?: boolean, onClick?: () => void }) {
  return (
    <div onClick={onClick} className={`flex items-center justify-between p-4 bg-white dark:bg-zinc-900 active:bg-gray-50 dark:active:bg-zinc-800 transition-colors cursor-pointer ${border ? 'border-b border-gray-100 dark:border-zinc-800' : ''}`}>
      <div className="flex items-center gap-3">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        <span className="text-[15px] font-medium text-[#1A1A1A] dark:text-white">{title}</span>
        {badge && <span className="text-[10px] font-bold bg-[#FF2D78] text-white px-1.5 py-0.5 rounded">{badge}</span>}
      </div>
      <ChevronRight className="w-5 h-5 text-[#A8A8A8]" />
    </div>
  );
}