import { useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import * as Switch from '@radix-ui/react-switch';

export function ReminderSettings() {
  const navigate = useNavigate();
  const [masterToggle, setMasterToggle] = useState(true);

  const ToggleRow = ({ label, subtitle, defaultOn, showTime }: { label: string, subtitle?: string, defaultOn?: boolean, showTime?: string }) => {
    const [isOn, setIsOn] = useState(defaultOn || false);
    
    return (
      <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-zinc-800 last:border-0">
        <div className="flex-1 pr-4">
          <h4 className={`text-[14px] font-medium ${masterToggle && isOn ? "text-[#1A1A1A] dark:text-white" : "text-[#6B6B6B]"}`}>{label}</h4>
          {subtitle && <p className="text-[12px] text-[#A8A8A8] mt-0.5">{subtitle}</p>}
          {showTime && isOn && masterToggle && (
            <div className="flex items-center gap-1 mt-1.5 text-[12px] font-bold text-[#FF6B9D]">
              {showTime} <ChevronDown className="w-3 h-3" />
            </div>
          )}
        </div>
        <Switch.Root
          checked={masterToggle && isOn}
          onCheckedChange={setIsOn}
          disabled={!masterToggle}
          className={`w-11 h-6 rounded-full relative shadow-inner transition-colors disabled:opacity-50
            ${masterToggle && isOn ? 'bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]' : 'bg-gray-200 dark:bg-zinc-700'}`}
        >
          <Switch.Thumb className={`block w-5 h-5 bg-white rounded-full transition-transform transform ${masterToggle && isOn ? 'translate-x-5' : 'translate-x-0.5'} shadow-sm`} />
        </Switch.Root>
      </div>
    );
  };

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden">
        
        <div className="pt-14 pb-4 px-6 flex items-center justify-between bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
              <ChevronLeft size={24} className="text-[#1A1A1A] dark:text-white" />
            </button>
            <h1 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white">Pengingat & Notifikasi</h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-12">
          
          <div className="px-6 py-6 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 mb-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-bold text-[#1A1A1A] dark:text-white">Aktifkan semua notifikasi</h3>
              <Switch.Root
                checked={masterToggle}
                onCheckedChange={setMasterToggle}
                className={`w-12 h-7 rounded-full relative shadow-inner transition-colors
                  ${masterToggle ? 'bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]' : 'bg-gray-200 dark:bg-zinc-700'}`}
              >
                <Switch.Thumb className={`block w-6 h-6 bg-white rounded-full transition-transform transform ${masterToggle ? 'translate-x-5' : 'translate-x-0.5'} shadow-sm`} />
              </Switch.Root>
            </div>
          </div>

          <div className="px-6 py-4 bg-white dark:bg-zinc-900 border-y border-gray-100 dark:border-zinc-800 mb-2">
            <h3 className="text-[12px] font-bold text-[#A8A8A8] uppercase tracking-wider mb-2">Pengingat Harian</h3>
            <ToggleRow label="Pengingat Catat Harian" defaultOn={true} showTime="Setiap hari, 08:00" />
            <ToggleRow label="Pengingat Minum Air (luteal)" defaultOn={false} />
          </div>

          <div className="px-6 py-4 bg-white dark:bg-zinc-900 border-y border-gray-100 dark:border-zinc-800 mb-2">
            <h3 className="text-[12px] font-bold text-[#A8A8A8] uppercase tracking-wider mb-2">Notifikasi Siklus</h3>
            <ToggleRow label="Prediksi Menstruasi" subtitle="3 hari sebelum" defaultOn={true} />
            <ToggleRow label="Jendela Ovulasi" defaultOn={true} />
            <ToggleRow label="Transisi Fase" subtitle="Saat memasuki fase baru" defaultOn={true} />
            <ToggleRow label="PMS Countdown" subtitle="7 hari sebelum menstruasi" defaultOn={true} />
          </div>

          <div className="px-6 py-4 bg-white dark:bg-zinc-900 border-y border-gray-100 dark:border-zinc-800 mb-2">
            <h3 className="text-[12px] font-bold text-[#A8A8A8] uppercase tracking-wider mb-2">Notifikasi AI</h3>
            <ToggleRow label="AI Insight Baru" defaultOn={true} />
            <ToggleRow label="Hormonal Fingerprint™ Update" subtitle="Setelah siklus baru" defaultOn={true} />
            <ToggleRow label="Hormonal Weather™ Pagi" showTime="Setiap pagi, 07:00" defaultOn={true} />
          </div>

          <div className="px-6 py-4 bg-white dark:bg-zinc-900 border-y border-gray-100 dark:border-zinc-800 mb-8">
            <h3 className="text-[12px] font-bold text-[#A8A8A8] uppercase tracking-wider mb-2">Umum</h3>
            <ToggleRow label="Email mingguan (summary)" defaultOn={false} />
            <ToggleRow label="Pengingat Premium" subtitle="Jika gratis" defaultOn={true} />
            <ToggleRow label="Update aplikasi" defaultOn={true} />
          </div>

          <div className="px-6 flex justify-center">
            <button className="text-[14px] font-medium text-red-500 hover:text-red-600 transition-colors" onClick={() => setMasterToggle(false)}>
              Nonaktifkan Semua Notifikasi
            </button>
          </div>

        </div>
      </div>
    </MobileContainer>
  );
}