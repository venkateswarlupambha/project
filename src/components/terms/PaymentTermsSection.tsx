
import { Scale } from "lucide-react";

export const PaymentTermsSection = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Payment Terms and Anti-Fraud Protection</h2>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Scale className="w-5 h-5 text-red-600" />
            <h4 className="font-semibold text-red-800 dark:text-red-200">ANTI-FRAUD WARNING</h4>
          </div>
          <p className="text-sm text-red-700 dark:text-red-300">Any attempt to evade payment, provide false information, or commit fraud will result in immediate legal action and may constitute criminal offenses under applicable laws.</p>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Payment Obligations</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Binding Agreement:</strong> Payment for services constitutes a legally binding contract</li>
          <li><strong>Non-Refundable Deposits:</strong> Initial payments and deposits are non-refundable once work commences</li>
          <li><strong>Full Payment Required:</strong> All services must be paid in full before final deliverables are released</li>
          <li><strong>Late Payment Penalties:</strong> Overdue accounts incur daily interest charges of 1.5% per day</li>
          <li><strong>Collection Costs:</strong> Clients are liable for all collection costs, legal fees, and court costs</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Fraud Prevention Measures</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Identity Verification:</strong> All clients must provide valid identification and contact information</li>
          <li><strong>Payment Verification:</strong> Payment methods must be verified and match client identity</li>
          <li><strong>Service Documentation:</strong> All communications and work performed are documented and legally admissible</li>
          <li><strong>Chargeback Protection:</strong> Fraudulent chargebacks will be contested with full legal documentation</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Legal Consequences of Non-Payment</h3>
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mt-4">
          <ul className="list-disc list-inside space-y-2 text-orange-800 dark:text-orange-200">
            <li><strong>Legal Action:</strong> Immediate commencement of legal proceedings for unpaid amounts</li>
            <li><strong>Credit Reporting:</strong> Negative reporting to credit bureaus and collection agencies</li>
            <li><strong>Asset Investigation:</strong> Full investigation of client assets for collection purposes</li>
            <li><strong>Criminal Charges:</strong> Fraud cases referred to law enforcement authorities</li>
            <li><strong>Damages:</strong> Clients liable for treble damages, attorney fees, and punitive damages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
