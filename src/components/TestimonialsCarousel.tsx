import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    goal: 'Admitted to a top-5 engineering program with limited extracurriculars',
    result: 'Accepted to CMU School of Computer Science',
    loved: 'The 11 PM strategy calls were a lifesaver. My counselor knew my application better than I did.',
    initials: 'A.K.',
    year: '2025',
  },
  {
    goal: 'Craft a compelling narrative as a first-generation applicant',
    result: 'Accepted to Princeton, Class of 2029',
    loved: 'They didn\'t just edit my essays—they helped me find my story. I cried reading the final draft.',
    initials: 'M.R.',
    year: '2025',
  },
  {
    goal: 'Balance pre-med ambitions with artistic passion for film',
    result: 'Accepted to Columbia, Brown, and Cornell',
    loved: 'Three acceptances. Three. My parents still can\'t believe it. The mock interviews made all the difference.',
    initials: 'S.P.',
    year: '2024',
  },
  {
    goal: 'Transition from a public school in a small town to an elite university',
    result: 'Accepted to Stanford with a full scholarship',
    loved: 'Weekend sessions, holiday check-ins—they were always available. It never felt transactional.',
    initials: 'J.L.',
    year: '2024',
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const ref = useScrollReveal();

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-32" ref={ref}>
      <div className="container mx-auto px-6 reveal" ref={ref}>
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-label text-gold mb-4">Student Voices</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-display leading-[1.1] text-primary">
              In Their Own Words
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={prev} className="w-12 h-12 border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 active:scale-95">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="w-12 h-12 border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 active:scale-95">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-primary/10">
          {/* Main testimonial */}
          <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-primary/10 flex flex-col justify-between">
            <div>
              <Quote size={32} className="text-gold mb-6" strokeWidth={1} />
              <p className="font-display text-2xl md:text-3xl font-bold text-primary leading-snug mb-8">
                {testimonials[current].loved}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <span className="font-body text-sm font-bold text-gold">{testimonials[current].initials}</span>
              </div>
              <div>
                <p className="font-body text-sm font-bold text-primary">Student {testimonials[current].initials}</p>
                <p className="font-body text-xs text-muted-foreground">Class of {testimonials[current].year}</p>
              </div>
            </div>
          </div>

          {/* Goal & Result */}
          <div className="flex flex-col">
            <div className="p-10 md:p-16 border-b border-primary/10 flex-1">
              <p className="font-body text-xs font-bold uppercase tracking-label text-gold mb-3">The Goal</p>
              <p className="font-body text-lg text-primary leading-relaxed">{testimonials[current].goal}</p>
            </div>
            <div className="p-10 md:p-16 flex-1 bg-primary">
              <p className="font-body text-xs font-bold uppercase tracking-label text-gold mb-3">The Result</p>
              <p className="font-display text-2xl md:text-3xl font-bold text-background leading-snug">{testimonials[current].result}</p>
            </div>
          </div>
        </div>

        {/* Dots + Mobile nav */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 transition-all duration-300 ${i === current ? 'bg-gold w-8' : 'bg-primary/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
