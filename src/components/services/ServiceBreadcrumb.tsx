
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

interface ServiceBreadcrumbProps {
  serviceName: string;
}

export const ServiceBreadcrumb = ({ serviceName }: ServiceBreadcrumbProps) => {
  return (
    <div className="mb-8">
      <Breadcrumb>
        <BreadcrumbList className="text-white/70">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-white/50" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white font-medium">
              {serviceName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
