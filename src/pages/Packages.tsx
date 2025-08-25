
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PackagesSection } from "@/components/PackagesSection";
import { SEO } from "@/components/SEO";

const Packages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <SEO 
        title="Career Service Packages | Affordable Professional Career Solutions - Onward Careers"
        description="Discover our affordable career service packages including resume writing, LinkedIn optimization, and complete career transformation packages. Professional career solutions starting from £79."
        keywords="career packages, resume writing packages, LinkedIn packages, career service deals, professional career packages, affordable career services, career transformation packages"
        ogTitle="Career Service Packages - Affordable Professional Solutions"
        ogDescription="Affordable career service packages including resume writing, LinkedIn optimization, and complete career transformation solutions."
        canonicalUrl="https://onwardcareers.co.uk/packages"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <PackagesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Packages;
