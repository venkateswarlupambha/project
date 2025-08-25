
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
// import { Loader } from "@/components/Loader";
import { features, benefits, testimonials } from "@/data/seoPageData";
import { SeoHero } from "@/components/services/seo/SeoHero";
// import { SeoFeatures } from "@/components/services/seo/SeoFeatures";
import { SeoBenefits } from "@/components/services/seo/SeoBenefits";
import { SeoTestimonials } from "@/components/services/seo/SeoTestimonials";
import { SeoCta } from "@/components/services/seo/SeoCta";

const SEOOptimization = () => {
  // Loader has been removed for instant display
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900/20 via-slate-900 to-orange-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <SeoHero handleOrderNow={handleOrderNow} />
        {/* Optionally re-add: <SeoFeatures features={features} /> when seofeatures exists */}
        <SeoBenefits benefits={benefits} />
        <SeoTestimonials testimonials={testimonials} />
        <SeoCta handleOrderNow={handleOrderNow} />
      </div>
      <Footer />
    </div>
  );
};

export default SEOOptimization;

