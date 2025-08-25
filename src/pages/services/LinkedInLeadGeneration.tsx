
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { SEO } from "@/components/SEO";
import { TrendingUp, CheckCircle, Star, Target, Users, BarChart3 } from "lucide-react";

const LinkedInLeadGeneration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900/20 via-slate-900 to-orange-900/20 transition-colors duration-500">
      <SEO 
        title="LinkedIn Lead Generation Services | Generate Quality B2B Leads - Onward Careers"
        description="Generate high-quality B2B leads through LinkedIn with our proven lead generation strategies. Automated outreach campaigns, prospect identification, and ROI tracking."
        keywords="LinkedIn lead generation, B2B lead generation, LinkedIn outreach, sales leads, prospect identification, lead generation automation, LinkedIn marketing, B2B sales"
        ogTitle="LinkedIn Lead Generation - Generate Quality B2B Leads"
        ogDescription="Professional LinkedIn lead generation service with proven strategies and automation. Generate high-quality leads for your business."
        canonicalUrl="https://onwardcareers.co.uk/services/linkedin-lead-generation"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="LinkedIn Lead Generation" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                LinkedIn Lead Generation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Generate high-quality leads through LinkedIn with proven strategies and automation
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
                        "Lead generation strategy",
                        "Prospect identification",
                        "Outreach campaigns",
                        "Follow-up automation",
                        "Conversion optimization",
                        "ROI tracking"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Target className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Targeted Prospecting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Quality over quantity</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Outreach Campaigns</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Automated sequences</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <BarChart3 className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <CardTitle className="text-white">ROI Tracking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Measure success</p>
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
                      Lead generation package
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="LinkedIn Lead Generation" />
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

export default LinkedInLeadGeneration;
