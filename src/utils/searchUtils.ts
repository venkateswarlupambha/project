
// Enhanced search utilities with fuzzy search and ranking
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'blog' | 'term';
  category?: string;
  keywords?: string[];
  relevanceScore: number;
}

export interface SearchOptions {
  fuzzyMatch?: boolean;
  maxResults?: number;
  minRelevanceScore?: number;
  includeTypes?: string[];
  excludeTypes?: string[];
}

// Levenshtein distance for fuzzy matching
function levenshteinDistance(str1: string, str2: string): number {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
  
  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
  
  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }
  
  return matrix[str2.length][str1.length];
}

// Calculate relevance score
export function calculateRelevanceScore(
  query: string,
  title: string,
  description: string,
  keywords: string[] = []
): number {
  const normalizedQuery = query.toLowerCase().trim();
  const normalizedTitle = title.toLowerCase();
  const normalizedDescription = description.toLowerCase();
  const normalizedKeywords = keywords.map(k => k.toLowerCase());
  
  let score = 0;
  
  // Exact title match (highest priority)
  if (normalizedTitle.includes(normalizedQuery)) {
    score += normalizedTitle === normalizedQuery ? 100 : 80;
  }
  
  // Title word matches
  const queryWords = normalizedQuery.split(/\s+/);
  const titleWords = normalizedTitle.split(/\s+/);
  
  queryWords.forEach(queryWord => {
    titleWords.forEach(titleWord => {
      if (titleWord.includes(queryWord)) {
        score += titleWord === queryWord ? 30 : 20;
      } else if (queryWord.length > 3) {
        const distance = levenshteinDistance(queryWord, titleWord);
        if (distance <= 2) score += 15;
      }
    });
  });
  
  // Description matches
  if (normalizedDescription.includes(normalizedQuery)) {
    score += 25;
  }
  
  queryWords.forEach(queryWord => {
    if (normalizedDescription.includes(queryWord)) {
      score += 10;
    }
  });
  
  // Keywords matches
  normalizedKeywords.forEach(keyword => {
    if (keyword.includes(normalizedQuery)) {
      score += 35;
    }
    queryWords.forEach(queryWord => {
      if (keyword.includes(queryWord)) {
        score += 15;
      }
    });
  });
  
  return score;
}

// Enhanced search function
export function performSearch(
  query: string,
  searchData: SearchResult[],
  options: SearchOptions = {}
): SearchResult[] {
  const {
    fuzzyMatch = true,
    maxResults = 10,
    minRelevanceScore = 5,
    includeTypes,
    excludeTypes
  } = options;
  
  if (!query.trim()) return [];
  
  let results = searchData.map(item => {
    const relevanceScore = calculateRelevanceScore(
      query,
      item.title,
      item.description,
      item.keywords
    );
    
    return { ...item, relevanceScore };
  });
  
  // Filter by type if specified
  if (includeTypes?.length) {
    results = results.filter(item => includeTypes.includes(item.type));
  }
  
  if (excludeTypes?.length) {
    results = results.filter(item => !excludeTypes.includes(item.type));
  }
  
  // Filter by minimum relevance score
  results = results.filter(item => item.relevanceScore >= minRelevanceScore);
  
  // Sort by relevance score (descending)
  results.sort((a, b) => b.relevanceScore - a.relevanceScore);
  
  return results.slice(0, maxResults);
}

// Highlight search terms in text
export function highlightSearchTerms(text: string, query: string): string {
  if (!query.trim()) return text;
  
  const queryWords = query.toLowerCase().trim().split(/\s+/);
  let highlightedText = text;
  
  queryWords.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">$1</mark>');
  });
  
  return highlightedText;
}

// Search history management
export class SearchHistory {
  private static readonly STORAGE_KEY = 'onward_search_history';
  private static readonly MAX_HISTORY = 10;
  
  static addSearch(query: string): void {
    if (!query.trim()) return;
    
    const history = this.getHistory();
    const filteredHistory = history.filter(item => item.toLowerCase() !== query.toLowerCase());
    const newHistory = [query, ...filteredHistory].slice(0, this.MAX_HISTORY);
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newHistory));
  }
  
  static getHistory(): string[] {
    try {
      const history = localStorage.getItem(this.STORAGE_KEY);
      return history ? JSON.parse(history) : [];
    } catch {
      return [];
    }
  }
  
  static clearHistory(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

// Search suggestions
export function generateSearchSuggestions(query: string, searchData: SearchResult[]): string[] {
  if (!query.trim()) return [];
  
  const suggestions = new Set<string>();
  const normalizedQuery = query.toLowerCase().trim();
  
  searchData.forEach(item => {
    // Add title-based suggestions
    const titleWords = item.title.toLowerCase().split(/\s+/);
    titleWords.forEach(word => {
      if (word.startsWith(normalizedQuery) && word.length > normalizedQuery.length) {
        suggestions.add(word);
      }
    });
    
    // Add keyword-based suggestions
    item.keywords?.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      if (keywordLower.startsWith(normalizedQuery) && keywordLower.length > normalizedQuery.length) {
        suggestions.add(keyword);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, 5);
}
