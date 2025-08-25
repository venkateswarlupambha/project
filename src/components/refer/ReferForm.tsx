
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Shield } from "lucide-react";

export const ReferForm = () => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerWhatsapp: "",
    friendName: "",
    friendContact: "",
    serviceInterest: "",
    preferredReward: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Referral form submitted:", formData);
    // You can integrate with Google Sheets or your preferred backend
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="referral-form-section" className="py-20 px-4 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-white">Start Referring Now</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Join hundreds of satisfied users who are already earning rewards by helping friends advance their careers</p>
        </div>
        
        <Card className="bg-slate-900/90 backdrop-blur-sm border-slate-700/50 shadow-2xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30 px-4 py-2">
                  ⚡ Quick & Easy - Takes 2 Minutes
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-200">Your Name *</label>
                  <input
                    type="text"
                    name="referrerName"
                    value={formData.referrerName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-600 rounded-lg bg-slate-800/50 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-200">Your Email *</label>
                  <input
                    type="email"
                    name="referrerEmail"
                    value={formData.referrerEmail}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-600 rounded-lg bg-slate-800/50 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-200">Your WhatsApp Number *</label>
                <input
                  type="tel"
                  name="referrerWhatsapp"
                  value={formData.referrerWhatsapp}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-slate-600 rounded-lg bg-slate-800/50 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
              
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Friend's Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-200">Friend's Name *</label>
                    <input
                      type="text"
                      name="friendName"
                      value={formData.friendName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-slate-600 rounded-lg bg-slate-800/50 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                      placeholder="Friend's full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-200">Friend's Contact *</label>
                    <input
                      type="text"
                      name="friendContact"
                      value={formData.friendContact}
                      onChange={handleInputChange}
                      placeholder="Email or WhatsApp number"
                      className="w-full p-3 border border-slate-600 rounded-lg bg-slate-800/50 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-200">Service They're Interested In *</label>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-slate-600 rounded-lg bg-slate-800/50 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="resume-writing">Resume Writing</option>
                  <option value="linkedin-optimization">LinkedIn Optimization</option>
                  <option value="cover-letter">Cover Letter Writing</option>
                  <option value="career-consultation">Career Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-200">Preferred Reward *</label>
                <select
                  name="preferredReward"
                  value={formData.preferredReward}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-slate-600 rounded-lg bg-slate-800/50 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  required
                >
                  <option value="">Choose your reward</option>
                  <option value="cashback">₹100 Instant Cashback</option>
                  <option value="template">Premium Templates</option>
                  <option value="discount">15% Future Discount</option>
                </select>
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                <Gift className="w-5 h-5 mr-2" />
                Submit Referral & Start Earning
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {/* Enhanced Note */}
        <div className="mt-8 bg-slate-900/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
          <div className="text-center text-slate-300 text-sm leading-relaxed">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <strong className="text-white">Important Terms:</strong>
            </div>
            <p>Free service is eligible only after your friend completes their payment for any service. Maximum 1 free service per referral, 5 per month. Special bonuses for top referrers! All rewards are processed within 24-48 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
