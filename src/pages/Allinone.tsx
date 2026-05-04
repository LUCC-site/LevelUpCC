import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Infinity, 
  PhoneCall, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Target, 
  Edit3, 
  MessageSquare,
  X,
  Trophy,
  CalendarDays
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IntakeForm } from "@/components/IntakeForm";

const features = [
  {
    title: "Unlimited Sessions",
    desc: "No session caps, no hidden timers, and no fees. We work until the application is flawless.",
    icon: <Infinity className="w-8 h-8 text-gold" />,
    stats: "Immersive 1-on-1 Mentorship"
  },
  {
    title: "Unlimited Accessibility",
    desc: "Strategy calls, weekend brainstorming, and late-night check-ins via WhatsApp.",
    icon: <PhoneCall className="w-8 h-8 text-gold" />,
    stats: "24/7 Priority Support"
  },
  {
    title: "Unlimited Applications",
    desc: "Apply to every dream school on your list. From Ivy League to international backups.",
    icon: <Globe className="w-8 h-8 text-gold" />,
    stats: "No Per-School Limits"
  }
];

const roadmap = [
  { phase: "Phase 1", title: "Profile Audit", icon: <Target size={20} />, detail: "Deep dive into GPA, testing, and narrative gaps." },
  { phase: "Phase 2", title: "Branding", icon: <Zap size={20} />, detail: "Developing the 'Unique Hook' that stands out." },
  { phase: "Phase 3", title: "Writing Lab", icon: <Edit3 size={20} />, detail: "Unlimited drafting and storytelling workshops." },
  { phase: "Phase 4", title: "Submission", icon: <ShieldCheck size={20} />, detail: "Interview prep and technical review." },
];

export default function Allinone() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-primary pt-12 font-body relative">
      
      {/* 1. FLOATING NAVIGATION STACK */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* <Button 
          onClick={() => navigate("/testimonials")}
          className="bg-white text-primary border border-primary/10 hover:bg-surface font-bold px-5 py-6 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
        >
          <Trophy size={18} className="text-gold" />
          View Success Stories
        </Button>*/}
        <Button 
          onClick={scrollToForm}
          className="bg-gold text-primary hover:bg-gold/90 font-bold px-6 py-7 rounded-full shadow-2xl flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
          <CalendarDays size={20} />
          Schedule Now
        </Button>
      </div>

      {/* 2. HERO SECTION (Reduced py-24 to py-16) */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          The Signature Experience
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-[1.1]">
          Unlimited Everything. <br />
          <span className="text-gold">Zero Compromise.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Our All-in-One Counseling is a full-spectrum partnership for students 
          who refuse to settle. We don't count minutes; we build legacies.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={scrollToForm} size="lg" className="bg-primary text-white px-10 py-6 text-lg font-bold hover:scale-105 transition-transform">
            Apply for All-in-One
          </Button>
          <Button onClick={() => navigate("/testimonials")} size="lg" variant="outline" className="border-primary px-10 py-6 text-lg font-bold">
            View Success Stories
          </Button>
        </div>
      </section>

      {/* 3. CORE FEATURES (Reduced py-20 to py-12) */}
      <section className="py-12 bg-surface px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-primary/5 flex flex-col items-start hover:shadow-md transition-all">
                <div className="mb-4 p-2 bg-surface rounded-xl">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.desc}</p>
                <div className="mt-auto text-[10px] font-black uppercase tracking-[0.2em] text-gold bg-gold/10 px-3 py-1 rounded-full">
                  {f.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON CHECKLIST (Integrated into Roadmap flow) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The All-in-One Advantage</h2>
          <p className="text-muted-foreground italic text-sm">"Hourly packages are a race against the clock. We are a race toward excellence."</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[2rem] border border-border bg-gray-50/50">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-muted-foreground">The Standard Package</h3>
            <ul className="space-y-3">
              {[
                "Strict 10 or 20-hour session caps",
                "Up-charges for every extra school",
                "Limited to business-hour communication",
                "Focus on 'filling forms' vs. 'building brand'"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="text-destructive mt-0.5 flex-shrink-0" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-[2rem] border-2 border-gold bg-primary text-white shadow-xl relative overflow-hidden">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gold uppercase tracking-widest">Level Up Elite</h3>
            <ul className="space-y-3 relative z-10">
              {[
                "Unlimited work until perfection",
                "Every school and supplement included",
                "Direct WhatsApp access 24/7",
                "Comprehensive brand positioning"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={16} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. ROADMAP (Reduced py-24 to py-12) */}
      <section className="py-12 px-6 max-w-6xl mx-auto border-t border-primary/5">
        <h2 className="text-3xl font-bold mb-10 text-center">The Journey to Acceptance</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {roadmap.map((item, idx) => (
            <div key={idx} className="relative p-5 bg-white border border-primary/5 rounded-2xl">
              <div className="text-gold font-bold text-[10px] uppercase mb-1">{item.phase}</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 bg-primary/5 rounded-lg text-primary">{item.icon}</span>
                <h4 className="font-bold text-base">{item.title}</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
              {idx < 3 && <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-gold/30 z-10" size={16} />}
            </div>
          ))}
        </div>
      </section>

      {/* 6. INTAKE FORM INTEGRATION (New Section) */}
      <section ref={formRef} className="py-16 px-6 bg-surface border-t border-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Book a Free Consultation</h2>
            <p className="text-muted-foreground">Submit your details below to request a strategy session for the All-in-One program.</p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-primary/5">
            <IntakeForm />
          </div>
        </div>
      </section>

      {/* 7. TRUST BANNER (Reduced py-20 to py-12) 
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 italic tracking-tight">"Your dream school is non-negotiable."</h2>
            <p className="opacity-70 text-base">We provide a 6.1x higher T20 acceptance rate than the national average.</p>
          </div>
          <div className="flex flex-col items-center gap-1 bg-white/5 p-6 rounded-3xl backdrop-blur-md border border-white/10 min-w-[180px]">
            <ShieldCheck className="text-gold w-10 h-10" />
            <span className="text-3xl font-bold">100%</span>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">T50 Success Rate</span>
          </div>
        </div>
      </section>*/}
    </div>
  );
}
