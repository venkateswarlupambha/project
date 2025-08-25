
import { TrendingUp, Search } from "lucide-react";

interface SearchSuggestionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export const SearchSuggestions = ({ 
  suggestions, 
  onSuggestionClick 
}: SearchSuggestionsProps) => {
  if (suggestions.length === 0) return null;

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
        <TrendingUp className="w-4 h-4" />
        Suggestions
      </h3>
      <div className="space-y-1">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <Search className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{suggestion}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
