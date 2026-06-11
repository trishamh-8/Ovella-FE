import { useState } from "react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import { ChevronLeft } from "lucide-react";

const conditions = [
  "PCOS",
  "Endometriosis",
  "Tiroid",
  "Akne Hormonal",
  "Tidak ada",
  "Belum tahu",
];

const goals = [
  "Memahami siklus",
  "Program hamil",
  "Kelola gejala PCOS",
  "Persiapan konsultasi dokter",
];

export function ProfileSetup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const toggleCondition = (cond: string) => {
    setSelectedConditions((prev) =>
      prev.includes(cond) ? prev.filter((c) => c !== cond) : [...prev, cond]
    );
  };

  const handleContinue = () => {
    navigate("/app");
  };

  return (
    <MobileContainer>
      <div className="flex-1 flex flex-col bg-[#FAFAFA] dark:bg-[#0F0F0F]">
        <div className="pt-14 pb-4 px-6 flex items-center justify-between sticky top-0 bg-[#FAFAFA]/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md z-10">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-[#1A1A1A] dark:text-white">
            <ChevronLeft size={24} />
          </button>
          <div className="w-1/2 h-1.5 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]" />
          </div>
          <div className="w-10" />
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-32">
          <h1 className="text-[28px] font-bold text-[#1A1A1A] dark:text-white mb-8">Kenalkan dirimu ke Ovella</h1>

          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-[15px] font-semibold text-[#1A1A1A] dark:text-white block">Nama Lengkap</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama"
                className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-[16px] text-[#1A1A1A] dark:text-white outline-none focus:ring-2 focus:ring-[#C4A8F5]/50 transition-all shadow-sm"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[15px] font-semibold text-[#1A1A1A] dark:text-white block">Tanggal Lahir</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-[16px] text-[#1A1A1A] dark:text-white outline-none focus:ring-2 focus:ring-[#C4A8F5]/50 transition-all shadow-sm"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[15px] font-semibold text-[#1A1A1A] dark:text-white">Panjang Siklus Rata-rata</label>
                <span className="text-[#FF6B9D] font-bold">{cycleLength} hari</span>
              </div>
              <input
                type="range"
                min="21"
                max="45"
                value={cycleLength}
                onChange={(e) => setCycleLength(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#FF6B9D]"
              />
              <div className="flex justify-between text-xs text-[#A8A8A8]">
                <span>21 hari</span>
                <span>45 hari</span>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[15px] font-semibold text-[#1A1A1A] dark:text-white block">Kondisi yang pernah didiagnosis</label>
              <div className="flex flex-wrap gap-2">
                {conditions.map((cond) => (
                  <button
                    key={cond}
                    onClick={() => toggleCondition(cond)}
                    className={`px-4 py-2 rounded-[100px] text-[14px] font-medium transition-all border ${
                      selectedConditions.includes(cond)
                        ? "bg-[#E5D4FF] border-[#C4A8F5] text-[#FF2D78] dark:bg-[#C4A8F5]/20"
                        : "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-[#6B6B6B] dark:text-zinc-400"
                    }`}
                  >
                    {cond}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[15px] font-semibold text-[#1A1A1A] dark:text-white block">Tujuan Utama</label>
              <div className="flex flex-col gap-3">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setSelectedGoal(goal)}
                    className={`px-4 py-3.5 rounded-xl text-left text-[15px] transition-all border ${
                      selectedGoal === goal
                        ? "bg-[#E5D4FF]/30 border-[#C4A8F5] text-[#FF2D78] font-semibold"
                        : "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-[#1A1A1A] dark:text-zinc-300"
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-[#FAFAFA] dark:from-[#0F0F0F] via-[#FAFAFA]/90 dark:via-[#0F0F0F]/90 to-transparent">
          <button
            onClick={handleContinue}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white font-semibold text-[17px] shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
