import React from 'react';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <header className="stage bg-[#F9F9F9]" id={id}>
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-20">
        <div className="inline-flex items-center gap-2 bg-slate-200/50 border border-slate-300/50 px-5 py-2 rounded-full text-charcoal text-[10px] uppercase tracking-[0.3em] font-bold mb-10 shadow-sm animate-subtle-bounce">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span> Authentic Local
          Travel Partner
        </div>

        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl text-charcoal font-extrabold mb-8 tracking-tighter uppercase leading-none flex flex-wrap justify-center items-center">
          <span className="flex items-center">
            VIETNAM
            <span className="flex items-center justify-center ml-4 md:ml-6 lg:ml-8 leading-none">
              <svg
                className="vn-flag-emoji h-[0.72em] w-auto aspect-[3/2] block"
                viewBox="0 0 900 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="#D91B1B" height="600" width="900"></rect>
                <polygon
                  fill="#FFFF00"
                  points="450,135 487,248 606,248 510,317 547,430 450,361 353,430 390,317 294,248 413,248"
                ></polygon>
              </svg>
            </span>
          </span>
          <span className="text-brand-red ml-4 md:ml-6 lg:ml-8">Simplified.</span>
        </h1>

        <p className="text-lg md:text-2xl text-charcoal font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
          Bespoke Vietnam travel, designed locally and tailored around how you want to travel.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#regions"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-red text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-110 transition-all shadow-2xl shadow-red-600/40"
          >
            Begin Discovery ➔
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-charcoal text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest border border-charcoal transition-all hover:bg-charcoal/90"
          >
            Our Story ✨
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-10 text-charcoal/70 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-black">
          <span className="flex items-center gap-2">📍 DESIGNED & OPERATED LOCALLY</span>
          <span className="flex items-center gap-2">🤝🏻 DIRECT LOCAL ACCESS</span>
          <span className="flex items-center gap-2">✍️ TAILORED ROUTES</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none">
        <span className="text-muted-gray text-[10px] font-black tracking-[0.3em] uppercase">
          Discover more
        </span>
        <span className="material-symbols-outlined text-muted-gray animate-scroll-indicator text-xl">
          keyboard_arrow_down
        </span>
      </div>
    </header>
  );
};

export default Hero;