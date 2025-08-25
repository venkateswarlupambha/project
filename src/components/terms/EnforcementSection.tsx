
export const EnforcementSection = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Enforcement and Collection Procedures</h2>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Collection Process</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li><strong>Initial Notice:</strong> 7-day demand letter for immediate payment</li>
          <li><strong>Final Demand:</strong> 14-day final notice with threat of legal action</li>
          <li><strong>Legal Filing:</strong> Immediate commencement of lawsuit and asset investigation</li>
          <li><strong>Judgment Recovery:</strong> Wage garnishment, asset seizure, and bank account levies</li>
          <li><strong>Credit Reporting:</strong> Negative reporting affecting credit score for 7 years</li>
        </ol>

        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">International Enforcement</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Cross-border collection through international law firms</li>
          <li>Enforcement of UK judgments in foreign jurisdictions</li>
          <li>Cooperation with international fraud investigation units</li>
          <li>Asset tracing and recovery in multiple countries</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Technology-Assisted Enforcement</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Advanced fraud detection and prevention systems</li>
          <li>Real-time monitoring of suspicious activities</li>
          <li>Blockchain verification for payment authenticity</li>
          <li>AI-powered risk assessment and client screening</li>
        </ul>
      </div>
    </div>
  );
};
