
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Users, Star, ArrowRight } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Careers at Onward Careers | Join Our Team"
        description="Join our growing team at Onward Careers. We're looking for passionate professionals to help transform careers worldwide. Explore career opportunities and apply today."
        keywords="careers, jobs, employment, work, team, hiring, opportunities, remote work"
        ogTitle="Careers at Onward Careers - Join Our Team"
        ogDescription="Join our mission to transform careers worldwide. Explore exciting career opportunities at Onward Careers."
        canonicalUrl="https://onwardcareers.co.uk/careers"
      />
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              <Briefcase className="w-3 h-3 mr-1" />
              Careers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Help us transform careers worldwide. Be part of a team that's making a real difference in people's professional lives.
            </p>
            <div className="flex items-center justify-center gap-4 text-blue-100">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Great Place to Work</span>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-gray-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We're not just a company, we're a community of passionate professionals dedicated to making a difference.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-10 h-10 text-blue-600 mb-4" />
                  <CardTitle>Remote-First Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Work from anywhere in the world. We believe in flexibility and trust our team to deliver exceptional results.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Star className="w-10 h-10 text-purple-600 mb-4" />
                  <CardTitle>Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Continuous learning and development opportunities. We invest in our team's professional growth and career advancement.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Briefcase className="w-10 h-10 text-green-600 mb-4" />
                  <CardTitle>Meaningful Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Make a real impact on people's careers and lives. Your work directly contributes to helping professionals achieve their dreams.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Check back regularly for new opportunities.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="text-center py-16">
                <CardContent>
                  <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <CardTitle className="text-2xl mb-4">No Current Openings</CardTitle>
                  <CardDescription className="text-lg mb-8">
                    We don't have any open positions right now, but we're always interested in hearing from talented professionals.
                  </CardDescription>
                  <Button 
                    size="lg"
                    onClick={() => window.location.href = 'mailto:careers@onwardcareers.com?subject=Interest in Future Opportunities'}
                  >
                    Send Us Your Resume
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Have questions about working with us? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.location.href = 'mailto:careers@onwardcareers.com'}
              >
                Contact HR Team
              </Button>
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => window.open('https://www.linkedin.com/company/onward-careers', '_blank')}
              >
                Follow Us on LinkedIn
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
