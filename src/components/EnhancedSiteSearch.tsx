import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import { SearchInput } from "./search/SearchInput";
import { SearchSuggestions } from "./search/SearchSuggestions";
import { SearchResults } from "./search/SearchResults";

interface EnhancedSiteSearchProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface SearchResult {
  url: string;
  title?: string;
  description?: string;
  id?: string | number;
  type?: string;
  category?: string;
  // Add any other properties that your search results might have
}

export const EnhancedSiteSearch = ({ open, setOpen }: EnhancedSiteSearchProps) => {
  const navigate = useNavigate();
  const { 
    query, 
    setQuery, 
    results, 
    suggestions, 
    isSearching, 
    hasSearched, 
    executeSearch 
  } = useSearch({ maxResults: 10 });

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Reset state when dialog opens/closes
  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIndex(-1);
    }
  }, [open, setQuery]);

  // Create a stable callback for result clicks using useCallback
  const handleResultClick = useCallback((result: SearchResult) => {
    navigate(result.url);
    setOpen(false);
  }, [navigate, setOpen]);

  const handleSuggestionClick = useCallback((suggestion: string) => {
    setQuery(suggestion);
    executeSearch(suggestion);
  }, [setQuery, executeSearch]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    if (newQuery.trim()) {
      executeSearch(newQuery);
    }
  }, [setQuery, executeSearch]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleResultClick(results[selectedIndex] as SearchResult);
          } else if (query.trim()) {
            executeSearch();
          }
          break;
        case 'Escape':
          setOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    open, 
    selectedIndex, 
    results, 
    query, 
    executeSearch, 
    setOpen, 
    handleResultClick
  ]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden flex flex-col mx-4 sm:mx-auto">
        <DialogHeader className="p-4 sm:p-6 pb-4 flex-shrink-0">
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Search className="w-5 h-5" />
            Search Onward Careers
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 sm:px-6 flex-shrink-0">
          <SearchInput
            query={query}
            onChange={handleInputChange}
            isSearching={isSearching}
          />
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto px-4 sm:px-6 pb-6">
            {query && suggestions.length > 0 && !hasSearched && (
              <SearchSuggestions
                suggestions={suggestions}
                onSuggestionClick={handleSuggestionClick}
              />
            )}

            {hasSearched && query.trim() && (
              <SearchResults
                results={results as SearchResult[]}
                query={query}
                selectedIndex={selectedIndex}
                onResultClick={handleResultClick}
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};