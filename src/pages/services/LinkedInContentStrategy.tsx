
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { SEO } from "@/components/SEO";
import { FileText, CheckCircle, Star, Calendar, BarChart3, Hash } from "lucide-react";

const LinkedInContentStrategy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900/20 via-slate-900 to-blue-900/20 transition-colors duration-500">
      <SEO 
        title="LinkedIn Content Strategy | 30-Day Content Calendar & Engagement - Onward Careers"
        description="30-day LinkedIn content calendar with engaging posts designed to boost your professional visibility. Industry-specific content, hashtag research, and performance tracking."
        keywords="LinkedIn content strategy, LinkedIn content calendar, LinkedIn content marketing, social media content, LinkedIn posts, hashtag research, content planning, LinkedIn engagement"
        ogTitle="LinkedIn Content Strategy - 30-Day Content Calendar"
        ogDescription="Professional 30-day LinkedIn content calendar with engaging posts designed to boost your professional visibility and engagement."
        canonicalUrl="https://onwardcareers.co.uk/services/linkedin-content-strategy"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="LinkedIn Content Strategy" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                LinkedIn Content Strategy
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                30-day content calendar with engaging posts designed to boost your professional visibility
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
                        "30-day content calendar",
                        "Industry-specific posts",
                        "Engagement-focused content",
                        "Hashtag research",
                        "Post templates",
                        "Content performance tracking"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Calendar className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <CardTitle className="text-white">30-Day Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Complete monthly strategy</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Hash className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Hashtag Research</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Trending hashtags included</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <BarChart3 className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Performance Tracking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Analytics and insights</p>
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
                      30-day LinkedIn content strategy
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="LinkedIn Content Strategy" />
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

export default LinkedInContentStrategy;
