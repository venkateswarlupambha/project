
import { Shield, Clock, TrendingUp, Star } from "lucide-react";

export const ReferFeatures = () => {
  return (
    <section className="py-16 px-4 bg-slate-950">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Our Referral Program Rocks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300">
            <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">100% Secure</h3>
            <p className="text-slate-400 text-sm">Your data and rewards are protected with bank-level security</p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-green-500/50 transition-all duration-300">
            <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Quick Payouts</h3>
            <p className="text-slate-400 text-sm">Get your rewards within 24-48 hours of successful referral</p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-purple-500/50 transition-all duration-300">
            <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No Limits</h3>
            <p className="text-slate-400 text-sm">Refer as many friends as you want - unlimited earning potential</p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-yellow-500/50 transition-all duration-300">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Bonus Rewards</h3>
            <p className="text-slate-400 text-sm">Top referrers get exclusive bonuses and special recognition</p>
          </div>
        </div>
      </div>
    </section>
  );
};
