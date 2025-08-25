
import { Button } from "@/components/ui/button";
import { Calendar, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface CTAButtonsProps {
  onSearchOpen: () => void;
}

export const CTAButtons = ({ onSearchOpen }: CTAButtonsProps) => {
  return (
    <div className="hidden md:flex items-center space-x-2 xl:space-x-4">
      <Button 
        size="sm"
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
        onClick={() => window.open('https://calendly.com/onwardcareershelp/30min', '_blank')}
      >
        <Calendar className="w-4 h-4 mr-2" />
        <span className="hidden lg:inline">Free Call</span>
      </Button>
      {/* Search Button */}
      <button 
        title="Search" 
        aria-label="Search" 
        onClick={onSearchOpen} 
        className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110"
      >
        <Search className="w-5 h-5 text-blue-600 dark:text-blue-300" />
      </button>
      <ThemeToggle />
    </div>
  );
};
