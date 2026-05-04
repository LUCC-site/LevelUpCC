import React from 'react';

const TermsConditions = () => {
  return (
    /* pt-32 ensures the header doesn't cover the title; min-h-screen keeps footer at bottom */
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 lg:px-24 text-slate-800 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="border-b border-slate-200 pb-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#002147]">Terms of Service</h1>
          <p className="text-sm text-slate-500 font-mono tracking-tight uppercase">
            Level Up College Counseling | Last Updated: March 25, 2026
          </p>
        </header>

        <div className="space-y-10 leading-relaxed text-slate-700">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">1. Services Overview & Scope</h2>
            <p className="mb-4">
              Level Up College Counseling (“Company,” “we,” “us,” or “our”) provides admissions consulting, including strategic planning, essay review, and advising. Services are strictly educational. We do not provide legal, medical, or psychological advice.
            </p>
            <p>
              By using this website, you agree that your electronic signature or acknowledgment is the legal equivalent of a manual signature under the California Uniform Electronic Transactions Act (UETA). Accessing this website via automated services, bots, or crawlers is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">2. Data Collection & Privacy Consent</h2>
            <p>By using our intake forms and scheduling tools, you provide express consent to the collection of personal and academic data. While we prioritize confidentiality, you acknowledge that data transmission over the internet is never 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">3. Virtual Sessions & Google Meet</h2>
            <p>All sessions are conducted via Google Meet. Level Up is not liable for technical failures or security breaches occurring on third-party platforms. You are responsible for maintaining a private environment during calls to ensure confidentiality.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">4. Limitation of Liability & Cybersecurity</h2>
            <p>
              Level Up is not liable for losses resulting from "unplanned scams," phishing, or unauthorized interceptions. You are solely responsible for verifying that any billing communication originates from an official <strong>@gmail.com</strong> or verified <strong>levelupcollegecounseling.com</strong> domain.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">5. No Guarantee of Outcomes</h2>
            <p>We make no guarantee, express or implied, regarding admission to any institution. Admissions decisions are subjective and made solely by third parties. Past success stories do not promise similar results.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">6. Mental Health & Well-Being</h2>
            <p>Level Up is not a mental health provider. You hereby release Level Up from any liability regarding emotional distress, anxiety, or burnout arising during the application process. You agree to seek support from licensed professionals where appropriate.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">7. Release of Liability & Asset Protection</h2>
            <p className="mb-4">To the maximum extent permitted by California law, you waive all claims against Level Up and its owners. Liability is limited strictly to the business entity. No claims shall be made against the personal assets, property, or individual bank accounts of any owner or contractor.</p>
            <p className="text-sm italic text-slate-500">
              California residents hereby waive California Civil Code Section 1542 regarding unknown claims.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">8. Academic Honesty & Integrity</h2>
            <p>The student warrants that all work submitted to colleges is their own original work. Level Up is not liable for consequences resulting from a student’s violation of academic integrity or school policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">9. Intellectual Property</h2>
            <p>Proprietary materials, structural templates, and strategic guides provided by Level Up remain our exclusive intellectual property. Distribution, reproduction, or resale is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">10. Payments, Refunds & Termination</h2>
            <p className="mb-4">All payments are final and non-refundable. A 24-hour notice is required to reschedule sessions.</p>
            <p>Level Up reserves the right to terminate services for lack of cooperation or unprofessional conduct. In such cases, pro-rated refunds for unused sessions are issued at the Company's sole discretion.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">11. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Level Up from any third-party claims, damages, or costs (including attorney fees) arising from your misuse of our services or any misrepresentations made in your applications.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">12. Dispute Resolution & Arbitration</h2>
            <p className="mb-4">Any dispute shall be settled by binding arbitration in Alameda County, California, under the rules of the American Arbitration Association.</p>
            <p className="mb-4">
              You agree that any dispute resolution will be conducted only on an individual basis and not in a class, consolidated, or representative action.
            </p>
            <p className="text-sm">Any claim must be filed within one (1) year after such claim arose or be forever barred.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">14. DMCA Notice</h2>
            <p>If you believe material on this site infringes upon your copyright, please send a written notification to levelupaxn@gmail.com including your contact info, work description, and a perjury statement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">16. Force Majeure</h2>
            <p>Level Up shall not be liable for delays due to causes beyond our reasonable control, including acts of God, pandemics, or telecommunications network outages.</p>
          </section>

          <section className="bg-[#002147] p-8 rounded-2xl text-white mt-16 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">Contact Information</h2>
            <p className="mb-4 text-slate-300">To ask questions or comment about these Terms, contact us at:</p>
            <div className="space-y-1">
              <p className="font-bold text-lg">Level Up College Counseling</p>
              <a href="mailto:levelupaxn@gmail.com" className="text-blue-300 hover:text-white transition-colors underline decoration-blue-300 underline-offset-4">
                levelupaxn@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
