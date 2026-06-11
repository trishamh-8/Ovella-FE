import { useState } from "react";
import { useNavigate } from "react-router";
import { Sparkles, Eye, EyeOff, Lock, Mail, User, ChevronLeft } from "lucide-react";
import { MobileContainer } from "./MobileContainer";

export function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding");
  };

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] p-6 relative overflow-y-auto no-scrollbar">
        {/* Background Decals */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF6B9D]/20 to-[#C4A8F5]/20 rounded-full blur-[60px] -translate-y-10 translate-x-10 pointer-events-none"></div>
        
        <button onClick={() => navigate(-1)} className="absolute top-6 left-6 p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 z-20">
          <ChevronLeft className="w-6 h-6 text-[#1A1A1A] dark:text-white" />
        </button>

        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full relative z-10 pt-10">
          <h1 className="text-[28px] font-bold text-[#1A1A1A] dark:text-white mb-2 leading-tight">Buat Akun</h1>
          <p className="text-[14px] text-[#6B6B6B] dark:text-zinc-400 mb-8">Daftar untuk mempersonalisasi analitik siklus dan insight AI-mu.</p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-[13px] font-semibold text-[#1A1A1A] dark:text-white mb-1.5 ml-1">Nama Panggilan</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8A8A8]" />
                <input 
                  type="text" 
                  placeholder="Mis. Sarah" 
                  required
                  className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-[16px] pl-11 pr-4 py-3.5 text-[15px] text-[#1A1A1A] dark:text-white outline-none focus:border-[#FF6B9D] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#1A1A1A] dark:text-white mb-1.5 ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8A8A8]" />
                <input 
                  type="email" 
                  placeholder="nama@email.com" 
                  required
                  className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-[16px] pl-11 pr-4 py-3.5 text-[15px] text-[#1A1A1A] dark:text-white outline-none focus:border-[#FF6B9D] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#1A1A1A] dark:text-white mb-1.5 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A8A8A8]" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Minimal 8 karakter" 
                  required
                  minLength={8}
                  className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-[16px] pl-11 pr-11 py-3.5 text-[15px] text-[#1A1A1A] dark:text-white outline-none focus:border-[#FF6B9D] transition-colors"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A8A8A8]">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-[#1A1A1A] to-[#333333] dark:from-white dark:to-gray-200 text-white dark:text-[#1A1A1A] rounded-full font-bold text-[15px] shadow-lg active:scale-[0.98] transition-transform"
              >
                Lanjut
              </button>
            </div>
          </form>

          <p className="text-[11px] text-center text-[#A8A8A8] mt-6">
            Dengan mendaftar, kamu menyetujui Ketentuan Layanan & Kebijakan Privasi Ovella yang mengenkripsi data kesehatanmu.
          </p>

          <div className="mt-8 text-center pb-8">
            <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400">
              Sudah punya akun?{' '}
              <button onClick={() => navigate("/login")} className="font-bold text-[#1A1A1A] dark:text-white underline decoration-[#C4A8F5] decoration-2 underline-offset-4">
                Masuk
              </button>
            </p>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}