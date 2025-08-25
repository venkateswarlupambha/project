
import { useState, useEffect, useMemo } from 'react';
import { SearchResult, SearchOptions, performSearch, SearchHistory, generateSearchSuggestions } from '@/utils/searchUtils';
import { searchData } from '@/data/searchData';

export interface UseSearchReturn {
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  suggestions: string[];
  isSearching: boolean;
  hasSearched: boolean;
  searchHistory: string[];
  clearHistory: () => void;
  executeSearch: (searchQuery?: string, options?: SearchOptions) => void;
}

export function useSearch(options: SearchOptions = {}): UseSearchReturn {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Load search history on mount
  useEffect(() => {
    setSearchHistory(SearchHistory.getHistory());
  }, []);

  // Generate suggestions based on current query
  useEffect(() => {
    if (query.length > 0) {
      const newSuggestions = generateSearchSuggestions(query, searchData);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const executeSearch = useMemo(() => {
    return (searchQuery?: string, searchOptions?: SearchOptions) => {
      const finalQuery = searchQuery || query;
      if (!finalQuery.trim()) {
        setResults([]);
        setHasSearched(false);
        return;
      }

      setIsSearching(true);
      
      // Simulate small delay for better UX
      setTimeout(() => {
        const searchResults = performSearch(finalQuery, searchData, {
          ...options,
          ...searchOptions
        });
        
        setResults(searchResults);
        setHasSearched(true);
        setIsSearching(false);
        
        // Add to search history
        SearchHistory.addSearch(finalQuery);
        setSearchHistory(SearchHistory.getHistory());
      }, 100);
    };
  }, [query, options]);

  const clearHistory = () => {
    SearchHistory.clearHistory();
    setSearchHistory([]);
  };

  return {
    query,
    setQuery,
    results,
    suggestions,
    isSearching,
    hasSearched,
    searchHistory,
    clearHistory,
    executeSearch
  };
}
