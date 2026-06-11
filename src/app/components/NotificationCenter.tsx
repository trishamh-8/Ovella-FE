import { useState } from "react";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";

export function NotificationCenter() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filters = ["Semua", "AI Insight", "Pengingat", "Siklus", "Sistem"];

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden">
        
        <div className="pt-14 pb-4 px-6 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
              <ChevronLeft size={24} className="text-[#1A1A1A] dark:text-white" />
            </button>
            <h1 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white">Notifikasi</h1>
          </div>
          <button className="text-[12px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]">
            Tandai semua dibaca
          </button>
        </div>

        <div className="bg-white dark:bg-zinc-900 px-6 py-3 border-b border-gray-100 dark:border-zinc-800">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {filters.map((f) => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[12px] font-medium transition-colors border
                  ${activeFilter === f 
                    ? 'bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white border-transparent shadow-sm' 
                    : 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-[#6B6B6B] dark:text-zinc-300'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-24">
          <div className="divide-y divide-gray-100 dark:divide-zinc-800">
            
            {/* Unread 1 */}
            <div className="p-5 bg-[#F5F3FF] dark:bg-[#C4A8F5]/10 flex items-start gap-4 relative">
              <div className="absolute left-3 top-6 w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]"></div>
              <div className="text-[20px] mt-1 shrink-0">🌙</div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Luteal Intelligence™ Aktif</h3>
                  <span className="text-[10px] text-[#A8A8A8]">2 jam lalu</span>
                </div>
                <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed mb-3">
                  Kamu memasuki fase luteal. Ovella mendeteksi 3 gejala yang diprediksi minggu ini. Buka untuk melihat plan-mu.
                </p>
                <button className="flex items-center gap-2 text-[12px] font-bold text-[#1A1A1A] dark:text-white" onClick={() => navigate("/luteal-dashboard")}>
                  <span className="px-2.5 py-0.5 bg-white dark:bg-zinc-800 rounded-full border border-gray-200 dark:border-zinc-700">Luteal</span> Buka →
                </button>
              </div>
            </div>

            {/* Unread 2 */}
            <div className="p-5 bg-[#F5F3FF] dark:bg-[#C4A8F5]/10 flex items-start gap-4 relative">
              <div className="absolute left-3 top-6 w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]"></div>
              <div className="text-[20px] mt-1 shrink-0">⚡</div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">AI Insight Baru</h3>
                  <span className="text-[10px] text-[#A8A8A8]">5 jam lalu</span>
                </div>
                <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed mb-3">
                  Ovella mendeteksi pola baru: energimu konsisten tinggi di hari ke-7–12. Hormonal Fingerprint™ diperbarui.
                </p>
                <button className="text-[12px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]" onClick={() => navigate("/fingerprint")}>
                  Lihat Fingerprint →
                </button>
              </div>
            </div>

            {/* Unread 3 */}
            <div className="p-5 bg-[#F5F3FF] dark:bg-[#C4A8F5]/10 flex items-start gap-4 relative">
              <div className="absolute left-3 top-6 w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]"></div>
              <div className="text-[20px] mt-1 shrink-0">📋</div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Pengingat Catat Hari Ini</h3>
                  <span className="text-[10px] text-[#A8A8A8]">Kemarin</span>
                </div>
                <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed mb-3">
                  Kamu belum mencatat hari ini. 2 menit cukup untuk menjaga model AI-mu tetap akurat!
                </p>
                <button className="px-4 py-1.5 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full text-[12px] font-bold shadow-sm" onClick={() => navigate("/app")}>
                  + Catat Sekarang
                </button>
              </div>
            </div>

            {/* Read 1 */}
            <div className="p-5 bg-white dark:bg-[#0A0A0A] flex items-start gap-4">
              <div className="text-[20px] mt-1 shrink-0 pl-1">🥚</div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Jendela Ovulasi Mendekat</h3>
                  <span className="text-[10px] text-[#A8A8A8]">2 hari lalu</span>
                </div>
                <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed">
                  Ovulasi diprediksi dalam 3 hari (hari ke-13).
                </p>
              </div>
            </div>

            {/* Read 2 */}
            <div className="p-5 bg-white dark:bg-[#0A0A0A] flex items-start gap-4">
              <div className="mt-1 shrink-0 pl-1"><CheckCircle2 className="w-5 h-5 text-[#4ADE80]" /></div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Laporan Klinik Dibuat</h3>
                  <span className="text-[10px] text-[#A8A8A8]">3 hari lalu</span>
                </div>
                <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed">
                  Laporan bulan Juni telah berhasil dibuat dan disimpan.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </MobileContainer>
  );
}