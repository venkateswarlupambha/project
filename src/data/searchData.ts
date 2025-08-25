
import { SearchResult } from "@/utils/searchUtils";

export const searchData: SearchResult[] = [
  // Main pages
  {
    id: 'home',
    title: 'Home - Onward Careers',
    description: 'Transform your career with professional resume writing, LinkedIn optimization, and career services.',
    url: '/',
    type: 'page',
    keywords: ['home', 'career', 'resume', 'linkedin', 'professional'],
    relevanceScore: 0
  },
  {
    id: 'services',
    title: 'Services - Professional Career Services',
    description: 'Comprehensive career services including resume writing, LinkedIn optimization, career consultation, and more.',
    url: '/services',
    type: 'page',
    category: 'Services',
    keywords: ['services', 'career services', 'professional services'],
    relevanceScore: 0
  },
  {
    id: 'packages',
    title: 'Packages - Career Service Packages',
    description: 'Choose from our carefully crafted career service packages designed for different needs and budgets.',
    url: '/packages',
    type: 'page',
    category: 'Packages',
    keywords: ['packages', 'pricing', 'career packages', 'bundles'],
    relevanceScore: 0
  },
  {
    id: 'refer',
    title: 'Refer & Earn - Referral Program',
    description: 'Refer friends to Onward Careers and earn amazing rewards! Get cashback, free templates, or discounts.',
    url: '/refer',
    type: 'page',
    category: 'Referral',
    keywords: ['refer', 'referral', 'earn', 'rewards', 'cashback'],
    relevanceScore: 0
  },
  {
    id: 'contact',
    title: 'Contact Us - Get In Touch',
    description: 'Contact Onward Careers for professional career services, support, and consultation.',
    url: '/contact',
    type: 'page',
    category: 'Contact',
    keywords: ['contact', 'support', 'help', 'consultation'],
    relevanceScore: 0
  },
  {
    id: 'about',
    title: 'About Us - Our Story',
    description: 'Learn about Onward Careers and our mission to transform professional lives.',
    url: '/about',
    type: 'page',
    category: 'About',
    keywords: ['about', 'story', 'mission', 'team'],
    relevanceScore: 0
  },

  // Career Services
  {
    id: 'resume-writing',
    title: 'Resume Writing Service',
    description: 'Professional ATS-optimized resume writing service to help you land your dream job.',
    url: '/services/resume-writing',
    type: 'service',
    category: 'Career Services',
    keywords: ['resume', 'cv', 'resume writing', 'ats resume', 'professional resume'],
    relevanceScore: 0
  },
  {
    id: 'linkedin-optimization',
    title: 'LinkedIn Profile Optimization',
    description: 'Complete LinkedIn profile optimization to enhance your professional presence.',
    url: '/services/linkedin-optimization',
    type: 'service',
    category: 'Career Services',
    keywords: ['linkedin', 'profile optimization', 'professional profile', 'linkedin profile'],
    relevanceScore: 0
  },
  {
    id: 'cover-letter-writing',
    title: 'Cover Letter Writing',
    description: 'Compelling cover letters that complement your resume and grab attention.',
    url: '/services/cover-letter-writing',
    type: 'service',
    category: 'Career Services',
    keywords: ['cover letter', 'application letter', 'job application'],
    relevanceScore: 0
  },
  {
    id: 'career-consultation',
    title: 'Career Consultation',
    description: 'One-on-one career consultation to guide your professional journey.',
    url: '/services/career-consultation',
    type: 'service',
    category: 'Career Services',
    keywords: ['career consultation', 'career advice', 'career coaching', 'consultation'],
    relevanceScore: 0
  },
  {
    id: 'mock-interview',
    title: 'Mock Interview Sessions',
    description: 'Practice interviews with professional feedback to boost your confidence.',
    url: '/services/mock-interview',
    type: 'service',
    category: 'Career Services',
    keywords: ['mock interview', 'interview practice', 'interview preparation'],
    relevanceScore: 0
  },
  {
    id: 'ats-optimization',
    title: 'ATS Resume Optimization',
    description: 'Optimize your resume for Applicant Tracking Systems to pass initial screenings.',
    url: '/services/ats-optimization',
    type: 'service',
    category: 'Career Services',
    keywords: ['ats', 'applicant tracking system', 'ats optimization', 'resume optimization'],
    relevanceScore: 0
  },

  // Design Services
  {
    id: 'logo-design',
    title: 'Logo Design Service',
    description: 'Professional logo design for businesses and personal branding.',
    url: '/services/design-services',
    type: 'service',
    category: 'Design Services',
    keywords: ['logo', 'logo design', 'branding', 'graphic design'],
    relevanceScore: 0
  },
  {
    id: 'banner-design',
    title: 'Banner Design',
    description: 'Eye-catching banner designs for social media, websites, and marketing.',
    url: '/services/banner-design',
    type: 'service',
    category: 'Design Services',
    keywords: ['banner', 'banner design', 'social media banner', 'web banner'],
    relevanceScore: 0
  },
  {
    id: 'poster-design',
    title: 'Poster Design',
    description: 'Creative poster designs for events, marketing, and promotional materials.',
    url: '/services/poster-design',
    type: 'service',
    category: 'Design Services',
    keywords: ['poster', 'poster design', 'event poster', 'marketing poster'],
    relevanceScore: 0
  },

  // Web Development Services
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Custom website development with modern technologies and responsive design.',
    url: '/services/web-development-services',
    type: 'service',
    category: 'Web Development',
    keywords: ['website', 'web development', 'custom website', 'responsive design'],
    relevanceScore: 0
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    description: 'Professional WordPress website development and customization services.',
    url: '/services/wordpress-services',
    type: 'service',
    category: 'Web Development',
    keywords: ['wordpress', 'wordpress development', 'cms', 'website'],
    relevanceScore: 0
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Search engine optimization to improve your website visibility and ranking.',
    url: '/services/seo-optimization',
    type: 'service',
    category: 'Web Development',
    keywords: ['seo', 'search engine optimization', 'google ranking', 'website optimization'],
    relevanceScore: 0
  },

  // Video Services
  {
    id: 'video-editing',
    title: 'Video Editing Service',
    description: 'Professional video editing for YouTube, social media, and business content.',
    url: '/services/video-services',
    type: 'service',
    category: 'Video Services',
    keywords: ['video editing', 'youtube editing', 'video production', 'content creation'],
    relevanceScore: 0
  },
  {
    id: 'video-resume',
    title: 'Video Resume Creation',
    description: 'Stand out with a professional video resume that showcases your personality.',
    url: '/services/video-resume',
    type: 'service',
    category: 'Video Services',
    keywords: ['video resume', 'video cv', 'professional video', 'career video'],
    relevanceScore: 0
  },

  // Marketing Services
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    description: 'Complete social media management and content creation for your brand.',
    url: '/services/marketing-services',
    type: 'service',
    category: 'Marketing Services',
    keywords: ['social media', 'social media management', 'content creation', 'digital marketing'],
    relevanceScore: 0
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description: 'Strategic content marketing to engage your audience and grow your business.',
    url: '/services/marketing-services',
    type: 'service',
    category: 'Marketing Services',
    keywords: ['content marketing', 'content strategy', 'blog writing', 'marketing'],
    relevanceScore: 0
  },

  // Blog posts (sample)
  {
    id: 'resume-tips-2024',
    title: '10 Resume Tips for 2024',
    description: 'Essential resume tips to help you stand out in today\'s competitive job market.',
    url: '/blog/resume-tips-2024',
    type: 'blog',
    category: 'Career Tips',
    keywords: ['resume tips', 'job search', 'career advice', '2024'],
    relevanceScore: 0
  },
  {
    id: 'linkedin-profile-tips',
    title: 'How to Optimize Your LinkedIn Profile',
    description: 'Complete guide to creating a compelling LinkedIn profile that attracts recruiters.',
    url: '/blog/linkedin-profile-tips',
    type: 'blog',
    category: 'LinkedIn Tips',
    keywords: ['linkedin tips', 'profile optimization', 'professional networking'],
    relevanceScore: 0
  },

  // Legal pages
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'Our privacy policy explaining how we collect, use, and protect your personal information.',
    url: '/privacy',
    type: 'term',
    category: 'Legal',
    keywords: ['privacy', 'privacy policy', 'data protection', 'gdpr'],
    relevanceScore: 0
  },
  {
    id: 'terms-of-service',
    title: 'Terms of Service',
    description: 'Terms and conditions for using Onward Careers services.',
    url: '/terms',
    type: 'term',
    category: 'Legal',
    keywords: ['terms', 'terms of service', 'conditions', 'legal'],
    relevanceScore: 0
  }
];
