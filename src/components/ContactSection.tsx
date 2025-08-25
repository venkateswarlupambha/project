
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Phone, MessageCircle, Calendar, Mail, MapPin, Clock } from "lucide-react";
// import { ContactForm } from "@/components/ContactForm";

// export const ContactSection = () => {
//   return (
//     <section id="contact" className="py-20 px-4 bg-slate-800/30">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
//             <Phone className="w-3 h-3 mr-1" />
//             Get In Touch
//           </Badge>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//             Ready to Transform Your Career?
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Let's discuss your career goals and create a personalized strategy for success
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
//               <p className="text-gray-300 mb-8">
//                 Choose the best way to reach us. We're here to help you achieve your career goals with personalized service and expert guidance.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/80 transition-all duration-300">
//                 <CardContent className="p-6">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
//                       <MessageCircle className="w-6 h-6 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="text-lg font-semibold text-white mb-2">WhatsApp</h4>
//                       <p className="text-gray-300 mb-4">Get instant responses and quick consultation</p>
//                       <Button 
//                         variant="outline"
//                         className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
//                         onClick={() => window.open('https://wa.me/447553409836', '_blank')}
//                       >
//                         <MessageCircle className="w-4 h-4 mr-2" />
//                         Chat on WhatsApp
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/80 transition-all duration-300">
//                 <CardContent className="p-6">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
//                       <Calendar className="w-6 h-6 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="text-lg font-semibold text-white mb-2">Free Consultation</h4>
//                       <p className="text-gray-300 mb-4">Book a 30-minute strategy call with our experts</p>
//                       <Button 
//                         className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
//                         onClick={() => window.open('https://calendly.com/onwardcareershelp/30min', '_blank')}
//                       >
//                         <Calendar className="w-4 h-4 mr-2" />
//                         Book Free Call
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
//                 <h4 className="text-lg font-semibold text-white mb-4">Quick Info</h4>
//                 <div className="space-y-3 text-gray-300">
//                   <div className="flex items-center">
//                     <Clock className="w-4 h-4 mr-3 text-blue-400" />
//                     <span>Response Time: Within 24 hours</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Phone className="w-4 h-4 mr-3 text-green-400" />
//                     <span>WhatsApp: +447553409836</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Mail className="w-4 h-4 mr-3 text-purple-400" />
//                     <span>Email: Available after booking</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
//             <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Calendar, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 px-0 bg-slate-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-3 md:mb-4 text-xs md:text-sm">
            <Phone className="w-3 h-3 mr-1" />
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Ready to Transform Your Career?
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your career goals and create a personalized strategy for success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Get Started Today</h3>
              <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8">
                Choose the best way to reach us. We're here to help you achieve your career goals with personalized service and expert guidance.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {/* WhatsApp Card */}
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/80 transition-all duration-300">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">WhatsApp</h4>
                      <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                        Get instant responses and quick consultation
                      </p>
                      <div className="w-full sm:w-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white w-full"
                          onClick={() => window.open('https://wa.me/447553409836', '_blank')}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat on WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Consultation Card */}
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/80 transition-all duration-300">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Free Consultation</h4>
                      <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                        Book a 30-minute strategy call with our experts
                      </p>
                      <div className="w-full sm:w-auto">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full"
                          onClick={() => window.open('https://calendly.com/onwardcareershelp/30min', '_blank')}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Free Call
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <div className="bg-slate-800/30 p-4 md:p-6 rounded-lg border border-slate-700">
                <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Quick Info</h4>
                <div className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 md:mr-3 text-blue-400 flex-shrink-0" />
                    <span>Response Time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 md:mr-3 text-green-400 flex-shrink-0" />
                    <span>WhatsApp: +447553409836</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 md:mr-3 text-purple-400 flex-shrink-0" />
                    <span>Email: Available after booking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};