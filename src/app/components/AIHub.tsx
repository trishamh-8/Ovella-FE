import { Sparkles, MessageCircle, BarChart2, FileText, Calendar, Moon, Users, ChevronRight, Lock } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router";
import { HeaderActions } from "./HeaderActions";

const radarData = [
  { subject: 'Akurasi', A: 90, fullMark: 100 },
  { subject: 'Konsistensi', A: 75, fullMark: 100 },
  { subject: 'Keseimbangan', A: 85, fullMark: 100 },
  { subject: 'Mood', A: 60, fullMark: 100 },
  { subject: 'Tidur', A: 80, fullMark: 100 },
  { subject: 'Gejala', A: 65, fullMark: 100 },
];

export function AIHub() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pb-24">
      <div className="bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] pt-8 pb-24 px-6 rounded-b-[40px] text-white">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            <h1 className="text-[28px] font-bold">Ovella AI</h1>
          </div>
          <HeaderActions />
        </div>
        <p className="text-[15px] opacity-90">Kecerdasan buatan yang mengerti tubuhmu.</p>
      </div>

      <div className="px-6 -mt-16 space-y-6">
        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/40 dark:border-zinc-800 rounded-[24px] p-5 shadow-[0_8px_32px_rgba(196,168,245,0.15)]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white">Hormonal Fingerprint™</h2>
                <div className="bg-[#FF2D78] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">PRO</div>
              </div>
              <p className="text-[12px] text-[#A8A8A8] mt-1">Diperbarui 3 hari lalu</p>
            </div>
            <button className="text-[#FF6B9D] flex items-center text-[13px] font-semibold">
              Detail <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="h-[200px] w-full -ml-4">
            <ResponsiveContainer key="radar-rc" width="100%" height="100%" id="radar-container">
              <RadarChart key="radar-chart" id="radar-chart" cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid key="grid" stroke="#E5D4FF" />
                <PolarAngleAxis key="axis" dataKey="subject" tick={{ fill: '#6B6B6B', fontSize: 11 }} />
                <Radar key="radar" name="User" dataKey="A" stroke="#FF6B9D" fill="#FF6B9D" fillOpacity={0.4} isAnimationActive={false} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div onClick={() => navigate("/ai-chat")} className="col-span-2 bg-gradient-to-r from-[#1A1A1A] to-[#333333] rounded-[20px] p-4 text-white shadow-md flex items-center justify-between cursor-pointer active:scale-[0.98] transition-transform">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#C4A8F5]" />
              </div>
              <div>
                <h3 className="text-[15px] font-bold">Tanya Ovella AI</h3>
                <p className="text-[12px] opacity-70">Asisten personal 24/7</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 opacity-50" />
          </div>

          <FeatureCard icon={BarChart2} title="Analisis Pola" color="text-[#FF6B9D]" bg="bg-[#FF6B9D]/10" onClick={() => navigate("/fingerprint")} />
          <FeatureCard icon={FileText} title="Laporan Dokter" color="text-[#C4A8F5]" bg="bg-[#C4A8F5]/10" onClick={() => navigate("/doctor-report-gen")} />
          <FeatureCard icon={Calendar} title="Prediksi Siklus" color="text-[#FF2D78]" bg="bg-[#FF2D78]/10" onClick={() => navigate("/forecast")} />
          <FeatureCard icon={Moon} title="Luteal Intel" color="text-[#A8A8A8]" bg="bg-[#A8A8A8]/10" onClick={() => navigate("/luteal-dashboard")} />
          <FeatureCard icon={Users} title="Twin Match" color="text-[#F9A8C9]" bg="bg-[#F9A8C9]/10" onClick={() => navigate("/twin-match")} />
        </div>

        <div className="bg-[#FAFAFA] dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-[20px] p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
            <Lock className="w-4 h-4 text-[#A8A8A8]" />
          </div>
          <div className="flex-1">
            <h4 className="text-[13px] font-bold text-[#1A1A1A] dark:text-white">Buka fitur penuh Ovella Premium</h4>
            <p className="text-[11px] text-[#6B6B6B] dark:text-zinc-400">Fingerprint, Twin Match & Luteal Intel.</p>
          </div>
          <button className="px-3 py-1.5 bg-[#FF6B9D] text-white text-[12px] font-bold rounded-full">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, color, bg, onClick }: { icon: any, title: string, color: string, bg: string, onClick?: () => void }) {
  return (
    <div onClick={onClick} className={`bg-white dark:bg-zinc-900 rounded-[20px] p-4 shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col gap-3 ${onClick ? 'cursor-pointer active:scale-95 transition-transform' : ''}`}>
      <div className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center`}>
        <Icon className={`w-4 h-4 ${color}`} />
      </div>
      <h3 className="text-[14px] font-semibold text-[#1A1A1A] dark:text-white leading-tight">{title}</h3>
    </div>
  );
}
