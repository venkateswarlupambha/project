
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Globe, CheckCircle, Target, Sparkles } from "lucide-react";

export const AboutWhyChoose = () => {
  return (
    <section className="text-gray-300 py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose Onward Careers?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We stand out from the competition with our personalized approach, industry expertise, and unwavering commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proven Track Record */}
            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Proven Track Record</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  Over 95% of our clients receive interview calls within 30 days, with an average salary increase of 25%.
                </p>
              </CardContent>
            </Card>

            {/* Expert Team */}
            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Certified Experts</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  Our team consists of certified resume writers, LinkedIn strategists, and career coaches with 10+ years of experience.
                </p>
              </CardContent>
            </Card>

            {/* Quick Turnaround */}
            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-green-500/50 transition-all duration-500 group shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">Quick Turnaround</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  Get your professionally written resume and optimized LinkedIn profile within 48-72 hours of order confirmation.
                </p>
              </CardContent>
            </Card>

            {/* Global Reach */}
            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Global Expertise</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  We serve clients across 15+ countries, understanding local market requirements and international standards.
                </p>
              </CardContent>
            </Card>

            {/* ATS Optimization */}
            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">ATS-Friendly</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  All our resumes are optimized for Applicant Tracking Systems, ensuring your application gets past the initial screening.
                </p>
              </CardContent>
            </Card>

            {/* Ongoing Support */}
            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-green-500/50 transition-all duration-500 group shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">Ongoing Support</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  We don't just deliver and disappear. Get 30 days of unlimited revisions and career guidance after delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
