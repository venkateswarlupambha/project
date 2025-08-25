
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, X, Calendar, User, Tag } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import { highlightSearchTerms } from "@/utils/searchUtils";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  url: string;
}

interface EnhancedBlogSearchProps {
  onSearchResults: (results: BlogPost[]) => void;
  className?: string;
}

export const EnhancedBlogSearch = ({ onSearchResults, className = "" }: EnhancedBlogSearchProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<string>('');

  const { 
    query, 
    setQuery, 
    results, 
    suggestions, 
    isSearching, 
    hasSearched,
    executeSearch 
  } = useSearch({ 
    includeTypes: ['blog'], 
    maxResults: 20 
  });

  // Sample blog data (in real app, this would come from your blog API)
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '10 Resume Tips for 2024',
      excerpt: 'Essential resume tips to help you stand out in today\'s competitive job market.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Career Tips',
      tags: ['resume', 'job search', 'career advice'],
      readTime: '5 min read',
      url: '/blog/resume-tips-2024'
    },
    {
      id: '2',
      title: 'How to Optimize Your LinkedIn Profile',
      excerpt: 'Complete guide to creating a compelling LinkedIn profile that attracts recruiters.',
      author: 'Mike Chen',
      date: '2024-01-10',
      category: 'LinkedIn Tips',
      tags: ['linkedin', 'professional networking', 'profile optimization'],
      readTime: '8 min read',
      url: '/blog/linkedin-profile-tips'
    },
    {
      id: '3',
      title: 'Remote Work Interview Questions',
      excerpt: 'Prepare for remote work interviews with these common questions and expert answers.',
      author: 'Emily Davis',
      date: '2024-01-05',
      category: 'Interview Prep',
      tags: ['remote work', 'interview', 'job search'],
      readTime: '6 min read',
      url: '/blog/remote-work-interview-questions'
    }
  ];

  const categories = ['Career Tips', 'LinkedIn Tips', 'Interview Prep', 'Resume Writing', 'Job Search'];
  const allTags = ['resume', 'linkedin', 'job search', 'career advice', 'interview', 'remote work', 'professional networking'];

  // Filter blog posts based on search and filters
  useEffect(() => {
    let filteredPosts = blogPosts;

    // Apply search filter
    if (query.trim()) {
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        post.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
    }

    // Apply tags filter
    if (selectedTags.length > 0) {
      filteredPosts = filteredPosts.filter(post => 
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }

    // Apply date range filter
    if (dateRange) {
      const now = new Date();
      const filterDate = new Date();
      
      switch (dateRange) {
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          break;
        case 'year':
          filterDate.setFullYear(now.getFullYear() - 1);
          break;
      }
      
      filteredPosts = filteredPosts.filter(post => new Date(post.date) >= filterDate);
    }

    onSearchResults(filteredPosts);
  }, [query, selectedCategory, selectedTags, dateRange, onSearchResults]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setQuery('');
    setSelectedCategory('');
    setSelectedTags([]);
    setDateRange('');
  };

  const hasActiveFilters = query || selectedCategory || selectedTags.length > 0 || dateRange;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Search blog posts, topics, or tags..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-12 py-3 text-base"
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <Filter className="w-4 h-4" />
        </Button>
        {isSearching && (
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          </div>
        )}
      </div>

      {/* Search Suggestions */}
      {query && suggestions.length > 0 && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Suggestions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setQuery(suggestion)}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Tags Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Date Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Date Range
            </label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="">All Time</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="year">Past Year</option>
            </select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllFilters}
                className="w-full"
              >
                <X className="w-4 h-4 mr-2" />
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {query && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Search: "{query}"
              <button onClick={() => setQuery('')} className="ml-1 hover:text-red-500">
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {selectedCategory && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Category: {selectedCategory}
              <button onClick={() => setSelectedCategory('')} className="ml-1 hover:text-red-500">
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {selectedTags.map(tag => (
            <Badge key={tag} variant="secondary" className="flex items-center gap-1">
              Tag: {tag}
              <button onClick={() => handleTagToggle(tag)} className="ml-1 hover:text-red-500">
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
          {dateRange && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {dateRange === 'week' ? 'Past Week' : 
               dateRange === 'month' ? 'Past Month' : 'Past Year'}
              <button onClick={() => setDateRange('')} className="ml-1 hover:text-red-500">
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};
