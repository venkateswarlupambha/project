
import { Target, Lightbulb, Award, TrendingUp } from "lucide-react";

export const AboutContent = () => {
  return (
    <section className="bg-slate-900 text-gray-300 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission Statement */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-600/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Foundation</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Founded on the principle that everyone deserves a fulfilling career, Onward Careers was created to provide top-tier, accessible, and personalized career services. We understand the challenges of navigating the modern job market, from crafting the perfect ATS-friendly resume to building a compelling personal brand on LinkedIn.
              </p>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-purple-800/80 to-blue-800/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-600/50 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-white">95%</div>
                    <div className="text-sm text-purple-200">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">10k+</div>
                    <div className="text-sm text-purple-200">Clients Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">15+</div>
                    <div className="text-sm text-purple-200">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-600/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Our mission is to empower you with the tools, confidence, and strategies needed to not just find a job, but to build a career you love. We combine industry expertise with a deep commitment to our clients' success.
              </p>
            </div>

            {/* Who We Serve */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-600/50 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Who We Serve</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Whether you're a recent graduate, a mid-career professional looking for a change, or an executive aiming for the C-suite, we're here to guide you onward and upward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
