import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickySchedule from '@/components/StickySchedule';
import { Shield, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { icon: Shield, title: 'Limited Cohort', desc: 'We accept a maximum of 15 students per admissions cycle. This ensures every student receives the full depth of our expertise—not a diluted version.' },
  { icon: Users, title: 'One Counselor, One Student', desc: 'Your counselor works exclusively with you. No hand-offs, no junior associates. The person you meet on day one is the person who submits your final application.' },
  { icon: Clock, title: 'We Work on Student Time', desc: 'After-school sessions, weekend deep dives, and yes—11 PM calls before a deadline. Our schedule bends to yours, not the other way around.' },
];

export default function BoutiqueEdge() {
  const ref = useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-32 bg-surface" ref={ref}>
          <div className="container mx-auto px-6 reveal" ref={ref}>
            <p className="font-body text-xs font-bold uppercase tracking-label text-gold mb-4">What Sets Us Apart</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-display leading-[0.95] text-primary mb-8 max-w-4xl">
              The Boutique Edge
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl leading-relaxed mb-20">
              In an industry of factory-line counseling, we chose a different path. Fewer students. Deeper relationships. Extraordinary results.
            </p>

            <div className="grid md:grid-cols-3 gap-0 border border-primary/10">
              {features.map((f, i) => (
                <div key={f.title} className={`p-12 ${i < features.length - 1 ? 'md:border-r border-b md:border-b-0 border-primary/10' : ''}`}>
                  <f.icon size={28} className="text-gold mb-6" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl font-bold text-primary mb-4">{f.title}</h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/#consultation">Apply to Our Cohort</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickySchedule />
    </>
  );
}
