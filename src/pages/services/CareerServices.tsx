
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareerServiceCard } from "@/components/services/CareerServiceCard";
import { CareerPageHeader } from "@/components/services/CareerPageHeader";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { careerServices } from "@/data/careerServices";
import { getCategoryColor } from "@/utils/careerServiceStyles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Shield, Clock } from "lucide-react";

const CareerServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Career Services" />

            <CareerPageHeader />

            {/* Why Career Services Matter */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Professional Career Services Matter</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Higher Interview Rate</h3>
                    <p className="text-gray-300">Professional resumes get 3x more interviews than DIY versions</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Better Salary Offers</h3>
                    <p className="text-gray-300">Professional career services help secure 15-20% higher salaries</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Faster Job Search</h3>
                    <p className="text-gray-300">Reduce job search time by 50% with optimized applications</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Career Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {careerServices.map((service) => (
                  <CareerServiceCard
                    key={service.id}
                    service={service}
                    // getCategoryColor={getCategoryColor}
                  />
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
                    title: "Consultation",
                    description: "Free initial consultation to understand your career goals and current situation"
                  },
                  {
                    step: "2",
                    title: "Analysis",
                    description: "Thorough analysis of your background, skills, and target opportunities"
                  },
                  {
                    step: "3",
                    title: "Creation",
                    description: "Professional creation of your resume, LinkedIn profile, and other materials"
                  },
                  {
                    step: "4",
                    title: "Optimization",
                    description: "Continuous optimization based on market feedback and results"
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
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
                        Career Change
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Marketing Manager → Data Scientist</h3>
                    <p className="text-gray-300 mb-4">
                      "The resume rewrite and LinkedIn optimization helped me transition into tech. I received 5 interview calls in the first week!"
                    </p>
                    <div className="flex items-center text-green-400">
                      <Shield className="w-4 h-4 mr-2" />
                      <span className="text-sm">Landed dream job with 35% salary increase</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        Senior Role
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Developer → Engineering Manager</h3>
                    <p className="text-gray-300 mb-4">
                      "Professional resume writing and interview coaching helped me secure a leadership position at a Fortune 500 company."
                    </p>
                    <div className="flex items-center text-green-400">
                      <Shield className="w-4 h-4 mr-2" />
                      <span className="text-sm">Promoted to management with 45% raise</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Career Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Industry Expertise",
                    description: "Our writers have expertise across 50+ industries",
                    icon: "🎯"
                  },
                  {
                    title: "ATS Optimization",
                    description: "All documents are optimized for Applicant Tracking Systems",
                    icon: "🤖"
                  },
                  {
                    title: "Fast Turnaround",
                    description: "Most services completed within 24-48 hours",
                    icon: "⚡"
                  },
                  {
                    title: "Unlimited Revisions",
                    description: "We work until you're 100% satisfied",
                    icon: "🔄"
                  },
                  {
                    title: "Success Guarantee",
                    description: "Money-back guarantee if not satisfied",
                    icon: "✅"
                  },
                  {
                    title: "Ongoing Support",
                    description: "Free consultation even after service completion",
                    icon: "🤝"
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CareerServices;
