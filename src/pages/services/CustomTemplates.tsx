
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { FileText, CheckCircle, Star, Clock, Users, Award } from "lucide-react";

const CustomTemplates = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900/20 via-slate-900 to-yellow-900/20 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Custom Resume Templates" />

            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Custom Resume Templates
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professionally designed resume templates customized for your industry and career level
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
                        "Industry-specific template design",
                        "ATS-friendly formatting and structure",
                        "Multiple color scheme options",
                        "Professional typography and layout",
                        "Customizable sections and modules",
                        "Word and Google Docs compatibility",
                        "PDF export optimization",
                        "Instructions for customization",
                        "3 different template variations",
                        "Lifetime usage rights"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
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
                      <Clock className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                      <CardTitle className="text-white">24-48 Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Quick template delivery</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Users className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Industry-Specific</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Tailored for your field</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Award className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                      <CardTitle className="text-white">ATS-Optimized</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Passes tracking systems</p>
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
                      Custom resume template creation service
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="Custom Resume Templates" />
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

export default CustomTemplates;
