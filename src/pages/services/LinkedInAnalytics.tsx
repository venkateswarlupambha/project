
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { BarChart3, CheckCircle, Star, TrendingUp, Users, FileText } from "lucide-react";

const LinkedInAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900/20 via-slate-900 to-red-900/20 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="LinkedIn Analytics & Insights" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                LinkedIn Analytics & Insights
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Track and optimize your LinkedIn performance with detailed analytics and insights
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700 mb-8">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "Profile performance analysis",
                        "Content engagement metrics",
                        "Audience insights report",
                        "Competitor benchmarking",
                        "Growth recommendations",
                        "Monthly performance reports"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <TrendingUp className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Performance Tracking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Detailed metrics analysis</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Users className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Audience Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Know your audience better</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <FileText className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Monthly Reports</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Comprehensive reporting</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

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
                      LinkedIn analytics and insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="LinkedIn Analytics & Insights" />
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

export default LinkedInAnalytics;
