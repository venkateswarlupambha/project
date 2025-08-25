
import { 
  FileText, 
  RefreshCw, 
  Mail, 
  Search, 
  Calendar, 
  Zap, 
  Video, 
  Users, 
  Target, 
  Folder,
  Award
} from "lucide-react";

export const careerServices = [
  {
    id: "resume-writing",
    title: "Resume Writing",
    description: "Professional resume crafted from scratch",
    icon: FileText,
    price: "Starting at $99",
    route: "/services/resume-writing",
    category: "Professional",
    features: ["ATS Optimization", "Industry-specific", "Unlimited revisions", "24-48h delivery"]
  },
  {
    id: "resume-revision",
    title: "Resume Revision",
    description: "Enhance and optimize your existing resume",
    icon: RefreshCw,
    price: "Starting at $49",
    route: "/services/resume-revision",
    category: "Enhancement",
    features: ["Content improvement", "Format optimization", "Keyword integration", "Quick turnaround"]
  },
  {
    id: "cover-letter-writing",
    title: "Cover Letter Writing",
    description: "Compelling cover letters that get noticed",
    icon: Mail,
    price: "Starting at $39",
    route: "/services/cover-letter-writing",
    category: "Professional",
    features: ["Personalized content", "Company research", "Professional tone", "Multiple formats"]
  },
  {
    id: "linkedin-optimization",
    title: "LinkedIn Profile Optimization",
    description: "Complete LinkedIn profile makeover",
    icon: Users,
    price: "Starting at $79",
    route: "/services/linkedin-optimization",
    category: "Social",
    features: ["Profile setup", "Keyword optimization", "Professional summary", "Skills enhancement"]
  },
  {
    id: "naukri-optimization",
    title: "Naukri Profile Optimization",
    description: "Optimize your Naukri.com profile",
    icon: Search,
    price: "Starting at $59",
    route: "/services/naukri-optimization",
    category: "Platform",
    features: ["Profile visibility", "Keyword optimization", "Complete setup", "Regular updates"]
  },
  {
    id: "indeed-optimization",
    title: "Indeed Profile Optimization",
    description: "Enhance your Indeed profile visibility",
    icon: Calendar,
    price: "Starting at $59",
    route: "/services/indeed-optimization",
    category: "Platform",
    features: ["Profile enhancement", "Job matching", "Visibility boost", "Application tracking"]
  },
  {
    id: "ats-optimization",
    title: "ATS Optimization",
    description: "Make your resume ATS-friendly",
    icon: Zap,
    price: "Starting at $69",
    route: "/services/ats-optimization",
    category: "Technical",
    features: ["ATS compatibility", "Keyword analysis", "Format optimization", "Success guarantee"]
  },
  {
    id: "career-consultation",
    title: "Career Consultation (1:1)",
    description: "Personalized career guidance session",
    icon: Users,
    price: "Starting at $149",
    route: "/services/career-consultation",
    category: "Consultation",
    features: ["1-on-1 session", "Career roadmap", "Industry insights", "Action plan"]
  },
  {
    id: "job-tracker",
    title: "Job Application Tracker Setup",
    description: "Organized system to track your applications",
    icon: Target,
    price: "Starting at $29",
    route: "/services/job-tracker",
    category: "Tools",
    features: ["Custom tracking", "Progress monitoring", "Deadline alerts", "Analytics dashboard"]
  },
  {
    id: "mock-interview",
    title: "Mock Interview Preparation",
    description: "Practice interviews with feedback",
    icon: Video,
    price: "Starting at $89",
    route: "/services/mock-interview",
    category: "Preparation",
    features: ["Mock sessions", "Expert feedback", "Industry-specific", "Confidence building"]
  },
  {
    id: "portfolio-building",
    title: "Portfolio Building (PDF/Web)",
    description: "Professional portfolio creation",
    icon: Folder,
    price: "Starting at $199",
    route: "/services/portfolio-building",
    category: "Portfolio",
    features: ["Custom design", "Multiple formats", "Professional layout", "Industry-focused"]
  },
  {
    id: "custom-templates",
    title: "Custom Resume Templates",
    description: "Industry-specific resume templates",
    icon: Award,
    price: "Starting at $79",
    route: "/services/custom-templates",
    category: "Templates",
    features: ["Industry-specific", "ATS-optimized", "Multiple variations", "Easy customization"]
  },
  {
    id: "video-resume",
    title: "Video Resume Creation",
    description: "Professional video resume production",
    icon: Video,
    price: "Starting at $299",
    route: "/services/video-resume",
    category: "Video",
    features: ["Script writing", "Professional recording", "Editing included", "Multiple versions"]
  }
];
