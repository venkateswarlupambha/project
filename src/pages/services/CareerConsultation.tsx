
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Users, CheckCircle, Star, Clock, Award, Target } from "lucide-react";

const CareerConsultation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900/20 via-slate-900 to-purple-900/20 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Career Consultation (1:1)" />

            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Career Consultation (1:1)
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Personalized career guidance session to help you navigate your professional journey
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
                        "One-on-one personalized consultation session",
                        "Comprehensive career roadmap development",
                        "Industry insights and market analysis",
                        "Detailed action plan for career growth",
                        "Skills assessment and gap analysis",
                        "Interview preparation strategies",
                        "Networking guidance and tips",
                        "Salary negotiation advice",
                        "Career transition planning",
                        "Follow-up resources and recommendations"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
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
                      <Clock className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                      <CardTitle className="text-white">60-90 Minutes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Comprehensive session duration</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Target className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Personalized</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Tailored to your goals</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Award className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Expert Guidance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Professional career advisors</p>
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
                      Personalized career consultation service
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="Career Consultation (1:1)" />
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

export default CareerConsultation;
