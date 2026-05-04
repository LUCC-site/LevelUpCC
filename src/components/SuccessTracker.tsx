import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';

const ivies = ['Princeton', 'Columbia', 'UPenn', 'Dartmouth', 'Brown', 'Cornell'];
const engineering = ['Stanford', 'MIT', 'CMU', 'Caltech', 'Berkeley', 'Georgia Tech'];
const other = ['Duke', 'Northwestern', 'Rice', 'Georgetown', 'UCLA', 'USC', 'NYU', 'Johns Hopkins', 'WashU', 'SJSU', 'USF', 'Emory'];

function SchoolGrid({ title, schools, badge }: { title: string; schools: string[]; badge?: string }) {
  const ref = useStaggerReveal('.reveal');

  return (
    <div ref={ref}>
      <div className="flex items-center gap-3 mb-6">
        <h3 className="font-display text-2xl font-bold text-primary">{title}</h3>
        {badge && (
          <span className="font-body text-[10px] font-bold uppercase tracking-label bg-gold text-primary px-3 py-1">
            {badge}
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 border border-primary/10">
        {schools.map((s) => (
          <div key={s} className="reveal px-5 py-5 border-b border-r border-primary/5 hover:bg-surface transition-colors duration-300">
            <span className="font-body text-sm font-medium text-primary">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SuccessTracker() {
  const ref = useScrollReveal();

  return (
    <section id="results" className="py-32 bg-surface" ref={ref}>
      <div className="container mx-auto px-6 reveal" ref={ref}>
        <p className="font-body text-xs font-bold uppercase tracking-label text-gold mb-4">Admissions Results</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-display leading-[1.1] text-primary mb-4">
          Where Our Students<br />Have Been Placed
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-16 max-w-2xl">
          A record of placement across every tier of elite higher education—from the Ivy League to the world's top engineering programs.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          <SchoolGrid title="Ivy League" schools={ivies} />
          <SchoolGrid title="Engineering Powerhouses" schools={engineering} badge="STEM Excellence" />
        </div>

        <div className="mt-16">
          <SchoolGrid title="Additional Placements" schools={other} />
        </div>
      </div>
    </section>
  );
}
