import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
//import { toast } from 'sonner';

const grades = ['9th Grade', '10th Grade', '11th Grade', '12th Grade', 'Gap Year'];

export default function LeadCapture() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', grade: '', dreamSchool: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Consultation request received. We will be in touch within 24 hours.');
    setForm({ name: '', email: '', grade: '', dreamSchool: '', message: '' });
  };

  return (
    <section id="consultation" className="py-32 bg-primary" ref={ref}>
      <div className="container mx-auto px-6 reveal" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="font-body text-xs font-bold uppercase tracking-label text-gold mb-4">Begin the Process</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-display leading-[1.1] text-background mb-6">
              Request a Private Consultation
            </h2>
            <p className="font-body text-lg text-background/60 leading-relaxed mb-8">
              Space is limited. Each admissions cycle, we accept only a select cohort of students to ensure deeply personalized guidance. Share your ambitions—we'll determine if we're the right fit.
            </p>
            <div className="border-t border-background/10 pt-6">
              <p className="font-body text-sm text-background/40">
                All consultations are confidential. Response within 24 hours.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-xs font-bold uppercase tracking-label text-gold mb-2">
                    Student Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-background/20 text-background font-body text-base py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-background/30"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-bold uppercase tracking-label text-gold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-background/20 text-background font-body text-base py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-background/30"
                    placeholder="parent@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-xs font-bold uppercase tracking-label text-gold mb-2">
                    Current Grade
                  </label>
                  <select
                    required
                    value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    className="w-full bg-transparent border-b border-background/20 text-background font-body text-base py-3 focus:outline-none focus:border-gold transition-colors duration-300 appearance-none"
                  >
                    <option value="" className="text-primary">Select grade</option>
                    {grades.map((g) => (
                      <option key={g} value={g} className="text-primary">{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs font-bold uppercase tracking-label text-gold mb-2">
                    Dream School
                  </label>
                  <input
                    type="text"
                    value={form.dreamSchool}
                    onChange={(e) => setForm({ ...form, dreamSchool: e.target.value })}
                    className="w-full bg-transparent border-b border-background/20 text-background font-body text-base py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-background/30"
                    placeholder="e.g., Stanford, Princeton"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-xs font-bold uppercase tracking-label text-gold mb-2">
                  Tell Us About Your Goals
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full bg-transparent border-b border-background/20 text-background font-body text-base py-3 focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-background/30 resize-none"
                  placeholder="Academic interests, career aspirations, or any specific concerns..."
                />
              </div>

              <Button variant="hero" size="lg" type="submit" className="mt-4">
                Secure Your Legacy
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
