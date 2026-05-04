import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Compass, PenTool, Briefcase, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '@/assets/levelup-logo-black.png';
import heroImg from '@/assets/hero-library.jpg';

// --- COLLEGE LOGO IMPORTS ---
import stanfordLogo from '../assets/CollegeLogos/Stanford.png';
import columbiaLogo from '../assets/CollegeLogos/Columbia.jpeg';
import jhuLogo from '../assets/CollegeLogos/JohnsHopkins.jpeg';
import brownLogo from '../assets/CollegeLogos/Brown.png';
import dartmouthLogo from '../assets/CollegeLogos/Dartmouth.png';
import cornellLogo from '../assets/CollegeLogos/Cornell.png';
import dukeLogo from '../assets/CollegeLogos/Duke.png';
import princetonLogo from '../assets/CollegeLogos/Princeton.png';
import yaleLogo from '../assets/CollegeLogos/Yale.png';
import upennLogo from '../assets/CollegeLogos/UPenn.png';
import berkleyLogo from '../assets/CollegeLogos/Berkeley.png';
import nyuLogo from '../assets/CollegeLogos/NYU.png';
import uclaLogo from '../assets/CollegeLogos/UCLA.png';
import cmuLogo from '../assets/CollegeLogos/CMU.png';
import riceLogo from '../assets/CollegeLogos/Rice.png';
import gtLogo from '../assets/CollegeLogos/GT.png';
import uiucLogo from '../assets/CollegeLogos/UIUC.png';
import purdueLogo from '../assets/CollegeLogos/Purdue.jpg';
import umichLogo from '../assets/CollegeLogos/UMich.png';
import uoftorontoLogo from '../assets/CollegeLogos/Utoronto.png';

const colleges = [
  { name: 'Stanford', img: stanfordLogo },
  { name: 'CMU', img: cmuLogo },
  { name: 'Princeton', img: princetonLogo },
  { name: 'Yale', img: yaleLogo },
  { name: 'UPenn', img: upennLogo },
  { name: 'Columbia', img: columbiaLogo },
  { name: 'Brown', img: brownLogo },
  { name: 'Dartmouth', img: dartmouthLogo },
  { name: 'Cornell', img: cornellLogo },
  { name: 'UC Berkeley', img: berkleyLogo },
  { name: 'UCLA', img: uclaLogo },
  { name: 'Duke', img: dukeLogo },
  { name: 'Johns Hopkins', img: jhuLogo },
  { name: 'NYU', img: nyuLogo },
  { name: 'Rice', img: riceLogo },
  { name: 'Georgia Tech', img: gtLogo },
  { name: 'UIUC', img: uiucLogo },
  { name: 'U Michigan', img: umichLogo },
  { name: 'Purdue', img: purdueLogo },
  { name: 'U Of Toronto', img: uoftorontoLogo },
];

const pillars = [
  { icon: Compass, title: 'Overall Strategy', desc: 'A multi-year roadmap tailored to build the profile top schools demand.' },
  { icon: PenTool, title: 'Narrative & Essays', desc: 'We architect narratives. Unlimited drafts and deep storytelling workshops.' },
  { icon: Briefcase, title: 'Extracurriculars', desc: 'Internships, passion projects, research, and leadership positioning.' },
  { icon: Users, title: 'Interview Prep', desc: 'Alumni-style mock interviews and the quiet confidence from rigorous prep.' },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    
    let animId: number;
    const speed = 2.0;

    const animate = () => {
      if (!scrollRef.current || isPaused) {
        animId = requestAnimationFrame(animate);
        return;
      }

      scrollPosRef.current += speed;
      
      if (scrollRef.current && scrollPosRef.current >= scrollRef.current.scrollWidth / 2) {
        scrollPosRef.current = 0;
      }
      
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollPosRef.current;
      }
      animId = requestAnimationFrame(animate);
    };
    
    animId = requestAnimationFrame(animate);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(animId);
    };
  }, [isPaused]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = 204; 
    const moveAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollPosRef.current += moveAmount;
    scrollRef.current.scrollTo({
      left: scrollPosRef.current,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-auto flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-primary/70" /> 
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-8 pb-6 flex flex-col items-center text-center">
        
        {/* LOGO SECTION: Increased spacing for better branding impact */}
      <div className={`flex flex-col items-center mt-16 mb-20 transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <img 
          src={logo} 
          alt="Level Up" 
          className="w-52 md:w-60 lg:w-[252px] drop-shadow-2xl transition-transform" 
        />
      </div>

        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="max-w-5xl mx-auto mb-8 text-center">
            <p className="font-display font-bold text-lg md:text-2xl lg:text-3xl text-background mb-4 leading-tight tracking-tight">
              The journey to college is demanding enough. <br className="hidden md:block" />
              Let us help you put your best foot forward.
            </p>
            <p className="font-bold text-gold text-lg md:text-2xl uppercase tracking-[0.2em] leading-snug">
              Level up your potential.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button variant="hero" size="lg" asChild><a href="#consultation">Request a Private Consultation</a></Button>
          <Button variant="gold" size="lg" asChild><a href="tel:+15105561343">(510) 556-1343</a></Button>
        </div>

        <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-base md:text-lg text-background/80 max-w-4xl mx-auto mb-10 leading-relaxed">
            All students have an <span className="text-white font-bold">authentic voice</span>. However, what most applicants struggle with is representing their genuine passions to universities. 
            We support students by helping them present a balanced and compelling picture of their potential to admissions committees by identifying 
            their core strengths and personal journey. We demystify
            <span className="text-white font-bold"> holistic admissions</span>, helping students navigate the process and present their most authentic selves.
          </p>
        </div>

        {/* PILLARS SECTION */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center px-4 py-6 border border-white/10 bg-white/10 backdrop-blur-sm rounded-lg">
              <p.icon size={28} className="text-gold mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-bold text-background mb-2">{p.title}</h3>
              <p className="font-body text-sm text-background/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* COLLEGE PLACEMENT MARQUEE */}
        <div className="w-full border-t border-white/20 pt-6">
          <p className="font-body text-xs font-bold uppercase tracking-widest text-gold mb-4">Proven placement at top elite institutions</p>
          
          <div className="relative group/marquee w-full max-w-6xl mx-auto">
            <button 
              onClick={() => handleManualScroll('left')}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-gold p-2 rounded-full text-white transition-all opacity-0 group-hover/marquee:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>

            <div 
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="overflow-hidden whitespace-nowrap py-2 cursor-pointer"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
              <div className="inline-flex gap-6 px-10">
                {[...colleges, ...colleges].map((c, i) => (
                  <div
                    key={`${c.name}-${i}`}
                    className="inline-flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 min-w-[180px] h-[140px] p-4 group"
                  >
                    <img 
                      src={c.img} 
                      alt={`${c.name} logo`}
                      className="max-w-[120px] max-h-[70px] object-contain transition-all duration-500"
                      onError={(e) => { (e.currentTarget.style.display = 'none'); }}
                    />
                    <span className="font-body text-[10px] font-semibold text-muted-foreground mt-2 tracking-wide uppercase">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => handleManualScroll('right')}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-gold p-2 rounded-full text-white transition-all opacity-0 group-hover/marquee:opacity-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
