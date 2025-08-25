
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Star, CheckCircle, Zap, Bell, Wifi, Users, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileApp = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  const features = [
    { icon: Smartphone, title: "iOS & Android", description: "Native apps for both platforms" },
    { icon: Zap, title: "Cross Platform", description: "Single codebase for multiple platforms" },
    { icon: Award, title: "Native Performance", description: "Optimized for speed and efficiency" },
    { icon: Users, title: "App Store Ready", description: "Full deployment and submission" },
    { icon: Bell, title: "Push Notifications", description: "Real-time user engagement" },
    { icon: Wifi, title: "Offline Support", description: "Works without internet connection" }
  ];

  const benefits = [
    "Reach 6.8 billion mobile users globally",
    "Increase customer engagement by 3x",
    "Generate revenue through app monetization",
    "Build stronger brand loyalty"
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "MobileFirst Solutions",
      text: "Our mobile app exceeded all expectations and user engagement!",
      rating: 5
    },
    {
      name: "Robert Martinez",
      company: "AppTech Innovations",
      text: "Professional development with seamless App Store deployment.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-slate-900 to-blue-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
          <div className="container mx-auto relative">
            <ServiceBreadcrumb serviceName="Mobile App Development" />

            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-6 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Premium App Development
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">App Development</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Native and cross-platform mobile applications for iOS and Android that engage users
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-500/30">
                  <span className="text-3xl font-bold text-blue-400">Stand Out Now</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Delivery in 3-6 weeks</span>
                </div>
              </div>
              
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your App Development
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">What's Included</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Complete mobile app development package for modern businesses
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                        <feature.icon className="w-6 h-6 text-blue-400" />
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
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Mobile App Development?</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Create powerful mobile experiences that connect with your users wherever they are.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Smartphone className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Mobile Impact</h3>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-blue-400">6.8B</div>
                        <div className="text-gray-300">Mobile Users Worldwide</div>
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
            <Card className="bg-gradient-to-r from-slate-800/50 to-blue-900/20 border-slate-700 max-w-4xl mx-auto backdrop-blur-sm">
              <CardContent className="p-12">
                <Smartphone className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Your Mobile App?</h3>
                <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                  Join millions of businesses reaching customers through mobile applications
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    Start Your App Development
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-full"
                  >
                    View App Portfolio
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

export default MobileApp;
