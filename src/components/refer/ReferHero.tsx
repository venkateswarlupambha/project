
import { Gift } from "lucide-react";

interface ReferHeroProps {
  onScrollToForm: () => void;
}

export const ReferHero = ({ onScrollToForm }: ReferHeroProps) => {
  return (
    <div className="pt-24 md:pt-28 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <button
          onClick={onScrollToForm}
          className="w-full md:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-purple-700 shadow-2xl px-8 py-5 md:py-4 mb-7 mt-3 font-bold text-2xl text-white flex items-center justify-center gap-4 hover:scale-105 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 outline-none border-2 border-blue-400/40 focus:ring-4 focus:ring-purple-400/30 group"
          aria-label="Click to Refer & Get a Service Free"
          title="Click to scroll and refer"
        >
          <Gift className="w-7 h-7 mr-2 group-hover:rotate-12 transition-transform duration-300" />
          <span className="tracking-tight">Bring a Friend, <span className="text-yellow-300 animate-pulse">Get 1 Service Free!</span></span>
        </button>
      </div>
    </div>
  );
};
