
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { SEO } from "@/components/SEO";
import { Camera, CheckCircle, Star, Video, Edit, Eye } from "lucide-react";

const LinkedInVideoContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900/20 via-slate-900 to-blue-900/20 transition-colors duration-500">
      <SEO 
        title="LinkedIn Video Content Creation | Professional Video Marketing - Onward Careers"
        description="Create engaging LinkedIn video content to boost your professional presence. Professional video editing, script writing, and SEO optimization for LinkedIn videos."
        keywords="LinkedIn video content, LinkedIn video marketing, professional video editing, video content strategy, LinkedIn video SEO, social media video, business video content"
        ogTitle="LinkedIn Video Content Creation - Boost Your Professional Presence"
        ogDescription="Professional LinkedIn video content creation service with script writing, editing, and SEO optimization to maximize engagement."
        canonicalUrl="https://onwardcareers.co.uk/services/linkedin-video-content"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="LinkedIn Video Content Creation" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                LinkedIn Video Content Creation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create engaging video content for LinkedIn to boost your professional presence
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
                        "Video content strategy",
                        "Script writing",
                        "Professional video editing",
                        "Thumbnail design",
                        "Video SEO optimization",
                        "Performance analytics"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Video className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Video Strategy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Engaging content plan</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Edit className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Professional Editing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">High-quality production</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Eye className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <CardTitle className="text-white">SEO Optimization</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Better visibility</p>
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
                      Video content creation package
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="LinkedIn Video Content Creation" />
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

export default LinkedInVideoContent;
