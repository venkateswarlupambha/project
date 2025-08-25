
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Layout, Smartphone, Monitor, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PostTemplates = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Social Media Post Templates" />

            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
                <Star className="w-3 h-3 mr-1" />
                Design Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Social Media Post Templates
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Professional Canva and PSD templates for consistent, eye-catching social media posts
              </p>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-purple-400">Stand Out Now</span>
              </div>
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold px-8 py-3 text-lg"
              >
                Get Started Now
              </Button>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What You'll Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Canva Templates", description: "Easy-to-edit Canva templates for quick customization", icon: Layout },
                  { title: "PSD Files", description: "Professional Photoshop files for advanced editing", icon: Palette },
                  { title: "Brand Consistency", description: "Templates designed to maintain your brand identity", icon: CheckCircle },
                  { title: "Multiple Formats", description: "Templates for all major social media platforms", icon: Smartphone }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                        </div>
                        <p className="text-gray-300">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Template Packages */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Template Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    package: "Starter Pack",
                    price: "$79",
                    description: "Essential templates for small businesses",
                    includes: ["10 Canva templates", "5 PSD files", "2 platforms", "Basic customization guide"]
                  },
                  {
                    package: "Professional Pack",
                    price: "$149",
                    description: "Comprehensive templates for growing brands",
                    includes: ["25 Canva templates", "15 PSD files", "4 platforms", "Advanced customization", "Brand guidelines"]
                  },
                  {
                    package: "Premium Pack",
                    price: "$249",
                    description: "Complete template library for enterprises",
                    includes: ["50 Canva templates", "30 PSD files", "All platforms", "Custom color schemes", "Video tutorials", "Priority support"]
                  }
                ].map((pack, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{pack.package}</CardTitle>
                      <div className="text-2xl font-bold text-purple-400">{pack.price}</div>
                      <p className="text-gray-300">{pack.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pack.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Supported Platforms */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Supported Platforms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { platform: "Instagram", formats: ["Posts (1:1)", "Stories (9:16)", "Reels covers", "Carousel posts"] },
                  { platform: "Facebook", formats: ["Posts (1.91:1)", "Stories (9:16)", "Cover photos", "Event banners"] },
                  { platform: "LinkedIn", formats: ["Posts (1.91:1)", "Articles", "Company updates", "Event posts"] },
                  { platform: "Twitter/X", formats: ["Posts (16:9)", "Header images", "Thread graphics", "Announcement posts"] }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{item.platform}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {item.formats.map((format, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            • {format}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Template Categories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Template Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    category: "Business & Corporate",
                    templates: ["Professional announcements", "Company updates", "Team introductions", "Achievement posts"]
                  },
                  {
                    category: "Marketing & Sales",
                    templates: ["Product showcases", "Promotional offers", "Testimonials", "Call-to-action posts"]
                  },
                  {
                    category: "Educational & Tips",
                    templates: ["How-to guides", "Quick tips", "Industry insights", "FAQ posts"]
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{item.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.templates.map((template, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                            {template}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Brand Analysis", description: "Understanding your brand colors, fonts, and style" },
                  { step: "2", title: "Template Design", description: "Creating custom templates based on your brand" },
                  { step: "3", title: "File Preparation", description: "Preparing Canva and PSD files for easy editing" },
                  { step: "4", title: "Delivery & Training", description: "Template delivery with usage instructions" }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Streamline Your Social Media Design?</h3>
                  <p className="text-gray-300 mb-6">
                    Get professional templates that save time and maintain brand consistency across all platforms
                  </p>
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold px-8 py-3"
                  >
                    Order Your Template Pack
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PostTemplates;
