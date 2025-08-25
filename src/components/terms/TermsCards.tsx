
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

interface TermsData {
  id: number;
  title: string;
  category: string;
  content: string;
  icon: any;
  tags: string[];
}

interface Category {
  id: string;
  label: string;
}

interface TermsCardsProps {
  filteredTerms: TermsData[];
  categories: Category[];
}

export const TermsCards = ({ filteredTerms, categories }: TermsCardsProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTerms.map((term) => {
              const IconComponent = term.icon;
              return (
                <Card key={term.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                          <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <CardTitle className="text-lg">{term.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {categories.find(cat => cat.id === term.category)?.label}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {term.content}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {term.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                No results found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
