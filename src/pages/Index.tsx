
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { OfferAlert } from "@/components/OfferAlert";
import { FloatingBackground } from "@/components/FloatingBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Enhanced gradient background similar to About page */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        aria-hidden="true"
        style={{
          overflow: 'hidden',
        }}
      >
        {/* Main gradient background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at bottom left, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.25) 0%, transparent 50%),
              linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
            `,
            animation: 'gradientShift 20s ease-in-out infinite',
            zIndex: 0,
          }}
        />
        {/* Floating particles background */}
        <FloatingBackground />
        {/* Dark overlay for content readability */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        {/* Enhanced gradient animation keyframes */}
        <style>{`
          @keyframes gradientShift {
            0%, 100% { 
              background: 
                radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse at bottom left, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.25) 0%, transparent 50%),
                linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%);
            }
            25% { 
              background: 
                radial-gradient(ellipse at top right, rgba(99, 102, 241, 0.35) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse at bottom left, rgba(59, 130, 246, 0.25) 0%, transparent 50%),
                radial-gradient(ellipse at top left, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
                linear-gradient(225deg, #0f172a 0%, #312e81 25%, #1e1b4b 50%, #312e81 75%, #0f172a 100%);
            }
            50% { 
              background: 
                radial-gradient(ellipse at bottom right, rgba(99, 102, 241, 0.25) 0%, transparent 50%),
                radial-gradient(ellipse at bottom left, rgba(139, 92, 246, 0.35) 0%, transparent 50%),
                radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse at top left, rgba(168, 85, 247, 0.25) 0%, transparent 50%),
                linear-gradient(315deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%);
            }
            75% { 
              background: 
                radial-gradient(ellipse at bottom left, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
                radial-gradient(ellipse at top left, rgba(139, 92, 246, 0.25) 0%, transparent 50%),
                radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.35) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                linear-gradient(45deg, #0f172a 0%, #312e81 25%, #1e1b4b 50%, #312e81 75%, #0f172a 100%);
            }
          }
        `}</style>
      </div>
      {/* Page content above background */}
      <div className="relative z-20">
        <SEO 
          title="Onward Careers | Professional Resume Writing & LinkedIn Optimization Services"
          description="Transform your career with professional resume writing, LinkedIn optimization, and career services. Expert help from certified professionals. Get noticed by recruiters and land your dream job."
          keywords="resume writing, LinkedIn optimization, career services, professional resume, job search, career coaching, CV writing, interview preparation"
          ogTitle="Onward Careers - Professional Career Services"
          ogDescription="Professional resume writing and LinkedIn optimization services to accelerate your career growth. Expert career guidance and job search support."
          canonicalUrl="https://onwardcareers.co.uk"
        />
        <Header />
        <Hero />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection />
        <NewsletterSection />
        <ContactSection />
        <Footer />
        <OfferAlert />
      </div>
    </div>
  );
};

export default Index;
