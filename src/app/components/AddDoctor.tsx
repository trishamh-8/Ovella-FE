import { useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import * as Switch from '@radix-ui/react-switch';

export function AddDoctor() {
  const navigate = useNavigate();
  const [autoShare, setAutoShare] = useState(false);
  const [notifyRead, setNotifyRead] = useState(true);

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden relative">
        
        <div className="pt-14 pb-4 px-6 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
              <ChevronLeft size={24} className="text-[#1A1A1A] dark:text-white" />
            </button>
            <h1 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white">Tambah Dokter</h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 pb-32 space-y-6">
          
          <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
            <div className="mb-4 pb-4 border-b border-gray-100 dark:border-zinc-800">
              <input type="text" placeholder="Cari nama dokter atau klinik..." className="w-full bg-[#FAFAFA] dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-[14px] text-[#1A1A1A] dark:text-white outline-none focus:border-[#C4A8F5]" />
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[12px] font-bold text-[#1A1A1A] dark:text-white mb-1.5 block">Nama Lengkap *</label>
                <input type="text" placeholder="Dr. Sarah Wijaya" className="w-full bg-[#FAFAFA] dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-[14px] text-[#1A1A1A] dark:text-white outline-none focus:border-[#C4A8F5]" />
              </div>
              
              <div>
                <label className="text-[12px] font-bold text-[#1A1A1A] dark:text-white mb-1.5 block">Spesialisasi</label>
                <div className="w-full bg-[#FAFAFA] dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-[14px] flex justify-between items-center text-[#1A1A1A] dark:text-white">
                  Pilih spesialisasi
                  <ChevronDown className="w-4 h-4 text-[#A8A8A8]" />
                </div>
              </div>

              <div>
                <label className="text-[12px] font-bold text-[#1A1A1A] dark:text-white mb-1.5 block">Nama Klinik / RS</label>
                <input type="text" placeholder="RSIA Bunda" className="w-full bg-[#FAFAFA] dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-[14px] text-[#1A1A1A] dark:text-white outline-none focus:border-[#C4A8F5]" />
              </div>

              <div>
                <label className="text-[12px] font-bold text-[#1A1A1A] dark:text-white mb-1.5 block">Nomor WhatsApp</label>
                <input type="tel" placeholder="+62" className="w-full bg-[#FAFAFA] dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-[14px] text-[#1A1A1A] dark:text-white outline-none focus:border-[#C4A8F5]" />
              </div>

              <div>
                <label className="text-[12px] font-bold text-[#1A1A1A] dark:text-white mb-1.5 block">Email Dokter</label>
                <input type="email" placeholder="dokter@email.com" className="w-full bg-[#FAFAFA] dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-[14px] text-[#1A1A1A] dark:text-white outline-none focus:border-[#C4A8F5]" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
            <h3 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white mb-4">Izin berbagi laporan</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[13px] font-medium text-[#1A1A1A] dark:text-white">Izinkan berbagi laporan otomatis</h4>
                </div>
                <Switch.Root checked={autoShare} onCheckedChange={setAutoShare} className={`w-11 h-6 rounded-full relative transition-colors ${autoShare ? 'bg-[#FF6B9D]' : 'bg-gray-200 dark:bg-zinc-700'}`}>
                  <Switch.Thumb className={`block w-5 h-5 bg-white rounded-full transition-transform ${autoShare ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </Switch.Root>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[13px] font-medium text-[#1A1A1A] dark:text-white">Notifikasi ketika laporan dibaca</h4>
                </div>
                <Switch.Root checked={notifyRead} onCheckedChange={setNotifyRead} className={`w-11 h-6 rounded-full relative transition-colors ${notifyRead ? 'bg-[#FF6B9D]' : 'bg-gray-200 dark:bg-zinc-700'}`}>
                  <Switch.Thumb className={`block w-5 h-5 bg-white rounded-full transition-transform ${notifyRead ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </Switch.Root>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
          <button onClick={() => navigate(-1)} className="w-full py-4 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full font-bold text-[15px] shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform">
            Simpan Dokter
          </button>
        </div>

      </div>
    </MobileContainer>
  );
}