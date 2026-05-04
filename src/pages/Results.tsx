import Navbar from '@/components/Navbar';
//import Footer from '@/components/Footer';
import StickySchedule from '@/components/StickySchedule';
//import SuccessTracker from '@/components/SuccessTracker';

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <SuccessTracker />
      </main>
      {/* <Footer />
      <StickySchedule />*/}
    </>
  );
}
