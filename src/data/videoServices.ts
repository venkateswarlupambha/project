
import { 
  Video, 
  Youtube, 
  Instagram, 
  User, 
  Type, 
  Music, 
  FileVideo, 
  Zap
} from "lucide-react";

export const videoServices = [
  {
    id: "youtube-editing",
    title: "YouTube Video Editing",
    description: "Professional YouTube video editing with engaging effects",
    icon: Youtube,
    price: "Starting at $99",
    duration: "2-5 days",
    category: "YouTube",
    features: ["Custom thumbnails", "Intro/Outro", "Color grading", "Sound mixing"],
    route: "/services/youtube-editing"
  },
  {
    id: "instagram-reels",
    title: "Instagram Reels/Shorts Editing",
    description: "Viral-ready short-form content for social media",
    icon: Instagram,
    price: "Starting at $49",
    duration: "1-2 days",
    category: "Social",
    features: ["Trending effects", "Music sync", "Text animations", "Quick delivery"],
    route: "/services/instagram-reels"
  },
  {
    id: "interview-videos",
    title: "Self-Introduction & Interview Videos",
    description: "Professional interview and introduction video creation",
    icon: User,
    price: "Starting at $149",
    duration: "3-5 days",
    category: "Professional",
    features: ["Script assistance", "Professional editing", "Background music", "Multiple formats"],
    route: "/services/interview-videos"
  },
  {
    id: "subtitles-captions",
    title: "Subtitles & Captions (SRT or Embedded)",
    description: "Accurate subtitles and captions for accessibility",
    icon: Type,
    price: "Starting at $29",
    duration: "1-2 days",
    category: "Accessibility",
    features: ["Multiple languages", "SRT files", "Embedded options", "Accurate timing"],
    route: "/services/subtitles-captions"
  },
  {
    id: "transitions-effects",
    title: "Transitions, Music, Text Effects",
    description: "Enhanced video editing with professional effects",
    icon: Music,
    price: "Starting at $79",
    duration: "2-3 days",
    category: "Effects",
    features: ["Custom transitions", "Licensed music", "Text animations", "Visual effects"],
    route: "/services/transitions-effects"
  },
  {
    id: "video-resume",
    title: "Video Resume Creation",
    description: "Stand-out video resumes for job applications",
    icon: FileVideo,
    price: "Starting at $199",
    duration: "5-7 days",
    category: "Career",
    features: ["Script writing", "Professional recording", "Career coaching", "Multiple versions"],
    route: "/services/video-resume"
  },
  {
    id: "event-highlights",
    title: "Event Video Highlights/Trailers",
    description: "Compelling highlight reels and event trailers",
    icon: Video,
    price: "Starting at $299",
    duration: "5-10 days",
    category: "Events",
    features: ["Multi-camera editing", "Highlight selection", "Music licensing", "Color correction"],
    route: "/services/event-highlights"
  },
  {
    id: "logo-animation",
    title: "Logo Animation (Intro/Outro)",
    description: "Professional animated logos for brand videos",
    icon: Zap,
    price: "Starting at $149",
    duration: "3-5 days",
    category: "Branding",
    features: ["Custom animation", "Multiple formats", "HD quality", "Brand consistency"],
    route: "/services/logo-animation"
  }
];
