import { useEffect, useRef } from "react";
import { Mic2, UserCheck, Video, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InterviewPrepForm } from "@/components/InterviewPrepForm";
// Import the bird logo
import birdLogo from "@/assets/levelup-logo-bird.png";

export default function InterviewPrep() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => window.scrollTo(0, 0), []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-24 bg-white font-body relative">
      
      {/* 1. BIRD LOGO AT TOP (No additional spacing) */}
      <div className="flex justify-center w-full">
        <img src={birdLogo} alt="Level Up" className="w-16 h-16 object-contain" />
      </div>

      {/* 2. FLOATING CTA BUTTON */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          onClick={scrollToForm}
          className="bg-gold text-primary hover:bg-gold/90 font-bold px-6 py-7 rounded-full shadow-2xl flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 text-sm md:text-base"
        >
          <UserCheck size={20} />
          Schedule an Interview Prep Session
        </Button>
      </div>

      {/* Reduced vertical padding on this section to keep it tight */}
      <section className="pt-6 pb-0 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Master the <span className="text-gold">Human</span> Factor.</h1>
          
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-primary text-xl font-medium italic mb-4">
              "They aren't looking for a script. They're looking for a peer."
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our prep has helped students secure admission to Stanford, UPenn, and Berkeley's MET program by mastering the art of the interview. 
              Don't just answer questions—drive the conversation with poise.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { title: "Mock Sessions", icon: <Video />, desc: "Simulated Ivy League and specialized program interviews with real-time feedback." },
            { title: "Story Banking", icon: <Mic2 />, desc: "Developing a 'bank' of versatile anecdotes to handle any curveball question." },
            { title: "Body Language", icon: <UserCheck />, desc: "Virtual and in-person presence, eye contact, and non-verbal confidence coaching." }
          ].map((item, i) => (
            <div key={i} className="group p-8 border border-primary/10 rounded-[2rem] hover:border-gold transition-all duration-300 bg-surface/30">
              <div className="mb-4 text-primary group-hover:text-gold transition-colors">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* MID-PAGE INFO SECTION */}
        <div className="bg-surface rounded-[3rem] p-12 text-center mb-24 border border-primary/5">
            <h2 className="text-3xl font-bold mb-4 text-primary italic">Refine Your Professional Presence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interviews are about more than just what's on your resume. We help with the practical side of things—from your video call setup to your speaking tone—so you can walk into every meeting feeling prepared and like yourself.
            </p>
        </div>

        {/* 3. FORM SECTION AT BOTTOM (Bottom spacing reduced for footer) */}
        <div ref={formRef} className="max-w-3xl mx-auto pt-0 pb-10">
          <div className="text-center mb-10">
            <div className="inline-block p-3 bg-gold/10 rounded-full text-gold mb-4">
               <Heart size={24} />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">The Hot Seat, Without the Stress</h2>
            <p className="text-muted-foreground">
              Provide your details below and we will reach out to schedule your mock session 
              and begin building your custom story bank.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-primary/5 overflow-hidden">
            <div className="bg-primary py-4 px-8 text-white text-center text-[16px] font-black uppercase tracking-[0.3em]">
              Request Form: Level Up Interview Prep
            </div>
            <InterviewPrepForm />
          </div>
        </div>
      </section>
    </div>
  );
}
