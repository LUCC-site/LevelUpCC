import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import UnlimitedSection from '@/components/UnlimitedSection'; 
import PhilosophySection from '@/components/PhilosophySection';
import ResultsSection from '@/components/ResultsSection'; // 1. Added this import
import StickySchedule from '@/components/StickySchedule';
import { IntakeForm } from "@/components/IntakeForm";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <UnlimitedSection />
        <PhilosophySection />
        <ResultsSection /> 
        <IntakeForm />
      </main>
      <StickySchedule />
    </>
  );
};
export default Index;
