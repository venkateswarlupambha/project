
import { useState } from "react";
import { SiteSearch } from "@/components/SiteSearch";
import { useNavigate, useLocation } from "react-router-dom";
import { DesktopNav } from "@/components/header/DesktopNav";
import { CTAButtons } from "@/components/header/CTAButtons";
import { MobileControls } from "@/components/header/MobileControls";
import { MobileMenu } from "@/components/header/MobileMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  if (typeof window !== "undefined") {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  const handleNavigation = (section: string) => {
    setIsMenuOpen(false);
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
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center animate-scale-in">
              <span className="text-white font-bold text-lg sm:text-xl">O</span>
            </div>
            <h1 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              Onward Careers
            </h1>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav 
            onNavigation={handleNavigation}
            onPageNavigation={handlePageNavigation}
          />

          {/* CTA & Utility Buttons */}
          <CTAButtons onSearchOpen={() => setSearchOpen(true)} />

          {/* Mobile Menu Button/Tools */}
          <MobileControls 
            isMenuOpen={isMenuOpen}
            onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            onSearchOpen={() => setSearchOpen(true)}
          />
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
      <SiteSearch open={searchOpen} setOpen={setSearchOpen} />
    </header>
  );
};
