import { Compass, PenTool, Briefcase, Users } from 'lucide-react';
import { useStaggerReveal } from '@/hooks/useScrollReveal';
import penImg from '@/assets/fountain-pen.jpg';

const services = [
  { icon: Compass, title: 'Overall Strategy', desc: 'A multi-year roadmap tailored to build the profile top schools demand. Course selection, summer plans, and "spike" development.' },
  { icon: PenTool, title: 'Narrative & Essays', desc: 'We don\'t edit—we architect narratives. Unlimited drafts, deep storytelling workshops, and essays that admissions officers remember.' },
  { icon: Briefcase, title: 'Extracurriculars', desc: 'Internship placement support, passion project incubation, and strategic leadership positioning that goes beyond the résumé.' },
  { icon: Users, title: 'Interview Prep', desc: 'Alumni-style mock interviews, behavioral coaching, and the quiet confidence that comes from rigorous preparation.' },
];

export default function ServicesOverview() {
  const ref = useStaggerReveal('.reveal');

  return (
    <section className="py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <img src={penImg} alt="Fountain pen on notebook" className="w-full object-cover aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-body text-xs font-bold uppercase tracking-label text-gold mb-4 reveal">How We Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-display leading-[1.1] text-primary mb-12 reveal">
              Four Pillars of<br />Admissions Excellence
            </h2>

            <div className="space-y-0">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="flex gap-6 py-8 border-t border-primary/10 last:border-b reveal"
                  style={{ transitionDelay: `${(i + 3) * 80}ms` }}
                >
                  <s.icon size={24} className="text-gold mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary mb-2">{s.title}</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
