import { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import StudentPortalGate from '@/components/StudentPortalGate';

// Example Essay Samples (You can move this to a separate file later)
const ESSAY_SAMPLES = [
  { title: "Personal Statement - Engineering", university: "MIT", type: "Main Essay" },
  { title: "Why This College?", university: "Stanford", type: "Supplement" },
];

export default function StudentPortalPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Initialize Netlify Identity
    netlifyIdentity.init();
    
    // Check for existing user
    setUser(netlifyIdentity.currentUser());

    // Listen for login/logout
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
    });
    
    netlifyIdentity.on('logout', () => setUser(null));
  }, []);

  // --- 1. IF NOT LOGGED IN: Show the Gate ---
  if (!user) {
    return <StudentPortalGate />;
  }

  // --- 2. IF LOGGED IN: Show the Private Content ---
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
      <div className="container mx-auto max-w-5xl">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-slate-200 pb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#002147] mb-2">Student Dashboard</h1>
            <p className="text-slate-500 font-medium">
              Welcome back, <span className="text-gold">{user.user_metadata?.full_name || 'Student'}</span>
            </p>
          </div>
          <button 
            onClick={() => netlifyIdentity.logout()}
            className="mt-4 md:mt-0 text-sm font-bold text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors border border-red-100"
          >
            Sign Out
          </button>
        </header>

        <div className="grid gap-8">
          <section>
            <h2 className="text-xl font-bold text-[#002147] mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-gold rounded-full inline-block"></span>
              Essay Sample Library
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {ESSAY_SAMPLES.map((essay, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/5 px-2 py-1 rounded">
                      {essay.type}
                    </span>
                    <span className="text-xs font-medium text-slate-400">{essay.university}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#002147] group-hover:text-blue-600 transition-colors">
                    {essay.title}
                  </h3>
                  <p className="mt-4 text-sm text-[#002147]/70 font-bold">View Sample →</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
