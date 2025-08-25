
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Globe, Shield, Paintbrush, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const wordpressPackages = [
  {
    icon: Globe,
    title: "WordPress Website Development",
    description: "Design and development of custom WordPress websites tailored to your brand and goals.",
    features: [
      "Fully responsive design",
      "Modern UI/UX",
      "Mobile-friendly",
      "SEO optimization",
      "Fast loading times",
      "Training & support"
    ]
  },
  {
    icon: Paintbrush,
    title: "Custom WordPress Themes",
    description: "Unique, visually appealing themes that reflect your business identity and are easy to manage.",
    features: [
      "Pixel-perfect theming",
      "Easy customization",
      "Brand-aligned design",
      "Accessibility ready",
      "Theme updates",
      "Ongoing maintenance"
    ]
  },
  {
    icon: Zap,
    title: "Performance & Optimization",
    description: "Speed improvements, advanced caching, and optimization for the best user experience.",
    features: [
      "PageSpeed optimization",
      "Image & media compression",
      "Advanced caching setup",
      "CDN integration",
      "Core Web Vitals compliance",
      "Database clean-up"
    ]
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Comprehensive monitoring, threat protection, and regular updates to keep your site secure.",
    features: [
      "Malware scanning",
      "SSL implementation",
      "Spam protection",
      "Automated backups",
      "Plugin & core updates",
      "Uptime monitoring"
    ]
  }
];

const WordpressServices = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/30">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24 pb-14">
        <section className="py-10 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-14">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4 px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                WordPress Services
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Powerful WordPress Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                We provide professional WordPress services—from custom website development and theming to advanced optimization and security. Whether you need a stunning business site or require updates to an existing WordPress presence, our team ensures your success online.
              </p>
              <Button className="mt-8 px-8 py-3 text-lg" onClick={handleContact}>
                Get Started with WordPress
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {wordpressPackages.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Card key={idx} className="relative bg-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 overflow-hidden group">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                      </div>
                      <p className="text-gray-300">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="mt-4 mb-2">
                        <ul className="space-y-2">
                          {service.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                              <span className="w-2 h-2 bg-blue-400 rounded-full inline-block" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="secondary" className="w-full mt-4" onClick={handleContact}>
                        Contact for This Service
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WordpressServices;
