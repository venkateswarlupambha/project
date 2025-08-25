import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Zap, Gift, Shield, Users, TrendingUp } from "lucide-react";

const packages = [
  {
    id: "starter",
    name: "Starter Branding",
    description: "Perfect for job seekers starting their career journey",
    color: "blue",
    popular: false,
    features: [
      "Professional Resume Writing",
      "LinkedIn Profile Optimization",
      "Cover Letter Writing",
      "1 Round of Revisions"
    ],
    delivery: "3-4 Days Delivery",
    icon: "🚀"
  },
  {
    id: "professional",
    name: "Professional Branding",
    description: "Comprehensive package for serious professionals",
    color: "purple",
    popular: true,
    features: [
      "Professional Resume Writing",
      "LinkedIn Profile Optimization",
      "Cover Letter Writing",
      "Personal Portfolio (PDF/Web)",
      "LinkedIn Banner Design",
      "2 Rounds of Revisions"
    ],
    delivery: "2-3 Days Delivery",
    icon: "⭐"
  },
  {
    id: "premium",
    name: "Premium Growth",
    description: "Complete personal branding transformation",
    color: "green",
    popular: false,
    features: [
      "Everything in Professional Package",
      "Professional Photo Editing",
      "LinkedIn Post Creation (5 posts)",
      "Digital Business Card",
      "Email Signature Design",
      "Custom Flyer Design",
      "Unlimited Revisions"
    ],
    delivery: "1-2 Days Delivery",
    express: true,
    icon: "👑"
  },
  {
    id: "business",
    name: "Business Kickstart",
    description: "For entrepreneurs and business owners",
    color: "orange",
    popular: false,
    features: [
      "LinkedIn Business Page Setup",
      "Professional Flyers & Posters",
      "Social Media Profile Setup",
      "WhatsApp Marketing Setup",
      "Content Calendar (30 days)",
      "Logo Design",
      "Brand Guidelines",
      "Priority Support"
    ],
    delivery: "3-5 Days Delivery",
    icon: "💼"
  }
];

export const PackagesSection = () => {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        border: "border-blue-500/50",
        badgeBg: "bg-blue-500/20",
        badgeText: "text-blue-400",
        badgeBorder: "border-blue-500/30",
        text: "text-blue-400"
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        border: "border-purple-500/50",
        badgeBg: "bg-purple-500/20",
        badgeText: "text-purple-400",
        badgeBorder: "border-purple-500/30",
        text: "text-purple-400"
      },
      green: {
        gradient: "from-green-500 to-green-600",
        border: "border-green-500/50",
        badgeBg: "bg-green-500/20",
        badgeText: "text-green-400",
        badgeBorder: "border-green-500/30",
        text: "text-green-400"
      },
      orange: {
        gradient: "from-orange-500 to-orange-600",
        border: "border-orange-500/50",
        badgeBg: "bg-orange-500/20",
        badgeText: "text-orange-400",
        badgeBorder: "border-orange-500/30",
        text: "text-orange-400"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="packages" className="py-16 md:py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4 text-sm md:text-base px-4 py-1">
            <Star className="w-4 h-4 mr-2" />
            Premium Packages
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Transform Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Career Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choose from our carefully crafted packages designed to accelerate your career growth with premium quality and fast delivery
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {packages.map((pkg) => {
            const color = getColorClasses(pkg.color);
            return (
              <div className="relative" key={pkg.id}>
                {/* Most Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className={`${color.badgeBg} ${color.badgeText} ${color.badgeBorder} px-4 py-1.5 font-semibold shadow-lg flex items-center gap-2`}>
                      <TrendingUp className="w-4 h-4" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                {/* Express Service Badge */}
                {pkg.express && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-1.5 font-semibold shadow-lg flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Express Service
                    </Badge>
                  </div>
                )}

                {/* Card */}
                <Card className={`relative bg-slate-800/60 backdrop-blur-sm border-2 ${color.border} h-full flex flex-col`}>
                  {/* Card Header */}
                  <CardHeader className="text-center p-6">
                    <div className="text-4xl mb-4">{pkg.icon}</div>
                    <CardTitle className="text-white text-xl md:text-2xl mb-2">
                      {pkg.name}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm md:text-base">
                      {pkg.description}
                    </CardDescription>
                    
                    {/* Delivery Time */}
                    <div className="flex items-center justify-center text-sm text-gray-300 mt-4">
                      <Clock className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="font-medium">{pkg.delivery}</span>
                    </div>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="p-6 pt-0 flex-1 flex flex-col">
                    {/* Features List */}
                    <div className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm md:text-base leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`w-full bg-gradient-to-r ${color.gradient} text-white font-semibold py-3 md:py-4`}
                      onClick={() => window.open('https://calendly.com/onwardcareershelp/30min', '_blank')}
                    >
                      <Gift className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Special Offers Banner */}
        <div className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 p-8 md:p-10 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              🎁 Special Limited Time Offers
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              {[
                {
                  icon: <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />,
                  title: "24H Express Delivery",
                  description: "Get your project delivered within 24 hours"
                },
                {
                  icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-400" />,
                  title: "Money-Back Guarantee",
                  description: "100% satisfaction guaranteed or your money back"
                },
                {
                  icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />,
                  title: "Free Consultation",
                  description: "Get expert advice before you choose your package"
                }
              ].map((offer, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-3">
                    {offer.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm md:text-base mb-2">{offer.title}</h4>
                  <p className="text-gray-300 text-xs md:text-sm">{offer.description}</p>
                </div>
              ))}
            </div>

            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
              onClick={() => window.open('https://calendly.com/onwardcareershelp/30min', '_blank')}
            >
              <Star className="w-5 h-5 mr-2" />
              Claim Your Offer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};