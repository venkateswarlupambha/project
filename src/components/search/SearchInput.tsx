
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSearching: boolean;
}

export const SearchInput = ({ query, onChange, isSearching }: SearchInputProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        placeholder="Search services, pages, blog posts..."
        value={query}
        onChange={onChange}
        className="pl-10 pr-4 py-3 text-base"
        autoFocus
      />
      {isSearching && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
};
