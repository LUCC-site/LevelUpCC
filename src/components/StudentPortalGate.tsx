import { Lock } from 'lucide-react'; // Added Lock import
import { Button } from '@/components/ui/button';
import netlifyIdentity from 'netlify-identity-widget';
// Import the bird logo
import birdLogo from '@/assets/levelup-logo-bird.png'; 

export default function StudentPortalGate() {
  const handleLogin = () => {
    // This opens the Netlify Login/Signup modal
    netlifyIdentity.open();
  };

  return (
    <section className="py-32 bg-surface min-h-[60vh] flex items-center">
      <div className="container mx-auto px-6 max-w-lg text-center">
        
        {/* --- Logo Section --- */}
        <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
          <img 
            src={birdLogo} 
            alt="Level Up Logo" 
            className="w-full h-full object-contain drop-shadow-md" 
          />
        </div>
        
        <p className="font-body text-xs font-bold uppercase tracking-widest text-gold mb-4">
          Enrolled Students Only
        </p>
        
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary mb-6">
          Student Portal
        </h2>
        
        <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed">
          Access your portal for successful sample essays, application tools & resources.
          Please sign in with your student credentials.
        </p>

        <div className="space-y-4">
          {/* Updated Button with Lock Icon and LOG IN text */}
          <Button 
            variant="default" 
            size="lg" 
            onClick={handleLogin} 
            className="w-full py-6 text-lg font-bold shadow-md hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
          >
            <Lock size={20} />
            LOG IN
          </Button>
          <p className="text-xs text-muted-foreground italic">
            Don't have access? Contact your counselor for an invitation.
          </p>
        </div>
      </div>
    </section>
  );
}
