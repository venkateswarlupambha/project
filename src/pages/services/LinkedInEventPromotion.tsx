
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { SEO } from "@/components/SEO";
import { Calendar, CheckCircle, Star, Users, Megaphone, TrendingUp } from "lucide-react";

const LinkedInEventPromotion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900/20 via-slate-900 to-purple-900/20 transition-colors duration-500">
      <SEO 
        title="LinkedIn Event Promotion Services | Maximize Event Attendance - Onward Careers"
        description="Promote your events and webinars on LinkedIn to maximize attendance and engagement. Professional event promotion with content creation and invitation campaigns."
        keywords="LinkedIn event promotion, event marketing, webinar promotion, LinkedIn events, event attendance, professional events, business event promotion, event engagement"
        ogTitle="LinkedIn Event Promotion - Maximize Your Event Attendance"
        ogDescription="Professional LinkedIn event promotion service to maximize attendance and engagement for your events and webinars."
        canonicalUrl="https://onwardcareers.co.uk/services/linkedin-event-promotion"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="LinkedIn Event Promotion" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                LinkedIn Event Promotion
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Promote your events and webinars on LinkedIn to maximize attendance and engagement
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
                        "Event page optimization",
                        "Promotional content creation",
                        "Invitation campaigns",
                        "Speaker positioning",
                        "Attendee engagement",
                        "Post-event follow-up"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Megaphone className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Promotion Strategy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Maximize event reach</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Attendee Engagement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Interactive experience</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <TrendingUp className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Event Success</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Measurable results</p>
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
                      Event promotion package
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="LinkedIn Event Promotion" />
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

export default LinkedInEventPromotion;
