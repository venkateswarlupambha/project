
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SuggestionCardProps {
  question: string;
  onClick: () => void;
}

export const SuggestionCard = ({ question, onClick }: SuggestionCardProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-3 bg-white dark:bg-slate-700 rounded-xl border border-gray-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200 group"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {question}
        </span>
        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
      </div>
    </button>
  );
};
