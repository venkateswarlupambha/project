
import { Home, Briefcase, Package, Gift, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface DesktopNavProps {
  onNavigation: (section: string) => void;
  onPageNavigation: (path: string) => void;
}

export const DesktopNav = ({ onNavigation, onPageNavigation }: DesktopNavProps) => {
  const location = useLocation();

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

  return (
    <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
      <button onClick={() => onNavigation('home')} className={`${getNavLinkClasses('/')} flex items-center space-x-2`}>
        <Home className="w-4 h-4" />
        <span>Home</span>
      </button>
      <button onClick={() => onPageNavigation('/services')} className={`${getNavLinkClasses('/services')} flex items-center space-x-2`}>
        <Briefcase className="w-4 h-4" />
        <span>Services</span>
      </button>
      <button onClick={() => onPageNavigation('/packages')} className={`${getNavLinkClasses('/packages')} flex items-center space-x-2`}>
        <Package className="w-4 h-4" />
        <span>Packages</span>
      </button>
      <button onClick={() => onPageNavigation('/refer')} className={`${getNavLinkClasses('/refer')} flex items-center space-x-2`}>
        <Gift className="w-4 h-4" />
        <span>Refer & Earn</span>
      </button>
      <button onClick={() => onPageNavigation('/contact')} className={`${getNavLinkClasses('/contact')} flex items-center space-x-2`}>
        <Mail className="w-4 h-4" />
        <span>Contact</span>
      </button>
    </nav>
  );
};
