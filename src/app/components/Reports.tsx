import { useState } from "react";
import { ChevronDown, Stethoscope, ArrowRight, AlertTriangle, Sparkles } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from "recharts";
import { useNavigate } from "react-router";
import { AnomalyDetection } from "./FirstAnomaly";
import { HeaderActions } from "./HeaderActions";

const cycleData = [
  { month: 'Jan', length: 28 },
  { month: 'Feb', length: 29 },
  { month: 'Mar', length: 32 },
  { month: 'Apr', length: 27 },
  { month: 'Mei', length: 29 },
  { month: 'Jun', length: 28 },
];

const moodData = [
  { phase: 'Menstruasi', Sedih: 60, Senang: 20 },
  { phase: 'Folikular', Sedih: 10, Senang: 80 },
  { phase: 'Ovulasi', Sedih: 5, Senang: 90 },
  { phase: 'Luteal', Sedih: 50, Senang: 30 },
];

export function Reports() {
  const navigate = useNavigate();
  const [range, setRange] = useState("6 bulan terakhir");
  const [showAnomaly, setShowAnomaly] = useState(false);

  return (
    <div className="flex flex-col p-6 space-y-8 pb-24 relative">
      <header className="flex justify-between items-center pt-2">
        <h1 className="text-xl font-bold text-[#1A1A1A] dark:text-white">Laporanmu</h1>
        <div className="flex gap-2">
          <HeaderActions />
        </div>
      </header>

      <div className="flex justify-between items-center mt-[-10px]">
        <button onClick={() => setShowAnomaly(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFF0F7] dark:bg-[#FF2D78]/20 rounded-full text-[#FF2D78] text-[12px] font-bold">
          <AlertTriangle className="w-3.5 h-3.5" /> 1 Anomali
        </button>
        <button className="flex items-center gap-1 text-[13px] font-medium bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 px-3 py-1.5 rounded-full text-[#1A1A1A] dark:text-white">
          {range} <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <StatCard title="Siklus Rata-rata" value="29" unit="hari" trend="stabil" />
        <StatCard title="Durasi Menstruasi" value="5" unit="hari" trend="stabil" />
        <StatCard title="Skor Konsistensi" value="78" unit="%" trend="up" />
      </div>

      <div className="bg-gradient-to-r from-[#FF6B9D]/10 to-[#C4A8F5]/10 rounded-[20px] p-5 border border-[#FF6B9D]/20 shadow-sm relative overflow-hidden">
        <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FF6B9D]" /> Ringkasan AI
        </h3>
        <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed">
          Siklusmu berjalan teratur di kisaran 28-29 hari. Fase luteal sedikit lebih pendek di dua bulan terakhir, namun secara keseluruhan pola mood-mu sangat konsisten. Lanjutkan mencatat jurnal ya!
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
          <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-4">Tren Panjang Siklus</h3>
          <div className="h-[180px] w-full -ml-4">
            <ResponsiveContainer key="area-rc" width="100%" height="100%" id="area-container">
              <AreaChart key="area-chart" id="area-chart" data={cycleData}>
                <defs key="defs">
                  <linearGradient id="colorLength" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B9D" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF6B9D" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis key="xaxis" dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#A8A8A8' }} />
                <YAxis key="yaxis" domain={[20, 40]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#A8A8A8' }} width={30} />
                <Tooltip key="tooltip" contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                <Area key="area" type="monotone" dataKey="length" stroke="#FF6B9D" strokeWidth={3} fillOpacity={1} fill="url(#colorLength)" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
          <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-4">Pola Mood per Fase</h3>
          <div className="h-[180px] w-full -ml-4">
            <ResponsiveContainer key="bar-rc" width="100%" height="100%" id="bar-container">
              <BarChart key="bar-chart" id="bar-chart" data={moodData}>
                <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis key="xaxis" dataKey="phase" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#A8A8A8' }} />
                <YAxis key="yaxis" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#A8A8A8' }} width={30} />
                <Tooltip key="tooltip" cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                <Bar key="bar-senang" dataKey="Senang" fill="#C4A8F5" radius={[4, 4, 0, 0]} isAnimationActive={false} />
                <Bar key="bar-sedih" dataKey="Sedih" fill="#6B6B6B" radius={[4, 4, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <button 
          onClick={() => navigate("/doctor-report")}
          className="w-full bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] rounded-[20px] p-5 flex items-center justify-between text-white shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform"
        >
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="text-[15px] font-bold mb-0.5">Buat Laporan Dokter</h3>
              <p className="text-[12px] opacity-90 leading-tight">Ekspor PDF ringkasan 3 bulan terakhir untuk konsultasi.</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 shrink-0" />
        </button>
      </div>

      {showAnomaly && <AnomalyDetection onClose={() => setShowAnomaly(false)} />}
    </div>
  );
}

function StatCard({ title, value, unit, trend }: { title: string, value: string, unit: string, trend: string }) {
  return (
    <div className="min-w-[120px] bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[20px] p-4 flex flex-col justify-between shrink-0 shadow-sm">
      <span className="text-[12px] text-[#6B6B6B] dark:text-zinc-400 font-medium leading-tight mb-3">{title}</span>
      <div className="flex items-baseline gap-1">
        <span className="text-[24px] font-bold text-[#1A1A1A] dark:text-white">{value}</span>
        <span className="text-[12px] text-[#A8A8A8] font-medium">{unit}</span>
      </div>
    </div>
  );
}
