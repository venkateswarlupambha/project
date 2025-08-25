
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { SEO } from "@/components/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <SEO 
        title="Contact Us | Get Professional Career & LinkedIn Services - Onward Careers"
        description="Contact Onward Careers for professional resume writing, LinkedIn optimization, and career services. Free consultation available. WhatsApp: +44 7553 409836 or book a call today."
        keywords="contact Onward Careers, career services contact, resume writing contact, LinkedIn optimization contact, professional career help, career consultation"
        ogTitle="Contact Onward Careers - Professional Career Services"
        ogDescription="Get in touch with Onward Careers for expert career services, resume writing, and LinkedIn optimization. Free consultation available."
        canonicalUrl="https://onwardcareers.co.uk/contact"
      />
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
