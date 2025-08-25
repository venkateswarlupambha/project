
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Database, UserCheck, Globe, Calendar, Mail, Phone } from "lucide-react";

const Privacy = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy | Onward Careers"
        description="Learn how we protect your privacy and handle your personal data. Read our comprehensive privacy policy."
        keywords="privacy policy, data protection, personal information, GDPR, privacy"
        ogTitle="Privacy Policy - Onward Careers"
        ogDescription="Comprehensive privacy policy explaining how we protect and handle your personal data."
        canonicalUrl="https://onwardcareers.co.uk/privacy"
      />
      <Header />
      
      <main className="pt-20">
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              <Shield className="w-3 h-3 mr-1" />
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Privacy Matters
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              We are committed to protecting your personal information and privacy rights.
            </p>
            <p className="text-sm text-blue-200 mt-4">Last updated: {lastUpdated}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Lock className="w-10 h-10 text-blue-600 mb-4" />
                    <CardTitle>Data Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      We use industry-standard encryption and security measures to protect your personal information from unauthorized access.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Eye className="w-10 h-10 text-green-600 mb-4" />
                    <CardTitle>Data Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your data is used solely to provide our services and improve your experience. We never sell your information to third parties.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Database className="w-10 h-10 text-purple-600 mb-4" />
                    <CardTitle>Data Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your information is stored securely in encrypted databases with regular backups and strict access controls.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <UserCheck className="w-10 h-10 text-orange-600 mb-4" />
                    <CardTitle>Your Rights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      You have the right to access, update, or delete your personal information at any time. Contact us for assistance.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Privacy Policy Content */}
              <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Personal Information</h3>
                    <p>We collect information you provide directly to us, including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Name, email address, phone number, and contact details</li>
                      <li>Professional information (resume, work history, skills, education)</li>
                      <li>LinkedIn profile information and social media handles</li>
                      <li>Payment information and billing details</li>
                      <li>Communication preferences and feedback</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Usage Information</h3>
                    <p>We automatically collect certain information about your use of our services:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage patterns and interaction with our website</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Log files and analytics data</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, maintain, and improve our career services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send you technical notices, updates, and support messages</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Communicate with you about products, services, and promotional offers</li>
                      <li>Monitor and analyze trends, usage, and activities</li>
                      <li>Detect, investigate, and prevent fraudulent transactions</li>
                      <li>Comply with legal obligations and protect our rights</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Information Sharing and Disclosure</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>We may share your information in the following circumstances:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                      <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                      <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                    </ul>
                    <p className="mt-4"><strong>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</strong></p>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>SSL/TLS encryption for data transmission</li>
                      <li>Encrypted storage of sensitive information</li>
                      <li>Regular security audits and vulnerability assessments</li>
                      <li>Access controls and employee training on data protection</li>
                      <li>Secure backup and disaster recovery procedures</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Your Rights and Choices</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>You have the following rights regarding your personal information:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Access:</strong> Request access to your personal data</li>
                      <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                      <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                      <li><strong>Portability:</strong> Request transfer of your data</li>
                      <li><strong>Objection:</strong> Object to processing of your data</li>
                      <li><strong>Restriction:</strong> Request restriction of processing</li>
                    </ul>
                    <p className="mt-4">To exercise these rights, contact us at <a href="mailto:privacy@onwardcareers.com" className="text-blue-600 hover:underline">privacy@onwardcareers.com</a></p>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. International Data Transfers</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>We may transfer your personal information to countries outside your jurisdiction. When we do so, we ensure appropriate safeguards are in place, including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Adequacy decisions by relevant authorities</li>
                      <li>Standard contractual clauses approved by regulatory bodies</li>
                      <li>Binding corporate rules and certification schemes</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Data Retention</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>We retain your personal information for as long as necessary to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide our services and maintain your account</li>
                      <li>Comply with legal obligations</li>
                      <li>Resolve disputes and enforce agreements</li>
                      <li>Improve our services and conduct analytics</li>
                    </ul>
                    <p className="mt-4">Typically, we retain personal data for 7 years after account closure or last interaction, unless longer retention is required by law.</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Contact Information</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>For privacy-related questions or concerns, contact us:</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span>Email: <a href="mailto:privacy@onwardcareers.com" className="text-blue-600 hover:underline">privacy@onwardcareers.com</a></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span>Phone: +44 7553 409836</span>
                      </div>
                    </div>
                    <p className="mt-4"><strong>Data Protection Officer:</strong> privacy@onwardcareers.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
