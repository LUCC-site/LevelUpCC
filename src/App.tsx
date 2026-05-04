import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// UI Components (Header/Footer)
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Page Imports
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ResultsPage from "./pages/Results.tsx"; 
import TestimonialsPage from "./pages/Testimonials.tsx";
import StudentPortalPage from "./pages/StudentPortal.tsx";
import ShareYourJourney from "./pages/ShareYourJourney.tsx";

// Services Page Imports
import Allinone from "./pages/Allinone.tsx";
import EssayHelp from "./pages/EssayHelp.tsx";         // <--- NEW IMPORT
import OneTime from "./pages/OneTime.tsx";             // <--- NEW IMPORT
import InterviewPrep from "./pages/InterviewPrep.tsx"; // <--- NEW IMPORT

// Legal Page Imports
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsConditions from "./pages/TermsConditions.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/results" element={<ResultsPage />} />
          
          {/* Services Pages */}
          <Route path="/services/strategy" element={<Allinone />} />
          <Route path="/services/essays" element={<EssayHelp />} />           {/* <--- NEW ROUTE */}
          <Route path="/services/extracurriculars" element={<OneTime />} />  {/* <--- NEW ROUTE */}
          <Route path="/services/interview" element={<InterviewPrep />} />    {/* <--- NEW ROUTE */}
          
          {/* Support & Community Pages */}
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/student-portal" element={<StudentPortalPage />} />
          <Route path="/share-your-journey" element={<ShareYourJourney />} /> 
          
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
