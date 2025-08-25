
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { SEO } from "@/components/SEO";
import { Star, CheckCircle, Award, Eye, Lightbulb } from "lucide-react";

const LinkedInPersonalBranding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900/20 via-slate-900 to-purple-900/20 transition-colors duration-500">
      <SEO 
        title="LinkedIn Personal Branding Package | Thought Leadership & Authority - Onward Careers"
        description="Establish yourself as an industry thought leader with comprehensive LinkedIn personal branding. Brand positioning, thought leadership content, and visual branding."
        keywords="LinkedIn personal branding, thought leadership, personal brand strategy, industry expert, LinkedIn authority, professional branding, brand positioning, reputation management"
        ogTitle="LinkedIn Personal Branding - Establish Thought Leadership"
        ogDescription="Comprehensive LinkedIn personal branding package to establish yourself as an industry thought leader and build professional authority."
        canonicalUrl="https://onwardcareers.co.uk/services/linkedin-personal-branding"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Personal Branding Package" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Personal Branding Package
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Establish yourself as an industry thought leader with comprehensive personal branding
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
                        "Brand positioning strategy",
                        "Thought leadership content",
                        "Visual branding guidelines",
                        "Content pillars development",
                        "Engagement strategy",
                        "Reputation management"
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
                      <Lightbulb className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Thought Leadership</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Industry expert positioning</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Eye className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Visual Identity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Consistent brand image</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Award className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Authority Building</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Credibility enhancement</p>
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
                      Complete personal branding package
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="Personal Branding Package" />
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

export default LinkedInPersonalBranding;
