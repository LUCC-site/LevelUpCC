import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Edit3, Sparkles, BookOpen, Search, CheckCircle, MessageSquare, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EssayHelpForm } from "@/components/EssayHelpForm";
import { EssayHelpRequest } from "@/components/EssayHelpRequestForm";

// Import the bird logo
import birdLogo from "@/assets/levelup-logo-bird.png";

const steps = [
  { title: "Ideation", desc: "Extracting unique life themes and 'hooks'.", icon: <Search size={20} /> },
  { title: "Structure", desc: "Building a narrative arc that keeps AOs engaged.", icon: <BookOpen size={20} /> },
  { title: "Refinement", desc: "Sentence-level polish for impact and tone.", icon: <Edit3 size={20} /> },
  { title: "Final Polish", desc: "Meticulous grammar and character-count optimization.", icon: <Sparkles size={20} /> },
];

export default function EssayHelp() {
  const navigate = useNavigate();
  const formsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForms = () => {
    formsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-24 bg-white font-body relative">
      
      {/* 1. BIRD LOGO AT TOP (Added mb-2 to control the gap precisely) */}
      <div className="flex justify-center w-full mb-2">
        <img src={birdLogo} alt="Level Up" className="w-16 h-16 object-contain" />
      </div>

      {/* FLOATING CTA STACK */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        {/* <Button 
          onClick={() => navigate("/testimonials")}
          className="bg-white text-primary border border-primary/20 hover:bg-surface font-bold px-6 py-7 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
        >
          <Trophy size={18} className="text-gold" />
          Success Stories
        </Button>*/}
        <Button 
          onClick={scrollToForms}
          className="bg-gold text-primary hover:bg-gold/90 font-bold px-6 py-7 rounded-full shadow-2xl flex items-center gap-2 transition-transform hover:scale-105"
        >
          <MessageSquare size={20} />
          Get Essay Audit
        </Button>
      </div>

      {/* 2. MAIN SECTION (Changed py-20 to pt-6 to reduce space above header) */}
      <section className="pt-6 pb-20 px-6 max-w-7xl mx-auto text-center">
        {/* HERO HEADER */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
          Your Story, <span className="text-gold">Mastered.</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Top-tier admissions is no longer about what you did—it's about how you reflect on it. We turn drafts into definitive statements.
        </p>
        
        {/* HERO BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button 
            onClick={scrollToForms}
            className="bg-primary text-white px-8 py-6 rounded-xl font-bold hover:bg-primary/90"
          >
            Start Your Audit
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate("/testimonials")}
            className="border-primary text-primary px-8 py-6 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/5"
          >
            <Trophy size={18} />
            View Success Stories
          </Button>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="p-6 bg-surface rounded-2xl border border-primary/5 text-center">
              <div className="text-gold mb-3 flex justify-center">{s.icon}</div>
              <h3 className="font-bold mb-2 text-primary">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* THE NARRATIVE EDGE */}
        <div className="text-left mb-16 border-t border-primary/5 pt-8 max-w-5xl mx-auto">
          <div className="md:flex items-start justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6 text-primary">The Narrative Edge</h2>
              <p className="text-muted-foreground mb-8">
                Our process ensures your voice remains authentic while meeting the hidden expectations of elite Admissions Officers.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Common App Personal Statement", "UC PIQs & Supplements", "Portfolio Descriptions", "Waitlist/LOCI Letters"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-primary">
                    <CheckCircle size={18} className="text-gold" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block text-[10rem] font-black text-primary/5 leading-none select-none">
              "
            </div>
          </div>
        </div>

        {/* DUAL FORM SECTION - Reduced pb-20 to pb-4 to tighten gap with footer */}
        <div ref={formsSectionRef} className="text-left pt-10 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Form 1: Engage for Review */}
            <div className="bg-gold text-primary rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="p-8 pt-10 pb-4 text-center">
                <h3 className="text-3xl font-bold mb-2 tracking-tight">Engage for Review</h3>
                <p className="text-primary/80 text-sm font-medium">Send us a detailed note about your essay needs.</p>
              </div>

              <div className="p-6 md:p-8 bg-white/10 mx-6 mb-6 rounded-2xl border border-primary/10 relative z-10 flex-grow h-full">
                <EssayHelpRequest />
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl z-0"></div>
            </div>

            {/* Form 2: Direct Audit */}
            <div className="bg-primary text-white rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col">
              <div className="p-8 pt-10 pb-4 text-center">
                <h3 className="text-3xl font-bold mb-2 tracking-tight">Ready for an Audit?</h3>
                <p className="text-gold/80 text-sm font-medium">Submit your details and draft progress for expert structural feedback.</p>
              </div>

              <div className="p-6 md:p-8 bg-white/5 mx-6 mb-6 rounded-2xl border border-white/10 text-primary relative z-10 flex-grow h-full">
                <EssayHelpForm />
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/15 rounded-full blur-2xl z-0"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
