
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    price: string;
    category: string;
    scope: string;
    route?: string;
    features: string[];
  };
  getCategoryColor: (category: string) => string;
  getCategoryBadgeColor: (category: string) => string;
  onGetStarted?: () => void;
}

export const ServiceCard = ({ service, getCategoryColor, getCategoryBadgeColor, onGetStarted }: ServiceCardProps) => {
  const Icon = service.icon;
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (service.route) {
      navigate(service.route);
    } else if (onGetStarted) {
      onGetStarted();
    } else {
      navigate('/contact');
    }
  };

  const border = "border-2 " + getCategoryBadgeColor(service.category) + " border-opacity-70";

  return (
    <div className="relative group">
      {/* Subtle glow backlight that only appears on hover */}
      <div
        className="absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-gradient-to-br from-pink-500 to-pink-600"
        style={{ filter: "blur(20px)" }}
      />
      
      <Card className={`relative z-10 bg-slate-800/60 ${border} group-hover:ring-2 group-hover:ring-pink-400/50 hover:shadow-pink-400/25 transition-all duration-300 hover:scale-105 overflow-hidden shadow-xl`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(service.category)} opacity-5 group-hover:opacity-10 transition-opacity`} />
        
        <CardHeader className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center shadow-lg`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="text-right">
              <Badge className={`${getCategoryBadgeColor(service.category)} text-xs mb-1`}>{service.category}</Badge>
              <div className="text-xs text-gray-400">{service.scope}</div>
            </div>
          </div>
          
          <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
          <CardDescription className="text-gray-300 mb-4">
            {service.description}
          </CardDescription>
          
          <div className="text-center mb-4">
            <span className="text-2xl font-bold text-pink-400">{service.price}</span>
          </div>
        </CardHeader>
        
        <CardContent className="relative">
          <div className="grid grid-cols-2 gap-2 mb-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center text-xs text-gray-300">
                <Users className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
          
          <Button 
            onClick={handleGetStarted}
            className={`w-full bg-gradient-to-r ${getCategoryColor(service.category)} hover:opacity-90 text-white font-semibold`}
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ArrowRight, Users } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// interface ServiceCardProps {
//   service: {
//     id: string;
//     title: string;
//     description: string;
//     icon: React.ComponentType<{ className?: string }>;
//     price: string;
//     category: string;
//     scope: string;
//     route?: string;
//     features: string[];
//   };
//   getCategoryColor: (category: string) => string;
//   getCategoryBadgeColor: (category: string) => string;
//   onGetStarted?: () => void;
// }

// export const ServiceCard = ({ service, getCategoryColor, getCategoryBadgeColor, onGetStarted }: ServiceCardProps) => {
//   const Icon = service.icon;
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     if (service.route) {
//       navigate(service.route);
//     } else if (onGetStarted) {
//       onGetStarted();
//     } else {
//       navigate('/contact');
//     }
//   };

//   const border = "border-2 " + getCategoryBadgeColor(service.category) + " border-opacity-70";

//   return (
//     <div className="relative group w-full">
//       <Card className={`relative bg-slate-800/60 ${border} transition-all duration-300 overflow-hidden shadow-xl h-full flex flex-col hover:shadow-lg`}>
//         <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(service.category)} opacity-5 group-hover:opacity-10 transition-opacity`} />
        
//         <CardHeader className="relative p-4 md:p-6">
//           <div className="flex items-start justify-between mb-3 md:mb-4">
//             <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center shadow-lg`}>
//               <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
//             </div>
//             <div className="text-right">
//               <Badge className={`${getCategoryBadgeColor(service.category)} text-xs mb-1`}>{service.category}</Badge>
//               <div className="text-xs text-gray-400">{service.scope}</div>
//             </div>
//           </div>
          
//           <CardTitle className="text-white text-lg md:text-xl mb-2">{service.title}</CardTitle>
//           <CardDescription className="text-gray-300 text-sm md:text-base">
//             {service.description}
//           </CardDescription>
          
//           <div className="text-center mt-3 md:mt-4">
//             <span className="text-xl md:text-2xl font-bold text-pink-400">{service.price}</span>
//           </div>
//         </CardHeader>
        
//         <CardContent className="relative p-4 md:p-6 pt-0">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 md:mb-6">
//             {service.features.map((feature, index) => (
//               <div key={index} className="flex items-center text-xs md:text-sm text-gray-300">
//                 <Users className="w-3 h-3 md:w-4 md:h-4 text-pink-400 mr-2 flex-shrink-0" />
//                 <span className="leading-tight">{feature}</span>
//               </div>
//             ))}
//           </div>
          
//           <Button 
//             onClick={handleGetStarted}
//             className={`w-full bg-gradient-to-r ${getCategoryColor(service.category)} hover:opacity-90 text-white font-semibold py-2 md:py-3`}
//           >
//             Get Started
//             <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };