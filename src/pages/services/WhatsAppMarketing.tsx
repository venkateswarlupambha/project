
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Zap, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhatsAppMarketing = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900/20 via-slate-900 to-teal-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="WhatsApp Marketing" />

            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
                <Star className="w-3 h-3 mr-1" />
                Automation Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                WhatsApp Marketing
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Automated broadcast setup and intelligent auto-reply configuration for effective customer communication
              </p>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-green-400">Stand Out Now</span>
              </div>
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90 text-white font-semibold px-8 py-3 text-lg"
              >
                Get Started Now
              </Button>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What You'll Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Broadcast Lists", description: "Organized contact lists for targeted messaging campaigns", icon: Users },
                  { title: "Auto-Replies", description: "Intelligent automated responses for common inquiries", icon: Zap },
                  { title: "Contact Management", description: "Professional contact organization and segmentation", icon: MessageCircle },
                  { title: "Message Templates", description: "Pre-designed templates for various business scenarios", icon: CheckCircle }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mr-4">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                        </div>
                        <p className="text-gray-300">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Perfect For</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Small Businesses",
                    description: "Customer support and order updates",
                    benefits: ["Quick customer responses", "Order confirmations", "Support automation"]
                  },
                  {
                    title: "Service Providers",
                    description: "Appointment booking and reminders",
                    benefits: ["Appointment scheduling", "Service reminders", "Follow-up messages"]
                  },
                  {
                    title: "E-commerce",
                    description: "Product updates and promotions",
                    benefits: ["Product launches", "Sale notifications", "Customer updates"]
                  }
                ].map((useCase, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{useCase.title}</CardTitle>
                      <p className="text-gray-300">{useCase.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Setup Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Account Analysis", description: "Review your business needs and WhatsApp usage" },
                  { step: "2", title: "Setup Configuration", description: "Configure broadcast lists and auto-reply systems" },
                  { step: "3", title: "Template Creation", description: "Design custom message templates for your brand" },
                  { step: "4", title: "Testing & Launch", description: "Test all systems and provide training" }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate Your WhatsApp?</h3>
                  <p className="text-gray-300 mb-6">
                    Streamline your customer communication with professional WhatsApp marketing setup
                  </p>
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90 text-white font-semibold px-8 py-3"
                  >
                    Start WhatsApp Automation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WhatsAppMarketing;
