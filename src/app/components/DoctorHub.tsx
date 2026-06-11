import { ChevronLeft, Plus, Stethoscope, ChevronRight, Activity, Calendar } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";

export function DoctorHub() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden">
        
        <div className="pt-14 pb-4 px-6 flex items-center justify-between bg-white dark:bg-zinc-900 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
              <ChevronLeft size={24} className="text-[#1A1A1A] dark:text-white" />
            </button>
            <h1 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white">Dokter & Klinik</h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-24 px-6 space-y-8 mt-4">
          
          <div className="bg-[#F5F3FF] dark:bg-[#C4A8F5]/10 rounded-[24px] p-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B9D]/10 to-[#C4A8F5]/10"></div>
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-full shadow-md flex items-center justify-center">
                <span className="text-[28px]">👩🏻</span>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-2 h-2 rounded-full bg-[#C4A8F5] animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-[#FF6B9D] animate-pulse delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-[#C4A8F5] animate-pulse delay-150"></div>
              </div>
              <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-full shadow-md flex items-center justify-center text-[#FF6B9D]">
                <Stethoscope className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[16px] font-bold text-[#1A1A1A] dark:text-white mb-4">Dokter Tersimpan</h2>
            
            <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-4 shadow-sm border border-gray-100 dark:border-zinc-800 flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] flex items-center justify-center shrink-0 shadow-sm">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white">Dr. Anita Wijaya, Sp.OG</h3>
                <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-400">SpOG · RSIA Bunda Jakarta</p>
                <p className="text-[11px] text-[#A8A8A8] mt-1">Konsultasi terakhir: 15 Mei 2026</p>
              </div>
              <button className="text-[12px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] whitespace-nowrap">
                Kirim Laporan →
              </button>
            </div>

            <button onClick={() => navigate("/add-doctor")} className="w-full py-4 border-2 border-dashed border-gray-200 dark:border-zinc-700 rounded-[16px] text-[14px] font-bold text-[#A8A8A8] hover:text-[#1A1A1A] dark:hover:text-white hover:border-gray-300 dark:hover:border-zinc-600 transition-colors flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" /> Tambah Dokter
            </button>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[16px] font-bold text-[#1A1A1A] dark:text-white">Laporan yang Dikirim</h2>
              <button className="text-[12px] font-bold text-[#FF6B9D]">Lihat semua →</button>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-4 border border-gray-100 dark:border-zinc-800 flex items-start gap-3">
                <div className="text-[20px] mt-0.5">📋</div>
                <div className="flex-1">
                  <h3 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Laporan Klinik Jun 2026</h3>
                  <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-400">2 hari lalu → Dr. Anita</p>
                  <p className="text-[11px] font-medium text-[#34C759] mt-1">✅ Sudah dibaca</p>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-4 border border-gray-100 dark:border-zinc-800 flex items-start gap-3">
                <div className="text-[20px] mt-0.5">📋</div>
                <div className="flex-1">
                  <h3 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white">Laporan Klinik Apr 2026</h3>
                  <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-400">6 minggu lalu → Dr. Anita</p>
                  <p className="text-[11px] font-medium text-[#A8A8A8] mt-1">📤 Terkirim</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-[16px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800 relative overflow-hidden">
            <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-1">Temukan dokter spesialis hormonal di Indonesia</h3>
            <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-400 mb-4">Powered by partnership network</p>
            <button className="px-4 py-2 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full text-[13px] font-bold shadow-sm opacity-50 cursor-not-allowed">
              Cari Dokter →
            </button>
            <p className="text-[10px] text-[#A8A8A8] mt-3">Fitur dalam pengembangan · Coming Soon</p>
          </div>

        </div>
      </div>
    </MobileContainer>
  );
}