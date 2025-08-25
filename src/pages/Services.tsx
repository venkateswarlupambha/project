
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { ServicesSection } from "@/components/ServicesSection";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { 
//   Briefcase, 
//   Users, 
//   Palette, 
//   Video, 
//   Megaphone,
//   Star,
//   ArrowRight,
//   Code
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const mainServices = [
//   {
//     id: "career",
//     title: "Career Services",
//     description: "Professional resume writing, optimization, and career consultation",
//     icon: Briefcase,
//     color: "blue",
//     route: "/services/career-services",
//     servicesCount: 13
//   },
//   {
//     id: "linkedin",
//     title: "LinkedIn Services",
//     description: "Complete LinkedIn optimization and content strategy",
//     icon: Users,
//     color: "purple",
//     route: "/services/linkedin-services",
//     servicesCount: 10
//   },
//   {
//     id: "design",
//     title: "Creative Design",
//     description: "Professional design services for personal and business branding",
//     icon: Palette,
//     color: "green",
//     route: "/services/design-services",
//     servicesCount: 12
//   },
//   {
//     id: "video",
//     title: "Video Editing",
//     description: "Professional video editing for personal and business use",
//     icon: Video,
//     color: "orange",
//     route: "/services/video-services",
//     servicesCount: 8
//   },
//   {
//     id: "marketing",
//     title: "Digital Marketing",
//     description: "Complete digital marketing and social media management",
//     icon: Megaphone,
//     color: "pink",
//     route: "/services/marketing-services",
//     servicesCount: 9
//   },
//   {
//     id: "webdev",
//     title: "Web Development",
//     description: "Custom websites, mobile apps, and web applications",
//     icon: Code,
//     color: "cyan",
//     route: "/services/web-development",
//     servicesCount: 11
//   }
// ];

// const Services = () => {
//   const getColorClasses = (color: string) => {
//     const colors = {
//       blue: {
//         from: "from-blue-500",
//         to: "to-blue-600",
//         border: "border-blue-500/50",
//         ring: "ring-blue-400/50"
//       },
//       purple: {
//         from: "from-purple-500",
//         to: "to-purple-600",
//         border: "border-purple-500/50",
//         ring: "ring-purple-400/50"
//       },
//       green: {
//         from: "from-green-500",
//         to: "to-green-600",
//         border: "border-green-500/50",
//         ring: "ring-green-400/50"
//       },
//       orange: {
//         from: "from-orange-500",
//         to: "to-orange-600",
//         border: "border-orange-500/50",
//         ring: "ring-orange-400/50"
//       },
//       pink: {
//         from: "from-pink-500",
//         to: "to-pink-600",
//         border: "border-pink-500/50",
//         ring: "ring-pink-400/50"
//       },
//       cyan: {
//         from: "from-cyan-500",
//         to: "to-cyan-600",
//         border: "border-cyan-500/50",
//         ring: "ring-cyan-400/50"
//       },
//     };
//     return colors[color] || colors.blue;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
//       <Header />
//       <div className="pt-16 sm:pt-20 lg:pt-24">
//         <section className="py-20 px-4">
//           <div className="container mx-auto">
//             <div className="text-center mb-16">
//               <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
//                 <Star className="w-3 h-3 mr-1" />
//                 Our Services
//               </Badge>
//               <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//                 Complete Career Transformation
//               </h1>
//               <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                 From resume writing to web development, we offer comprehensive services to elevate your professional presence
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {mainServices.map((service) => {
//                 const Icon = service.icon;
//                 const color = getColorClasses(service.color);
//                 return (
//                   <div
//                     key={service.id}
//                     className="relative group"
//                   >
//                     {/* Subtle glow backlight that only appears on hover */}
//                     <div
//                       className={`absolute -inset-1 rounded-2xl z-0 blur opacity-0 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${color.from} ${color.to}`}
//                       style={{ filter: "blur(20px)" }}
//                     />
//                     <Card
//                       className={`relative z-10 bg-slate-800/60 border-2 ${color.border} group-hover:${color.ring}
//                         transition-all duration-300 group-hover:scale-105 shadow-lg overflow-hidden`}
//                       style={{ boxShadow: "0 0 0 2px rgba(0,0,0,0.14)" }}
//                     >
//                       <CardHeader>
//                         <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color.from} ${color.to} flex items-center justify-center mb-4`}>
//                           <Icon className="w-6 h-6 text-white" />
//                         </div>
//                         <CardTitle className="text-white text-xl">{service.title}</CardTitle>
//                         <CardDescription className="text-gray-300">{service.description}</CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <div className="flex items-center justify-between mb-4">
//                           <span className="text-sm text-gray-400">{service.servicesCount} Services Available</span>
//                         </div>
//                         <Button
//                           asChild
//                           className={`w-full bg-gradient-to-r ${color.from} ${color.to} hover:opacity-90`}
//                         >
//                           <Link to={service.route}>
//                             View Services
//                             <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                           </Link>
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Services;
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Users, 
  Palette, 
  Video, 
  Megaphone,
  Star,
  ArrowRight,
  Code,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const mainServices = [
  {
    id: "career",
    title: "Career Services",
    description: "Professional resume writing, optimization, and career consultation",
    icon: Briefcase,
    color: "blue",
    route: "/services/career-services",
    servicesCount: 13
  },
  {
    id: "linkedin",
    title: "LinkedIn Services",
    description: "Complete LinkedIn optimization and content strategy",
    icon: Users,
    color: "purple",
    route: "/services/linkedin-services",
    servicesCount: 10
  },
  {
    id: "design",
    title: "Creative Design",
    description: "Professional design services for personal and business branding",
    icon: Palette,
    color: "green",
    route: "/services/design-services",
    servicesCount: 12
  },
  {
    id: "video",
    title: "Video Editing",
    description: "Professional video editing for personal and business use",
    icon: Video,
    color: "orange",
    route: "/services/video-services",
    servicesCount: 8
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Complete digital marketing and social media management",
    icon: Megaphone,
    color: "pink",
    route: "/services/marketing-services",
    servicesCount: 9
  },
  {
    id: "webdev",
    title: "Web Development",
    description: "Custom websites, mobile apps, and web applications",
    icon: Code,
    color: "cyan",
    route: "/services/web-development",
    servicesCount: 11
  }
];

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Lead Designer",
    company: "Formerly at Apple",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Web Developer",
    company: "Ex-Google",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Marketing Specialist",
    company: "Former Meta",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Career Coach",
    company: "Ex-Microsoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "Amanda Rodriguez",
    role: "Video Producer",
    company: "Former Netflix",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Services = () => {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        from: "from-blue-500",
        to: "to-blue-600",
        border: "border-blue-500/50",
        ring: "ring-blue-400/50"
      },
      purple: {
        from: "from-purple-500",
        to: "to-purple-600",
        border: "border-purple-500/50",
        ring: "ring-purple-400/50"
      },
      green: {
        from: "from-green-500",
        to: "to-green-600",
        border: "border-green-500/50",
        ring: "ring-green-400/50"
      },
      orange: {
        from: "from-orange-500",
        to: "to-orange-600",
        border: "border-orange-500/50",
        ring: "ring-orange-400/50"
      },
      pink: {
        from: "from-pink-500",
        to: "to-pink-600",
        border: "border-pink-500/50",
        ring: "ring-pink-400/50"
      },
      cyan: {
        from: "from-cyan-500",
        to: "to-cyan-600",
        border: "border-cyan-500/50",
        ring: "ring-cyan-400/50"
      },
    };
    return colors[color] || colors.blue;
  };

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
                <Star className="w-3 h-3 mr-1" />
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Complete Career Transformation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From resume writing to web development, we offer comprehensive services to elevate your professional presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service) => {
                const Icon = service.icon;
                const color = getColorClasses(service.color);
                return (
                  <div
                    key={service.id}
                    className="relative group"
                  >
                    {/* Subtle glow backlight that only appears on hover */}
                    <div
                      className={`absolute -inset-1 rounded-2xl z-0 blur opacity-0 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${color.from} ${color.to}`}
                      style={{ filter: "blur(20px)" }}
                    />
                    <Card
                      className={`relative z-10 bg-slate-800/60 border-2 ${color.border} group-hover:${color.ring}
                        transition-all duration-300 group-hover:scale-105 shadow-lg overflow-hidden`}
                      style={{ boxShadow: "0 0 0 2px rgba(0,0,0,0.14)" }}
                    >
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color.from} ${color.to} flex items-center justify-center mb-4`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-gray-300">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-400">{service.servicesCount} Services Available</span>
                        </div>
                        <Button
                          asChild
                          className={`w-full bg-gradient-to-r ${color.from} ${color.to} hover:opacity-90`}
                        >
                          <Link to={service.route}>
                            View Services
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Carousel Section */}
        <section className="py-16 px-4 bg-slate-800/40">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
                <Users className="w-3 h-3 mr-1" />
                Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Meet Our Expert Team
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Professionals from top companies ready to help transform your career
              </p>
            </div>

            <div 
              className="relative max-w-5xl mx-auto"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Carousel container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                >
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                      <div className="bg-slate-700/40 rounded-xl p-6 text-center group hover:bg-slate-700/60 transition-all duration-300">
                        <div className="relative mb-5">
                          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-purple-500/50 group-hover:border-purple-500 transition-colors">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                            {member.company}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                        <p className="text-purple-300">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-800/80 hover:bg-purple-600 rounded-full p-2 shadow-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-800/80 hover:bg-purple-600 rounded-full p-2 shadow-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              {/* Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-purple-500 w-6' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;