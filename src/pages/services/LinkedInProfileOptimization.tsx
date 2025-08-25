
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { SEO } from "@/components/SEO";
import { Users, CheckCircle, Star, Clock, Award, Target } from "lucide-react";

const LinkedInProfileOptimization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20 transition-colors duration-500">
      <SEO 
        title="Complete LinkedIn Profile Optimization | Professional Profile Makeover - Onward Careers"
        description="Transform your LinkedIn profile into a professional showcase that attracts recruiters and opportunities. Complete optimization with headline, summary, and SEO integration."
        keywords="LinkedIn profile optimization, LinkedIn profile makeover, professional LinkedIn profile, LinkedIn SEO, recruiter-ready profile, LinkedIn headline optimization, LinkedIn summary"
        ogTitle="Complete LinkedIn Profile Optimization - Attract Recruiters"
        ogDescription="Professional LinkedIn profile optimization service to transform your profile into a recruiter magnet and career catalyst."
        canonicalUrl="https://onwardcareers.co.uk/services/linkedin-profile-optimization"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Complete Profile Optimization" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Complete Profile Optimization
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your LinkedIn profile into a professional showcase that attracts recruiters and opportunities
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
                        "Professional headline optimization",
                        "Compelling summary section",
                        "Experience section enhancement",
                        "Skills & endorsements setup",
                        "Profile photo guidance",
                        "SEO keyword integration"
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
                      <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Quick Turnaround</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">24-48 hours delivery</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Targeted Approach</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Industry-specific optimization</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Professional Result</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Recruiter-ready profile</p>
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
                      Complete LinkedIn profile transformation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="Complete Profile Optimization" />
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

export default LinkedInProfileOptimization;
