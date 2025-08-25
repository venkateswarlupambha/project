
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Legal Clarification?</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Have questions about our terms or need specific legal information? Contact our legal team.
        </p>
        <Button 
          size="lg"
          className="bg-white text-blue-600 hover:bg-blue-50"
          onClick={() => window.location.href = 'mailto:legal@onwardcareers.com'}
        >
          Contact Legal Team
        </Button>
      </div>
    </section>
  );
};
