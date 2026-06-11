import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, MessageSquare, Search } from "lucide-react";
import { MobileContainer } from "./MobileContainer";

const chats = [
  {
    id: 1,
    doctor: "dr. Sarah Sp.OG",
    specialty: "Dokter Kandungan",
    lastMessage: "Hasil laporan Anda sudah saya cek, hormon di fase luteal terlihat...",
    time: "10:30",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    doctor: "dr. Budi Santoso",
    specialty: "Ahli Gizi Klinis",
    lastMessage: "Baik, mari kita fokus kurangi karbohidrat olahan di minggu ini.",
    time: "Kemarin",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    doctor: "Klinik Medika Utama",
    specialty: "Layanan Admin",
    lastMessage: "Jadwal kontrol Anda sudah dikonfirmasi untuk tanggal 12 Juni.",
    time: "Senin",
    unread: 0,
    online: false,
  }
];

export function DoctorInbox() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A]">
        {/* Header */}
        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md pt-14 pb-4 px-4 flex items-center gap-3 border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-20">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
            <ChevronLeft className="w-6 h-6 text-[#1A1A1A] dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-[17px] font-bold text-[#1A1A1A] dark:text-white leading-tight">Kotak Masuk</h1>
            <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-400">Riwayat Konsultasi & Pesan</p>
          </div>
          <button className="p-2 rounded-full text-[#1A1A1A] dark:text-white bg-gray-100 dark:bg-zinc-800">
            <Search className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {chats.map(chat => (
            <div 
              key={chat.id} 
              className="bg-white dark:bg-zinc-900 rounded-[20px] p-4 flex gap-4 cursor-pointer active:scale-[0.98] transition-all border border-gray-100 dark:border-zinc-800 shadow-sm"
              onClick={() => {}} // Navigation to specific chat could go here
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] flex items-center justify-center text-white font-bold text-[18px]">
                  {chat.doctor.charAt(0)}
                </div>
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
                )}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white truncate">{chat.doctor}</h3>
                  <span className={`text-[11px] font-medium whitespace-nowrap ${chat.unread > 0 ? 'text-[#FF6B9D]' : 'text-[#A8A8A8]'}`}>{chat.time}</span>
                </div>
                <p className="text-[12px] text-[#A8A8A8] mb-1">{chat.specialty}</p>
                <p className={`text-[13px] truncate ${chat.unread > 0 ? 'text-[#1A1A1A] dark:text-white font-semibold' : 'text-[#6B6B6B] dark:text-zinc-400'}`}>
                  {chat.lastMessage}
                </p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-[#FF6B9D] flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-6">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-8 text-center pt-8 border-t border-gray-100 dark:border-zinc-800">
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-4 text-[#A8A8A8]">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h4 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-2">Belum ada pesan baru</h4>
            <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400 max-w-[250px] mx-auto">
              Semua percakapan dan ringkasan dari dokter akan muncul di sini.
            </p>
            <button onClick={() => navigate("/doctor-hub")} className="mt-6 px-6 py-2.5 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full font-bold text-[14px] shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform">
              Cari Dokter
            </button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}