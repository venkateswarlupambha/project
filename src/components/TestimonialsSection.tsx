import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Juliana O. Adegbesan",
    role: "Technical Project Manager | Certified Scrum Master",
    company: "Not Specified",
    country: "Nigeria",
    content: "Onward Careers was very timely, and they did a good job!",
    rating: 5,
    emoji: "👩🏾‍💼"
  },
  {
    name: "Bunmi Adegoke",
    role: "Senior Cloud Architect & SRE | Multi-Cloud Solutions Expert",
    company: "Not Specified",
    country: "Nigeria",
    content: "Onward Careers is very professional and easy to work with. They listen and do your job exactly how you want it. I highly recommend them.",
    rating: 5,
    emoji: "👨🏾‍💻"
  },
  {
    name: "Katelynn Nicole Lee",
    role: "Senior Channel Strategy Manager",
    company: "The Coca-Cola Company",
    country: "United States",
    content: "Working with Onward Careers was very easy and structured. They were very helpful with my resume and took time with my feedback as well. I would highly recommend!",
    rating: 5,
    emoji: "👩🏼‍💼"
  },
  {
    name: "Jeff G.",
    role: "Seasoned Accounting Management Professional",
    company: "Not Specified",
    country: "United States",
    content: "Onward Careers was an absolute pleasure to work with. Not only did they highlight my skills but they also improved the layout for both ATS and hiring professionals. I would highly recommend them.",
    rating: 5,
    emoji: "👨🏼‍💼"
  },
  {
    name: "Trevor Mills, PMP",
    role: "Project Manager | Business Operations",
    company: "Not Specified",
    country: "Canada",
    content: "Onward Careers was a breeze to work with and I'd recommend to anyone for resume and LinkedIn improvements!",
    rating: 5,
    emoji: "👨🏻‍💼"
  },
  {
    name: "Diana Q.",
    role: "Security Advisor & Project Lead | Cybersecurity & IA Expert",
    company: "Federal IT",
    country: "United States",
    content: "Onward Careers is a rockstar! They've been a pleasure to work with and have demonstrated their writing skills and attention to detail. They were patient to ensure I was happy with the final results.",
    rating: 5,
    emoji: "👩🏽‍💻"
  },
  {
    name: "Brooke Baker",
    role: "Educator Transitioning to HR, Training & Development",
    company: "Not Specified",
    country: "United States",
    content: "Onward Careers went above and beyond to help me with my profile and resume. They were very responsive, and easy to collaborate with. I would recommend them for everyone!!",
    rating: 5,
    emoji: "👩🏻‍🏫"
  },
  {
    name: "Maxime Clermont",
    role: "Strategic Finance Leader | Senior Director FP&A",
    company: "Not Specified",
    country: "Canada",
    content: "Super responsive, agile, gets the job done fast.",
    rating: 5,
    emoji: "👨🏼‍💼"
  },
  {
    name: "Charlotte Medema",
    role: "Communication Major, Entrepreneurship Minor",
    company: "UCLA",
    country: "United States",
    content: "Extremely reasonable prices. Quick responses. Listens and makes any changes. Easy to work with. Professional work that I know will benefit me. Thank you Onward Careers, would highly recommend!",
    rating: 5,
    emoji: "👩🏼‍🎓"
  },
  {
    name: "Shellie Grothe",
    role: "Professional",
    company: "Not Specified",
    country: "United States",
    content: "Onward Careers was very professional and made a fantastic impression. Their work was amazing and they were very supportive and helpful. Their prices are reasonable and well worth it. Highly recommended!",
    rating: 5,
    emoji: "👩🏼‍💼"
  },
  {
    name: "Gerardo Guzman",
    role: "Broadcast Operations Technology Supervisor",
    company: "Live Sports & Streaming",
    country: "United States",
    content: "Onward Careers did some excellent work reviewing my resume and profile. I am going to recommend them to my colleagues.",
    rating: 5,
    emoji: "👨🏽‍💼"
  },
  {
    name: "Andy Tiedeman",
    role: "Leading Risk Management Professional",
    company: "Not Specified",
    country: "United States",
    content: "Onward Careers is a rockstar! They work efficiently and communicate quickly to help understand your career goals. They use a blend of skills to make sure your resume stands out. Highly recommended!",
    rating: 5,
    emoji: "👨🏻‍💼"
  },
  {
    name: "Chris R.",
    role: "Social Entrepreneur | Nonprofit Leader",
    company: "Apple (Former)",
    country: "United States",
    content: "I wholeheartedly recommend Onward Careers without reservation. They were professional, good listeners, and completed the work with creativity, tremendous speed and great attention to all details.",
    rating: 5,
    emoji: "👨🏼‍💼"
  },
  {
    name: "Yuan Zhao",
    role: "Ph.D. Researcher",
    company: "New Jersey Institute of Technology",
    country: "China",
    content: "So far so good, provided me some helpful documents also.",
    rating: 5,
    emoji: "👨🏻‍🎓"
  },
  {
    name: "John Martinez",
    role: "Data Analyst & AI Enthusiast",
    company: "Not Specified",
    country: "United States",
    content: "Onward Careers was very timely. They crafted a professional and concise resume, tightened up my LinkedIn profile and crafted a portfolio. Remained professional with timely updates. Excellent experience.",
    rating: 5,
    emoji: "👨🏽‍💻"
  },
  {
    name: "Dalton Owens",
    role: "IT Specialist | Patriot Missile Systems Operator",
    company: "US Military",
    country: "United States",
    content: "Everything was completed efficiently and quickly. The amount of effort and attention to detail shows in all aspects. Fair pricing. I will be recommending Onward Careers to anyone.",
    rating: 5,
    emoji: "👨🏼‍💼"
  },
  {
    name: "John Ode, CISSP, CEH",
    role: "Senior Cybersecurity Professional",
    company: "Not Specified",
    country: "Nigeria",
    content: "Onward Careers is a multi-talented team who inspires others. They have the ability to transfer your skills into a customized resume. My time and money was well spent. Highly recommend.",
    rating: 5,
    emoji: "👨🏾‍💻"
  },
  {
    name: "Evan Raguindin",
    role: "R&D Professional",
    company: "Not Specified",
    country: "Philippines",
    content: "Working with them was a breeze. It was a collaborative chat. Onward Careers created a resume that landed me an interview within less than two days, even though the company hadn't responded to my previous application.",
    rating: 5,
    emoji: "👨🏻‍🔬"
  },
  {
    name: "Daniel Eisenberg MD, FACC",
    role: "Cardiologist",
    company: "Not Specified",
    country: "United States",
    content: "Onward Careers did an outstanding job of showcasing my 42 years of experience in an impressive and impactful way. Their attention to detail, professionalism, and ability to highlight key achievements are remarkable. I highly recommend them.",
    rating: 5,
    emoji: "👨🏼‍⚕️"
  },
  {
    name: "Gokul Krishnan",
    role: "Sales & Operations Specialist | Aspiring Project Manager",
    company: "Not Specified",
    country: "Finland",
    content: "I had the pleasure of working with Onward Careers to update my LinkedIn profile and resume. They did an excellent job highlighting my skills and achievements, making my profile stand out. The formatting was clear and professional, and they used the right keywords. I'm very happy with the results, and I highly recommend their services!",
    rating: 5,
    emoji: "👨🏽‍💼"
  },
  {
    name: "Ikra Malik",
    role: "Accounting and Tax Enthusiast | Power BI Certified",
    company: "Not Specified",
    country: "India",
    content: "Onward Careers took the time to listen carefully and truly understand my needs. They crafted my résumé, LinkedIn profile, and cover letter with precision, ensuring they were professional, clear, and perfectly aligned with my goals. I highly recommend their services.",
    rating: 5,
    emoji: "👩🏽‍💼"
  },
  {
    name: "Marco Vittorio Di Santo",
    role: "Chief Commercial Officer | Luxury Retail & Brand Strategy",
    company: "ex LVMH",
    country: "USA",
    content: "I had a great experience with Onward Careers. They were professional, attentive, and delivered outstanding results. I'm already seeing the positive impact. Highly recommend!",
    rating: 5,
    emoji: "👨🏼‍💼"
  },
  {
    name: "Sua'dh Haleem",
    role: "Teaching Professional | AAT PF | CMA",
    company: "Not Specified",
    country: "Sri Lanka",
    content: "Excellent resume writing, showcasing clear structure, relevant details, and strong alignment with job requirements. Highly professional, impactful, and supported by friendly communication. Definitely, I will refer my friends!",
    rating: 5,
    emoji: "👩🏽‍🏫"
  },
  {
    name: "Gugu Mzumara Ntini",
    role: "Aspiring IT Specialist | Computer Science Student",
    company: "Not Specified",
    country: "Poland",
    content: "I had a fantastic experience with LinkedIn profile optimization. The service was not only friendly and professional but also tailored perfectly to my career goals. The quality of work exceeded my expectations, and the pricing was very reasonable. I trust the service completely and will definitely be recommending it.",
    rating: 5,
    emoji: "👩🏾‍🎓"
  },
  {
    name: "My Happiness Media",
    role: "Photographer",
    company: "My Happiness Media",
    country: "India",
    content: "Onward Careers did an amazing job on my photography website and resume! Their work exceeded my expectations, and I'm thrilled with the results. I highly recommend them to anyone looking for top-quality work. They'll be my first call for any future projects!",
    rating: 5,
    emoji: "👨🏾‍🎨"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-12 lg:py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800 mb-4 px-4 py-2 text-sm font-medium">
            <Star className="w-4 h-4 mr-2" />
            Client Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join professionals from around the world who've transformed their careers with our services
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start ">
                      <div className="text-3xl mr-3">{testimonial.emoji}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {testimonial.role}
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-xs text-gray-500 dark:text-gray-500">
                            {testimonial.company !== "Not Specified" ? testimonial.company : "Professional Services"}
                          </p>
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                            {testimonial.country}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-4 opacity-20" />
                      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-8 space-x-3">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-12 w-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700" />
            <CarouselNext className="relative right-0 top-0 translate-y-0 h-12 w-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};