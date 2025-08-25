
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { highlightSearchTerms } from "@/utils/searchUtils";

interface SearchResultItemProps {
  result: any;
  query: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SearchResultItem = ({ 
  result, 
  query, 
  isSelected, 
  onClick 
}: SearchResultItemProps) => {
  const getCategoryIcon = (type: string) => {
    switch (type) {
      case 'service': return '🛠️';
      case 'blog': return '📝';
      case 'page': return '📄';
      case 'term': return '📋';
      default: return '🔍';
    }
  };

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'service': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'blog': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'page': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'term': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
        isSelected
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50'
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl mt-1">{getCategoryIcon(result.type)}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 
              className="font-medium text-gray-900 dark:text-gray-100 truncate"
              dangerouslySetInnerHTML={{ 
                __html: highlightSearchTerms(result.title, query) 
              }}
            />
            <Badge className={`text-xs ${getCategoryColor(result.type)}`}>
              {result.type}
            </Badge>
          </div>
          <p 
            className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2"
            dangerouslySetInnerHTML={{ 
              __html: highlightSearchTerms(result.description, query) 
            }}
          />
          {result.category && (
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {result.category}
            </p>
          )}
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
      </div>
    </button>
  );
};
