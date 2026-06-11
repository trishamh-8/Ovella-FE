import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { MobileContainer } from "./MobileContainer";
import { Calendar, Brain, Stethoscope, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Pantau Siklus Hormonalmu",
    description: "Catat menstruasi, gejala, dan pola harianmu dalam satu tempat.",
    icon: Calendar,
    bg: "from-[#FF6B9D]/20 to-transparent",
    iconColor: "text-[#FF6B9D]",
  },
  {
    id: 2,
    title: "AI yang Belajar Darimu",
    description: "Model AI Ovella membangun profil hormonal unikmu sendiri, bukan rata-rata orang lain.",
    icon: Brain,
    bg: "from-[#C4A8F5]/20 to-transparent",
    iconColor: "text-[#C4A8F5]",
  },
  {
    id: 3,
    title: "Jembatan ke Doktermu",
    description: "Bawa laporan gejala terstruktur ke konsultasi berikutnya.",
    icon: Stethoscope,
    bg: "from-[#FF2D78]/20 to-transparent",
    iconColor: "text-[#FF2D78]",
  },
];

export function Onboarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/setup");
    }
  };

  return (
    <MobileContainer>
      <div className="flex-1 flex flex-col bg-[#FAFAFA] dark:bg-[#0F0F0F]">
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-b ${slides[step].bg}`}
            >
              <div className="w-64 h-64 bg-white dark:bg-zinc-800 rounded-full shadow-[0_4px_40px_rgba(196,168,245,0.2)] flex items-center justify-center mb-12">
                {(() => {
                  const Icon = slides[step].icon;
                  return <Icon size={80} className={slides[step].iconColor} strokeWidth={1.5} />;
                })()}
              </div>
              <h2 className="text-[28px] font-bold text-center text-[#1A1A1A] dark:text-white mb-4">
                {slides[step].title}
              </h2>
              <p className="text-base text-[#6B6B6B] dark:text-zinc-400 text-center leading-relaxed">
                {slides[step].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-8 pb-12 flex flex-col items-center">
          <div className="flex gap-2 mb-8">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === step ? "w-8 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5]" : "w-2 bg-gray-200 dark:bg-zinc-800"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white font-semibold text-[17px] flex items-center justify-center shadow-[0_4px_20px_rgba(196,168,245,0.4)] active:scale-[0.98] transition-transform"
          >
            {step === slides.length - 1 ? "Mulai Sekarang" : "Lanjut"}
            {step < slides.length - 1 && <ArrowRight className="ml-2 w-5 h-5" />}
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
