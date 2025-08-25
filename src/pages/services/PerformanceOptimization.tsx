
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Star, CheckCircle, Gauge, Image, Database, Globe, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PerformanceOptimization = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  const features = [
    { icon: Gauge, title: "Speed Analysis", description: "Comprehensive performance audit and testing" },
    { icon: Zap, title: "Code Optimization", description: "Clean, efficient code optimization" },
    { icon: Image, title: "Image Compression", description: "Optimized images for faster loading" },
    { icon: Database, title: "Caching Setup", description: "Advanced caching strategies" },
    { icon: Globe, title: "CDN Integration", description: "Global content delivery network" },
    { icon: Award, title: "Performance Monitoring", description: "Ongoing performance tracking" }
  ];

  const benefits = [
    "Improve page load speed by 70%",
    "Boost SEO rankings significantly",
    "Reduce bounce rate and increase conversions",
    "Enhance user experience and satisfaction"
  ];

  const testimonials = [
    {
      name: "Tom Wilson",
      company: "SpeedTech Corp",
      text: "Our website speed improved dramatically, conversions are up 40%!",
      rating: 5
    },
    {
      name: "Ana Garcia",
      company: "FastLoad Solutions",
      text: "Professional optimization that delivered measurable results.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900/20 via-slate-900 to-yellow-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent"></div>
          <div className="container mx-auto relative">
            <ServiceBreadcrumb serviceName="Website Performance Optimization" />

            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-6 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Premium Optimization Service
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Performance Optimization</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Speed up your website for better user experience and higher SEO rankings
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-500/30">
                  <span className="text-3xl font-bold text-yellow-400">Stand Out Now</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Results in 1-2 days</span>
                </div>
              </div>
              
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Optimize Now
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">What's Included</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Complete performance optimization package for lightning-fast websites
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-500/20 p-3 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                        <feature.icon className="w-6 h-6 text-yellow-400" />
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
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Optimization Service?</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Boost your website's performance with our proven optimization techniques that deliver real results.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Speed Impact</h3>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-yellow-400">+70%</div>
                        <div className="text-gray-300">Faster Load Times</div>
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
            <Card className="bg-gradient-to-r from-slate-800/50 to-yellow-900/20 border-slate-700 max-w-4xl mx-auto backdrop-blur-sm">
              <CardContent className="p-12">
                <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Speed Up Your Website Today</h3>
                <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                  Don't lose customers to slow loading times. Optimize your website performance now
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                  >
                    Optimize Now
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 px-8 py-3 rounded-full"
                  >
                    Get Speed Report
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

export default PerformanceOptimization;
