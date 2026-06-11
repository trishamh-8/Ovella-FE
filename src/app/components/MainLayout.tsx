import { Outlet, NavLink, useLocation, useNavigate } from "react-router";
import { Home, Calendar as CalendarIcon, Sparkles, BarChart2, User, MessageCircle } from "lucide-react";
import { MobileContainer } from "./MobileContainer";

export function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Only show the floating AI button on specific pages where the user requested it
  const showFAB = ["/app", "/app/cycle", "/app/reports"].includes(location.pathname);

  return (
    <MobileContainer>
      <div className="w-full flex-1 flex flex-col bg-[#FAFAFA] dark:bg-[#0F0F0F] relative overflow-hidden">
        {/* Main Content Area */}
        <div className="absolute inset-0 overflow-y-auto no-scrollbar pb-[100px] flex flex-col">
          <Outlet />
        </div>

        {showFAB && (
          <button 
            onClick={() => navigate("/ai-chat")}
            className="absolute bottom-24 right-4 w-12 h-12 bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] rounded-full flex items-center justify-center text-white shadow-lg z-40 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}

        <nav className="absolute bottom-0 left-0 right-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-t border-gray-100 dark:border-zinc-800 px-6 py-2 pb-safe flex justify-between items-center z-50">
          <NavItem to="/app" icon={Home} label="Beranda" end />
          <NavItem to="/app/cycle" icon={CalendarIcon} label="Siklus" />
          
          <div className="relative -top-5 flex flex-col items-center justify-center w-16">
            <NavLink
              to="/app/ai"
              className="flex flex-col items-center justify-center group"
            >
              {({ isActive }) => (
                <>
                  <div className={`
                    w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-[0_8px_16px_rgba(255,107,157,0.3)]
                    ${isActive ? 'bg-gradient-to-r from-[#FF2D78] to-[#FF6B9D] text-white' : 'bg-gradient-to-r from-[#FF6B9D] to-[#C4A8F5] text-white'}
                    transition-transform active:scale-95 border-[4px] border-[#FAFAFA] dark:border-[#0F0F0F] z-50
                  `}>
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <span className={`text-[10px] font-bold mt-1 absolute -bottom-4 whitespace-nowrap ${isActive ? 'text-[#FF2D78]' : 'text-[#FF6B9D]'}`}>Ovella AI</span>
                </>
              )}
            </NavLink>
          </div>

          <NavItem to="/app/reports" icon={BarChart2} label="Laporan" />
          <NavItem to="/app/profile" icon={User} label="Profil" />
        </nav>
      </div>
    </MobileContainer>
  );
}

function NavItem({ to, icon: Icon, label, end }: { to: string; icon: any; label: string; end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `
        flex flex-col items-center gap-1 w-12 py-1
        ${isActive ? 'text-[#FF6B9D]' : 'text-[#A8A8A8] dark:text-zinc-500'}
        transition-colors
      `}
    >
      <Icon className="w-6 h-6" strokeWidth={1.5} />
      <span className="text-[10px] font-medium">{label}</span>
    </NavLink>
  );
}