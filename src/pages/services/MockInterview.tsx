
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Video, CheckCircle, Star, Clock, Users, Award } from "lucide-react";

const MockInterview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900/20 via-slate-900 to-pink-900/20 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Mock Interview Preparation" />

            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Mock Interview Preparation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Practice interviews with expert feedback to build confidence and improve your performance
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
                        "Mock interview sessions with industry experts",
                        "Detailed expert feedback and scoring",
                        "Industry-specific question preparation",
                        "Confidence building techniques",
                        "Body language and communication tips",
                        "Technical and behavioral question practice",
                        "Salary negotiation practice",
                        "Post-interview follow-up guidance",
                        "Recorded session for review (optional)",
                        "Action plan for improvement"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
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
                      <Clock className="w-8 h-8 text-rose-400 mx-auto mb-2" />
                      <CardTitle className="text-white">45-60 Minutes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Comprehensive mock session</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Users className="w-8 h-8 text-rose-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Expert Feedback</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Professional interviewers</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Award className="w-8 h-8 text-rose-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Industry-Specific</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Tailored to your field</p>
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
                      Professional mock interview preparation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="Mock Interview Preparation" />
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

export default MockInterview;
