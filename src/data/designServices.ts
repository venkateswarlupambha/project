
import { 
  Image, 
  Scissors, 
  Sparkles, 
  User, 
  Frame, 
  Presentation, 
  Mail, 
  CreditCard, 
  QrCode, 
  Calendar,
  FileImage,
  Camera
} from "lucide-react";

export const designServices = [
  {
    id: "photo-editing",
    title: "Professional Photo Editing",
    description: "High-quality photo enhancement and retouching",
    icon: Camera,
    price: "Starting at $25",
    category: "Photo",
    features: ["Color correction", "Light adjustment", "Detail enhancement", "Background editing"],
    route: "/services/photo-editing"
  },
  {
    id: "background-removal",
    title: "Background Removal",
    description: "Clean background removal for professional photos",
    icon: Scissors,
    price: "Starting at $15",
    category: "Photo",
    features: ["Precise cutting", "Clean edges", "Multiple formats", "Quick delivery"],
    route: "/services/background-removal"
  },
  {
    id: "image-retouching",
    title: "Image Retouching (Skin, Light, Details)",
    description: "Professional retouching for flawless results",
    icon: Sparkles,
    price: "Starting at $35",
    category: "Retouching",
    features: ["Skin smoothing", "Light enhancement", "Detail refinement", "Natural results"],
    route: "/services/image-retouching"
  },
  {
    id: "profile-picture",
    title: "Profile Picture Editing (Social & Corporate)",
    description: "Perfect profile pictures for all platforms",
    icon: User,
    price: "Starting at $29",
    category: "Profile",
    features: ["Social media ready", "Corporate quality", "Multiple sizes", "Platform optimized"],
    route: "/services/profile-picture-editing"
  },
  {
    id: "banner-design",
    title: "Branded Banner Design (LinkedIn/YouTube/Resume)",
    description: "Professional banners for all your needs",
    icon: Frame,
    price: "Starting at $49",
    category: "Branding",
    features: ["Platform optimized", "Brand consistent", "High resolution", "Custom design"],
    route: "/services/banner-design"
  },
  {
    id: "presentation",
    title: "PowerPoint Presentation Design",
    description: "Stunning presentation designs that impress",
    icon: Presentation,
    price: "Starting at $99",
    category: "Business",
    features: ["Custom templates", "Professional layouts", "Unlimited slides", "Brand integration"],
    route: "/services/presentation-design"
  },
  {
    id: "email-signature",
    title: "Email Signature Design",
    description: "Professional email signatures that stand out",
    icon: Mail,
    price: "Starting at $19",
    category: "Business",
    features: ["HTML format", "Mobile responsive", "Social links", "Brand consistent"],
    route: "/services/email-signature-design"
  },
  {
    id: "business-card",
    title: "Digital Business Card Creation",
    description: "Modern digital business cards for networking",
    icon: CreditCard,
    price: "Starting at $39",
    category: "Business",
    features: ["Interactive design", "QR code included", "Multiple formats", "Contact info"],
    route: "/services/digital-business-card"
  },
  {
    id: "qr-code",
    title: "Custom QR Code Design",
    description: "Branded QR codes for your business needs",
    icon: QrCode,
    price: "Starting at $25",
    category: "Branding",
    features: ["Custom branding", "High resolution", "Multiple formats", "Logo integration"],
    route: "/services/qr-code-design"
  },
  {
    id: "poster-design",
    title: "Poster Design (Events/Hiring/Promotions)",
    description: "Eye-catching posters for any occasion",
    icon: Calendar,
    price: "Starting at $59",
    category: "Marketing",
    features: ["Print ready", "Digital formats", "Custom sizing", "Eye-catching design"],
    route: "/services/poster-design"
  },
  {
    id: "flyer-design",
    title: "Flyer Design (Digital/Printable)",
    description: "Professional flyers for marketing campaigns",
    icon: FileImage,
    price: "Starting at $49",
    category: "Marketing",
    features: ["Print ready", "Digital optimized", "Multiple formats", "Marketing focused"],
    route: "/services/flyer-design"
  },
  {
    id: "album-design",
    title: "Function Album Design (Birthdays/Weddings/Events)",
    description: "Beautiful photo albums for special occasions",
    icon: Image,
    price: "Starting at $149",
    category: "Events",
    features: ["Custom layouts", "Professional binding", "High quality prints", "Memory preservation"],
    route: "/services/album-design"
  }
];
