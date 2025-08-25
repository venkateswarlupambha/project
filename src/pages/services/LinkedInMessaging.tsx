
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { SEO } from "@/components/SEO";
import { MessageSquare, CheckCircle, Star, Send, Heart, TrendingUp } from "lucide-react";

const LinkedInMessaging = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20 transition-colors duration-500">
      <SEO 
        title="LinkedIn Messaging Mastery | Professional Outreach & Networking - Onward Careers"
        description="Master LinkedIn outreach and messaging to build meaningful connections. Get proven message templates, follow-up sequences, and high response rate strategies."
        keywords="LinkedIn messaging, LinkedIn outreach, professional networking, LinkedIn templates, cold messaging, LinkedIn connection requests, relationship building, sales messaging"
        ogTitle="LinkedIn Messaging Mastery - Build Meaningful Professional Connections"
        ogDescription="Master the art of LinkedIn outreach with proven message templates and strategies for building meaningful professional connections."
        canonicalUrl="https://onwardcareers.co.uk/services/linkedin-messaging"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="LinkedIn Messaging Mastery" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                LinkedIn Messaging Mastery
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Master the art of LinkedIn outreach and messaging to build meaningful connections
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
                        "Outreach message templates",
                        "Follow-up sequences",
                        "Cold messaging strategies",
                        "Response rate optimization",
                        "Relationship nurturing",
                        "Sales-focused messaging"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Send className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Outreach Templates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Ready-to-use messages</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Heart className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Relationship Building</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Nurture connections</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <CardTitle className="text-white">High Response Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Proven strategies</p>
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
                      LinkedIn messaging mastery
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="LinkedIn Messaging Mastery" />
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

export default LinkedInMessaging;
