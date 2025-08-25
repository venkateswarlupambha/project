
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";
import { AboutWhyChoose } from "@/components/about/AboutWhyChoose";
import { AboutCTA } from "@/components/about/AboutCTA";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="About Us | Onward Careers"
        description="Learn more about Onward Careers and our mission to help you succeed in your professional journey."
        keywords="about us, career services, professional development, onward careers"
        ogTitle="About Onward Careers"
        ogDescription="Discover our story and our commitment to your career success."
        canonicalUrl="https://onwardcareers.co.uk/about"
      />
      <Header />
      
      <main>
        <AboutHero />
        <AboutContent />
        <AboutWhyChoose />
        <AboutCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
