
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { AppRoutes } from "@/routes/AppRoutes";
import { Chatbot } from "@/components/Chatbot";

export function AppContent() {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppRoutes />
      <Chatbot />
    </TooltipProvider>
  );
}
