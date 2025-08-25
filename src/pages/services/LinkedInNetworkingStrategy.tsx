
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { SEO } from "@/components/SEO";
import { Network, CheckCircle, Star, Users, MessageCircle, Target } from "lucide-react";

const LinkedInNetworkingStrategy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-slate-900 to-blue-900/20 transition-colors duration-500">
      <SEO 
        title="LinkedIn Strategic Networking Plan | Build Professional Connections - Onward Careers"
        description="Build meaningful professional connections with our strategic LinkedIn networking plan. Target audience identification, connection templates, and relationship building framework."
        keywords="LinkedIn networking, professional networking, LinkedIn connections, networking strategy, relationship building, LinkedIn groups, business networking, professional relationships"
        ogTitle="LinkedIn Strategic Networking Plan - Build Meaningful Connections"
        ogDescription="Strategic LinkedIn networking plan to build meaningful professional connections and expand your network effectively."
        canonicalUrl="https://onwardcareers.co.uk/services/linkedin-networking-strategy"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Strategic Networking Plan" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Strategic Networking Plan
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Build meaningful professional connections and expand your network strategically
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
                        "Target audience identification",
                        "Connection request templates",
                        "Follow-up message sequences",
                        "Industry group recommendations",
                        "Networking event strategy",
                        "Relationship building framework"
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
                      <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Targeted Approach</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Identify key connections</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <MessageCircle className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Message Templates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Ready-to-use outreach</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Community Building</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Group engagement strategy</p>
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
                      Strategic networking plan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="Strategic Networking Plan" />
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

export default LinkedInNetworkingStrategy;
