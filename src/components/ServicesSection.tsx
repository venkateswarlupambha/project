import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  FileText, 
  Users, 
  Palette, 
  Video, 
  Megaphone,
  ChevronRight,
  Star,
  Code
} from "lucide-react";
import { ServiceModal } from "@/components/ServiceModal";
import { useNavigate } from "react-router-dom";

const serviceCategories = [
  {
    id: "career",
    title: "Career Services",
    description: "Professional resume writing, optimization, and career consultation",
    icon: Briefcase,
    color: "blue",
    route: "/services/career-services",
    services: [
      "Resume Writing",
      "Resume Revision", 
      "Cover Letter Writing",
      "LinkedIn Profile Optimization",
      "Naukri Profile Optimization",
      "Indeed Profile Optimization",
      "ATS Optimization",
      "Career Consultation (1:1)",
      "Job Application Tracker Setup",
      "Mock Interview Preparation",
      "Portfolio Building (PDF/Web)",
      "Custom Resume Templates",
      "Video Resume Creation"
    ]
  },
  {
    id: "linkedin",
    title: "LinkedIn Services",
    description: "Complete LinkedIn optimization and content strategy",
    icon: Users,
    color: "purple",
    route: "/services/linkedin-services",
    services: [
      "LinkedIn Profile Optimization (Personal)",
      "LinkedIn Business Page Creation",
      "LinkedIn Banner Design",
      "LinkedIn Headline & Summary Optimization",
      "LinkedIn Experience & Skill Setup",
      "LinkedIn Post Creation (Text/Image/Carousel)",
      "LinkedIn Newsletter Design & Publishing",
      "LinkedIn PDF Portfolio Creation",
      "LinkedIn Hashtag Strategy",
      "LinkedIn Engagement & Growth Strategy"
    ]
  },
  {
    id: "design",
    title: "Creative Design",
    description: "Professional design services for personal and business branding",
    icon: Palette,
    color: "green",
    route: "/services/design-services",
    services: [
      "Professional Photo Editing",
      "Background Removal",
      "Image Retouching (Skin, Light, Details)",
      "Profile Picture Editing (Social & Corporate)",
      "Branded Banner Design (LinkedIn/YouTube/Resume)",
      "PowerPoint Presentation Design",
      "Email Signature Design",
      "Digital Business Card Creation",
      "Custom QR Code Design",
      "Poster Design (Events/Hiring/Promotions)",
      "Flyer Design (Digital/Printable)",
      "Function Album Design (Birthdays/Weddings/Events)"
    ]
  },
  {
    id: "video",
    title: "Video Editing",
    description: "Professional video editing for personal and business use",
    icon: Video,
    color: "orange",
    route: "/services/video-services",
    services: [
      "YouTube Video Editing",
      "Instagram Reels/Shorts Editing",
      "Self-Introduction & Interview Videos",
      "Subtitles & Captions (SRT or Embedded)",
      "Transitions, Music, Text Effects",
      "Video Resume Creation",
      "Event Video Highlights/Trailers",
      "Logo Animation (Intro/Outro)"
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Complete digital marketing and social media management",
    icon: Megaphone,
    color: "pink",
    route: "/services/marketing-services",
    services: [
      "Social Media Management (Instagram, LinkedIn, Facebook)",
      "WhatsApp Marketing (Broadcast, Auto-reply setup)",
      "Email Marketing Campaigns (Mailchimp, Brevo, etc.)",
      "Newsletter Design & Delivery",
      "Content Calendar (30/60 Days)",
      "Social Media Post Templates (Canva/PSD)",
      "Instagram Profile Optimization",
      "YouTube Channel Setup & Optimization",
      "Ad Creatives (Image/Video)"
    ]
  },
  {
    id: "webdev",
    title: "Web Development",
    description: "Custom websites, mobile apps, and web applications",
    icon: Code,
    color: "cyan",
    route: "/services/web-development",
    services: [
      "Custom Website Development",
      "Mobile App Development",
      "E-commerce Solutions",
      "Web Application Development",
      "Database Design & Management",
      "UI/UX Design Services",
      "Website Performance Optimization",
      "Website Security Audit",
      "SEO Optimization",
      "API Development & Integration",
      "WordPress Services"
    ]
  }
];

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 border-blue-500/30 hover:border-blue-400",
      purple: "from-purple-500 to-purple-600 border-purple-500/30 hover:border-purple-400",
      green: "from-green-500 to-green-600 border-green-500/30 hover:border-green-400",
      orange: "from-orange-500 to-orange-600 border-orange-500/30 hover:border-orange-400",
      pink: "from-pink-500 to-pink-600 border-pink-500/30 hover:border-pink-400",
      cyan: "from-cyan-500 to-cyan-600 border-cyan-500/30 hover:border-cyan-400"
    };
    return colors[color] || colors.blue;
  };

  const handleServiceClick = (category) => {
    navigate(category.route);
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
            <Star className="w-3 h-3 mr-1" />
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Complete Career Transformation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From resume writing to web development, we offer comprehensive services to elevate your professional presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id}
                className={`bg-slate-800/50 border-2 ${getColorClasses(category.color)} hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 cursor-pointer group`}
                onClick={() => handleServiceClick(category)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses(category.color)} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {category.services.length} Services
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedService && (
          <ServiceModal 
            service={selectedService}
            isOpen={!!selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </section>
  );
};
