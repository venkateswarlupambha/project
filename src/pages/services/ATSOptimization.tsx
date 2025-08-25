
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Zap, CheckCircle, Star, Clock, Users, Award } from "lucide-react";

const ATSOptimization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900/20 via-slate-900 to-orange-900/20 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="ATS Optimization" />

            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                ATS Optimization Service
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Make your resume ATS-friendly and ensure it passes through applicant tracking systems
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
                        "ATS compatibility analysis and optimization",
                        "Keyword research and integration",
                        "Format optimization for scanning systems",
                        "Content restructuring for ATS parsing",
                        "Skills section optimization",
                        "File format recommendations",
                        "Success rate improvement guarantee",
                        "Industry-specific keyword targeting",
                        "Multiple ATS system testing",
                        "Ongoing optimization support"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
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
                      <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Quick Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">48-72 hours delivery</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Expert Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">ATS specialists review</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Success Guarantee</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Improved pass rate guaranteed</p>
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
                    <CardTitle className="text-white"> Stand Out Now</CardTitle>
                    <CardDescription className="text-gray-300">
                      Professional ATS optimization service
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="ATS Optimization" />
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

export default ATSOptimization;
