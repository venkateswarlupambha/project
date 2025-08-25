
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { Badge } from "@/components/ui/badge";
// import { Star, Code } from "lucide-react";
// import { webDevelopmentServices } from "@/data/webDevelopmentServices";
// import { WebDevServiceCard } from "@/components/services/WebDevServiceCard";
// import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";

// const WebDevelopmentServices = () => {
//   const getCategoryColor = (category: string) => {
//     const colors = {
//       "Web Development": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
//       "App Development": "bg-blue-500/20 text-blue-400 border-blue-500/30",
//       "E-commerce": "bg-green-500/20 text-green-400 border-green-500/30",
//       "Backend": "bg-purple-500/20 text-purple-400 border-purple-500/30",
//       "Design": "bg-pink-500/20 text-pink-400 border-pink-500/30",
//       "Optimization": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
//       "Security": "bg-red-500/20 text-red-400 border-red-500/30",
//       "SEO": "bg-orange-500/20 text-orange-400 border-orange-500/30"
//     };
//     return colors[category] || colors["Web Development"];
//   };

//   const getGradientColor = (category: string) => {
//     const gradients = {
//       "Web Development": "from-cyan-500 to-cyan-600",
//       "App Development": "from-blue-500 to-blue-600",
//       "E-commerce": "from-green-500 to-green-600",
//       "Backend": "from-purple-500 to-purple-600",
//       "Design": "from-pink-500 to-pink-600",
//       "Optimization": "from-yellow-500 to-yellow-600",
//       "Security": "from-red-500 to-red-600",
//       "SEO": "from-orange-500 to-orange-600"
//     };
//     return gradients[category] || gradients["Web Development"];
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
//       <Header />
//       <div className="pt-16 sm:pt-20 lg:pt-24">
//         <section className="py-12 px-4">
//           <div className="container mx-auto">
//             <ServiceBreadcrumb serviceName="Web Development Services" />

//             <div className="text-center mb-16">
//               <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto mb-6">
//                 <Code className="w-8 h-8 text-white" />
//               </div>
//               <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-4">
//                 <Star className="w-3 h-3 mr-1" />
//                 Web Development
//               </Badge>
//               <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//                 Complete Web Development Solutions
//               </h1>
//               <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                 From custom websites to complex web applications, mobile apps, and everything in between
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {webDevelopmentServices.map((service) => (
//                 <WebDevServiceCard
//                   key={service.id}
//                   service={service}
//                   getCategoryColor={getCategoryColor}
//                   getGradientColor={getGradientColor}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default WebDevelopmentServices;
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Star, Code } from "lucide-react";
import { webDevelopmentServices } from "@/data/webDevelopmentServices";
import { WebDevServiceCard } from "@/components/services/WebDevServiceCard";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";

const WebDevelopmentServices = () => {
  // These functions are not needed anymore since WebDevServiceCard handles styling internally
  // But I'll keep them commented in case you need them for other parts of the component

  // const getCategoryColor = (category: string) => {
  //   const colors = {
  //     "Web Development": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  //     "App Development": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  //     "E-commerce": "bg-green-500/20 text-green-400 border-green-500/30",
  //     "Backend": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  //     "Design": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  //     "Optimization": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  //     "Security": "bg-red-500/20 text-red-400 border-red-500/30",
  //     "SEO": "bg-orange-500/20 text-orange-400 border-orange-500/30"
  //   };
  //   return colors[category as keyof typeof colors] || colors["Web Development"];
  // };

  // const getGradientColor = (category: string) => {
  //   const gradients = {
  //     "Web Development": "from-cyan-500 to-cyan-600",
  //     "App Development": "from-blue-500 to-blue-600",
  //     "E-commerce": "from-green-500 to-green-600",
  //     "Backend": "from-purple-500 to-purple-600",
  //     "Design": "from-pink-500 to-pink-600",
  //     "Optimization": "from-yellow-500 to-yellow-600",
  //     "Security": "from-red-500 to-red-600",
  //     "SEO": "from-orange-500 to-orange-600"
  //   };
  //   return gradients[category as keyof typeof gradients] || gradients["Web Development"];
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Web Development Services" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-4">
                <Star className="w-3 h-3 mr-1" />
                Web Development
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Complete Web Development Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From custom websites to complex web applications, mobile apps, and everything in between
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webDevelopmentServices.map((service) => (
                <WebDevServiceCard
                  key={service.id}
                  service={service}
                  // REMOVED: getCategoryColor and getGradientColor props
                  // since WebDevServiceCard handles styling internally
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WebDevelopmentServices;