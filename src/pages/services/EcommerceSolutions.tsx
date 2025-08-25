
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, CheckCircle, CreditCard, Package, BarChart3, Settings, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EcommerceSolutions = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  const features = [
    { icon: CreditCard, title: "Payment Gateway", description: "Secure payment processing with multiple options" },
    { icon: Package, title: "Inventory System", description: "Advanced inventory management and tracking" },
    { icon: Settings, title: "Order Management", description: "Complete order processing and fulfillment" },
    { icon: BarChart3, title: "Admin Dashboard", description: "Comprehensive business analytics and reports" },
    { icon: ShoppingCart, title: "Multi-currency", description: "Support for global customers and currencies" },
    { icon: Award, title: "Analytics", description: "Detailed sales and customer insights" }
  ];

  const benefits = [
    "Start selling online within days",
    "Accept payments from customers worldwide",
    "Track inventory and orders seamlessly",
    "Scale your business with powerful tools"
  ];

  const testimonials = [
    {
      name: "Elena Rodriguez",
      company: "Fashion Boutique",
      text: "Our online store increased sales by 300% in the first month!",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Tech Gadgets Store",
      text: "Professional e-commerce platform with all the features we needed.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900/20 via-slate-900 to-green-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent"></div>
          <div className="container mx-auto relative">
            <ServiceBreadcrumb serviceName="E-commerce Solutions" />

            <div className="text-center mb-16 animate-fade-in">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Premium E-commerce Platform
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                E-commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Complete online stores with payment integration and inventory management to grow your business
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-500/30">
                  <span className="text-3xl font-bold text-green-400">Stand Out Now</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Launch in 2-3 weeks</span>
                </div>
              </div>
              
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Store
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">What's Included</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Complete e-commerce package to launch and grow your online business
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors">
                        <feature.icon className="w-6 h-6 text-green-400" />
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
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our E-commerce Solution?</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Launch your online store with confidence using our proven e-commerce platform that scales with your business.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <ShoppingCart className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Sales Growth</h3>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-green-400">+300%</div>
                        <div className="text-gray-300">Average Revenue Increase</div>
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
            <Card className="bg-gradient-to-r from-slate-800/50 to-green-900/20 border-slate-700 max-w-4xl mx-auto backdrop-blur-sm">
              <CardContent className="p-12">
                <ShoppingCart className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Launch Your Online Store?</h3>
                <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                  Join thousands of successful businesses selling online with our e-commerce platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                  >
                    Start Your Store
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-3 rounded-full"
                  >
                    View Store Examples
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

export default EcommerceSolutions;
