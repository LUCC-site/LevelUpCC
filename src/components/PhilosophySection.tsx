import { BookOpen, Layout, TrendingUp } from 'lucide-react';
// Note: Ensure your vite/tsconfig is set up for '@' alias, 
// otherwise use: import birdLogo from '../../assets/levelup-logo-bird.png';
import birdLogo from '@/assets/levelup-logo-bird.png';

export default function PhilosophySection() {
  const philosophySections = [
    {
      icon: <BookOpen className="text-gold" size={28} />,
      title: "The Art of the Narrative",
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            In the contemporary landscape of elite higher education, exceptional academic marks and standardized test scores have transitioned from "distinguishing factors" to "baseline expectations." At Level Up College Counseling, we believe that what truly separates a standout candidate in a sea of qualified applicants is the resonance of an authentic, well-articulated voice. We don't just "package" students; we help them embark on a journey of self-discovery to identify the core values and strengths that define their character.
          </p>
          <p>
            Our expertise lies in synthesizing these individual threads into a <strong>Cohesive Candidate Profile</strong>—a sophisticated framework that ensures your personal journey is reflected in every facet of the application. By meticulously aligning your supplemental essays, curated activity lists, and associated awards, we help you present a balanced, multidimensional, and compelling portrait of your potential.
          </p>
          <p>
            We possess a deep, nuanced understanding of the "holistic admissions" philosophy. Navigating this path requires more than just checking boxes; it requires a strategic, bird’s-eye view of how your unique experiences translate into the specific contributions a university is looking for. With Level Up, you aren't just applying to college—you are masterfully narrating your story to the world.
          </p>
        </div>
      )
    },
    {
      icon: <Layout className="text-gold" size={28} />,
      title: "The Level Up Tool Kit: Clarity Through Structure",
      content: (
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            At Level Up College Counseling, we believe that meticulous organization is the ultimate antidote to admissions anxiety. By providing a robust structural framework, we empower you to channel your energy into your personal narrative rather than the logistical complexities of the process.
          </p>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 ml-4">
            <div>
              <h4 className="font-bold text-primary mb-2 text-base italic">The Integrated Strategic Planner</h4>
              <p className="text-sm">More than a simple tracking tool, this is a centralized, dynamic Google Sheets ecosystem designed to harmonize your college list, synchronize multi-school deadlines, and categorize your extracurricular achievements with precision.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2 text-base italic">Grade-Specific Blueprints</h4>
              <p className="text-sm">Navigate the admissions timeline with confidence through our mentorship and yearly milestones, tailored to help you find your voice and stay ahead of every deadline.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2 text-base italic">The Personal Ascent Strategy</h4>
              <p className="text-sm">We focus on moving students tier-by-tier toward their full potential. This isn't just about "getting in"; it’s about identifying the field where you will thrive and building the underlying skills—like self-advocacy and rigorous inquiry—that ensure you excel once you are on campus.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2 text-base italic">The Competitive Edge</h4>
              <p className="text-sm">Unlock expert strategies for curating a distinctive profile and mastering the nuances of the interview with professional grace and intent.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <TrendingUp className="text-gold" size={28} />,
      title: "The Level Up Approach: Beyond the Acceptance Letter",
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            At Level Up College Counseling, we believe that success isn't defined solely by the name on your diploma, but by the trajectory of your personal and professional growth. Our philosophy is built on the conviction that the right college is not a finish line—it is a launchpad. It is a strategic environment where you continue to "Level Up" from one tier of achievement to the next, long after the orientation week concludes.
          </p>
          <div className="border-l-4 border-gold/30 pl-6 py-2 my-6 bg-slate-50/50">
            <h4 className="font-bold text-primary mb-2 text-base">Cultivating the "Architecture of Confidence"</h4>
            <p className="text-sm">
              True success in the admissions process requires more than just a polished resume; it requires a student who can bring their thoughts to the table with unwavering self-assurance. Through our rigorous preparation, we move students tier-by-tier toward their full potential. We don’t just tell you what to say; we teach you how to think critically about your own experiences. This internal work ensures that when you sit down for a high-stakes interview or enter a boardroom, you aren't just reciting a script—you are commanding the room with genuine confidence.
            </p>
          </div>
          <p>
            <strong>Mastering the Art of the Narrative:</strong> We believe the skills required to write a compelling college essay are the same skills required to secure a dream internship or a future career. Our mentorship focuses on teaching the "transferable craft" of storytelling.
          </p>
          <p>
            <strong>Thriving as a Tier-One Student:</strong> Our focus remains steadfastly on your ability to thrive. By the time our students submit their final applications, they have already developed the underlying competencies—time management, persuasive writing, and interview poise—that lead to long-term success.
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-[#F8F9FA] border-y border-slate-100">
      <div className="container mx-auto px-6">
        
        {/* --- Intro Section --- */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6 flex items-center justify-center gap-1 flex-wrap">
            <img 
              src={birdLogo} 
              alt="Logo"   
              className="h-[1.6em] w-auto object-contain inline-block align-middle" 
            />
            <span className="whitespace-nowrap">The Philosophy of Success</span>
          </h2>
        </div>

        {/* --- Philosophy Sections --- */}
        <div className="space-y-12">
          {philosophySections.map((section, index) => (
            <div 
              key={index} 
              className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-50 rounded-2xl">
                  {section.icon}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">
                  {section.title}
                </h3>
              </div>
              
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
