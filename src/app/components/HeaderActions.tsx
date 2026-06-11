import { Bell, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router";

export function HeaderActions() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2">
      <button onClick={() => navigate("/inbox")} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 dark:bg-zinc-800/50 shadow-sm border border-gray-100/50 dark:border-zinc-700/50 text-[#1A1A1A] dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-700 active:scale-95 transition-all backdrop-blur-sm">
        <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
      </button>
      <button onClick={() => navigate("/notifications")} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 dark:bg-zinc-800/50 shadow-sm border border-gray-100/50 dark:border-zinc-700/50 text-[#1A1A1A] dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-700 active:scale-95 transition-all backdrop-blur-sm relative">
        <Bell className="w-5 h-5" strokeWidth={1.5} />
        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#FF2D78] rounded-full border border-white dark:border-zinc-800"></span>
      </button>
    </div>
  );
}