import { ReactNode } from "react";

export function MobileContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className="h-[100dvh] bg-gray-100 dark:bg-[#0F0F0F] flex items-center justify-center font-sans overflow-hidden">
      <div className={`w-full max-w-[480px] h-[100dvh] sm:h-[844px] bg-[#FAFAFA] dark:bg-[#0F0F0F] sm:rounded-[40px] sm:shadow-2xl overflow-hidden relative flex flex-col ${className}`}>
        {children}
      </div>
    </div>
  );
}