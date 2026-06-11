import { useState } from "react";
import { ChevronLeft, Check, Sparkles, X } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";
import { motion, AnimatePresence } from "motion/react";

export function PremiumUpgrade() {
  const navigate = useNavigate();
  const [view, setView] = useState<"overview" | "success" | "expiry">("overview");

  const features = [
    { name: "Catat siklus & gejala", free: true, premium: true },
    { name: "Kalender menstruasi", free: true, premium: true },
    { name: "Hormonal Weather™ (3 hari)", free: true, premium: false },
    { name: "Hormonal Weather™ (7 hari)", free: true, premium: true, freeLimit: true },
    { name: "Hormonal Fingerprint™ (basic)", free: true, premium: true, freeLimit: true },
    { name: "Hormonal Fingerprint™ (lengkap)", free: false, premium: true },
    { name: "Laporan Klinik (1/bulan)", free: true, premium: false },
    { name: "Laporan Klinik (tak terbatas)", free: false, premium: true },
    { name: "Tanya Ovella AI (20 pesan/hari)", free: true, premium: false, freeLimit: true },
    { name: "Tanya Ovella AI (tak terbatas)", free: false, premium: true },
    { name: "Hormonal Twin™ Matching (terbatas)", free: true, premium: true, freeLimit: true },
    { name: "Luteal Intelligence™", free: true, premium: true, freeLimit: true },
    { name: "Anomaly Detection AI", free: true, premium: true, freeLimit: true },
    { name: "Priority customer support", free: false, premium: true },
  ];

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden relative pb-32">
        <AnimatePresence mode="wait">
          {view === "overview" && (
            <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full overflow-y-auto no-scrollbar">
              <div className="bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] pt-14 pb-12 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
                <button onClick={() => navigate(-1)} className="absolute top-14 left-4 p-2 rounded-full hover:bg-white/20 text-white z-10 flex items-center gap-1">
                  <ChevronLeft size={20} /> <span className="text-[14px] font-medium">Kembali</span>
                </button>
                <div className="mt-12 relative z-10">
                  <h1 className="text-[32px] font-bold text-white leading-tight mb-2 flex items-center gap-2">
                    <Sparkles className="w-8 h-8" /> Ovella Premium
                  </h1>
                  <p className="text-[15px] text-white/90">Buka potensi penuh model AI hormonalmu</p>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-t-[32px] -mt-6 p-6 relative z-20 shadow-sm border-t border-gray-100 dark:border-zinc-800">
                <h3 className="text-[20px] font-bold text-[#1A1A1A] dark:text-white mb-6">Yang kamu dapatkan:</h3>
                
                <div className="space-y-1 mb-8">
                  <div className="flex px-4 py-2 border-b border-gray-100 dark:border-zinc-800">
                    <div className="flex-1 text-[12px] font-bold text-[#A8A8A8] uppercase tracking-wider">Feature</div>
                    <div className="w-16 text-center text-[12px] font-bold text-[#A8A8A8] uppercase tracking-wider">Gratis</div>
                    <div className="w-16 text-center text-[12px] font-bold text-[#FF6B9D] uppercase tracking-wider">Premium</div>
                  </div>
                  {features.map((f, i) => (
                    <div key={i} className={`flex items-center px-4 py-3 rounded-lg ${i % 2 === 0 ? 'bg-[#FAFAFA] dark:bg-zinc-800/50' : ''}`}>
                      <div className="flex-1 text-[13px] font-medium text-[#1A1A1A] dark:text-white pr-2">{f.name}</div>
                      <div className="w-16 flex justify-center">
                        {f.free ? (
                          f.freeLimit ? (
                            <span className="text-[10px] bg-[#FFF4ED] text-[#7A3A00] px-2 py-1 rounded-full">Terbatas</span>
                          ) : (
                            <Check className="w-4 h-4 text-[#4ADE80]" />
                          )
                        ) : (
                          <span className="text-[#A8A8A8]">—</span>
                        )}
                      </div>
                      <div className="w-16 flex justify-center">
                        {f.premium ? (
                          <Sparkles className="w-4 h-4 text-[#FF6B9D]" />
                        ) : (
                          <span className="text-[#A8A8A8]">—</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6 pt-4 px-6 snap-x -mx-6">
                  <div className="snap-center shrink-0 w-[240px] bg-white dark:bg-zinc-900 rounded-[20px] p-5 border border-gray-200 dark:border-zinc-800 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[18px] font-bold text-[#1A1A1A] dark:text-white mb-1">Rp 29.000<span className="text-[14px] text-[#6B6B6B] font-normal">/bulan</span></h4>
                      <p className="text-[13px] text-[#6B6B6B]">Fleksibel, batal kapan saja</p>
                    </div>
                    <button className="mt-6 w-full py-3 border-2 border-gray-200 dark:border-zinc-700 rounded-full font-bold text-[14px] text-[#1A1A1A] dark:text-white active:scale-95 transition-transform">
                      Pilih Bulanan
                    </button>
                  </div>

                  <div className="snap-center shrink-0 w-[240px] bg-gradient-to-br from-[#FF6B9D]/10 to-[#C4A8F5]/10 dark:from-[#FF6B9D]/20 dark:to-[#C4A8F5]/20 rounded-[24px] p-5 border-[3px] border-[#FF6B9D] flex flex-col justify-between relative shadow-lg">
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF2D78] text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap z-10">
                      ✦ PALING HEMAT
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-[#1A1A1A] dark:text-white mb-1 mt-2">Rp 249.000<span className="text-[14px] text-[#6B6B6B] font-normal">/tahun</span></h4>
                      <p className="text-[13px] text-[#FF2D78] font-medium">Rp 20.750/bulan · Hemat ~28%</p>
                    </div>
                    <button className="mt-6 w-full py-3 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full font-bold text-[14px] shadow-md active:scale-95 transition-transform">
                      Pilih Tahunan
                    </button>
                  </div>

                  <div className="snap-center shrink-0 w-[240px] bg-white dark:bg-zinc-900 rounded-[20px] p-5 border border-gray-200 dark:border-zinc-800 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[18px] font-bold text-[#1A1A1A] dark:text-white mb-1">Rp 85.000<span className="text-[14px] text-[#6B6B6B] font-normal">/3 bln</span></h4>
                      <p className="text-[13px] text-[#6B6B6B]">Rp 28.300/bulan</p>
                    </div>
                    <button className="mt-6 w-full py-3 border-2 border-gray-200 dark:border-zinc-700 rounded-full font-bold text-[14px] text-[#1A1A1A] dark:text-white active:scale-95 transition-transform">
                      Pilih 3 Bulan
                    </button>
                  </div>
                </div>

                <div className="h-40"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 p-6 z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <h3 className="text-center text-[16px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] mb-3">
                  🎁 Coba 7 Hari Gratis
                </h3>
                <button onClick={() => setView("success")} className="w-full py-4 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full font-bold text-[15px] shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform">
                  Mulai Gratis Sekarang
                </button>
                <p className="text-[11px] text-center text-[#A8A8A8] mt-3 px-4">
                  Tidak perlu kartu kredit untuk memulai. Ditagih setelah masa coba berakhir.
                </p>
                
              </div>
            </motion.div>
          )}

          {view === "success" && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center bg-white dark:bg-zinc-900">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }} className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] flex items-center justify-center text-white shadow-xl mb-6">
                <Check className="w-10 h-10" />
              </motion.div>
              <h1 className="text-[32px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] mb-2">🎉 Ovella Premium Aktif!</h1>
              <p className="text-[15px] text-[#6B6B6B] dark:text-zinc-400 mb-8">Masa coba gratis 7 hari dimulai hari ini</p>

              <div className="w-full max-w-sm bg-[#FAFAFA] dark:bg-zinc-800 rounded-[20px] p-6 text-left mb-6">
                <h3 className="text-[15px] font-bold text-[#1A1A1A] dark:text-white mb-4">Yang sekarang bisa kamu akses:</h3>
                <ul className="space-y-3">
                  {[
                    "Hormonal Fingerprint™ lengkap",
                    "Hormonal Weather™ 7 hari penuh",
                    "Tanya Ovella AI tanpa batas",
                    "Laporan Klinik tak terbatas",
                    "Hormonal Twin™ Matching"
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-[13px] font-medium text-[#1A1A1A] dark:text-white">
                      <Sparkles className="w-4 h-4 text-[#FF6B9D] shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full max-w-sm bg-[#FFF0F7] dark:bg-[#FF2D78]/10 border border-[#FF2D78]/20 rounded-[20px] p-5 text-left mb-10">
                <h4 className="text-[14px] font-bold text-[#1A1A1A] dark:text-white mb-1 flex items-center gap-2">📅 Masa coba berakhir: 13 Juni 2026</h4>
                <p className="text-[12px] text-[#6B6B6B] dark:text-zinc-400 mb-4">Kami akan mengingatkanmu 2 hari sebelum berakhir.</p>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold text-[#1A1A1A] dark:text-white">Aktifkan pengingat</span>
                  <div className="w-11 h-6 bg-[#4ADE80] rounded-full p-1 flex justify-end">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <button onClick={() => navigate("/app")} className="w-full max-w-sm py-4 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full font-bold text-[15px] shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform">
                Mulai Jelajahi Premium →
              </button>
            </motion.div>
          )}

          {view === "expiry" && (
            <div className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white dark:bg-zinc-900 w-full max-w-sm rounded-[24px] p-6 shadow-2xl relative border-2 border-[#FF6B9D]/30">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-zinc-800">
                  <span className="text-[32px]">⏰</span>
                </div>
                
                <div className="mt-8 text-center mb-6">
                  <h2 className="text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] mb-1">Masa Coba Berakhir dalam 2 Hari</h2>
                  <p className="text-[13px] text-[#A8A8A8]">13 Juni 2026 · 48 jam tersisa</p>
                </div>

                <div className="bg-[#FAFAFA] dark:bg-zinc-800 rounded-[16px] p-4 mb-6">
                  <p className="text-[11px] font-bold text-[#A8A8A8] uppercase tracking-wider mb-3">Selama masa coba, kamu:</p>
                  <ul className="space-y-2">
                    <li className="text-[13px] text-[#1A1A1A] dark:text-white flex items-start gap-2"><span className="text-[#FF6B9D]">•</span> Membaca 4 Hormonal Weather™ prediction</li>
                    <li className="text-[13px] text-[#1A1A1A] dark:text-white flex items-start gap-2"><span className="text-[#FF6B9D]">•</span> Menerima 12 AI insight dari Fingerprint™</li>
                    <li className="text-[13px] text-[#1A1A1A] dark:text-white flex items-start gap-2"><span className="text-[#FF6B9D]">•</span> Membuat 1 Laporan Klinik</li>
                    <li className="text-[13px] text-[#1A1A1A] dark:text-white flex items-start gap-2"><span className="text-[#FF6B9D]">•</span> Menemukan 3 Hormonal Twin</li>
                  </ul>
                </div>

                <p className="text-center text-[15px] font-medium text-[#1A1A1A] dark:text-white mb-6">Jangan putuskan perjalanan hormonal kamu.</p>

                <div className="text-center mb-6">
                  <p className="text-[14px] font-bold">Lanjutkan Premium: Rp 29.000/bulan</p>
                  <p className="text-[12px] text-[#FF2D78]">atau Rp 249.000/tahun (hemat ~28%)</p>
                </div>

                <button onClick={() => setView("success")} className="w-full py-4 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full font-bold text-[15px] shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform mb-3">
                  Berlangganan Sekarang
                </button>
                <button onClick={() => setView("overview")} className="w-full py-2 text-[#A8A8A8] text-[13px] font-medium hover:text-[#6B6B6B]">
                  Ingatkan Lagi Besok
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </MobileContainer>
  );
}