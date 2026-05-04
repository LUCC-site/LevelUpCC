import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IntakeForm } from "@/components/IntakeForm"; // Ensure this path is correct

export default function StickySchedule() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={`fixed bottom-8 right-8 z-50 bg-[#D4AF37] text-[#002147] font-body text-sm font-bold uppercase tracking-widest flex items-center gap-2 px-6 py-4 shadow-2xl hover:bg-[#002147] hover:text-[#D4AF37] transition-all duration-500 active:scale-95 border border-[#D4AF37]/20 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          }`}
        >
          <Calendar size={18} />
          Schedule Now
        </button>
      </DialogTrigger>
      
      {/* The "In Place" Modal Content */}
      <DialogContent className="sm:max-w-[600px] p-0 border-none bg-transparent shadow-none overflow-y-auto max-h-[90vh]">
        <div className="bg-white rounded-2xl overflow-hidden">
          <IntakeForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
