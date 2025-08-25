
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const wordpressOrderFeatures = [
  "Custom WordPress Design",
  "SEO Optimization",
  "Mobile Responsive",
  "Security & Speed Enhancement",
  "Plugin Integration",
  "Ongoing Support"
];

const OrderWordpress = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800/10 via-slate-900 to-blue-800/10">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-slate-800/70 border-slate-700/50">
            <CardHeader>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4 px-4 py-2 inline-flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                WordPress Order
              </Badge>
              <CardTitle className="text-white text-2xl mt-2">
                Order Your WordPress Service
              </CardTitle>
              <p className="text-gray-300 mt-3">
                Fill out the details below or contact us directly for a custom WordPress solution tailored to your business.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {wordpressOrderFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg bg-blue-600/20 text-blue-100 p-4 mb-6">
                Ready to get started? 
                <br />
                <span className="text-white font-semibold">Contact us via WhatsApp ( +44 7553 409836 ) or use our <a href="/contact" className="underline text-blue-300">contact form</a>.</span>
                <br />
                Our WordPress experts will be in touch promptly!
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderWordpress;
