
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, Star, CheckCircle, FileText, Zap, HardDrive, Shield, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DatabaseDesign = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  const features = [
    { icon: FileText, title: "Schema Design", description: "Optimized database structure and relationships" },
    { icon: Zap, title: "Query Optimization", description: "Fast and efficient database queries" },
    { icon: HardDrive, title: "Data Migration", description: "Seamless data transfer and migration" },
    { icon: Shield, title: "Backup Solutions", description: "Automated backup and recovery systems" },
    { icon: Database, title: "Performance Tuning", description: "Database optimization for peak performance" },
    { icon: Award, title: "Security Setup", description: "Advanced security and access controls" }
  ];

  const benefits = [
    "Improve data retrieval speed by 80%",
    "Ensure data integrity and consistency",
    "Scale efficiently with growing data",
    "Protect against data loss and breaches"
  ];

  const testimonials = [
    {
      name: "Kevin Park",
      company: "DataFlow Systems",
      text: "Our database performance improved dramatically after optimization!",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Analytics Corp",
      text: "Professional database design that handles our growing data needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-slate-900 to-purple-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"></div>
          <div className="container mx-auto relative">
            <ServiceBreadcrumb serviceName="Database Design & Management" />

            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-6 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Premium Database Service
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Database <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Design & Management</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Efficient database structure and management for your applications with optimal performance
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/30">
                  <span className="text-3xl font-bold text-purple-400">Stand Out Now</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Setup in 3-5 days</span>
                </div>
              </div>
              
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Database Help
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">What's Included</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Complete database package for robust and scalable data management
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                        <feature.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Database Service?</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Build a solid foundation for your applications with expertly designed databases that perform at scale.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Database className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Performance Boost</h3>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-purple-400">+80%</div>
                        <div className="text-gray-300">Faster Data Retrieval</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-900/20 border-slate-700 max-w-4xl mx-auto backdrop-blur-sm">
              <CardContent className="p-12">
                <Database className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Need Professional Database Solutions?</h3>
                <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                  Get expert database design and management services for your applications
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Get Database Help
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full"
                  >
                    View Case Studies
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DatabaseDesign;
