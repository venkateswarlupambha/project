import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  services: string[];
  features?: string[];
  price?: string;
  duration?: string;
  // Add any other properties that your service objects might have
}

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  if (!service) return null;

  const Icon = service.icon;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
        <DialogHeader>
          <div className="flex items-center space-x-4 mb-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl text-white">{service.title}</DialogTitle>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Services Include:</h3>
            <div className="space-y-3">
              {service.services.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose Our {service.title}?</h4>
              <div className="space-y-2 text-gray-300">
                <p>✅ Industry experts with years of experience</p>
                <p>✅ Personalized approach for each client</p>
                <p>✅ Quick turnaround time (24-48 hours)</p>
                <p>✅ Unlimited revisions until satisfied</p>
                <p>✅ ATS-optimized content for better visibility</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h3>
              <ContactForm prefilledService={service.title} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};