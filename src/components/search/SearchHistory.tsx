
import { History, Clock, X } from "lucide-react";

interface SearchHistoryProps {
  searchHistory: string[];
  onHistoryClick: (historyQuery: string) => void;
  onClearHistory: () => void;
}

export const SearchHistory = ({ 
  searchHistory, 
  onHistoryClick, 
  onClearHistory 
}: SearchHistoryProps) => {
  if (searchHistory.length === 0) return null;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
          <History className="w-4 h-4" />
          Recent Searches
        </h3>
        <button
          onClick={onClearHistory}
          className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
        >
          <X className="w-3 h-3" />
          Clear
        </button>
      </div>
      <div className="space-y-2">
        {searchHistory.slice(0, 5).map((historyItem, index) => (
          <button
            key={index}
            onClick={() => onHistoryClick(historyItem)}
            className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{historyItem}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
