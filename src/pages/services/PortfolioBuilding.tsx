
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Folder, CheckCircle, Star, Clock, Users, Award } from "lucide-react";

const PortfolioBuilding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/20 via-slate-900 to-teal-900/20 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Portfolio Building (PDF/Web)" />

            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6">
                <Folder className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Portfolio Building (PDF/Web)
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional portfolio creation to showcase your work and achievements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Service Details */}
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700 mb-8">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "Custom portfolio design and layout",
                        "Multiple format options (PDF and Web)",
                        "Professional presentation of your work",
                        "Industry-focused content organization",
                        "Project showcases with descriptions",
                        "Skills and achievements highlighting",
                        "Contact information integration",
                        "Mobile-responsive web design",
                        "SEO optimization for web portfolios",
                        "Print-ready PDF version"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Clock className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <CardTitle className="text-white">5-7 Days</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Complete portfolio delivery</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Users className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Custom Design</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Tailored to your industry</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Award className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Multiple Formats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">PDF and web versions</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="bg-slate-800/50 border-slate-700 sticky top-8">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                    <CardTitle className="text-white">Stand Out Now</CardTitle>
                    <CardDescription className="text-gray-300">
                      Professional portfolio creation service
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="Portfolio Building (PDF/Web)" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioBuilding;
