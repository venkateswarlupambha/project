
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LinkedInPageHeader } from "@/components/services/LinkedInPageHeader";
import { LinkedInServiceCard } from "@/components/services/LinkedInServiceCard";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { SEO } from "@/components/SEO";
import { linkedinServices } from "@/data/linkedinServices";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CheckCircle, Award, Clock } from "lucide-react";

const LinkedInServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <SEO 
        title="Professional LinkedIn Services | Complete LinkedIn Solutions - Onward Careers"
        description="Comprehensive LinkedIn services including profile optimization, content strategy, lead generation, and networking. Professional LinkedIn solutions to boost your career and business growth."
        keywords="LinkedIn services, LinkedIn optimization, LinkedIn marketing, professional LinkedIn, LinkedIn profile services, LinkedIn content creation, LinkedIn lead generation, LinkedIn networking"
        ogTitle="Professional LinkedIn Services - Complete LinkedIn Solutions"
        ogDescription="Comprehensive LinkedIn services to optimize your profile, generate leads, and build your professional network effectively."
        canonicalUrl="https://onwardcareers.co.uk/services/linkedin-services"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="LinkedIn Services" />
            <LinkedInPageHeader />
            
            {/* Why LinkedIn Optimization Matters */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why LinkedIn Optimization Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Professional Visibility</h3>
                    <p className="text-gray-300">Increase your profile visibility to recruiters and industry professionals by 300%</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Career Opportunities</h3>
                    <p className="text-gray-300">Access hidden job market and receive 5x more job opportunities</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Time Efficiency</h3>
                    <p className="text-gray-300">Save 10+ hours weekly with optimized networking and content strategies</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our LinkedIn Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {linkedinServices.map((service) => (
                  <LinkedInServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Analysis",
                    description: "We analyze your current LinkedIn profile and identify improvement opportunities"
                  },
                  {
                    step: "2",
                    title: "Strategy",
                    description: "Develop a customized LinkedIn strategy based on your career goals and industry"
                  },
                  {
                    step: "3",
                    title: "Implementation",
                    description: "Execute the optimization plan with professional content and strategic positioning"
                  },
                  {
                    step: "4",
                    title: "Monitoring",
                    description: "Track performance metrics and continuously optimize for better results"
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Career Transition
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Software Engineer → Tech Lead</h3>
                    <p className="text-gray-300 mb-4">
                      "After LinkedIn optimization, I received 3 job offers within 2 weeks and successfully transitioned to a Tech Lead role with 40% salary increase."
                    </p>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">Profile views increased by 250%</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        Business Growth
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Consultant → Industry Expert</h3>
                    <p className="text-gray-300 mb-4">
                      "LinkedIn content strategy helped me establish thought leadership and generate 50+ qualified leads monthly."
                    </p>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">Engagement rate increased by 400%</span>
                    </div>
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

export default LinkedInServices;
