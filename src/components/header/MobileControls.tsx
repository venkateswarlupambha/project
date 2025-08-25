
import { Search, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface MobileControlsProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onSearchOpen: () => void;
}

export const MobileControls = ({ isMenuOpen, onToggleMenu, onSearchOpen }: MobileControlsProps) => {
  return (
    <div className="md:hidden flex items-center gap-1 sm:gap-2">
      {/* Search */}
      <button 
        title="Search" 
        aria-label="Search" 
        onClick={onSearchOpen} 
        className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
      >
        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-300" />
      </button>
      <ThemeToggle />
      <button 
        className="text-slate-900 dark:text-white p-2 transition-all duration-300 hover:scale-110"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={onToggleMenu}
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>
  );
};
