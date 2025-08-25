import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { 
  FileText, 
  Linkedin, 
  Mail, 
  Video, 
  Users, 
  Briefcase,
  CheckCircle,
  Star,
  Calendar,
  MessageCircle,
  LucideIcon
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  price: string;
  features: string[];
  benefits: string[];
  deliveryTime: string;
  category: string;
}

const services: Service[] = [
  {
    id: "resume-writing",
    title: "Professional Resume Writing",
    description: "ATS-optimized resumes that get you noticed by recruiters and hiring managers",
    icon: FileText,
    price: "£79",
    features: [
      "ATS-optimized format",
      "Industry-specific keywords",
      "Professional summary",
      "Achievement-focused content",
      "2 rounds of revisions",
      "48-hour delivery"
    ],
    benefits: [
      "85% higher interview rate",
      "Professional presentation",
      "Keyword optimization",
      "Industry expertise"
    ],
    deliveryTime: "24-48 hours",
    category: "Career Services"
  },
  {
    id: "linkedin-optimization",
    title: "LinkedIn Profile Optimization",
    description: "Complete LinkedIn makeover to boost your professional presence and visibility",
    icon: Linkedin,
    price: "£59",
    features: [
      "Compelling headline creation",
      "Professional summary writing",
      "Experience section optimization",
      "Skills & endorsements setup",
      "Industry keyword integration",
      "Profile photo guidance"
    ],
    benefits: [
      "5x more profile views",
      "Increased recruiter outreach",
      "Enhanced professional brand",
      "Better networking opportunities"
    ],
    deliveryTime: "24-48 hours",
    category: "LinkedIn Services"
  },
  {
    id: "cover-letter",
    title: "Cover Letter Writing",
    description: "Personalized cover letters that showcase your unique value proposition",
    icon: Mail,
    price: "£39",
    features: [
      "Customized for each role",
      "Compelling opening",
      "Value proposition highlight",
      "Professional closing",
      "Industry-specific language",
      "Multiple formats"
    ],
    benefits: [
      "Stand out from competition",
      "Show genuine interest",
      "Highlight key achievements",
      "Professional presentation"
    ],
    deliveryTime: "24 hours",
    category: "Career Services"
  },
  {
    id: "video-resume",
    title: "Video Resume Creation",
    description: "Professional video resumes that bring your personality and skills to life",
    icon: Video,
    price: "£149",
    features: [
      "Professional script writing",
      "Video editing & production",
      "Background music",
      "Text overlays",
      "Multiple format delivery",
      "Revision included"
    ],
    benefits: [
      "Personal connection",
      "Showcase communication skills",
      "Stand out uniquely",
      "Modern approach"
    ],
    deliveryTime: "3-5 days",
    category: "Video Services"
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "Professional social media presence management for career advancement",
    icon: Users,
    price: "£199/month",
    features: [
      "Content calendar creation",
      "Daily posting schedule",
      "Engagement management",
      "Hashtag strategy",
      "Analytics reporting",
      "Brand consistency"
    ],
    benefits: [
      "Consistent online presence",
      "Increased visibility",
      "Professional networking",
      "Brand building"
    ],
    deliveryTime: "Ongoing",
    category: "Marketing Services"
  },
  {
    id: "career-consultation",
    title: "Career Consultation",
    description: "One-on-one career guidance and strategy sessions with industry experts",
    icon: Briefcase,
    price: "£99",
    features: [
      "60-minute consultation",
      "Career path analysis",
      "Industry insights",
      "Action plan creation",
      "Follow-up support",
      "Resource recommendations"
    ],
    benefits: [
      "Clear career direction",
      "Expert guidance",
      "Personalized strategy",
      "Confidence building"
    ],
    deliveryTime: "Same day booking",
    category: "Career Services"
  }
];

export const UsefulServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Useful & Best Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our most popular and effective career services designed to accelerate your professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700"
                onClick={() => handleServiceClick(service)}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {service.price}
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    {service.category}
                  </Badge>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Delivery: {service.deliveryTime}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Modal */}
        <Dialog open={!!selectedService} onOpenChange={handleCloseModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700">
            {selectedService && (
              <>
                <DialogHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <selectedService.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl text-gray-900 dark:text-white">
                        {selectedService.title}
                      </DialogTitle>
                      <p className="text-gray-600 dark:text-gray-300">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      What's Included:
                    </h3>
                    <div className="space-y-3 mb-6">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Key Benefits:
                    </h3>
                    <div className="space-y-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {selectedService.price}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Delivery: {selectedService.deliveryTime}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline"
                            size="sm"
                            onClick={() => window.open('https://wa.me/447553409836', '_blank')}
                            className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            WhatsApp
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => window.open('https://calendly.com/onwardcareershelp/30min', '_blank')}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            Book Call
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Get Started Today
                      </h3>
                      <ContactForm prefilledService={selectedService.title} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};