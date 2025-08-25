
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { SEO } from "@/components/SEO";
import { Target, CheckCircle, Star, Search, Users, TrendingUp } from "lucide-react";

const LinkedInJobSearch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-slate-900 to-green-900/20 transition-colors duration-500">
      <SEO 
        title="LinkedIn Job Search Optimization | Find Your Dream Job - Onward Careers"
        description="Optimize your LinkedIn profile for job search success. Get discovered by recruiters, set up job alerts, and land your dream job with our professional optimization service."
        keywords="LinkedIn job search, job search optimization, LinkedIn recruiter, job alerts setup, career opportunities, professional networking, job hunting, LinkedIn profile for recruiters"
        ogTitle="LinkedIn Job Search Optimization - Get Discovered by Recruiters"
        ogDescription="Transform your LinkedIn profile into a recruiter magnet. Professional job search optimization service with proven results."
        canonicalUrl="https://onwardcareers.co.uk/services/linkedin-job-search"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Job Search Optimization" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Job Search Optimization
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Optimize your profile for recruiters and unlock new career opportunities
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
                        "Recruiter-focused optimization",
                        "Job alert setup",
                        "Application tracking",
                        "Interview preparation",
                        "Salary negotiation tips",
                        "Career transition guidance"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Search className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Job Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Never miss opportunities</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Recruiter Ready</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Optimized for recruiters</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Career Growth</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Strategic career moves</p>
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
                      Job search optimization package
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="Job Search Optimization" />
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

export default LinkedInJobSearch;
