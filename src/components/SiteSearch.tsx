
import { EnhancedSiteSearch } from "@/components/EnhancedSiteSearch";

interface SiteSearchProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const SiteSearch = ({ open, setOpen }: SiteSearchProps) => {
  return <EnhancedSiteSearch open={open} setOpen={setOpen} />;
};
