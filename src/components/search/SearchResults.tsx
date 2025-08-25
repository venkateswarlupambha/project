
import { Search } from "lucide-react";
import { SearchResultItem } from "./SearchResultItem";

interface SearchResultsProps {
  results: any[];
  query: string;
  selectedIndex: number;
  onResultClick: (result: any) => void;
}

export const SearchResults = ({ 
  results, 
  query, 
  selectedIndex, 
  onResultClick 
}: SearchResultsProps) => {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        {results.length > 0 
          ? `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
          : `No results found for "${query}"`
        }
      </h3>
      
      {results.length > 0 ? (
        <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
          <div className="space-y-2 pr-2 pb-4">
            {results.map((result, index) => (
              <SearchResultItem
                key={result.id}
                result={result}
                query={query}
                isSelected={selectedIndex === index}
                onClick={() => onResultClick(result)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No results found. Try different keywords or check your spelling.</p>
        </div>
      )}
    </div>
  );
};
