
import { Badge } from "@/components/ui/badge";
import { Gift } from "lucide-react";
import { useState, useEffect } from "react";

export const ReferStats = () => {
  const [animatedCounts, setAnimatedCounts] = useState({
    referrals: 0,
    rewards: 0,
    satisfaction: 0
  });

  // Animate counters on component mount
  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof animatedCounts, duration: number = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(250, 'referrals');
      animateCounter(50000, 'rewards');
      animateCounter(98, 'satisfaction');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-12 pb-16 px-4 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      <div className="container mx-auto text-center">
        <Badge className="mx-auto mb-7 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30 text-base px-6 py-3 font-semibold rounded-full flex items-center justify-center gap-2 backdrop-blur-sm">
          <Gift className="w-5 h-5 mr-2 animate-bounce" />
          🔥 Limited Time Offer - Refer & Earn Program
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-7 text-white tracking-tight">
          Share Success, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Earn Big Rewards</span>
        </h1>
        
        <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Transform careers and get rewarded for it! Every friend you refer is a step towards building a stronger professional network while earning amazing benefits.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">{animatedCounts.referrals}+</div>
            <div className="text-slate-300">Successful Referrals</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="text-3xl font-bold text-green-400 mb-2">₹{animatedCounts.rewards.toLocaleString()}+</div>
            <div className="text-slate-300">Total Rewards Paid</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">{animatedCounts.satisfaction}%</div>
            <div className="text-slate-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};
