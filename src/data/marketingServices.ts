import { 
  TrendingUp,
  MessageCircle,
  Mail,
  Newspaper,
  Calendar,
  Palette,
  Instagram,
  Youtube,
  Target
} from "lucide-react";

export const marketingServices = [
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "Complete management for Instagram, LinkedIn, Facebook",
    icon: TrendingUp,
    price: "Elevate Your Profile",
    category: "Management",
    scope: "Multi-platform",
    route: "/services/social-media-management",
    features: ["Content creation", "Daily posting", "Engagement", "Analytics"]
  },
  {
    id: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    description: "Broadcast setup and auto-reply configuration",
    icon: MessageCircle,
    price: "Unlock Potential",
    category: "Automation",
    scope: "WhatsApp",
    route: "/services/whatsapp-marketing",
    features: ["Broadcast lists", "Auto-replies", "Contact management", "Message templates"]
  },
  {
    id: "email-campaigns",
    title: "Email Marketing Campaigns",
    description: "Professional campaigns with Mailchimp, Brevo, etc.",
    icon: Mail,
    price: "Craft Your Story",
    category: "Campaigns",
    scope: "Email",
    route: "/services/email-campaigns",
    features: ["Campaign design", "List management", "A/B testing", "Analytics"]
  },
  {
    id: "newsletter-design",
    title: "Newsletter Design & Delivery",
    description: "Beautiful newsletters with delivery management",
    icon: Newspaper,
    price: "Build Your Future",
    category: "Design",
    scope: "Newsletter",
    route: "/services/newsletter-design",
    features: ["Custom design", "Template creation", "Delivery setup", "Performance tracking"]
  },
  {
    id: "content-calendar",
    title: "Content Calendar (30/60 Days)",
    description: "Strategic content planning and scheduling",
    icon: Calendar,
    price: "Power Your Journey",
    category: "Strategy",
    scope: "Planning",
    route: "/services/content-calendar",
    features: ["Content strategy", "Post scheduling", "Theme planning", "Hashtag research"]
  },
  {
    id: "post-templates",
    title: "Social Media Post Templates",
    description: "Professional Canva/PSD templates for social media",
    icon: Palette,
    price: "Design Your Future",
    category: "Design",
    scope: "Templates",
    route: "/services/post-templates",
    features: ["Canva templates", "PSD files", "Brand consistency", "Multiple formats"]
  },
  {
    id: "instagram-optimization",
    title: "Instagram Profile Optimization",
    description: "Complete Instagram profile and content optimization",
    icon: Instagram,
    price: "Stand Out Now",
    category: "Optimization",
    scope: "Instagram",
    route: "/services/instagram-optimization",
    features: ["Profile setup", "Bio optimization", "Highlight covers", "Growth strategy"]
  },
  {
    id: "youtube-setup",
    title: "YouTube Channel Setup & Optimization",
    description: "Professional YouTube channel creation and optimization",
    icon: Youtube,
    price: "Launch With Confidence",
    category: "Setup",
    scope: "YouTube",
    route: "/services/youtube-setup",
    features: ["Channel creation", "Banner design", "SEO optimization", "Content strategy"]
  },
  {
    id: "ad-creatives",
    title: "Ad Creatives (Image/Video)",
    description: "High-converting ad creatives for all platforms",
    icon: Target,
    price: "Get Noticed Faster",
    category: "Advertising",
    scope: "Creatives",
    route: "/services/ad-creatives",
    features: ["Image ads", "Video ads", "Copy writing", "A/B variants"]
  }
];