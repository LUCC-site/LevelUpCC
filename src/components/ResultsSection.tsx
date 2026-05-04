import { Award } from 'lucide-react';
import levelupLogo from '../assets/levelup-logo-black.png'; 
import birdLogo from '../assets/levelup-logo-bird.png';

// --- ACTIVE LOGO IMPORTS ---
import stanfordLogo from '../assets/CollegeLogos/Stanford.png';
import columbiaLogo from '../assets/CollegeLogos/Columbia.jpeg';
import jhuLogo from '../assets/CollegeLogos/JohnsHopkins.jpeg';
import brownLogo from '../assets/CollegeLogos/Brown.png';
import dartmouthLogo from '../assets/CollegeLogos/Dartmouth.png';
import cornellLogo from '../assets/CollegeLogos/Cornell.png';
import dukeLogo from '../assets/CollegeLogos/Duke.png';
import princetonLogo from '../assets/CollegeLogos/Princeton.png';
import yaleLogo from '../assets/CollegeLogos/Yale.png';
import upennLogo from '../assets/CollegeLogos/UPenn.png';
import berkleyLogo from '../assets/CollegeLogos/Berkeley.png';
import nyuLogo from '../assets/CollegeLogos/NYU.png';
import uclaLogo from '../assets/CollegeLogos/UCLA.png';
import uwmadisonLogo from '../assets/CollegeLogos/UWMadison.jpeg';
import cmuLogo from '../assets/CollegeLogos/CMU.png';
import riceLogo from '../assets/CollegeLogos/Rice.png';
import sjsuLogo from '../assets/CollegeLogos/SJSU.png';
import gtLogo from '../assets/CollegeLogos/GT.png';
import uiucLogo from '../assets/CollegeLogos/UIUC.png';
import umdLogo from '../assets/CollegeLogos/UMD.jpeg';
import purdueLogo from '../assets/CollegeLogos/Purdue.jpg';
import umichLogo from '../assets/CollegeLogos/UMich.png';
import northeasternLogo from '../assets/CollegeLogos/Northeastern.png';
import ucsdLogo from '../assets/CollegeLogos/UCSD1.png';
import ucsbLogo from '../assets/CollegeLogos/UCSB.png';
import ucdavisLogo from '../assets/CollegeLogos/UCDavis.png';
import ucbmetLogo from '../assets/CollegeLogos/UCBMET.png';
import uciLogo from '../assets/CollegeLogos/UCI.png';
import ucmercedLogo from '../assets/CollegeLogos/UCMerced.png';
import usfLogo from '../assets/CollegeLogos/USF.png';
import calpolyLogo from '../assets/CollegeLogos/CalPoly.png';
import colgateLogo from '../assets/CollegeLogos/Colgate.png';
import santaclaraLogo from '../assets/CollegeLogos/SantaClara.jpg';
import uoftorontoLogo from '../assets/CollegeLogos/Utoronto.png';
import indianaLogo from '../assets/CollegeLogos/Indiana.png';

export default function ResultsSection() {
  const universityData = [
    { name: "Stanford", logo: stanfordLogo },
    { name: "CMU", logo: cmuLogo },
    { name: "Princeton", logo: princetonLogo },
    { name: "Yale", logo: yaleLogo },
    { name: "Columbia", logo: columbiaLogo },
    { name: "UPenn", logo: upennLogo },
    { name: "Cornell", logo: cornellLogo },
    { name: "Brown", logo: brownLogo },
    { name: "Dartmouth", logo: dartmouthLogo },
    { name: "Johns Hopkins", logo: jhuLogo },
    { name: "Duke", logo: dukeLogo },
    { name: "Rice", logo: riceLogo },
    { name: "UC Berkeley", logo: berkleyLogo },
    { name: "UCB - MET", logo: ucbmetLogo },
    { name: "UCLA", logo: uclaLogo },
    { name: "UCSD", logo: ucsdLogo },
    { name: "UCSB", logo: ucsbLogo },
    { name: "UC Davis", logo: ucdavisLogo },
    { name: "UCI", logo: uciLogo },
    { name: "UC Merced", logo: ucmercedLogo },
    { name: "Georgia Tech", logo: gtLogo },
    { name: "UIUC", logo: uiucLogo },
    { name: "NYU", logo: nyuLogo },
    { name: "UMich", logo: umichLogo },
    { name: "Indiana", logo: indianaLogo },
    { name: "Purdue", logo: purdueLogo },
    { name: "UMD", logo: umdLogo },
    { name: "UW Madison", logo: uwmadisonLogo },
    { name: "Northeastern", logo: northeasternLogo },
    { name: "U of Toronto", logo: uoftorontoLogo },
    { name: "USF", logo: usfLogo },
    { name: "Cal Poly", logo: calpolyLogo },
    { name: "Colgate", logo: colgateLogo },
    { name: "Santa Clara", logo: santaclaraLogo },
    { name: "SJSU", logo: sjsuLogo }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col items-center justify-center mb-20 text-center">
            <div className="flex items-center gap-2 mb-3">
              {/* BIRD LOGO PLACED BEFORE SUCCESS RECORD */}
              <img 
                src={birdLogo} 
                alt="Level Up Bird" 
                className="h-7 w-auto object-contain" 
              />
              <Award className="text-gold" size={20} />
              <span className="text-gold font-bold text-xs uppercase tracking-[0.2em]">Success Record</span>
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary">
              Our Students Have Been Accepted To
            </h3>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-16">
            {universityData.map((uni, idx) => (
              <div key={`${uni.name}-${idx}`} className="flex flex-col items-center w-28 md:w-32 group">
                
                <div className="h-16 w-full flex items-center justify-center mb-3 overflow-hidden">
                  <img 
                    src={uni.logo || levelupLogo} 
                    alt={`${uni.name} success`} 
                    className={`
                      h-full w-full object-contain
                      transition-all duration-500 group-hover:scale-110
                      ${!uni.logo ? 'opacity-10 grayscale' : 'opacity-100'}
                    `} 
                  />
                </div>
                
                <span className="text-[10px] md:text-[11px] font-bold text-primary/70 uppercase tracking-widest text-center leading-tight transition-colors group-hover:text-gold">
                  {uni.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
