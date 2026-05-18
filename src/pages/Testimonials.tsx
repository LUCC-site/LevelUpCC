import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickySchedule from "@/components/StickySchedule";
import { IntakeForm } from "@/components/IntakeForm";
import { GraduationCap, ChevronRight, X } from "lucide-react";
// Import the bird logo
import birdLogo from "@/assets/levelup-logo-bird.png";

const testimonials = [
  {
    quote: "Working with Level Up College Counseling was one of the best decisions I made when applying to college. From the start, <strong>my counselor took the time to really understand</strong> who I was beyond just what I had done. Our conversations helped me reflect on my experiences and that clarity ended up shaping every part of my application.\n\nI applied to <strong>21 colleges</strong>, which in hindsight was a lot, each with its own essays, requirements, and deadlines. There were times I reached out <strong>late at night, and she still responded with detailed, thoughtful feedback</strong>. Her support made a genuinely overwhelming process methodical and manageable.\n\nThe biggest transformation was in my essays. I knew what I wanted to say but she encouraged me to think and find angles that were specific and personal without feeling manufactured. I went through multiple drafts for nearly every essay. By the end, each one felt distinct and intentional and I felt like my applications actually reflected who I am. What I appreciated the most was how thoroughly she reviewed the full picture. With limited space count, <strong>every word had a purpose</strong> and she ensured I used the available space as effectively as possible.\n\nI'm confident the quality of that application reflected her guidance. <strong>I'd recommend Level Up without hesitation</strong> to anyone going through the <strong>college application</strong> process.",
    initials: "R.R.",
    year: "2026",
    college: `UC Berkeley,
      M.E.T`,
  },
  {
    quote: "Working with Level Up College Counseling for our daughter’s <strong>college applications</strong> last year was one of the <strong>best decisions</strong> we made. From the very beginning, they took the time to truly get to know our daughter through several <strong>thoughtful sessions</strong>, helping her reflect on her journey through high school. Those conversations were incredibly valuable. They helped our daughter look back on everything she had done over the years, organize her activities and achievements, and, most importantly, include experiences that genuinely mattered to her. This <strong>made a huge difference when it came time to write her essays</strong>.\n\nLevel Up was amazingly generous with their time and guidance throughout the entire process. They worked closely with our daughter on her <strong>Common App and supplemental essays</strong> for more than 15 colleges, and gave detailed, thoughtful feedback on multiple versions of her <strong>UC PIQs</strong>. What stood out most to us was how deeply they cared—they stayed invested in every <strong>essay until it truly reflected our daughter’s voice</strong> and met the high standards she knew our daughter was capable of.\n\nThanks in large part to their support, our daughter was accepted into engineering at 8 of the 9 UCs, Duke University, the biomedical engineering program at Johns Hopkins University, and several other wonderful colleges. She will be attending the University of California, Berkeley MET program this fall, and as parents, we truly could not be happier.\n\nWe genuinely feel that this <strong>wonderful outcome</strong> would not have been possible without the wisdom, patience, and heartfelt encouragement from Level Up College Counseling. We recommend them wholeheartedly to any family going through the <strong>college admissions journey</strong>. Thank you so much, Level Up, for helping our daughter achieve her dream!",
    initials: "A.R.",
    year: "2026",
    college: `Duke,
      Johns Hopkins`,
  },
  {
    quote: "Level Up is more than just a counsellor, they are everything you need to <strong>succeed in the college admission</strong> process!\n\nThey gave me the reality checks I needed when I was being a little over ambitious, while also pushing me to become the best version of myself. As an <strong>international student</strong>, my endless calls from 6am to 10pm were always met with patience, which put me completely at ease because I knew they always had my back.\n\nThey are one of the <strong>most supportive, kind-hearted</strong>, yet pragmatic individuals I have had the privilege of knowing. From <strong>building college lists</strong> to final commits, they were there every step of the way, helping me achieve my dreams. I couldn’t have made it to Berkeley without the help, and I’m so, so grateful.",
    initials: "I.T.",
    year: "2026",
    college: "UC Berkeley",
  },
  {
    quote: "After enrolling with <strong>Level Up College Counseling</strong> for our daughter, we found ourselves in very capable hands and didn’t have to manage much on our own. They thoroughly explored all <strong>suitable universities</strong> and created a clear, <strong>well-structured roadmap</strong> to build a strong and competitive profile.\n\nLevel Up met with my daughter regularly, closely tracking her progress and providing thoughtful, constructive feedback at every stage. What stood out was her <strong>personalized approach</strong>. Every suggestion was <strong>tailored to her strengths</strong>, interests, and long-term goals. This made the entire process feel focused and meaningful rather than overwhelming.\n\nLevel Up College Counseling was <strong>incredibly supportive</strong> and encouraging throughout the journey. They not only guided my daughter in the right direction but also <strong>motivated her to push her boundaries and strive for excellence</strong>. The constant mentorship helped Ishanvi gain clarity, confidence, and a strong sense of purpose.\n\nOverall, the experience was extremely smooth, well-organized, and reassuring for us as parents. We truly felt that our kid was being guided by someone who genuinely cared about her growth and success.",
    initials: "B.M.",
    year: "2026",
    college: "UCSD Honors",
  },
  {
    quote: "Level Up College Counseling has helped me strongly develop my <strong>college essays</strong>. I wrote one of my essays on dance, and Level Up helped me make connections with my major and other extra curriculars to answer the prompts with lengthy responses and a bit of <strong>my own style of writing</strong>, bringing out who I really am. This got me into my <strong>dream college</strong>, University of San Francisco.",
    initials: "A.A. ",
    year: "2026",
    college: "SJSU",
  },
  {
    quote: "I highly recommend Level Up as an <strong>exceptional college counselor</strong>. She is incredibly focused, organized, and deeply dedicated to guiding high school students through the often complex college admissions process.\n\nWhat truly sets them apart is the ability to work closely and effectively with students, empowering them to take ownership of their journey while <strong>providing clear direction</strong> and <strong>thoughtful guidance</strong> at every step. They supported my children with <strong>remarkable care and professionalism</strong>, ensuring they stayed on track without requiring my direct involvement.\n\nHer structured approach, attention to detail, and genuine commitment to each student’s success make her an invaluable resource. I am truly grateful for the confidence and independence she instilled in my kids, and I wholeheartedly recommend her to any family seeking a knowledgeable and dependable college counselor.",
    initials: "A.M. ",
    year: "2026",
    college: "University of San Francisco",
  },
];

export default function TestimonialsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-item");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-[110] p-2 bg-white rounded-full shadow-lg hover:bg-slate-100 transition-colors"
            >
              <X size={24} className="text-primary" />
            </button>
            
            <div className="shadow-2xl">
              <IntakeForm />
            </div>
          </div>
        </div>
      )}

      <main className="pt-32 pb-20 bg-[#fdfdfd]">
        <div className="container mx-auto px-6" ref={containerRef}>
          
          <div className="max-w-4xl mx-auto text-center mb-12 reveal-item transition-all duration-1000 ease-out opacity-0 translate-y-10">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">Success Stories</p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#002147] leading-tight mb-8">
              In Their Own <span className="italic font-light text-slate-400">Words</span>
            </h1>
            
            <div className="inline-flex flex-col items-center group mb-12">
              <p className="font-sans text-lg text-slate-600 mb-4 font-medium tracking-tight">Ready to write your own success story?</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-[#002147] text-white px-10 py-5 rounded-full font-bold hover:bg-[#D4AF37] hover:text-[#002147] transition-all shadow-xl hover:-translate-y-1"
              >
                Get Started Now <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-32 mt-20">
            {testimonials.map((t, i) => (
              <article key={i} className="reveal-item transition-all duration-1000 delay-150 ease-out opacity-0 translate-y-10 group">
                <div className="grid md:grid-cols-[1.2fr_2fr] gap-12 items-start">
                  
                  <div className="space-y-4 md:sticky md:top-40 border-l-2 border-[#D4AF37] pl-6">
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <GraduationCap size={20} />
                      <span className="text-xs font-bold uppercase tracking-widest font-sans">College Acceptance</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#002147] leading-[1.1] whitespace-pre-line">{t.college}</h2>
                    <p className="font-sans text-sm font-semibold text-slate-400">{t.initials} — Class of {t.year}</p>
                  </div>

                  <div className="relative">
                    <img 
                      src={birdLogo} 
                      alt="" 
                      className="absolute -left-4 -top-8 w-20 h-20 opacity-50 z-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
                    />
                    
                    <div className="bg-white p-8 md:p-14 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-50 relative overflow-hidden">
                      {/* FIX APPLIED HERE: Using dangerouslySetInnerHTML to render the <strong> tags */}
                      <p 
                        className="font-sans text-lg md:text-xl text-slate-700 leading-[1.9] italic font-light relative z-10 whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-40 bg-[#002147] rounded-[3rem] p-12 md:p-24 text-center text-white reveal-item transition-all duration-1000 opacity-0 translate-y-10 shadow-2xl overflow-hidden relative">
            <img 
              src={birdLogo} 
              alt="" 
              className="absolute -right-20 -bottom-20 w-[400px] h-auto opacity-10 rotate-12 pointer-events-none z-0"
            />
            
            <div className="relative z-10">
              <h3 className="font-serif text-4xl md:text-6xl font-bold mb-6">Ready to write your own success story?</h3>
              <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Join our roster of successful scholars. Our expert counselors are ready to help you navigate the journey to your dream university.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#D4AF37] text-[#002147] font-extrabold py-6 px-16 rounded-full hover:bg-white hover:scale-105 transition-all shadow-2xl text-xl tracking-tight"
              >
                Schedule Your Free Consultation
              </button>
            </div>
          </div>

        </div>
      </main>

      <StickySchedule />
    </>
  );
}
