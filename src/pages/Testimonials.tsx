import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickySchedule from "@/components/StickySchedule";
import { IntakeForm } from "@/components/IntakeForm";
import { GraduationCap, ChevronRight, X } from "lucide-react";
// Import the bird logo
import birdLogo from "@/assets/levelup-logo-bird.png";

// ... (testimonials array stays exactly the same)

export default function TestimonialsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      // Change threshold to 0.05 or 0 so it triggers as soon as the top edge clips the screen
      { threshold: 0.05 } 
    );

    const elements = document.querySelectorAll(".reveal-item");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-[110] p-2 bg-white rounded-full shadow-lg hover:bg-slate-100 transition-colors"
            >
              <X size={24} className="text-primary" />
            </button>
            
            <div className="shadow-2xl">
              <IntakeForm />
            </div>
          </div>
        </div>
      )}

      {/* CHANGED: Shrunk mobile padding-top to pt-24 (matching navbar size better on mobile) */}
      <main className="pt-24 md:pt-32 pb-20 bg-[#fdfdfd]">
        <div className="container mx-auto px-6" ref={containerRef}>
          
          {/* CHANGED: Shrunk bottom margin from mb-12 to mb-6 on mobile */}
          <div className="max-w-4xl mx-auto text-center mb-6 md:mb-12 reveal-item transition-all duration-1000 ease-out opacity-0 translate-y-10">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">Success Stories</p>
            {/* CHANGED: Responsive text size for header */}
            <h1 className="font-serif text-4xl md:text-7xl font-bold text-[#002147] leading-tight mb-6 md:mb-8">
              In Their Own <span className="italic font-light text-slate-400">Words</span>
            </h1>
            
            {/* CHANGED: Reduced margin bottom on mobile */}
            <div className="inline-flex flex-col items-center group mb-6 md:mb-12">
              <p className="font-sans text-base md:text-lg text-slate-600 mb-4 font-medium tracking-tight">Ready to write your own success story?</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-[#002147] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#002147] transition-all shadow-xl hover:-translate-y-1"
              >
                Get Started Now <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          {/* CHANGED: Reduced gap between items to space-y-12 on mobile, keeping space-y-32 for desktop */}
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-32 mt-12 md:mt-20">
            {testimonials.map((t, i) => (
              <article key={i} className="reveal-item transition-all duration-1000 delay-150 ease-out opacity-0 translate-y-10 group">
                {/* CHANGED: Shrunk mobile gap between college tag and the actual card body */}
                <div className="grid md:grid-cols-[1.2fr_2fr] gap-4 md:gap-12 items-start">
                  
                  <div className="space-y-2 md:space-y-4 md:sticky md:top-40 border-l-2 border-[#D4AF37] pl-6">
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <GraduationCap size={20} />
                      <span className="text-xs font-bold uppercase tracking-widest font-sans">College Acceptance</span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#002147] leading-[1.1] whitespace-pre-line">{t.college}</h2>
                    <p className="font-sans text-sm font-semibold text-slate-400">{t.initials} — Class of {t.year}</p>
                  </div>

                  <div className="relative">
                    <img 
                      src={birdLogo} 
                      alt="" 
                      className="absolute -left-4 -top-8 w-20 h-20 opacity-50 z-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
                    />
                    
                    {/* CHANGED: Optimized standard padding (p-6) for small screens so the content feels tight and neat */}
                    <div className="bg-white p-6 md:p-14 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-50 relative overflow-hidden">
                      <p 
                        className="font-sans text-base md:text-xl text-slate-700 leading-[1.7] md:leading-[1.9] italic font-light relative z-10 whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24 md:mt-40 bg-[#002147] rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-center text-white reveal-item transition-all duration-1000 opacity-0 translate-y-10 shadow-2xl overflow-hidden relative">
            <img 
              src={birdLogo} 
              alt="" 
              className="absolute -right-20 -bottom-20 w-[400px] h-auto opacity-10 rotate-12 pointer-events-none z-0"
            />
            
            <div className="relative z-10">
              <h3 className="font-serif text-3xl md:text-6xl font-bold mb-6">Ready to write your own success story?</h3>
              <p className="text-blue-100 text-base md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Join our roster of successful scholars. Our expert counselors are ready to help you navigate the journey to your dream university.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#D4AF37] text-[#002147] font-extrabold py-5 px-8 md:py-6 md:px-16 rounded-full hover:bg-white hover:scale-105 transition-all shadow-2xl text-lg md:text-xl tracking-tight"
              >
                Schedule Your Free Consultation
              </button>
            </div>
          </div>

        </div>
      </main>

      <StickySchedule />
    </>
  );
}
