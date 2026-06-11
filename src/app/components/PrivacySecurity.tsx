import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import * as Switch from '@radix-ui/react-switch';
import { useState } from "react";

export function PrivacySecurity() {
  const navigate = useNavigate();
  const [faceId, setFaceId] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [dataResearch, setDataResearch] = useState(false);

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden">
        
        <div className="pt-14 pb-4 px-6 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
              <ChevronLeft size={24} className="text-[#1A1A1A] dark:text-white" />
            </button>
            <h1 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white">Privasi & Keamanan</h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 pb-24 space-y-6">
          
          <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
            <h2 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white mb-4">Keamanan Akun</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[11px] text-[#A8A8A8] uppercase tracking-wider font-bold mb-0.5">Email</p>
                  <p className="text-[14px] font-medium text-[#1A1A1A] dark:text-white">sari@email.com</p>
                </div>
                <button className="text-[12px] font-bold text-[#FF6B9D]">Ubah</button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[11px] text-[#A8A8A8] uppercase tracking-wider font-bold mb-0.5">Kata Sandi</p>
                  <p className="text-[14px] font-medium text-[#1A1A1A] dark:text-white tracking-widest mt-1">•••••••••</p>
                </div>
                <button className="text-[12px] font-bold text-[#FF6B9D]">Ubah</button>
              </div>

              <div className="flex justify-between items-center pt-2">
                <p className="text-[14px] font-medium text-[#1A1A1A] dark:text-white">Face ID / Touch ID</p>
                <Switch.Root checked={faceId} onCheckedChange={setFaceId} className={`w-11 h-6 rounded-full relative transition-colors ${faceId ? 'bg-[#FF6B9D]' : 'bg-gray-200 dark:bg-zinc-700'}`}>
                  <Switch.Thumb className={`block w-5 h-5 bg-white rounded-full transition-transform ${faceId ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </Switch.Root>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[14px] font-medium text-[#1A1A1A] dark:text-white">2-Factor Auth</p>
                {twoFactor ? (
                  <Switch.Root checked={twoFactor} onCheckedChange={setTwoFactor} className="w-11 h-6 rounded-full relative transition-colors bg-[#FF6B9D]">
                    <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform translate-x-5" />
                  </Switch.Root>
                ) : (
                  <button onClick={() => setTwoFactor(true)} className="text-[12px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]">
                    Aktifkan
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
            <h2 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white mb-4">Data Kesehatanmu</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-[11px] text-[#A8A8A8] uppercase tracking-wider font-bold mb-0.5">Penyimpanan Data</p>
                <p className="text-[14px] font-medium text-[#1A1A1A] dark:text-white">Lokal + cloud terenkripsi</p>
              </div>

              <div>
                <p className="text-[11px] text-[#A8A8A8] uppercase tracking-wider font-bold mb-0.5">Enkripsi</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 bg-[#4ADE80]/10 border border-[#4ADE80]/30 text-[#4ADE80] text-[11px] font-bold rounded-md">AES-256</span>
                </div>
              </div>

              <button className="w-full flex justify-between items-center py-2 group">
                <span className="text-[14px] font-medium text-[#1A1A1A] dark:text-white group-hover:text-[#FF6B9D] transition-colors">Ekspor Semua Dataku</span>
                <ChevronRight className="w-4 h-4 text-[#A8A8A8]" />
              </button>

              <button className="w-full flex justify-between items-center pt-2 group">
                <span className="text-[14px] font-bold text-red-500 group-hover:text-red-600 transition-colors">Hapus Semua Data</span>
                <ChevronRight className="w-4 h-4 text-red-500" />
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800">
            <h2 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white mb-4">Berbagi Data</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-[13px] font-medium text-[#1A1A1A] dark:text-white flex-1 pr-4">Kontribusi data anonim untuk penelitian</p>
                <Switch.Root checked={dataResearch} onCheckedChange={setDataResearch} className={`w-11 h-6 rounded-full relative transition-colors ${dataResearch ? 'bg-[#FF6B9D]' : 'bg-gray-200 dark:bg-zinc-700'}`}>
                  <Switch.Thumb className={`block w-5 h-5 bg-white rounded-full transition-transform ${dataResearch ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </Switch.Root>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[13px] font-medium text-[#1A1A1A] dark:text-white">Personalisasi AI dari dataku</p>
                  <p className="text-[10px] text-[#A8A8A8] mt-0.5">Tidak dapat dimatikan jika menggunakan fitur AI</p>
                </div>
                <Switch.Root checked={true} disabled className="w-11 h-6 rounded-full relative bg-[#FF6B9D] opacity-60">
                  <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform translate-x-5" />
                </Switch.Root>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-[20px] p-5 shadow-sm border border-gray-100 dark:border-zinc-800 space-y-4">
            <h2 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white mb-2">Legal</h2>
            
            <button className="w-full flex justify-between items-center group">
              <span className="text-[13px] font-medium text-[#6B6B6B] dark:text-zinc-300 group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors">Kebijakan Privasi</span>
              <ChevronRight className="w-4 h-4 text-[#A8A8A8]" />
            </button>
            <button className="w-full flex justify-between items-center group">
              <span className="text-[13px] font-medium text-[#6B6B6B] dark:text-zinc-300 group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors">Syarat & Ketentuan</span>
              <ChevronRight className="w-4 h-4 text-[#A8A8A8]" />
            </button>
            <button className="w-full flex justify-between items-center group">
              <span className="text-[13px] font-medium text-[#6B6B6B] dark:text-zinc-300 group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors">Kebijakan Data Kesehatan</span>
              <ChevronRight className="w-4 h-4 text-[#A8A8A8]" />
            </button>
          </div>

          <div className="bg-[#F5F3FF] dark:bg-[#C4A8F5]/10 border-2 border-transparent bg-clip-border rounded-[16px] p-5" style={{ borderColor: 'rgba(196,168,245,0.3)' }}>
            <h3 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C4A8F5]" /> Komitmen Ovella
            </h3>
            <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-400 leading-relaxed">
              Datamu tidak pernah dijual. Tidak dibagikan ke pengiklan. Model AI dijalankan di perangkatmu jika memungkinkan.
            </p>
          </div>

        </div>
      </div>
    </MobileContainer>
  );
}