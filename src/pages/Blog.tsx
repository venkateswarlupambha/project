
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";

const allBlogPosts = [
  {
    id: 1,
    title: "Top 10 Resume Mistakes Freshers Should Avoid",
    excerpt: "Common pitfalls that prevent new graduates from landing their first job and how to fix them.",
    content: "Full detailed content about resume mistakes...",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=300&fit=crop",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Resume Tips",
    author: "Career Expert"
  },
  {
    id: 2,
    title: "How to Optimize Your LinkedIn for Recruiter Visibility in 2024",
    excerpt: "Latest strategies to make your LinkedIn profile stand out and attract top recruiters.",
    content: "Complete guide to LinkedIn optimization...",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "LinkedIn",
    author: "LinkedIn Specialist"
  },
  {
    id: 3,
    title: "Why Every Job Seeker Needs an ATS-Friendly Resume",
    excerpt: "Understanding Applicant Tracking Systems and how to optimize your resume for them.",
    content: "Deep dive into ATS optimization strategies...",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=300&fit=crop",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "ATS",
    author: "Tech Recruiter"
  },
  {
    id: 4,
    title: "Remote Work Interview Tips for 2024",
    excerpt: "Master the art of remote interviews with these proven strategies and technical setup tips.",
    content: "Complete guide to remote interview success...",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=300&fit=crop",
    date: "2024-01-20",
    readTime: "8 min read",
    category: "Interview Tips",
    author: "HR Manager"
  },
  {
    id: 5,
    title: "Building Your Personal Brand as a Professional",
    excerpt: "Learn how to create a compelling personal brand that attracts opportunities and builds credibility.",
    content: "Personal branding strategies for professionals...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    date: "2024-01-18",
    readTime: "10 min read",
    category: "Personal Branding",
    author: "Brand Consultant"
  },
  {
    id: 6,
    title: "Salary Negotiation Strategies That Actually Work",
    excerpt: "Evidence-based techniques to negotiate your salary with confidence and achieve better compensation.",
    content: "Master salary negotiation techniques...",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop",
    date: "2024-01-12",
    readTime: "9 min read",
    category: "Career Growth",
    author: "Negotiation Expert"
  }
];

const categories = ["All", "Resume Tips", "LinkedIn", "ATS", "Interview Tips", "Personal Branding", "Career Growth"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white animate-fade-in">
            Career Insights & Tips
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-in">
            Expert advice, industry insights, and practical tips to accelerate your career growth
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 sm:pl-12 py-3 sm:py-4 text-sm sm:text-base bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`text-xs sm:text-sm transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post, index) => (
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
                      Read Article
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <h3 className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 mb-4">No articles found</h3>
              <p className="text-sm sm:text-base text-slate-500 dark:text-gray-400">
                Try adjusting your search terms or selected category
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
