import React from 'react';

const PrivacyPolicy = () => {
  return (
    /* pt-32 ensures the header doesn't cover the title; min-h-screen keeps footer at bottom */
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 lg:px-24 text-slate-800">
      <div className="max-w-4xl mx-auto">
        <header className="border-b border-slate-200 pb-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#002147]">Privacy Policy</h1>
          <p className="text-sm text-slate-500 font-mono tracking-tight">
            Level Up College Counseling | Last Updated: March 25, 2026
          </p>
        </header>

        <div className="space-y-10 leading-relaxed text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
            <p>
              Level Up College Counseling (“Company,” “we,” “us,” or “our”) respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p className="mb-4">We collect several types of information from and about users of our website, including:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and mailing address.</li>
              <li><strong>Academic Data:</strong> High school name, GPA, standardized test scores, extracurricular activities, and college preferences.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and usage details collected through cookies and tracking technologies to improve website performance.</li>
              <li><strong>Usage Data:</strong> We automatically process data about your use of our website including geographical location, operating system, referral source, length of visit, and page views via our analytics tracking system (e.g., Google Analytics or Netlify Analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Collect Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Directly from you:</strong> When you fill out our "Intake Form," "Testimonial Form," or contact us via email.</li>
              <li><strong>During Consultations:</strong> Information shared during video calls via Google Meet or shared via document uploads (e.g., essay drafts).</li>
              <li><strong>Automatically:</strong> Through Google Analytics or Netlify analytics as you navigate the site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. How We Use Your Information</h2>
            <p>We use the information we collect to provide personalized counseling, conduct sessions via Google Meet, send administrative emails regarding your account or billing, and improve our website UI/UX.</p>
            <div className="mt-4 bg-slate-50 p-5 rounded-lg border border-slate-100">
              <p className="text-sm font-semibold text-slate-900 underline mb-2">Notice Regarding Emails:</p>
              <p className="text-sm">You may opt-out of promotional emails at any time. However, you cannot opt-out of <strong>'Administrative Emails'</strong> regarding billing, session links, or inquiries regarding your counseling package.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Disclosure of Your Information</h2>
            <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We disclose personal information only to comply with legal processes, enforce our Terms of Service, or to contractors who support our business and are bound by confidentiality.</p>
            <p><strong>Financial Information:</strong> Credit card and banking info is processed by third-party processors (e.g., PayPal, Stripe, or Zelle). Level Up does not have access to, nor do we store, your full credit card or bank account numbers.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data. However, as noted in our Terms of Service, no method of transmission over the internet or electronic storage is 100% secure. Use of our digital platform is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. California Privacy Rights (CCPA/CPRA)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access & Deletion:</strong> California residents have the right to request disclosure or deletion of personal info. Contact <strong>levelupaxn@gmail.com</strong>.</li>
              <li><strong>Shine the Light:</strong> Under Civil Code Section 1798.83, you may request information regarding our disclosure of PII to third parties for direct marketing.</li>
              <li><strong>Non-Discrimination:</strong> Exercising your rights will not result in any change in quality or price of services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Children Under the Age of 13</h2>
            <p>Our website is not intended for children under 13. If we learn we have collected info from a child under 13 without verification of parental consent, we will delete that information immediately.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Third-Party Services & AI</h2>
            <p>Our website uses Google Meet, Netlify, and Gmail. We are not responsible for the privacy practices of these third parties. We may utilize proprietary or third-party <strong>Artificial Intelligence (AI) tools</strong> to assist in the analysis of academic data or to enhance advisory services, handled in accordance with our data security standards.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. International Data Transfers</h2>
            <p>If you are accessing our Services from Asia, the European Union, Switzerland, or other regions with specific data laws, please note that you are transferring your personal information to the United States. By providing your information, you consent to this transfer and processing.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">11. How to Unsubscribe</h2>
            <p>To unsubscribe from educational or business updates, use the one-step link in our emails or contact <strong>levelupaxn@gmail.com</strong> with the subject line "Unsubscribe" to be manually removed.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">12. Data Retention</h2>
            <p>We maintain records of financial transactions for a minimum of seven (7) years for tax compliance. Client files containing academic data are kept for a period of <strong>7 years</strong> following the conclusion of services unless a request for deletion is made.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">13. Cookies and Tracking</h2>
            <p>We use cookies for authentication, security, and analysis. You can manage or block cookies through your browser settings (Chrome, Safari, Firefox). We do not currently respond to "Do Not Track" (DNT) browser signals.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">14. Changes to Our Privacy Policy</h2>
            <p>We reserve the right to modify this policy at any time. Changes will be notified via the "Last Updated" date at the top of this page. Continued use constitutes acceptance of the new policy.</p>
          </section>

          <section className="bg-[#002147] p-8 rounded-2xl text-white mt-16 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
            <p className="mb-6 text-slate-300">To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
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

export default PrivacyPolicy;
