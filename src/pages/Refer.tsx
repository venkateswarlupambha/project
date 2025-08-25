
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReferHero } from "@/components/refer/ReferHero";
import { ReferStats } from "@/components/refer/ReferStats";
import { ReferHowItWorks } from "@/components/refer/ReferHowItWorks";
import { ReferRewards } from "@/components/refer/ReferRewards";
import { ReferFeatures } from "@/components/refer/ReferFeatures";
import { ReferForm } from "@/components/refer/ReferForm";
import { ReferContact } from "@/components/refer/ReferContact";

const Refer = () => {
  // Scroll to the form section
  const scrollToForm = () => {
    const formEl = document.getElementById("referral-form-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <SEO 
        title="Refer & Earn - Onward Careers | Share & Get Rewarded"
        description="Refer friends to Onward Careers and earn amazing rewards! Get cashback, free templates, or discounts when your referrals purchase our services."
        keywords="referral program, refer and earn, career services referral, onward careers rewards"
      />
      <Header />
      
      <ReferHero onScrollToForm={scrollToForm} />
      <ReferStats />
      <ReferHowItWorks />
      <ReferRewards />
      <ReferFeatures />
      <ReferForm />
      <ReferContact />

      <Footer />
    </div>
  );
};

export default Refer;
