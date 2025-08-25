
import { Button } from "@/components/ui/button";
import { Calendar, Home, Briefcase, Package, Mail, Gift } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section: string) => {
    onClose();
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePageNavigation = (path: string) => {
    onClose();
    navigate(path);
  };

  // Helper function to check if a path is active
  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  // Helper function to get nav link classes
  const getNavLinkClasses = (path: string) => {
    const baseClasses = "transition-all duration-300 hover:scale-105";
    const activeClasses = "text-blue-500 dark:text-blue-400 font-semibold";
    const inactiveClasses = "text-slate-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400";
    
    return `${baseClasses} ${isActivePath(path) ? activeClasses : inactiveClasses}`;
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700 animate-fade-in">
      <nav className="flex flex-col space-y-4 mt-4">
        <button onClick={() => handleNavigation('home')} className={`${getNavLinkClasses('/')} text-base text-left flex items-center space-x-2`}>
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
        <button onClick={() => handlePageNavigation('/services')} className={`${getNavLinkClasses('/services')} text-base text-left flex items-center space-x-2`}>
          <Briefcase className="w-4 h-4" />
          <span>Services</span>
        </button>
        <button onClick={() => handlePageNavigation('/packages')} className={`${getNavLinkClasses('/packages')} text-base text-left flex items-center space-x-2`}>
          <Package className="w-4 h-4" />
          <span>Packages</span>
        </button>
        <button onClick={() => handlePageNavigation('/refer')} className={`${getNavLinkClasses('/refer')} text-base text-left flex items-center space-x-2`}>
          <Gift className="w-4 h-4" />
          <span>Refer & Earn</span>
        </button>
        <button onClick={() => handlePageNavigation('/contact')} className={`${getNavLinkClasses('/contact')} text-base text-left flex items-center space-x-2`}>
          <Mail className="w-4 h-4" />
          <span>Contact</span>
        </button>
      </nav>
      <div className="flex flex-col space-y-3 mt-6">
        <Button 
          size="sm"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full"
          onClick={() => window.open('https://calendly.com/onwardcareershelp/30min', '_blank')}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book Free Call
        </Button>
      </div>
    </div>
  );
};
