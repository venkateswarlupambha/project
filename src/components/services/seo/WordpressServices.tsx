import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Globe, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface WordpressService {
    icon: LucideIcon;
    title: string;
    description: string;
    price: string;
    features: string[];
}

interface WordpressServicesProps {
    services: WordpressService[];
}

export const WordpressServices = ({ services }: WordpressServicesProps) => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/services/wordpress-order");
  };

  return (
    <section className="py-16 px-4 bg-slate-800/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4 px-4 py-2">
            <Globe className="w-4 h-4 mr-2" />
            WordPress Specialists
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">WordPress Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional WordPress development and optimization services to power your website
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              <Card className="relative bg-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"></div>
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-white text-xl mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={handleOrderNow}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Order WordPress Service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
