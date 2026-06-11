import { useState } from "react";
import { useNavigate } from "react-router";
import { Sparkles, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { MobileContainer } from "./MobileContainer";

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/app");
  };

  return (
    <MobileContainer>
      <div className="flex flex-col h-full bg-[#FAFAFA] dark:bg-[#0A0A0A] p-6 relative overflow-y-auto no-scrollbar">
        {/* Background Decals */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF6B9D]/20 to-[#C4A8F5]/20 rounded-full blur-[60px] -translate-y-10 translate-x-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#FF6B9D]/10 to-[#C4A8F5]/10 rounded-full blur-[60px] translate-y-10 -translate-x-10 pointer-events-none"></div>

        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full relative z-10">
          <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] flex items-center justify-center text-white shadow-xl mb-8">
            <Sparkles className="w-8 h-8" />
          </div>

          <h1 className="text-[28px] font-bold text-[#1A1A1A] dark:text-white mb-2 leading-tight">Selamat Datang di<br/>Ovella</h1>
          <p className="text-[14px] text-[#6B6B6B] dark:text-zinc-400 mb-8">Masuk untuk melanjutkan perjalanan kesehatan hormonalmu.</p>

          <form onSubmit={handleLogin} className="space-y-4">
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
                  placeholder="••••••••" 
                  required
                  className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-[16px] pl-11 pr-11 py-3.5 text-[15px] text-[#1A1A1A] dark:text-white outline-none focus:border-[#FF6B9D] transition-colors"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A8A8A8]">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <button type="button" className="text-[13px] font-semibold text-[#FF6B9D]">Lupa password?</button>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white rounded-full font-bold text-[15px] shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform mt-4"
            >
              Masuk
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[13px] text-[#6B6B6B] dark:text-zinc-400">
              Belum punya akun?{' '}
              <button onClick={() => navigate("/register")} className="font-bold text-[#1A1A1A] dark:text-white underline decoration-[#FF6B9D] decoration-2 underline-offset-4">
                Daftar sekarang
              </button>
            </p>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}