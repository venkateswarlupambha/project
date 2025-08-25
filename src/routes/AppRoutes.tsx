import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import NotFound from "../pages/NotFound";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Cookies from "../pages/Cookies";
import GDPR from "../pages/GDPR";
import Careers from "../pages/Careers";
import Packages from "../pages/Packages";
import Refer from "../pages/Refer";
import Community from "../pages/Community";

// Career Services
import CareerServices from "../pages/services/CareerServices";
import ResumeWriting from "../pages/services/ResumeWriting";
import ResumeRevision from "../pages/services/ResumeRevision";
import CoverLetterWriting from "../pages/services/CoverLetterWriting";
import LinkedInOptimization from "../pages/services/LinkedInOptimization";
import NaukriOptimization from "../pages/services/NaukriOptimization";
import IndeedOptimization from "../pages/services/IndeedOptimization";
import ATSOptimization from "../pages/services/ATSOptimization";
import CareerConsultation from "../pages/services/CareerConsultation";
import JobTracker from "../pages/services/JobTracker";
import MockInterview from "../pages/services/MockInterview";
import PortfolioBuilding from "../pages/services/PortfolioBuilding";
import CustomTemplates from "../pages/services/CustomTemplates";

// LinkedIn Services
import LinkedInServices from "../pages/services/LinkedInServices";
import LinkedInProfileOptimization from "../pages/services/LinkedInProfileOptimization";
import LinkedInPersonalBranding from "../pages/services/LinkedInPersonalBranding";
import LinkedInContentStrategy from "../pages/services/LinkedInContentStrategy";
import LinkedInNetworkingStrategy from "../pages/services/LinkedInNetworkingStrategy";
import LinkedInJobSearch from "../pages/services/LinkedInJobSearch";
import LinkedInLeadGeneration from "../pages/services/LinkedInLeadGeneration";
import LinkedInAnalytics from "../pages/services/LinkedInAnalytics";
import LinkedInMessaging from "../pages/services/LinkedInMessaging";
import LinkedInEventPromotion from "../pages/services/LinkedInEventPromotion";
import LinkedInVideoContent from "../pages/services/LinkedInVideoContent";

// Design Services
import DesignServices from "../pages/services/DesignServices";
import PhotoEditing from "../pages/services/PhotoEditing";
import BackgroundRemoval from "../pages/services/BackgroundRemoval";
import ImageRetouching from "../pages/services/ImageRetouching";
import ProfilePictureEditing from "../pages/services/ProfilePictureEditing";
import BannerDesign from "../pages/services/BannerDesign";
import PresentationDesign from "../pages/services/PresentationDesign";
import EmailSignatureDesign from "../pages/services/EmailSignatureDesign";
import DigitalBusinessCard from "../pages/services/DigitalBusinessCard";
import QrCodeDesign from "../pages/services/QrCodeDesign";
import PosterDesign from "../pages/services/PosterDesign";
import FlyerDesign from "../pages/services/FlyerDesign";
import AlbumDesign from "../pages/services/AlbumDesign";

// Video Services
import VideoServices from "../pages/services/VideoServices";
import YouTubeEditing from "../pages/services/YouTubeEditing";
import InstagramReels from "../pages/services/InstagramReels";
import InterviewVideos from "../pages/services/InterviewVideos";
import SubtitlesCaptions from "../pages/services/SubtitlesCaptions";
import TransitionsEffects from "../pages/services/TransitionsEffects";
import VideoResume from "../pages/services/VideoResume";
import EventHighlights from "../pages/services/EventHighlights";
import LogoAnimation from "../pages/services/LogoAnimation";

// Marketing Services
import MarketingServices from "../pages/services/MarketingServices";
import SocialMediaManagement from "../pages/services/SocialMediaManagement";
import WhatsAppMarketing from "../pages/services/WhatsAppMarketing";
import EmailCampaigns from "../pages/services/EmailCampaigns";
import NewsletterDesign from "../pages/services/NewsletterDesign";
import ContentCalendar from "../pages/services/ContentCalendar";
import PostTemplates from "../pages/services/PostTemplates";
import InstagramOptimization from "../pages/services/InstagramOptimization";
import YouTubeSetup from "../pages/services/YouTubeSetup";
import AdCreatives from "../pages/services/AdCreatives";

// Web Development Services
import WebDevelopmentServices from "../pages/services/WebDevelopmentServices";
import CustomWebsite from "../pages/services/CustomWebsite";
import MobileApp from "../pages/services/MobileApp";
import EcommerceSolutions from "../pages/services/EcommerceSolutions";
import WebApp from "../pages/services/WebApp";
import DatabaseDesign from "../pages/services/DatabaseDesign";
import UIUXDesign from "../pages/services/UIUXDesign";
import PerformanceOptimization from "../pages/services/PerformanceOptimization";
import SecurityAudit from "../pages/services/SecurityAudit";
import SEOOptimization from "../pages/services/SEOOptimization";
import APIDevelopment from "../pages/services/APIDevelopment";

import OrderWordpress from "../pages/services/OrderWordpress";
import WordpressOrder from "../pages/services/WordpressOrder";
import WordpressServices from "../pages/services/WordpressServices";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/refer" element={<Refer />} />
      <Route path="/community" element={<Community />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/gdpr" element={<GDPR />} />
      
      {/* Career Services Routes */}
      <Route path="/services/career-services" element={<CareerServices />} />
      <Route path="/services/resume-writing" element={<ResumeWriting />} />
      <Route path="/services/resume-revision" element={<ResumeRevision />} />
      <Route path="/services/cover-letter-writing" element={<CoverLetterWriting />} />
      <Route path="/services/linkedin-optimization" element={<LinkedInOptimization />} />
      <Route path="/services/naukri-optimization" element={<NaukriOptimization />} />
      <Route path="/services/indeed-optimization" element={<IndeedOptimization />} />
      <Route path="/services/ats-optimization" element={<ATSOptimization />} />
      <Route path="/services/career-consultation" element={<CareerConsultation />} />
      <Route path="/services/job-tracker" element={<JobTracker />} />
      <Route path="/services/mock-interview" element={<MockInterview />} />
      <Route path="/services/portfolio-building" element={<PortfolioBuilding />} />
      <Route path="/services/custom-templates" element={<CustomTemplates />} />
      
      {/* LinkedIn Services Routes */}
      <Route path="/services/linkedin-services" element={<LinkedInServices />} />
      <Route path="/services/linkedin-profile-optimization" element={<LinkedInProfileOptimization />} />
      <Route path="/services/linkedin-personal-branding" element={<LinkedInPersonalBranding />} />
      <Route path="/services/linkedin-content-strategy" element={<LinkedInContentStrategy />} />
      <Route path="/services/linkedin-networking-strategy" element={<LinkedInNetworkingStrategy />} />
      <Route path="/services/linkedin-job-search" element={<LinkedInJobSearch />} />
      <Route path="/services/linkedin-lead-generation" element={<LinkedInLeadGeneration />} />
      <Route path="/services/linkedin-analytics" element={<LinkedInAnalytics />} />
      <Route path="/services/linkedin-messaging" element={<LinkedInMessaging />} />
      <Route path="/services/linkedin-event-promotion" element={<LinkedInEventPromotion />} />
      <Route path="/services/linkedin-video-content" element={<LinkedInVideoContent />} />
      
      {/* Design Services Routes */}
      <Route path="/services/design-services" element={<DesignServices />} />
      <Route path="/services/photo-editing" element={<PhotoEditing />} />
      <Route path="/services/background-removal" element={<BackgroundRemoval />} />
      <Route path="/services/image-retouching" element={<ImageRetouching />} />
      <Route path="/services/profile-picture-editing" element={<ProfilePictureEditing />} />
      <Route path="/services/banner-design" element={<BannerDesign />} />
      <Route path="/services/presentation-design" element={<PresentationDesign />} />
      <Route path="/services/email-signature-design" element={<EmailSignatureDesign />} />
      <Route path="/services/digital-business-card" element={<DigitalBusinessCard />} />
      <Route path="/services/qr-code-design" element={<QrCodeDesign />} />
      <Route path="/services/poster-design" element={<PosterDesign />} />
      <Route path="/services/flyer-design" element={<FlyerDesign />} />
      <Route path="/services/album-design" element={<AlbumDesign />} />
      
      {/* Video Services Routes */}
      <Route path="/services/video-services" element={<VideoServices />} />
      <Route path="/services/youtube-editing" element={<YouTubeEditing />} />
      <Route path="/services/instagram-reels" element={<InstagramReels />} />
      <Route path="/services/interview-videos" element={<InterviewVideos />} />
      <Route path="/services/subtitles-captions" element={<SubtitlesCaptions />} />
      <Route path="/services/transitions-effects" element={<TransitionsEffects />} />
      <Route path="/services/video-resume" element={<VideoResume />} />
      <Route path="/services/event-highlights" element={<EventHighlights />} />
      <Route path="/services/logo-animation" element={<LogoAnimation />} />
      
      {/* Marketing Services Routes */}
      <Route path="/services/marketing-services" element={<MarketingServices />} />
      <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
      <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketing />} />
      <Route path="/services/email-campaigns" element={<EmailCampaigns />} />
      <Route path="/services/newsletter-design" element={<NewsletterDesign />} />
      <Route path="/services/content-calendar" element={<ContentCalendar />} />
      <Route path="/services/post-templates" element={<PostTemplates />} />
      <Route path="/services/instagram-optimization" element={<InstagramOptimization />} />
      <Route path="/services/youtube-setup" element={<YouTubeSetup />} />
      <Route path="/services/ad-creatives" element={<AdCreatives />} />
      
      {/* Web Development Services Routes */}
      <Route path="/services/web-development" element={<WebDevelopmentServices />} />
      <Route path="/services/custom-website" element={<CustomWebsite />} />
      <Route path="/services/mobile-app" element={<MobileApp />} />
      <Route path="/services/ecommerce" element={<EcommerceSolutions />} />
      <Route path="/services/web-app" element={<WebApp />} />
      <Route path="/services/database-design" element={<DatabaseDesign />} />
      <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
      <Route path="/services/performance-optimization" element={<PerformanceOptimization />} />
      <Route path="/services/security-audit" element={<SecurityAudit />} />
      <Route path="/services/seo-optimization" element={<SEOOptimization />} />
      <Route path="/services/api-development" element={<APIDevelopment />} />
      <Route path="/services/wordpress-services" element={<WordpressServices />} />
      <Route path="/services/order/wordpress" element={<OrderWordpress />} />
      <Route path="/services/wordpress-order" element={<WordpressOrder />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
