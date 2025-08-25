
import { Users, CheckCircle, Award } from "lucide-react";

export const ReferHowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-slate-950">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">How It Works</h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">Simple steps to start earning rewards while helping friends advance their careers</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 h-full">
              <h3 className="text-xl font-semibold mb-3 text-white">1. Refer a Friend</h3>
              <p className="text-slate-300 leading-relaxed">Fill out our simple referral form with your and your friend's information. It takes less than 2 minutes!</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 h-full">
              <h3 className="text-xl font-semibold mb-3 text-white">2. Friend Purchases</h3>
              <p className="text-slate-300 leading-relaxed">When your friend purchases any service, we automatically verify and track the referral in our system.</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 h-full">
              <h3 className="text-xl font-semibold mb-3 text-white">3. Get Rewarded</h3>
              <p className="text-slate-300 leading-relaxed">Receive your chosen reward instantly: cashback, premium templates, or exclusive discounts!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
