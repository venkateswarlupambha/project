
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  "SEO Optimization",
  "Speed & Performance Enhancement",
  "Plugin Integration",
  "Custom Themes & Design",
  "Security & Maintenance",
  "Mobile Optimization",
];

const WordpressOrder = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900/50 via-slate-900 to-cyan-900/30">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-cyan-900/90 border-cyan-600/50" style={{ boxShadow: "0 0 20px 2px #0891b245" }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-cyan-700 rounded-lg flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 px-4 py-2">Web Development</Badge>
              </div>
              <CardTitle className="text-white text-2xl mt-2 font-bold">
                WordPress Services Order
              </CardTitle>
              <p className="text-cyan-100 mt-3 text-lg font-semibold">
                Stand Out <span className="text-cyan-200 font-extrabold text-2xl">Now</span>
              </p>
              <p className="text-cyan-200 mt-4">
                Get expert WordPress website development, design, optimization, and security. Our service covers everything your site needs for success.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 mt-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-base text-cyan-100">
                    <CheckCircle className="w-4 h-4 text-teal-300 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-cyan-800/50 text-cyan-100 p-4 mb-6 text-center">
                <div className="mb-1 font-semibold">Ready to elevate your website?</div>
                <div>
                  <span className="text-white font-semibold">Contact us via WhatsApp</span>{" "}
                  <a href="https://wa.me/447553409836" className="underline text-cyan-300" target="_blank" rel="noopener noreferrer">
                    +44 7553 409836
                  </a>
                  {" "}or use our{" "}
                  <a href="/contact" className="underline text-cyan-300">
                    contact form
                  </a>.
                </div>
                <div className="mt-2">Our WordPress team will respond promptly!</div>
              </div>
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold py-3 rounded-lg shadow-lg transition-all">
                <a href="/contact">
                  Request a Free Consultation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WordpressOrder;
