
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { CreditCard, CheckCircle, Star, QrCode, Smartphone, Share } from "lucide-react";

const DigitalBusinessCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Digital Business Card Creation" />

            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Digital Business Card Creation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Modern digital business cards for networking in the digital age
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
                        "Interactive design elements",
                        "QR code included",
                        "Multiple format delivery",
                        "Contact information setup",
                        "Social media integration",
                        "Easy sharing options"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <QrCode className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <CardTitle className="text-white">QR Code</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Easy scanning</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Smartphone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Mobile Optimized</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Perfect display</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 text-center">
                    <CardHeader>
                      <Share className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Easy Sharing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Instant networking</p>
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
                      Digital business card creation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm prefilledService="Digital Business Card Creation" />
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

export default DigitalBusinessCard;
