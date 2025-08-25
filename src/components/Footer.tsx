import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Calendar, 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram,
  ArrowUp,
  MapPin,
  Phone,
  Globe,
  CheckCircle,
  Users
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-gray-300 dark:text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <h3 className="text-2xl font-bold text-white dark:text-white">Onward Careers</h3>
            </div>
            <p className="max-w-xs text-gray-400">
              Professional services tailored to help you succeed in today's competitive market.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-2">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/packages" className="hover:text-blue-400 transition-colors">Packages</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/refer" className="hover:text-blue-400 transition-colors">Refer & Earn</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/community" className="hover:text-blue-400 transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white dark:text-white">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/linkedin-optimization" className="hover:text-blue-400 transition-colors">LinkedIn Optimization</Link></li>
              <li><Link to="/services/resume-writing" className="hover:text-blue-400 transition-colors">Resume Writing</Link></li>
              <li><Link to="/services/cover-letter-writing" className="hover:text-blue-400 transition-colors">Cover Letter</Link></li>
              <li><Link to="/services/video-services" className="hover:text-blue-400 transition-colors">Video Services</Link></li>
              <li><Link to="/services/social-media-management" className="hover:text-blue-400 transition-colors">Social Media Management</Link></li>
            </ul>
          </div>

          {/* Contact Us & Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white dark:text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                <span className="text-sm">123 Business Avenue, Suite 100<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">info@onwardcareers.com</span>
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <Button 
                variant="outline"
                size="sm"
                className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                onClick={() => window.open('https://wa.me/447553409836', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                size="sm"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                onClick={() => window.open('https://calendly.com/onwardcareershelp/30min', '_blank')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Free Consultation
              </Button>
              <Link to="/community" className="block">
                <Button 
                  size="sm"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Countries We Serve */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="w-5 h-5 text-blue-400" />
            <h4 className="text-lg font-semibold text-white">Countries We Serve</h4>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-gray-400">
            {[
              "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", 
              "India", "Japan", "Singapore", "United Arab Emirates", "Brazil", "South Africa",
              "Spain", "Italy", "Netherlands"
            ].map((country, index, array) => (
              <span key={country}>
                {country}
                {index < array.length - 1 && <span className="mx-2">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Payment Methods & Certifications */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Payment Methods</h4>
            <div className="flex space-x-4">
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">VISA</span>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-xs font-bold text-red-600">MC</span>
              </div>
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">PayPal</span>
              </div>
              <div className="w-12 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">Apple</span>
              </div>
              <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">GPay</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Certifications</h4>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Verified Company</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Certified Professionals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4 md:mb-0">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
              <Link to="/gdpr" className="hover:text-blue-400 transition-colors">GDPR Compliance</Link>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-blue-400"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
          <div className="text-center text-gray-400 text-sm">
            © 2025 Onward Careers. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
