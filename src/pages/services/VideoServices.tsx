
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoServiceCard } from "@/components/services/VideoServiceCard";
import { VideoPageHeader } from "@/components/services/VideoPageHeader";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { videoServices } from "@/data/videoServices";
import { getCategoryColor, getGradientColor } from "@/utils/videoServiceStyles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, TrendingUp, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoServices = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900/20 via-slate-900 to-red-900/20 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Video Editing" />

            <VideoPageHeader />

            {/* Why Video Matters */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Professional Video Editing Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Higher Engagement</h3>
                    <p className="text-gray-300">Videos get 1200% more shares than text and image content combined</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Better Conversions</h3>
                    <p className="text-gray-300">Including video on landing pages can increase conversions by 80%</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Audience Retention</h3>
                    <p className="text-gray-300">Viewers retain 95% of a message when watching a video vs 10% when reading text</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Video Editing Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videoServices.map((service) => (
                  <VideoServiceCard
                    key={service.id}
                    service={service}
                    getCategoryColor={getCategoryColor}
                    getGradientColor={getGradientColor}
                    onStartProject={handleStartProject}
                  />
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Video Editing Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Upload & Brief",
                    description: "Upload your raw footage and share your vision with us"
                  },
                  {
                    step: "2",
                    title: "Edit & Enhance",
                    description: "Professional editing with effects, transitions, and color grading"
                  },
                  {
                    step: "3",
                    title: "Review & Revise",
                    description: "Review the first cut and request any necessary changes"
                  },
                  {
                    step: "4",
                    title: "Final Delivery",
                    description: "Receive your polished video in your preferred format"
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
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
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                        YouTube Growth
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Tech Channel → 100K Subscribers</h3>
                    <p className="text-gray-300 mb-4">
                      "Professional video editing transformed my content quality. Subscriber growth increased by 300% in 6 months!"
                    </p>
                    <div className="flex items-center text-orange-400">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm">Achieved 1M+ views on edited videos</span>
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
                    <h3 className="text-xl font-semibold text-white mb-2">Startup → Series A Funding</h3>
                    <p className="text-gray-300 mb-4">
                      "The professional pitch video helped us secure Series A funding. Investors loved the production quality!"
                    </p>
                    <div className="flex items-center text-orange-400">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm">Secured $5M funding round</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Video Editing Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Professional Equipment",
                    description: "Industry-standard software and premium assets",
                    icon: "🎬"
                  },
                  {
                    title: "Quick Turnaround",
                    description: "Most videos completed within 2-5 business days",
                    icon: "⚡"
                  },
                  {
                    title: "Unlimited Revisions",
                    description: "We edit until you're completely satisfied",
                    icon: "🔄"
                  },
                  {
                    title: "Multiple Formats",
                    description: "Optimized for all platforms and devices",
                    icon: "📱"
                  },
                  {
                    title: "Color Grading",
                    description: "Professional color correction and grading",
                    icon: "🎨"
                  },
                  {
                    title: "Sound Design",
                    description: "Licensed music and professional audio mixing",
                    icon: "🎵"
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

export default VideoServices;
