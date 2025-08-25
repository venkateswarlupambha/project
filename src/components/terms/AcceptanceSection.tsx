
import { AlertTriangle } from "lucide-react";

export const AcceptanceSection = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>By accessing and using Onward Careers&apos; services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.</p>
        <div className="flex items-start space-x-2 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm"><strong>Important:</strong> These terms constitute a legally binding agreement between you and Onward Careers.</p>
        </div>
      </div>
    </div>
  );
};
