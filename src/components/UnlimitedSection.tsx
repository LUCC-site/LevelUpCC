import { Clock, Calendar, FileText, ArrowRight, PencilLine } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useScrollReveal';

const pillars = [
  { 
    icon: Clock, 
    title: 'Unlimited Sessions', 
    desc: 'No session caps. We work until every detail is refined and you are completely confident.' 
  },
  { 
    icon: Calendar, 
    title: 'Unlimited Accessibility', 
    desc: 'Strategy calls, weekly sessions, and late-night check-ins—available whenever required.' 
  },
  { 
    icon: FileText, 
    title: 'Unlimited Applications', 
    desc: 'Apply to every dream school. We support every single application, no extra fees.' 
  },
];

export default function UnlimitedSection() {
  const containerRef = useStaggerReveal('.reveal');

  return (
    <section className="py-12 bg-surface"> {/* Reduced from py-20/24 */}
      <div className="container mx-auto px-6" ref={containerRef}>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">
          
          {/* Left: The Unlimited Promise & Integrated Pillars */}
          <div className="flex-[1.3] reveal flex flex-col justify-center">
            <p className="font-body text-xs font-bold uppercase tracking-label text-gold mb-2">
              The Level Up Promise
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-display leading-[1.1] text-primary mb-6">
              Unlimited Everything.
              <br />
              <span className="text-gold">Zero Compromise.</span>
            </h2>
            
            {/* Tighter Integrated Pillars List */}
            <div className="space-y-4">
              {pillars.map((p, i) => (
                <div key={p.title} className="flex gap-4 group items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-white w-10 h-10 rounded-lg shadow-sm flex items-center justify-center border border-gold/10 group-hover:border-gold transition-colors">
                      <p.icon size={20} className="text-gold" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary italic leading-tight">
                      {p.title}
                    </h3>
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-snug max-w-lg">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Specialized Highlight (Charcoal Gray) */}
          <div className="flex-1 w-full reveal bg-[#2a2a2a] p-8 md:p-10 rounded-3xl shadow-2xl border border-white/5 relative overflow-hidden group flex flex-col justify-center">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <PencilLine size={20} className="text-gold" />
                <span className="text-gold font-bold uppercase tracking-widest text-[10px]">Targeted Support</span>
              </div>
              
              <h3 className="text-white font-display text-2xl font-bold mb-4 leading-tight">
                Looking for Essay Editing or Interview Prep?
              </h3>
              <p className="text-gray-300 font-body mb-8 text-base leading-relaxed">
                Not every student needs help with the full journey. We offer high-impact, standalone services for <span className="text-white font-semibold">college essays, strategy sessions, and mock interviews.</span>
              </p>
              
              <a 
                href="#consultation" 
                className="inline-flex w-full justify-center items-center gap-3 bg-gold text-black px-6 py-4 rounded-full font-display font-bold uppercase tracking-widest text-xs transition-all hover:bg-white hover:scale-[1.02] shadow-xl shadow-gold/20"
              >
                Get Specialized Help
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
