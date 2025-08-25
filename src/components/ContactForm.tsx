
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { toast } from "@/hooks/use-toast";
// import { Send } from "lucide-react";

// interface ContactFormProps {
//   prefilledService?: string;
// }

// const FORM_ENDPOINT =
//   "https://script.google.com/macros/s/AKfycbzIliepw0JkxOgI8mZHuKXSd2AQ7nDo85NvlFYZqIih-J11JDVTjdugMpC55B18aoM/exec";

// export const ContactForm = ({ prefilledService = "" }: ContactFormProps) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: prefilledService,
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Build a URL-encoded form body
//       const urlEncodedData = new URLSearchParams();
//       urlEncodedData.append("name", formData.name);
//       urlEncodedData.append("email", formData.email);
//       urlEncodedData.append("phone", formData.phone);
//       urlEncodedData.append("service", formData.service);
//       urlEncodedData.append("message", formData.message);

//       const response = await fetch(FORM_ENDPOINT, {
//         method: "POST",
//         body: urlEncodedData.toString(),
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded"
//         }
//       });

//       const responseText = await response.text();

//       if (
//         response.ok ||
//         responseText.toLowerCase().includes("success") ||
//         responseText.toLowerCase().includes("submitted")
//       ) {
//         toast({
//           title: "Success!",
//           description:
//             "Your request has been submitted. We'll contact you within 24 hours.",
//         });
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           service: prefilledService,
//           message: ""
//         });
//       } else {
//         toast({
//           title: "Error",
//           description: "Failed to submit your request. Please try again or contact us directly.",
//           variant: "destructive",
//         });
//       }
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to submit your request. Please try again or contact us directly.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <Label htmlFor="name" className="text-white">Name *</Label>
//         <Input
//           id="name"
//           name="name"
//           type="text"
//           required
//           value={formData.name}
//           onChange={handleChange}
//           className="bg-slate-800 border-slate-600 text-white"
//           placeholder="Your full name"
//         />
//       </div>
//       <div>
//         <Label htmlFor="email" className="text-white">Email *</Label>
//         <Input
//           id="email"
//           name="email"
//           type="email"
//           required
//           value={formData.email}
//           onChange={handleChange}
//           className="bg-slate-800 border-slate-600 text-white"
//           placeholder="your.email@example.com"
//         />
//       </div>
//       <div>
//         <Label htmlFor="phone" className="text-white">Mobile Number *</Label>
//         <Input
//           id="phone"
//           name="phone"
//           type="tel"
//           required
//           value={formData.phone}
//           onChange={handleChange}
//           className="bg-slate-800 border-slate-600 text-white"
//           placeholder="+1234567890"
//         />
//       </div>
//       <div>
//         <Label htmlFor="service" className="text-white">Service Interested *</Label>
//         <Input
//           id="service"
//           name="service"
//           type="text"
//           required
//           value={formData.service}
//           onChange={handleChange}
//           className="bg-slate-800 border-slate-600 text-white"
//           placeholder="Which service are you interested in?"
//         />
//       </div>
//       <div>
//         <Label htmlFor="message" className="text-white">Message / Details *</Label>
//         <Textarea
//           id="message"
//           name="message"
//           required
//           value={formData.message}
//           onChange={handleChange}
//           className="bg-slate-800 border-slate-600 text-white"
//           placeholder="Tell us more about your requirements..."
//           rows={4}
//         />
//       </div>
//       <Button 
//         type="submit" 
//         disabled={isSubmitting}
//         className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
//       >
//         {isSubmitting ? (
//           "Submitting..."
//         ) : (
//           <>
//             Submit Request
//             <Send className="w-4 h-4 ml-2" />
//           </>
//         )}
//       </Button>
//     </form>
//   );
// };

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ContactFormProps {
  prefilledService?: string;
}

export const ContactForm = ({ prefilledService = "" }: ContactFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerId: "",
    dateSubmitted: "",
    name: "",
    email: "",
    phone: "",
    service: prefilledService,
    message: "",
    acceptedTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate ID and initialize date
  useEffect(() => {
    const generateCustomerId = () => {
      const numbers = Math.floor(1000 + Math.random() * 9000).toString();
      return `ID${numbers}`;
    };

    const getCurrentDateTime = () => {
      return new Date().toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    };

    setFormData(prev => ({
      ...prev,
      customerId: generateCustomerId(),
      dateSubmitted: getCurrentDateTime()
    }));

    const interval = setInterval(() => {
      setFormData(prev => ({
        ...prev,
        dateSubmitted: getCurrentDateTime()
      }));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Validate terms acceptance
    if (!formData.acceptedTerms) {
      toast({
        title: "Error",
        description: "Please accept the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Construct the WhatsApp message
      const whatsappMessage = `
        *New Contact Request*
        =====================
        *Customer ID:* ${formData.customerId}
        *Submission Date:* ${formData.dateSubmitted}
        
        *Contact Details:*
        - Name: ${formData.name}
        - Email: ${formData.email}
        - Phone: ${formData.phone}
        
        *Service Needed:* ${formData.service}
        
        *Message:*
        ${formData.message}
      `;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage.trim());
      
      // Your WhatsApp number
      const whatsappNumber = "+447553409836";
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Redirecting to WhatsApp",
        description: "You'll be redirected to WhatsApp to complete your submission.",
      });

      // Reset form after submission
      setFormData(prev => ({
        ...prev,
        name: "",
        email: "",
        phone: "",
        message: "",
        service: prefilledService,
        acceptedTerms: false,
        customerId: `ID${Math.floor(1000 + Math.random() * 9000)}`
      }));

    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      acceptedTerms: checked
    });
  };

  const handleTermsClick = () => {
    // Navigate to the terms page
    navigate("/terms");
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-700">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-slate-700">
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          <p className="text-sm text-slate-300 mt-1">We'll get back to you within 24 hours</p>
        </div>

        {/* ID and Date - Side by side on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="customerId" className="text-slate-300 text-sm font-medium mb-2 block">Customer ID</Label>
            <Input
              id="customerId"
              name="customerId"
              readOnly
              value={formData.customerId}
              className="bg-slate-800/50 border-slate-700 text-white text-sm h-12 px-4 rounded-lg"
            />
          </div>
          <div>
            <Label htmlFor="dateSubmitted" className="text-slate-300 text-sm font-medium mb-2 block">Submission Date</Label>
            <Input
              id="dateSubmitted"
              name="dateSubmitted"
              readOnly
              value={formData.dateSubmitted}
              className="bg-slate-800/50 border-slate-700 text-white text-sm h-12 px-4 rounded-lg"
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-slate-300 text-sm font-medium mb-2 block">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-slate-800/50 border-slate-700 text-white text-sm h-12 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-slate-300 text-sm font-medium mb-2 block">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-800/50 border-slate-700 text-white text-sm h-12 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
                inputMode="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-slate-300 text-sm font-medium mb-2 block">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="bg-slate-800/50 border-slate-700 text-white text-sm h-12 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 (123) 456-7890"
                inputMode="tel"
              />
            </div>

            <div>
              <Label htmlFor="service" className="text-slate-300 text-sm font-medium mb-2 block">Service *</Label>
              <Input
                id="service"
                name="service"
                type="text"
                required
                value={formData.service}
                onChange={handleChange}
                className="bg-slate-800/50 border-slate-700 text-white text-sm h-12 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Service you need"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="text-slate-300 text-sm font-medium mb-2 block">Message *</Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-slate-800/50 border-slate-700 text-white text-sm p-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
              placeholder="Tell us about your requirements..."
            />
          </div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-start space-x-2 pt-2">
          <Checkbox
            id="terms"
            checked={formData.acceptedTerms}
            onCheckedChange={(checked) => handleCheckboxChange(checked as boolean)}
            className="mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none text-slate-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept the{" "}
              <button
                type="button"
                onClick={handleTermsClick}
                className="text-green-500 hover:text-green-400 underline transition-colors"
              >
                terms and conditions
              </button>
            </label>
            <p className="text-xs text-slate-400">
              You must accept our terms and conditions to proceed.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting || !formData.acceptedTerms}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] h-12 text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </span>
            )}
          </Button>
        </div>

        {/* Privacy Note */}
        <p className="text-xs text-slate-400 text-center pt-2">
          Your information is secure and will not be shared with third parties.
        </p>
      </form>
    </div>
  );
};