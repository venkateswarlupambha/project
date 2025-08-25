
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, FileText, Users, Lock, Eye, Download, Trash2, Edit, AlertTriangle, Globe, Mail, Phone } from "lucide-react";

const GDPR = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen">
      <SEO 
        title="GDPR Compliance | Onward Careers"
        description="Learn about our GDPR compliance measures and how we protect EU citizens' data rights."
        keywords="GDPR, data protection, EU compliance, privacy rights, data security"
        ogTitle="GDPR Compliance - Onward Careers"
        ogDescription="Our commitment to GDPR compliance and protecting EU citizens' data rights."
        canonicalUrl="https://onwardcareers.co.uk/gdpr"
      />
      <Header />
      
      <main className="pt-20">
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              <Shield className="w-3 h-3 mr-1" />
              GDPR Compliance
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GDPR Compliance
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              We are fully committed to GDPR compliance and protecting your data rights.
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
                    <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
                    <CardTitle>Data Rights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      You have the right to access, rectify, erase, and port your personal data under GDPR.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <FileText className="w-10 h-10 text-blue-600 mb-4" />
                    <CardTitle>Data Processing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      We process your data lawfully, fairly, and transparently in accordance with GDPR requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Lock className="w-10 h-10 text-purple-600 mb-4" />
                    <CardTitle>Data Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      We implement appropriate technical and organizational measures to protect your personal data.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Users className="w-10 h-10 text-orange-600 mb-4" />
                    <CardTitle>Data Controller</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Onward Careers acts as data controller and is responsible for your personal data protection.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed GDPR Compliance Content */}
              <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What is GDPR?</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect on May 25, 2018. It regulates how personal data of individuals within the European Union (EU) and European Economic Area (EEA) is processed.</p>
                    <p>GDPR applies to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Any organization processing personal data of EU/EEA residents</li>
                      <li>Organizations established in the EU/EEA</li>
                      <li>Organizations offering goods or services to EU/EEA residents</li>
                      <li>Organizations monitoring behavior of EU/EEA residents</li>
                    </ul>
                    <div className="flex items-start space-x-2 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm"><strong>Our Commitment:</strong> Onward Careers is fully committed to GDPR compliance and protecting the privacy rights of all our clients, regardless of their location.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Rights Under GDPR</h2>
                  <div className="space-y-6 text-gray-600 dark:text-gray-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Eye className="w-5 h-5 text-blue-600" />
                          <h3 className="font-semibold text-gray-800 dark:text-gray-200">Right of Access</h3>
                        </div>
                        <p className="text-sm">You have the right to know what personal data we hold about you and how it's being processed.</p>
                        <Button variant="outline" size="sm" className="mt-2 w-full">
                          Request Data Access
                        </Button>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Edit className="w-5 h-5 text-green-600" />
                          <h3 className="font-semibold text-gray-800 dark:text-gray-200">Right to Rectification</h3>
                        </div>
                        <p className="text-sm">You can request correction of inaccurate or incomplete personal data.</p>
                        <Button variant="outline" size="sm" className="mt-2 w-full">
                          Update My Data
                        </Button>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Trash2 className="w-5 h-5 text-red-600" />
                          <h3 className="font-semibold text-gray-800 dark:text-gray-200">Right to Erasure</h3>
                        </div>
                        <p className="text-sm">You can request deletion of your personal data under certain circumstances.</p>
                        <Button variant="outline" size="sm" className="mt-2 w-full">
                          Delete My Data
                        </Button>
                      </div>

                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Download className="w-5 h-5 text-purple-600" />
                          <h3 className="font-semibold text-gray-800 dark:text-gray-200">Right to Portability</h3>
                        </div>
                        <p className="text-sm">You can request your personal data in a structured, machine-readable format.</p>
                        <Button variant="outline" size="sm" className="mt-2 w-full">
                          Export My Data
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Additional Rights</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Right to Restrict Processing:</strong> You can request limitation of processing under certain conditions</li>
                        <li><strong>Right to Object:</strong> You can object to processing based on legitimate interests or direct marketing</li>
                        <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you can withdraw it anytime</li>
                        <li><strong>Right to Lodge a Complaint:</strong> You can file a complaint with your local data protection authority</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Lawful Basis for Processing</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>We process your personal data only when we have a lawful basis. The lawful bases we rely on include:</p>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Contract Performance</h4>
                        <p className="text-sm">Processing necessary to provide our services and fulfill our contractual obligations.</p>
                        <p className="text-xs text-gray-500 mt-1">Examples: Resume writing, LinkedIn optimization, payment processing</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Consent</h4>
                        <p className="text-sm">You have given clear consent for specific processing activities.</p>
                        <p className="text-xs text-gray-500 mt-1">Examples: Marketing emails, optional analytics, promotional communications</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Legitimate Interest</h4>
                        <p className="text-sm">Processing necessary for our legitimate business interests, balanced against your rights.</p>
                        <p className="text-xs text-gray-500 mt-1">Examples: Fraud prevention, website security, business analytics</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Legal Obligation</h4>
                        <p className="text-sm">Processing required to comply with legal or regulatory requirements.</p>
                        <p className="text-xs text-gray-500 mt-1">Examples: Tax records, financial reporting, law enforcement requests</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Protection Measures</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>We have implemented comprehensive technical and organizational measures to ensure GDPR compliance:</p>
                    
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Technical Measures</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>End-to-end encryption for data transmission and storage</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Access controls and multi-factor authentication</li>
                      <li>Automated backup and disaster recovery systems</li>
                      <li>Network security monitoring and intrusion detection</li>
                      <li>Secure development practices and code reviews</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Organizational Measures</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Privacy by design and default principles</li>
                      <li>Data Protection Impact Assessments (DPIAs)</li>
                      <li>Regular staff training on data protection</li>
                      <li>Clear data retention and deletion policies</li>
                      <li>Vendor management and due diligence processes</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">International Data Transfers</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>When we transfer personal data outside the EU/EEA, we ensure adequate protection through:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          Adequacy Decisions
                        </h4>
                        <p className="text-sm mt-2">Transfers to countries deemed adequate by the European Commission.</p>
                      </div>
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                          <FileText className="w-4 h-4 text-blue-600 mr-2" />
                          Standard Contractual Clauses
                        </h4>
                        <p className="text-sm mt-2">EU-approved contracts ensuring data protection standards.</p>
                      </div>
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                          <Shield className="w-4 h-4 text-purple-600 mr-2" />
                          Binding Corporate Rules
                        </h4>
                        <p className="text-sm mt-2">Internal data protection policies for multinational organizations.</p>
                      </div>
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                          <Globe className="w-4 h-4 text-orange-600 mr-2" />
                          Certification Schemes
                        </h4>
                        <p className="text-sm mt-2">Approved certification mechanisms and codes of conduct.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Breach Response</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>We have established procedures to detect, report, and investigate personal data breaches:</p>
                    <div className="space-y-4 mt-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 font-semibold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Detection & Assessment</h4>
                          <p className="text-sm">Immediate identification and assessment of the breach scope and impact.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-600 font-semibold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Containment & Recovery</h4>
                          <p className="text-sm">Swift action to contain the breach and prevent further unauthorized access.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-semibold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Notification</h4>
                          <p className="text-sm">Notification to supervisory authorities within 72 hours and affected individuals without undue delay.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 font-semibold text-sm">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Investigation & Improvement</h4>
                          <p className="text-sm">Thorough investigation and implementation of measures to prevent future incidents.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact & Complaints</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>For GDPR-related inquiries, exercising your rights, or filing complaints:</p>
                    
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Data Protection Officer</h3>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-blue-600" />
                          <span><strong>Email:</strong> <a href="mailto:dpo@onwardcareers.com" className="text-blue-600 hover:underline">dpo@onwardcareers.com</a></span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-blue-600" />
                          <span><strong>Phone:</strong> +44 7553 409836</span>
                        </div>
                        <p className="text-sm"><strong>Response Time:</strong> We aim to respond to all GDPR requests within 30 days.</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Supervisory Authorities</h3>
                    <p>You have the right to lodge a complaint with your local data protection authority:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li><strong>UK:</strong> Information Commissioner's Office (ICO) - <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ico.org.uk</a></li>
                      <li><strong>EU:</strong> Find your local authority at <a href="https://edpb.europa.eu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">edpb.europa.eu</a></li>
                    </ul>

                    <div className="flex items-start space-x-2 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg mt-4">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm"><strong>Important:</strong> We encourage you to contact us first to resolve any concerns. However, you always have the right to contact a supervisory authority directly.</p>
                    </div>
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

export default GDPR;
