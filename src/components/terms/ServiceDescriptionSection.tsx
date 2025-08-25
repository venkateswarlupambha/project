
export const ServiceDescriptionSection = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Service Descriptions</h2>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>Onward Careers provides professional career services including but not limited to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Resume writing and optimization services</li>
          <li>LinkedIn profile optimization and personal branding</li>
          <li>Cover letter writing and customization</li>
          <li>Career consultation and coaching</li>
          <li>Interview preparation and mock interviews</li>
          <li>Portfolio building and design services</li>
          <li>Video editing and content creation</li>
          <li>Marketing and social media management</li>
          <li>Web development and design services</li>
        </ul>
        <p className="mt-4">Service deliverables, timelines, and specifications are outlined in individual service agreements.</p>
      </div>
    </div>
  );
};
