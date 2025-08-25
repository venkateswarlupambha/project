
export const FraudPreventionSection = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Service Fraud and Contract Violations</h2>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Prohibited Fraudulent Activities</h3>
        <p>The following activities constitute fraud and may result in criminal charges:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Payment Fraud:</strong> Using stolen credit cards, false payment information, or unauthorized accounts</li>
          <li><strong>Identity Fraud:</strong> Providing false names, addresses, or identification documents</li>
          <li><strong>Service Fraud:</strong> Requesting services with no intention to pay or using false pretenses</li>
          <li><strong>Chargeback Fraud:</strong> Filing false chargeback claims after receiving satisfactory services</li>
          <li><strong>Document Fraud:</strong> Providing false information for resume or profile creation</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Immediate Consequences</h3>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
          <ul className="list-disc list-inside space-y-2 text-red-800 dark:text-red-200">
            <li>Immediate termination of all services</li>
            <li>Forfeiture of all payments made</li>
            <li>Permanent ban from all Onward Careers services</li>
            <li>Referral to fraud investigation authorities</li>
            <li>Commencement of civil and criminal proceedings</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Legal Remedies Available</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Injunctive Relief:</strong> Court orders to prevent further fraudulent activity</li>
          <li><strong>Monetary Damages:</strong> Compensation for all losses, including lost profits</li>
          <li><strong>Punitive Damages:</strong> Additional damages to deter fraudulent behavior</li>
          <li><strong>Attorney Fees:</strong> Recovery of all legal costs and attorney fees</li>
          <li><strong>Criminal Prosecution:</strong> Cooperation with law enforcement for criminal charges</li>
        </ul>
      </div>
    </div>
  );
};
