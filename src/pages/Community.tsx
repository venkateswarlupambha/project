
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Users, MessageSquare, Star, Calendar, Award, Heart } from "lucide-react";

const communityFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  profession: z.string().min(1, "Please select your profession"),
  experience: z.string().min(1, "Please select your experience level"),
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
  introduction: z.string().min(50, "Please write at least 50 characters about yourself"),
  goals: z.string().min(30, "Please describe your goals (minimum 30 characters)"),
  newsletter: z.boolean(),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms and conditions"),
});

type CommunityFormValues = z.infer<typeof communityFormSchema>;

const Community = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<CommunityFormValues>({
    resolver: zodResolver(communityFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      profession: "",
      experience: "",
      interests: [],
      introduction: "",
      goals: "",
      newsletter: true,
      terms: false,
    },
  });

  const onSubmit = async (data: CommunityFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Welcome to our community! 🎉",
        description: "Your application has been submitted successfully. We'll review it and get back to you within 48 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const interestOptions = [
    "Career Development",
    "LinkedIn Optimization",
    "Resume Writing",
    "Interview Preparation",
    "Networking",
    "Entrepreneurship",
    "Digital Marketing",
    "Web Development",
    "Design & Creativity",
    "Video Production",
    "Content Creation",
    "Professional Photography"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Join Our Community | Onward Careers"
        description="Connect with like-minded professionals, share experiences, and grow together in our vibrant career community."
        keywords="community, networking, career development, professional growth, mentorship"
      />
      
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Community</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with ambitious professionals, share experiences, and accelerate your career growth in our supportive community.
            </p>
          </div>

          {/* Community Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-white">Expert Discussions</CardTitle>
                <CardDescription className="text-gray-400">
                  Engage in meaningful conversations with industry experts and peers
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <CardTitle className="text-white">Exclusive Resources</CardTitle>
                <CardDescription className="text-gray-400">
                  Access premium templates, guides, and career resources
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <Calendar className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <CardTitle className="text-white">Monthly Events</CardTitle>
                <CardDescription className="text-gray-400">
                  Join webinars, workshops, and networking events
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Community Form */}
          <Card className="max-w-4xl mx-auto bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-400" />
                Community Application
              </CardTitle>
              <CardDescription className="text-gray-400">
                Tell us about yourself and let's build something amazing together!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">First Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John" 
                              className="bg-slate-700 border-slate-600 text-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Last Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Doe" 
                              className="bg-slate-700 border-slate-600 text-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="john@example.com" 
                              className="bg-slate-700 border-slate-600 text-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+1 (555) 123-4567" 
                              className="bg-slate-700 border-slate-600 text-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Professional Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="profession"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Current Profession</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue placeholder="Select your profession" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-slate-700 border-slate-600">
                              <SelectItem value="software-engineer">Software Engineer</SelectItem>
                              <SelectItem value="data-scientist">Data Scientist</SelectItem>
                              <SelectItem value="product-manager">Product Manager</SelectItem>
                              <SelectItem value="designer">Designer</SelectItem>
                              <SelectItem value="marketing">Marketing Professional</SelectItem>
                              <SelectItem value="sales">Sales Professional</SelectItem>
                              <SelectItem value="consultant">Consultant</SelectItem>
                              <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Experience Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue placeholder="Select experience level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-slate-700 border-slate-600">
                              <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                              <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                              <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                              <SelectItem value="executive">Executive (10+ years)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Interests */}
                  <FormField
                    control={form.control}
                    name="interests"
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-white">Areas of Interest</FormLabel>
                        <FormDescription className="text-gray-400">
                          Select the topics you're most interested in (choose at least one)
                        </FormDescription>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {interestOptions.map((interest) => (
                            <FormField
                              key={interest}
                              control={form.control}
                              name="interests"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={interest}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(interest)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, interest])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== interest
                                                )
                                              )
                                        }}
                                        className="border-slate-600"
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm text-gray-300 font-normal">
                                      {interest}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Personal Description */}
                  <FormField
                    control={form.control}
                    name="introduction"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Tell Us About Yourself</FormLabel>
                        <FormDescription className="text-gray-400">
                          Share your background, experiences, and what makes you unique (minimum 50 characters)
                        </FormDescription>
                        <FormControl>
                          <Textarea 
                            placeholder="I'm a passionate professional with experience in..."
                            className="bg-slate-700 border-slate-600 text-white min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Goals */}
                  <FormField
                    control={form.control}
                    name="goals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Your Goals & Aspirations</FormLabel>
                        <FormDescription className="text-gray-400">
                          What do you hope to achieve by joining our community?
                        </FormDescription>
                        <FormControl>
                          <Textarea 
                            placeholder="I'm looking to expand my network, learn new skills, and..."
                            className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Preferences */}
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="newsletter"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-slate-600"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-white">
                              Subscribe to our newsletter
                            </FormLabel>
                            <FormDescription className="text-gray-400">
                              Get weekly updates about community events and exclusive content
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-slate-600"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-white">
                              I agree to the terms and conditions *
                            </FormLabel>
                            <FormDescription className="text-gray-400">
                              By joining, you agree to our community guidelines and privacy policy
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Join Our Community"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5,000+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-400">Industry Experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-400">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;

