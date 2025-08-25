
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, BarChart, Shield, Eye, Globe, AlertCircle, CheckCircle } from "lucide-react";

const Cookies = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen">
      <SEO 
        title="Cookie Policy | Onward Careers"
        description="Learn about how we use cookies and similar technologies to improve your browsing experience."
        keywords="cookie policy, cookies, tracking, analytics, website experience"
        ogTitle="Cookie Policy - Onward Careers"
        ogDescription="Comprehensive cookie policy explaining how we use cookies and similar technologies."
        canonicalUrl="https://onwardcareers.co.uk/cookies"
      />
      <Header />
      
      <main className="pt-20">
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              <Cookie className="w-3 h-3 mr-1" />
              Cookie Policy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie Usage
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Learn how we use cookies to enhance your experience on our website.
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
                    <Settings className="w-10 h-10 text-blue-600 mb-4" />
                    <CardTitle>Essential Cookies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <BarChart className="w-10 h-10 text-green-600 mb-4" />
                    <CardTitle>Analytics Cookies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Help us understand how visitors interact with our website to improve user experience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Shield className="w-10 h-10 text-purple-600 mb-4" />
                    <CardTitle>Security Cookies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Used to authenticate users, prevent fraud, and protect your account security.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Eye className="w-10 h-10 text-orange-600 mb-4" />
                    <CardTitle>Preference Cookies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Remember your preferences and settings to provide a personalized experience.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Cookie Policy */}
              <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Are Cookies?</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
                    <p>Cookies contain information that is transferred to your device&apos;s hard drive and stored there. This information is then sent back to the originating website on each subsequent visit, or to another website that recognizes that cookie.</p>
                    <div className="flex items-start space-x-2 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm"><strong>Note:</strong> Cookies do not contain any information that personally identifies you, but personal information that we store about you may be linked to the information stored in cookies.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Types of Cookies We Use</h2>
                  <div className="space-y-6 text-gray-600 dark:text-gray-300">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                        <Settings className="w-5 h-5 text-blue-600 mr-2" />
                        Essential Cookies
                      </h3>
                      <p className="mb-2">These cookies are strictly necessary for the operation of our website. They enable core functionality such as:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>User authentication and account management</li>
                        <li>Security and fraud prevention</li>
                        <li>Website navigation and basic features</li>
                        <li>Form submissions and contact functionality</li>
                        <li>Shopping cart and payment processing</li>
                      </ul>
                      <p className="mt-2 text-sm"><strong>Legal Basis:</strong> Legitimate interest (necessary for website operation)</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                        <BarChart className="w-5 h-5 text-green-600 mr-2" />
                        Analytics and Performance Cookies
                      </h3>
                      <p className="mb-2">These cookies help us understand how visitors interact with our website by collecting anonymous information:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Google Analytics (traffic analysis and user behavior)</li>
                        <li>Page view statistics and popular content</li>
                        <li>User journey mapping and conversion tracking</li>
                        <li>Website performance monitoring</li>
                        <li>Error tracking and debugging information</li>
                      </ul>
                      <p className="mt-2 text-sm"><strong>Legal Basis:</strong> Consent (you can opt-out anytime)</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                        <Eye className="w-5 h-5 text-orange-600 mr-2" />
                        Functional Cookies
                      </h3>
                      <p className="mb-2">These cookies enable enhanced functionality and personalization:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Language and region preferences</li>
                        <li>Theme selection (dark/light mode)</li>
                        <li>Font size and accessibility settings</li>
                        <li>Recently viewed services or content</li>
                        <li>Live chat and customer support features</li>
                      </ul>
                      <p className="mt-2 text-sm"><strong>Legal Basis:</strong> Consent (you can disable these cookies)</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                        <Globe className="w-5 h-5 text-purple-600 mr-2" />
                        Marketing and Targeting Cookies
                      </h3>
                      <p className="mb-2">These cookies are used to deliver relevant advertisements and track campaign effectiveness:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Social media advertising (Facebook, LinkedIn, Twitter)</li>
                        <li>Google Ads and remarketing campaigns</li>
                        <li>Email marketing campaign tracking</li>
                        <li>Cross-device user identification</li>
                        <li>Conversion and attribution tracking</li>
                      </ul>
                      <p className="mt-2 text-sm"><strong>Legal Basis:</strong> Consent (you can opt-out of targeted advertising)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Cookies</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>Our website may contain content from third-party services that set their own cookies:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Google Services</h4>
                        <ul className="text-sm mt-2 space-y-1">
                          <li>• Google Analytics</li>
                          <li>• Google Ads</li>
                          <li>• reCAPTCHA</li>
                          <li>• Google Fonts</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Social Media</h4>
                        <ul className="text-sm mt-2 space-y-1">
                          <li>• Facebook Pixel</li>
                          <li>• LinkedIn Insights</li>
                          <li>• Twitter Analytics</li>
                          <li>• YouTube Embeds</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Support Tools</h4>
                        <ul className="text-sm mt-2 space-y-1">
                          <li>• Live Chat Services</li>
                          <li>• Help Desk Software</li>
                          <li>• Calendly Scheduling</li>
                          <li>• Payment Processors</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Analytics Tools</h4>
                        <ul className="text-sm mt-2 space-y-1">
                          <li>• Hotjar Heatmaps</li>
                          <li>• Mixpanel Events</li>
                          <li>• Microsoft Clarity</li>
                          <li>• Crazy Egg</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Managing Your Cookie Preferences</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>You have several options for managing cookies:</p>
                    
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Browser Settings</h3>
                    <p>Most web browsers allow you to control cookies through their settings:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and site data</li>
                      <li><strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
                      <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                      <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions</li>
                    </ul>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <h4 className="font-semibold text-green-800 dark:text-green-200">Accept All Cookies</h4>
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300">Get the full website experience with personalized content and improved functionality.</p>
                        <Button className="w-full mt-3 bg-green-600 hover:bg-green-700" size="sm">
                          Accept All Cookies
                        </Button>
                      </div>
                      
                      <div className="border border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Settings className="w-5 h-5 text-orange-600" />
                          <h4 className="font-semibold text-orange-800 dark:text-orange-200">Customize Settings</h4>
                        </div>
                        <p className="text-sm text-orange-700 dark:text-orange-300">Choose which types of cookies you want to allow for a tailored experience.</p>
                        <Button variant="outline" className="w-full mt-3 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" size="sm">
                          Manage Preferences
                        </Button>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Opt-Out Links</h3>
                    <p>You can opt out of specific tracking services:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out</a></li>
                      <li><a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook Ad Preferences</a></li>
                      <li><a href="https://www.linkedin.com/psettings/advertising" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Ad Settings</a></li>
                      <li><a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Network Advertising Initiative</a></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookie Retention Periods</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Session Cookies</h4>
                        <p className="text-sm mt-1">Deleted when you close your browser</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Persistent Cookies</h4>
                        <p className="text-sm mt-1">Remain until expiry date or manual deletion</p>
                      </div>
                    </div>
                    <table className="w-full mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-semibold">Cookie Type</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold">Retention Period</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-2">Essential/Security</td>
                          <td className="px-4 py-2">Session or 1 year</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-2">Analytics</td>
                          <td className="px-4 py-2">2 years</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-2">Functional</td>
                          <td className="px-4 py-2">1 year</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-2">Marketing</td>
                          <td className="px-4 py-2">30 days to 2 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Updates to This Policy</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.</p>
                    <p>When we make material changes to this policy, we will:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Update the "Last updated" date at the top of this policy</li>
                      <li>Notify you via email if you have subscribed to our notifications</li>
                      <li>Display a prominent notice on our website</li>
                      <li>Request renewed consent where required by law</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>If you have any questions about our use of cookies, please contact us:</p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> <a href="mailto:privacy@onwardcareers.com" className="text-blue-600 hover:underline">privacy@onwardcareers.com</a></p>
                      <p><strong>Phone:</strong> +44 7553 409836</p>
                      <p><strong>Subject Line:</strong> Cookie Policy Inquiry</p>
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

export default Cookies;
