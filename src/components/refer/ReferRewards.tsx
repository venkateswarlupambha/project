
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Gift, Award, Clock, Star, TrendingUp } from "lucide-react";

export const ReferRewards = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Choose Your Reward</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">Pick the reward that works best for you - all our options are designed to maximize your benefits</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="text-center bg-gradient-to-br from-slate-900 to-slate-800 border-green-500/30 hover:border-green-400 transition-all duration-300 group hover:scale-105">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">₹100 Instant Cashback</CardTitle>
              <Badge className="bg-green-500/10 text-green-400 border-green-500/30">Most Popular</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">Direct UPI transfer within 24 hours of successful referral conversion</p>
              <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                <Clock className="w-4 h-4" />
                <span>Instant Payout</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-gradient-to-br from-slate-900 to-slate-800 border-blue-500/30 hover:border-blue-400 transition-all duration-300 group hover:scale-105">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Premium Templates</CardTitle>
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/30">High Value</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">Choose from LinkedIn banners, resume templates, or cover letter designs</p>
              <div className="flex items-center justify-center gap-2 text-blue-400 text-sm">
                <Star className="w-4 h-4" />
                <span>Premium Quality</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-gradient-to-br from-slate-900 to-slate-800 border-purple-500/30 hover:border-purple-400 transition-all duration-300 group hover:scale-105 md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-white text-xl">15% Future Discount</CardTitle>
              <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30">Best Deal</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">Save big on any future service purchase - stackable with other offers</p>
              <div className="flex items-center justify-center gap-2 text-purple-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Long-term Savings</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
