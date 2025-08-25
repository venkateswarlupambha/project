
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { RefreshCw, CheckCircle, Star, Clock, Users, Award } from "lucide-react";

const ResumeRevision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900/20 via-slate-900 to-teal-900/20 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Resume Revision" />

            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Resume Revision Service
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance and optimize your existing resume to make it more competitive and ATS-friendly
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
                        "Content improvement and enhancement",
                        "Format optimization for better readability",
                        "Keyword integration for ATS compatibility",
                        "Quick turnaround time (24-48 hours)",
                        "Professional formatting improvements",
                        "Skills and achievements optimization",
                        "Industry-specific keyword research",
                        "Grammar and language refinement",
                        "PDF and Word format delivery",
                        "One round of revisions included"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
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
                      <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Quick Delivery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Fast 24-48 hour turnaround</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Expert Review</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Professional career experts</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <CardTitle className="text-white">ATS Ready</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Optimized for applicant tracking systems</p>
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
                      Get your resume revised by our experts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="Resume Revision" />
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

export default ResumeRevision;
