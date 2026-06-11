import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { MobileContainer } from "./MobileContainer";
import logoImg from "../../imports/ChatGPT_Image_Jun_6__2026__01_40_34_PM.png";

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileContainer>
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-[#FF6B9D] to-[#C4A8F5] text-white">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center p-4 shadow-[0_8px_32px_rgba(196,168,245,0.4)] mb-6">
            <img src={logoImg} alt="Ovella Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Ovella</h1>
          <p className="text-lg font-medium opacity-90 tracking-wide">Kenali tubuhmu, dari dalam.</p>
        </motion.div>
      </div>
    </MobileContainer>
  );
}
