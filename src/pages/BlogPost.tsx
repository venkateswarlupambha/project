import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShareOptions } from "@/components/ShareOptions";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Resume Mistakes Freshers Should Avoid",
    excerpt: "Common pitfalls that prevent new graduates from landing their first job and how to fix them.",
    content: `
      <h2>Why Your Resume Matters More Than Ever</h2>
      <p>In today's competitive job market, your resume is often your first and only chance to make a lasting impression on potential employers. For fresh graduates, crafting the perfect resume can be particularly challenging.</p>
      
      <h3>1. Using Generic Templates</h3>
      <p>One of the biggest mistakes freshers make is using generic, overused resume templates. Your resume should reflect your personality and stand out from the crowd. Consider creating a custom design that aligns with your industry.</p>
      
      <h3>2. Poor Formatting and Layout</h3>
      <p>A cluttered, hard-to-read resume will likely end up in the trash. Use clean, professional formatting with consistent fonts, proper spacing, and clear section headers.</p>
      
      <h3>3. Including Irrelevant Information</h3>
      <p>Avoid including personal details like age, marital status, or hobbies that don't relate to the job. Focus on relevant skills, education, and experiences.</p>
      
      <h3>4. Weak or Missing Objective Statement</h3>
      <p>Your objective statement should be compelling and specific to the role you're applying for. Avoid generic statements that could apply to any job.</p>
      
      <h3>5. Not Quantifying Achievements</h3>
      <p>Instead of just listing duties, quantify your achievements with numbers, percentages, or specific outcomes wherever possible.</p>
    `,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Resume Tips",
    author: "Career Expert"
  },
  {
    id: 2,
    title: "How to Optimize Your LinkedIn for Recruiter Visibility in 2024",
    excerpt: "Latest strategies to make your LinkedIn profile stand out and attract top recruiters.",
    content: `
      <h2>The Power of LinkedIn in Modern Recruitment</h2>
      <p>LinkedIn has become the go-to platform for recruiters worldwide. With over 900 million users, standing out requires strategic optimization.</p>
      
      <h3>Professional Headline Optimization</h3>
      <p>Your headline is prime real estate. Instead of just listing your job title, use keywords that recruiters search for and highlight your unique value proposition.</p>
      
      <h3>Profile Photo Best Practices</h3>
      <p>A professional headshot increases profile views by 21x. Ensure good lighting, professional attire, and a genuine smile.</p>
      
      <h3>Summary Section Strategy</h3>
      <p>Your summary should tell your story, showcase achievements, and include relevant keywords. Write in first person and make it conversational.</p>
      
      <h3>Experience Section Optimization</h3>
      <p>Use bullet points to highlight achievements, include metrics and results, and optimize for keywords relevant to your target roles.</p>
    `,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "LinkedIn",
    author: "LinkedIn Specialist"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || "1"));
  
  const currentUrl = window.location.href;

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <Header />
      
      <article className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link to="/blog">
            <Button 
              variant="ghost" 
              className="mb-6 sm:mb-8 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-8 sm:mb-12 animate-fade-in">
            <Badge className="bg-blue-500 text-white mb-4 text-xs sm:text-sm">
              {post.category}
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-slate-600 dark:text-gray-300 mb-6 sm:mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            <ShareOptions 
              title={post.title}
              url={currentUrl}
              className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
            />
          </header>

          {/* Featured Image */}
          <div className="mb-8 sm:mb-12 animate-fade-in">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none text-slate-700 dark:text-gray-300 animate-fade-in prose-headings:text-slate-900 dark:prose-headings:text-white prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl prose-p:text-sm sm:prose-p:text-base prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <footer className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-200 dark:border-slate-700 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Found this helpful?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300">
                  Share it with others who might benefit from these insights.
                </p>
              </div>
              <ShareOptions 
                title={post.title}
                url={currentUrl}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              />
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
