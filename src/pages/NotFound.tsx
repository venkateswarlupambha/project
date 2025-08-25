
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEO 
        title="Page Not Found | 404 Error - Onward Careers"
        description="The page you're looking for doesn't exist. Return to Onward Careers homepage for professional resume writing, LinkedIn optimization, and career services."
        keywords="404 error, page not found, Onward Careers"
        ogTitle="Page Not Found - Onward Careers"
        ogDescription="The page you're looking for doesn't exist. Visit our homepage for professional career services."
        canonicalUrl="https://onwardcareers.co.uk/404"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
