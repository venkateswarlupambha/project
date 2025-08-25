
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Paintbrush, Star, CheckCircle, Users, Palette, Smartphone, Monitor, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UIUXDesign = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  const features = [
    { icon: Palette, title: "User Research", description: "In-depth analysis of user behavior and needs" },
    { icon: Monitor, title: "Wireframing", description: "Detailed wireframes and user flow mapping" },
    { icon: Smartphone, title: "Prototyping", description: "Interactive prototypes for testing" },
    { icon: Paintbrush, title: "Visual Design", description: "Beautiful and intuitive interface design" },
    { icon: Users, title: "Usability Testing", description: "User testing and feedback integration" },
    { icon: Award, title: "Design System", description: "Comprehensive design system and guidelines" }
  ];

  const benefits = [
    "Increase user engagement by 85%",
    "Improve conversion rates",
    "Reduce development time",
    "Create consistent brand experience"
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      company: "StartupLab",
      text: "The UI/UX design transformed our app's user experience completely!",
      rating: 5
    },
    {
      name: "Emma Wilson",
      company: "TechFlow",
      text: "Professional design that our users absolutely love.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900/20 via-slate-900 to-pink-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent"></div>
          <div className="container mx-auto relative">
            <ServiceBreadcrumb serviceName="UI/UX Design Services" />

            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30 mb-6 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Premium Design Service
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">Design Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Beautiful and user-friendly interfaces for web and mobile applications that convert visitors into customers
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="bg-pink-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-pink-500/30">
                  <span className="text-3xl font-bold text-pink-400">Stand Out Now</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Delivery in 5-7 days</span>
                </div>
              </div>
              
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Design Project
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">What's Included</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive UI/UX design package for modern digital experiences
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-pink-500/20 p-3 rounded-lg group-hover:bg-pink-500/30 transition-colors">
                        <feature.icon className="w-6 h-6 text-pink-400" />
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
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Design Service?</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Create exceptional user experiences that drive engagement and conversions with our proven design methodology.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 border-pink-500/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Paintbrush className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Design Impact</h3>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-pink-400">+85%</div>
                        <div className="text-gray-300">User Engagement Increase</div>
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
            <Card className="bg-gradient-to-r from-slate-800/50 to-pink-900/20 border-slate-700 max-w-4xl mx-auto backdrop-blur-sm">
              <CardContent className="p-12">
                <Paintbrush className="w-16 h-16 text-pink-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Ready for Amazing Design?</h3>
                <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                  Transform your digital presence with beautiful, user-friendly designs that convert
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                  >
                    Start Design Project
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10 px-8 py-3 rounded-full"
                  >
                    View Portfolio
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

export default UIUXDesign;
