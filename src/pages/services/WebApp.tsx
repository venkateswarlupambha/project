
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Star, CheckCircle, Code, Database, Zap, Users, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebApp = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  const features = [
    { icon: Code, title: "Custom Logic", description: "Complex business logic and workflows" },
    { icon: Globe, title: "API Integration", description: "Third-party service integrations" },
    { icon: Users, title: "User Management", description: "Authentication and user roles" },
    { icon: Zap, title: "Real-time Updates", description: "Live data synchronization" },
    { icon: Database, title: "Scalable Architecture", description: "Built for growth and performance" },
    { icon: Award, title: "Cloud Hosting", description: "Reliable cloud infrastructure" }
  ];

  const benefits = [
    "Increase operational efficiency by 60%",
    "Automate complex business processes",
    "Scale seamlessly with your business",
    "Integrate with existing systems"
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      company: "InnovateHub",
      text: "The web app revolutionized our business operations completely!",
      rating: 5
    },
    {
      name: "Sarah Davis",
      company: "CloudTech Solutions",
      text: "Powerful and scalable application that grows with our needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900/20 via-slate-900 to-cyan-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent"></div>
          <div className="container mx-auto relative">
            <ServiceBreadcrumb serviceName="Web Application Development" />

            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-6 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Premium Development Service
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Application Development</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Complex web applications with advanced functionality and integrations to power your business
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/30">
                  <span className="text-3xl font-bold text-cyan-400">Stand Out Now</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Delivery in 2-4 weeks</span>
                </div>
              </div>
              
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Web App
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">What's Included</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive web application development with advanced features
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                        <feature.icon className="w-6 h-6 text-cyan-400" />
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
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Web App Development?</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Build powerful web applications that streamline your business processes and drive growth.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Performance Impact</h3>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-cyan-400">+60%</div>
                        <div className="text-gray-300">Operational Efficiency</div>
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
            <Card className="bg-gradient-to-r from-slate-800/50 to-cyan-900/20 border-slate-700 max-w-4xl mx-auto backdrop-blur-sm">
              <CardContent className="p-12">
                <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Your Web Application?</h3>
                <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                  Transform your business with a powerful web application tailored to your needs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Start Your Web App
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-full"
                  >
                    View Demo Apps
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

export default WebApp;
