import { useEffect, useRef } from "react";
import { Calendar, Compass, ShieldAlert, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OneTimeForm } from "@/components/OneTimeForm";
// Import the bird logo
import birdLogo from "@/assets/levelup-logo-bird.png";

export default function OneTime() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => window.scrollTo(0, 0), []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-24 bg-white font-body relative">
      
      {/* 1. BIRD LOGO AT TOP (Centered header treatment) */}
      <div className="flex justify-center w-full">
        <img src={birdLogo} alt="Level Up" className="w-16 h-16 object-contain" />
      </div>

      {/* 2. FLOATING CTA BUTTON (Matched to Interview Prep style) */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          onClick={scrollToForm}
          className="bg-gold text-primary hover:bg-gold/90 font-bold px-6 py-7 rounded-full shadow-2xl flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 text-sm md:text-base"
        >
          <MessageCircle size={20} />
          Schedule a Session
        </Button>
      </div>

      {/* HEADER SECTION - Matched to Interview Prep hierarchy */}
      <section className="pt-6 pb-0 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            The Tactical <span className="text-gold">Blueprint</span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-10">
            {/* Signature Quote Treatment */}
            <p className="text-primary text-xl font-medium italic mb-4">
              "Gaps in a strategy are just missed opportunities."
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Perfect for students who have a plan but want an expert "Second Opinion" to identify gaps, 
              optimize college lists, or fix extracurricular positioning before it's too late. 
              Don't leave your narrative to chance.
            </p>
          </div>
        </div>

        {/* MAIN INFO CARD - Refined to match page aesthetic */}
        <div className="bg-surface rounded-[3rem] p-12 border border-primary/5 mb-20 shadow-sm">
          <div className="flex items-center justify-center gap-3 text-gold font-bold uppercase tracking-[0.3em] text-xs mb-8">
            <Calendar size={32} /> 90-Minute Strategy Intensive Session
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-bold text-xl flex items-center gap-2 text-primary">
                <Compass className="text-gold" /> Critical Focus Areas:
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                {["College List Balanced Audit", "Extracurricular Positioning ", "Crafting Your Unique Profile", "Major Selection Alignment", "Timeline & Deadline Mapping"].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm font-medium text-primary/80 border-l-2 border-gold/30 pl-4 py-1">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] flex flex-col justify-center border border-primary/5 shadow-inner">
              <div className="flex items-center gap-2 text-primary font-bold mb-3">
                <ShieldAlert size={20} className="text-gold" /> No Commitment
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is a standalone intensive session designed to provide immediate value with no pressure to sign up for long-term packages.
              </p>
            </div>
          </div>
        </div>

        {/* 3. FORM SECTION ABOVE FOOTER */}
        <div ref={formRef} className="max-w-3xl mx-auto pt-4 pb-12">
          <div className="text-center mb-10">
            <div className="inline-block p-3 bg-gold/10 rounded-full text-gold mb-4">
               <Heart size={24} />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Ready to Level Up?</h2>
            <p className="text-muted-foreground">
              Fill out the form below to secure your 90-minute intensive session. 
              We'll reach out within 24 hours to schedule your call.
            </p>
          </div>
          
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-primary/5 overflow-hidden">
            <div className="bg-primary py-4 px-8 text-white text-center text-[16px] font-black uppercase tracking-[0.3em]">
              Request Form: One-Time 90-minute Session
            </div>
            <OneTimeForm />
          </div>
        </div>
      </section>
    </div>
  );
}
