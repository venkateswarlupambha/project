
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Resume Mistakes Freshers Should Avoid",
    excerpt: "Common pitfalls that prevent new graduates from landing their first job and how to fix them.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=200&fit=crop",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Resume Tips"
  },
  {
    id: 2,
    title: "How to Optimize Your LinkedIn for Recruiter Visibility in 2024",
    excerpt: "Latest strategies to make your LinkedIn profile stand out and attract top recruiters.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "LinkedIn"
  },
  {
    id: 3,
    title: "Why Every Job Seeker Needs an ATS-Friendly Resume",
    excerpt: "Understanding Applicant Tracking Systems and how to optimize your resume for them.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=200&fit=crop",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "ATS"
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 px-0 bg-slate-50 dark:bg-slate-800/30 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <Badge className="bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30 mb-4 text-xs sm:text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            Latest Insights
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white transition-colors duration-300">
            Career Tips & Insights
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Stay updated with the latest career advice, industry trends, and job search strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-blue-500 text-white text-xs">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-slate-900 dark:text-white text-base sm:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-gray-300 text-sm sm:text-base line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <Link to={`/blog/${post.id}`}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-sm sm:text-base"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 animate-fade-in">
          <Link to="/blog">
            <Button 
              variant="outline"
              className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base px-6 sm:px-8"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
