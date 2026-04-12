import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Tournament from "./pages/Tournament.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import Leaderboard from "./pages/Leaderboard.tsx";
import Access from "./pages/Access.tsx";
import Waitlist from "./pages/Waitlist.tsx";
import NotFound from "./pages/NotFound.tsx";
import ThemeMusic from "./components/ThemeMusic.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/access" element={<Access />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
