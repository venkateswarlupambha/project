
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

export const ReferContact = () => {
  return (
    <section className="py-16 px-4 bg-slate-950">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Questions About Our Referral Program?</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Our team is here to help you maximize your earning potential. Get in touch for any questions or support.</p>
        <div className="flex justify-center gap-4">
          <Button 
            variant="outline" 
            className="bg-slate-900/50 border-slate-600 text-white hover:bg-slate-800 hover:border-green-500 transition-all duration-300"
            onClick={() => window.open('https://wa.me/447553409836', '_blank')}
          >
            <MessageCircle className="w-4 h-4 mr-2 text-green-400" />
            WhatsApp Support
          </Button>
          <Button 
            variant="outline"
            className="bg-slate-900/50 border-slate-600 text-white hover:bg-slate-800 hover:border-blue-500 transition-all duration-300"
            onClick={() => window.open('mailto:info@onwardcareers.com', '_blank')}
          >
            <Mail className="w-4 h-4 mr-2 text-blue-400" />
            Email Support
          </Button>
        </div>
      </div>
    </section>
  );
};
