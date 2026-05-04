import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Compass, PenTool, Briefcase, Users } from 'lucide-react';
import logo from '@/assets/levelup-logo.png';
import heroImg from '@/assets/hero-library.jpg';

// 1. Import your Placeholder/Default Logo
import stanfordLogo from '@/assets/CollegeLogos/Stanford.png';

const colleges = [
  { name: 'Princeton', file: 'Princeton.avif' },
  { name: 'MIT', file: 'MIT.avif' },
  { name: 'Harvard', file: 'Harvard.avif' },
  { name: 'Stanford', file: 'Stanford.png' },
  { name: 'Yale', file: 'Yale.avif' },
  { name: 'Caltech', file: 'Caltech.avif' },
  { name: 'Duke', file: 'Duke.avif' },
  { name: 'Johns Hopkins', file: 'JHU.avif' },
  { name: 'UPenn', file: 'UPenn.avif' },
  { name: 'Northwestern', file: 'Northwestern.avif' },
  { name: 'Columbia', file: 'Columbia.avif' },
  { name: 'Cornell', file: 'Cornell.avif' },
  { name: 'UChicago', file: 'UChicago.avif' },
  { name: 'UC Berkeley', file: 'Berkeley.avif' },
  { name: 'UCLA', file: 'UCLA.avif' },
  { name: 'Rice', file: 'Rice.avif' },
  { name: 'Dartmouth', file: 'Dartmouth.avif' },
  { name: 'Vanderbilt', file: 'Vanderbilt.avif' },
  { name: 'Notre Dame', file: 'ND.avif' },
  { name: 'Georgetown', file: 'Georgetown.avif' },
  { name: 'Carnegie Mellon', file: 'CMU.avif' },
  { name: 'UMich', file: 'UMich.avif' },
  { name: 'UVA', file: 'UVA.avif' },
  { name: 'Brown', file: 'Brown.avif' },
  { name: 'USC', file: 'USC.avif' },
  { name: 'U of Toronto', file: 'UToronto.avif' },
];

const pillars = [
  { icon: Compass, title: 'Overall Strategy', desc: 'A multi-year roadmap tailored to build the profile top schools demand.' },
  { icon: PenTool, title: 'Narrative & Essays', desc: 'We architect narratives. Unlimited drafts and deep storytelling workshops.' },
  { icon: Briefcase, title: 'Extracurriculars', desc: 'Internships, passion project, research and leadership positioning.' },
  { icon: Users, title: 'Interview Prep', desc: 'Alumni-style mock interviews and the quiet confidence from rigorous prep.' },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    
    let animId: number;
    let pos = 0;
    const speed = 0.8; 

    const animate = () => {
      if (!scrollRef.current) return;
      pos += speed;
      if (pos >= scrollRef.current.scrollWidth / 2) pos = 0;
      scrollRef.current.scrollLeft = pos;
      animId = requestAnimationFrame(animate);
    };
    
    animId = requestAnimationFrame(animate);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="University library"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-primary/70" /> 
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-24 flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className={`flex flex-col items-center mb-0 transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
          <img src={logo} alt="Level Up" className="w-64 md:w-80 lg:w-[450px] mb-2 drop-shadow-2xl" />
        </div>

        {/* Hero Text */}
        <p className={`font-body text-lg md:text-2xl text-background max-w-4xl mb-10 leading-snug transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
          <span className="block opacity-90">Personally curated college counseling for students who demand excellence.</span>
          <span className="block font-bold text-gold mt-2 uppercase tracking-tight">Where ambition meets its match.</span>
        </p>

        {/* Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
          <Button variant="hero" size="lg" asChild><a href="#consultation">Request a Private Consultation</a></Button>
          <Button variant="gold" size="lg" asChild><a href="tel:+15105561343">(510) 556-1343</a></Button>
        </div>

        {/* Pillars */}
        <div className={`w-full grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '800ms' }}>
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center px-4 py-6 border border-background/15 bg-background/10 backdrop-blur-sm hover:border-gold/40 transition-colors duration-300">
              <p.icon size={28} className="text-gold mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-bold text-background mb-2">{p.title}</h3>
              <p className="font-body text-sm text-background/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* --- MARQUEE SECTION --- */}
        <div className={`w-full border-t border-background/20 pt-12 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
          <p className="font-body text-xs font-bold uppercase tracking-label text-gold mb-10">
            Proven placement at top elite institutions
          </p>
          
          <div 
            ref={scrollRef}
            className="overflow-hidden whitespace-nowrap"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
          >
            <div className="inline-flex items-center gap-6 py-4 px-6">
              {[...colleges, ...colleges].map((college, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-white border border-slate-100 px-10 py-8 rounded-xl shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-500 min-w-[280px] h-[140px] group"
                >
                  <img 
                    // Temporarily using stanfordLogo for everything
                    src={stanfordLogo} 
                    alt={`${college.name} Acceptance`}
                    className="max-w-[200px] max-h-[80px] object-contain transition-all duration-500 filter contrast-[1.05] grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
