import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IntakeForm } from "@/components/IntakeForm";
import navLogo from '@/assets/levelup-logo-mini.png'; 

const services = [
  { label: 'All-in-One Counseling', href: '/services/strategy', desc: 'Long-term roadmap & profile optimization' },
  { label: 'Essay Editing', href: '/services/essays', desc: 'Storytelling, Narrative Development & Essay Editing' },
  { label: 'One-time Consultation', href: '/services/extracurriculars', desc: 'Expert advice & customized action plan' },
  { label: 'Interview Prep', href: '/services/interview', desc: 'Mock sessions & confidence building' },
];

const contactOptions = [
  { label: 'Email', href: 'mailto:levelupaxn@gmail.com', desc: 'Drop us a line at levelupaxn@gmail.com' },
  { label: 'Phone', href: 'tel:+15105561343', desc: 'Call (510) 556-1343' },
  { label: 'WhatsApp', href: 'https://wa.me/15105561343', desc: 'Chat via WhatsApp' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); 
  const location = useLocation();

  const isNotHomePage = location.pathname !== '/';
  const showActiveNavbar = scrolled || isNotHomePage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setContactOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showActiveNavbar ? 'bg-background border-b border-primary/10 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">

        {/* LOGO SECTION - AGGRESSIVE LEFT ALIGNMENT */}
        {/* NAVBAR LOGO SECTION - ADJUSTED FOR MOBILE LEFT ALIGNMENT */}
        <Link to="/" className="flex items-center group -ml-24 md:-ml-24 lg:-ml-28"> 
          {/* -ml-12 is the new mobile offset to pull it left. md:-ml-24/lg:-ml-32 keeps your desktop look */}
          <div className="relative h-16 w-48 md:h-20 md:w-64 flex items-center"> 
            <img 
              src={navLogo} 
              alt="Level Up" 
              className={`h-full w-full object-contain transition-all duration-500 scale-[1.7] md:scale-[1.55] origin-left ${
                showActiveNavbar 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-4'
              }`} 
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className={`font-body text-sm font-medium uppercase tracking-label transition-colors duration-300 ${
            showActiveNavbar ? 'text-primary hover:text-gold' : 'text-background hover:text-gold'
          }`}>
            Home
          </Link>

          <div 
            className="relative h-full flex items-center" 
            onMouseEnter={() => setServicesOpen(true)} 
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`font-body text-sm font-medium uppercase tracking-label flex items-center gap-1 transition-colors duration-300 ${
              showActiveNavbar ? 'text-primary hover:text-gold' : 'text-background hover:text-gold'
            }`}>
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="absolute -top-2 left-0 w-full h-2 bg-transparent" />
                <div className="w-80 bg-background border border-primary/10 shadow-xl animate-fade-up rounded-b-xl overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="block px-6 py-4 hover:bg-surface transition-colors duration-200 border-b border-primary/5 last:border-0"
                    >
                      <span className="font-body text-sm font-bold text-primary block">{s.label}</span>
                      <span className="block font-body text-[11px] text-muted-foreground mt-1 leading-tight">{s.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/testimonials" className={`font-body text-sm font-medium uppercase tracking-label transition-colors duration-300 ${
            showActiveNavbar ? 'text-primary hover:text-gold' : 'text-background hover:text-gold'
          }`}>
            Testimonials
          </Link> 

          <Link to="/student-portal" className={`font-body text-sm font-medium uppercase tracking-label transition-colors duration-300 ${
            showActiveNavbar ? 'text-primary hover:text-gold' : 'text-background hover:text-gold'
          }`}>
            Student Portal
          </Link>

          <div 
            className="relative h-full flex items-center" 
            onMouseEnter={() => setContactOpen(true)} 
            onMouseLeave={() => setContactOpen(false)}
          >
            <button className={`font-body text-sm font-medium uppercase tracking-label flex items-center gap-1 transition-colors duration-300 ${
              showActiveNavbar ? 'text-primary hover:text-gold' : 'text-background hover:text-gold'
            }`}>
              Contact Us <ChevronDown size={14} className={`transition-transform duration-300 ${contactOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {contactOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="absolute -top-2 left-0 w-full h-2 bg-transparent" />
                <div className="w-72 bg-background border border-primary/10 shadow-xl animate-fade-up rounded-b-xl overflow-hidden">
                  {contactOptions.map((option) => (
                    <a
                      key={option.label}
                      href={option.href}
                      target={option.label === 'WhatsApp' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="block px-6 py-4 hover:bg-surface transition-colors duration-200 border-b border-primary/5 last:border-0"
                    >
                      <span className="font-body text-sm font-bold text-primary block">{option.label}</span>
                      <span className="block font-body text-[11px] text-muted-foreground mt-1 leading-tight">{option.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Schedule Button */}
        <div className="hidden lg:block">
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
              <Button variant={showActiveNavbar ? "hero" : "gold"} size="default">
                Schedule Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-0 border-none bg-transparent shadow-none overflow-y-auto max-h-[90vh]">
              <div className="bg-white rounded-2xl overflow-hidden">
                <IntakeForm />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <X size={28} className="text-primary" />
          ) : (
            <Menu size={28} className={showActiveNavbar ? 'text-primary' : 'text-background'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-primary/10 animate-fade-up h-screen overflow-y-auto">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6 pb-24">
            <Link to="/" className="font-body text-lg font-bold uppercase tracking-label text-primary">
              Home
            </Link>
            <div className="space-y-4">
              <span className="font-body text-xs font-bold uppercase tracking-label text-gold">Our Services</span>
              {services.map((s) => (
                <Link key={s.href} to={s.href} className="block pl-4 font-body text-sm text-primary">
                  {s.label}
                </Link>
              ))}
            </div>
            <Link to="/testimonials" className="font-body text-lg font-bold uppercase tracking-label text-primary">
              Testimonials
            </Link>
            <Link to="/student-portal" className="font-body text-lg font-bold uppercase tracking-label text-primary">
              Student Portal
            </Link>

            <div className="space-y-4">
              <span className="font-body text-xs font-bold uppercase tracking-label text-gold">Contact Us</span>
              {contactOptions.map((option) => (
                <a 
                  key={option.label} 
                  href={option.href} 
                  target={option.label === 'WhatsApp' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="block pl-4 font-body text-sm text-primary"
                >
                  {option.label}
                </a>
              ))}
            </div>

            <Dialog open={modalOpen} onOpenChange={(val) => {
              setModalOpen(val);
              if (val === false) setMobileOpen(false);
            }}>
              <DialogTrigger asChild>
                <Button variant="hero" size="lg" className="mt-4">
                  Schedule Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] p-0 border-none bg-transparent shadow-none overflow-y-auto max-h-[90vh]">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <IntakeForm />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </nav>
  );
}
