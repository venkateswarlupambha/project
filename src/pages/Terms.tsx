
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Search, Filter, FileText, Shield, Users, CreditCard, Gavel, Globe, AlertTriangle, CheckCircle, Scale, Lock } from "lucide-react";
import { TermsHero } from "@/components/terms/TermsHero";
import { TermsSearch } from "@/components/terms/TermsSearch";
import { TermsCards } from "@/components/terms/TermsCards";
import { AcceptanceSection } from "@/components/terms/AcceptanceSection";
import { ServiceDescriptionSection } from "@/components/terms/ServiceDescriptionSection";
import { PaymentTermsSection } from "@/components/terms/PaymentTermsSection";
import { FraudPreventionSection } from "@/components/terms/FraudPreventionSection";
import { EnforcementSection } from "@/components/terms/EnforcementSection";
import { AdditionalSections } from "@/components/terms/AdditionalSections";
import { ContactSection } from "@/components/terms/ContactSection";

const Terms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const lastUpdated = "January 15, 2025";

  const termsData = [
    {
      id: 1,
      title: "Service Agreement",
      category: "services",
      content: "Terms and conditions for our professional services including resume writing, LinkedIn optimization, and career consulting.",
      icon: FileText,
      tags: ["services", "agreement", "professional"]
    },
    {
      id: 2,
      title: "Privacy Policy",
      category: "privacy",
      content: "How we collect, use, and protect your personal information and data when using our services.",
      icon: Shield,
      tags: ["privacy", "data", "protection"]
    },
    {
      id: 3,
      title: "User Responsibilities",
      category: "users",
      content: "Guidelines for appropriate use of our platform and services, including client responsibilities.",
      icon: Users,
      tags: ["users", "responsibilities", "guidelines"]
    },
    {
      id: 4,
      title: "Payment Terms",
      category: "payment",
      content: "Billing cycles, payment methods, refund policies, and cancellation procedures.",
      icon: CreditCard,
      tags: ["payment", "billing", "refund"]
    },
    {
      id: 5,
      title: "Intellectual Property",
      category: "legal",
      content: "Rights and ownership of content, designs, and materials created through our services.",
      icon: Gavel,
      tags: ["intellectual", "property", "rights"]
    },
    {
      id: 6,
      title: "International Terms",
      category: "international",
      content: "Specific terms and conditions for international clients and cross-border services.",
      icon: Globe,
      tags: ["international", "global", "cross-border"]
    },
    {
      id: 7,
      title: "Fraud Prevention",
      category: "legal",
      content: "Legal protections against service fraud, payment evasion, and breach of contract.",
      icon: Scale,
      tags: ["fraud", "prevention", "legal"]
    },
    {
      id: 8,
      title: "Enforcement Actions",
      category: "legal",
      content: "Legal remedies and enforcement procedures for contract violations and non-payment.",
      icon: Lock,
      tags: ["enforcement", "legal", "remedies"]
    }
  ];

  const categories = [
    { id: "all", label: "All Categories" },
    { id: "services", label: "Services" },
    { id: "privacy", label: "Privacy" },
    { id: "users", label: "Users" },
    { id: "payment", label: "Payment" },
    { id: "legal", label: "Legal" },
    { id: "international", label: "International" }
  ];

  const filteredTerms = termsData.filter(term => {
    const matchesSearch = term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || term.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms of Service | Onward Careers"
        description="Read our terms of service, privacy policy, and legal guidelines. Find specific rules and policies using our search and filter tools."
        keywords="terms of service, privacy policy, legal, rules, policies, guidelines"
        ogTitle="Terms of Service - Onward Careers"
        ogDescription="Comprehensive terms of service and legal policies for Onward Careers professional services."
        canonicalUrl="https://onwardcareers.co.uk/terms"
      />
      <Header />
      
      <main className="pt-20">
        <TermsHero lastUpdated={lastUpdated} />
        
        <TermsSearch 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          resultsCount={filteredTerms.length}
        />

        <TermsCards 
          filteredTerms={filteredTerms}
          categories={categories}
        />

        <section className="py-20 bg-gray-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                <AcceptanceSection />
                <ServiceDescriptionSection />
                <PaymentTermsSection />
                <FraudPreventionSection />
                <EnforcementSection />
                <AdditionalSections />
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
