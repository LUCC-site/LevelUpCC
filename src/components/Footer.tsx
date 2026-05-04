import { Link } from 'react-router-dom';
// Import the bird logo
import birdLogo from "@/assets/levelup-logo-bird.png";

export default function Footer() {
  return (
    <footer className="bg-primary py-24">
      <div className="container mx-auto px-6">
        {/* Philosophy Section - Reduced margin to fit logo in same space */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="font-display text-3xl md:text-4xl font-bold text-background leading-snug max-w-2xl mx-auto">
            "We do not just coach.<br />
            We <span className="text-gold">architect-futures</span>."
          </p>
          
          {/* Bird Logo centered below text */}
          <img 
            src={birdLogo} 
            alt="Level Up Bird" 
            className="w-12 h-12 object-contain mt-6 opacity-80" 
          />
        </div>

        {/* Links Grid - 3 columns to balance the layout with Services hidden */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-background/10 pt-12">
          
          {/* Column 1: Brand */}
          <div>
            <span className="font-display text-xl font-bold text-background">
              Level Up College Counseling<span className="text-gold">.</span>
            </span>
            <p className="font-body text-sm text-background/40 mt-4 leading-relaxed">
              Personally curated college counseling for driven students.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-label text-gold mb-4">Company</p>
            <div className="space-y-3">
              <Link 
                to="/share-your-journey" 
                className="block font-body text-sm text-background/60 hover:text-gold transition-colors duration-300"
              >
                Share Your Journey
              </Link>
              
              <Link to="/terms" className="block font-body text-sm text-background/60 hover:text-gold transition-colors duration-300">Terms & Conditions</Link>
              <Link to="/privacy" className="block font-body text-sm text-background/60 hover:text-gold transition-colors duration-300">Privacy Policy</Link>
            </div>
          </div>

          {/* Column 3: Connect */}
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-label text-gold mb-4">Connect</p>
            <div className="space-y-3">
              <a href="mailto:levelupaxn@gmail.com" className="block font-body text-sm text-background/60 hover:text-gold transition-colors duration-300">levelupaxn@gmail.com</a>
              <div>
                <a href="tel:+15105561343" className="block font-body text-sm text-background/60 hover:text-gold transition-colors duration-300">(510) 556-1343</a>
                <p className="font-body text-[10px] uppercase tracking-widest text-background/40 mt-1">
                  Daily 9am – 10pm PST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-background/30">
            © {new Date().getFullYear()} Level Up College Counseling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
