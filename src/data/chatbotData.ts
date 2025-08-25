
export interface ChatbotItem {
  question: string;
  answer: string;
  keywords: string[];
}

export const chatbotData: ChatbotItem[] = [
  {
    question: "What services does Onward Careers offer?",
    answer: "We offer comprehensive career services including:\n• Resume writing and optimization\n• LinkedIn profile optimization\n• Cover letter writing\n• Career consultation and coaching\n• Interview preparation\n• Portfolio building\n• Video editing and content creation\n• Web development and design\n• Marketing and social media management",
    keywords: ["services", "what do you offer", "career services", "resume", "linkedin"]
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing varies depending on the service you need. We offer competitive rates for all our services:\n• Resume writing: Starting from competitive rates\n• LinkedIn optimization: Professional packages available\n• Career coaching: Hourly and package rates\n• Custom quotes for larger projects\n\nPlease contact us for detailed pricing information tailored to your specific needs.",
    keywords: ["cost", "price", "pricing", "how much", "fees", "payment"]
  },
  {
    question: "How long does it take to complete a service?",
    answer: "Delivery times depend on the service complexity:\n• Resume writing: 2-5 business days\n• LinkedIn optimization: 3-7 business days\n• Cover letters: 1-3 business days\n• Career consultation: Scheduled sessions\n• Portfolio building: 5-10 business days\n• Custom projects: Timeline discussed during consultation\n\nWe always communicate expected delivery times before starting any project.",
    keywords: ["time", "delivery", "how long", "completion", "turnaround", "deadline"]
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! We stand behind our work and offer revisions:\n• Most services include 2-3 rounds of revisions\n• We work with you until you're satisfied\n• Revisions are completed within 24-48 hours\n• Additional revisions may be available for complex changes\n\nYour satisfaction is our priority, and we're committed to delivering exactly what you need.",
    keywords: ["revisions", "changes", "modifications", "edits", "updates", "satisfaction"]
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy:\n1. Contact us via email or our contact form\n2. Schedule a free consultation to discuss your needs\n3. Receive a custom quote and timeline\n4. Approve the proposal and make payment\n5. We begin working on your project\n6. Receive your completed work with revisions included\n\nReady to start? Contact us at legal@onwardcareers.com",
    keywords: ["get started", "begin", "start", "process", "how to", "contact"]
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We work with clients worldwide:\n• All services available internationally\n• Multiple time zone support\n• Various payment methods accepted\n• Communication via email, video calls, and messaging\n• Experience with international resume formats\n• Understanding of global job market trends",
    keywords: ["international", "worldwide", "global", "overseas", "foreign", "abroad"]
  },
  {
    question: "What makes Onward Careers different?",
    answer: "What sets us apart:\n• Personalized approach for each client\n• Industry expertise across multiple sectors\n• Proven track record of success\n• Comprehensive service offerings\n• Quick turnaround times\n• Excellent customer support\n• Competitive pricing\n• Quality guarantee with revisions\n• Modern, ATS-friendly designs",
    keywords: ["different", "unique", "why choose", "advantage", "better", "special"]
  },
  {
    question: "Can you help with interview preparation?",
    answer: "Yes! Our interview preparation services include:\n• Mock interview sessions\n• Industry-specific question preparation\n• Behavioral interview coaching\n• Technical interview guidance\n• Body language and presentation tips\n• Salary negotiation strategies\n• Follow-up email templates\n• Confidence building techniques",
    keywords: ["interview", "preparation", "mock interview", "coaching", "practice", "questions"]
  },
  {
    question: "Do you offer LinkedIn services?",
    answer: "Absolutely! Our LinkedIn services include:\n• Complete profile optimization\n• Professional headline creation\n• Compelling summary writing\n• Experience section enhancement\n• Skills and endorsements strategy\n• Network building guidance\n• Content strategy development\n• Personal branding consultation",
    keywords: ["linkedin", "profile", "optimization", "social media", "networking", "personal branding"]
  },
  {
    question: "What is your refund policy?",
    answer: "We have a comprehensive satisfaction policy:\n• Full refund if work hasn't started\n• Partial refunds considered case-by-case\n• We prefer to work with revisions first\n• Money-back guarantee for unsatisfactory work\n• Clear communication about expectations\n• All policies outlined in our terms of service\n\nWe're committed to your satisfaction and will work to resolve any concerns.",
    keywords: ["refund", "money back", "guarantee", "policy", "satisfaction", "return"]
  }
];
