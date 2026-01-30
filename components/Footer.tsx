import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 bg-white rounded-3xl p-6 shadow-subtle-card border border-slate-100">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center bg-brand-red rounded-lg shrink-0">
            <svg
              className="w-7 h-7 fill-white"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 18.5C19 18.2239 19.2239 18 19.5 18H54.5C54.7761 18 55 18.2239 55 18.5V30.5C55 30.7761 54.7761 31 54.5 31H37L50.25 61.5L74.5 18.5C74.611 18.3188 74.8082 18 75.1 18H84.5C84.7761 18 85 18.2239 85 18.5V19.5L53 82.5C52.88 82.72 52.65 83 52.3 83H47.7C47.35 83 47.12 82.72 47 82.5L15.1 19.5V18.5C15.1 18.5 19 18.5 19 18.5Z"></path>
            </svg>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-black tracking-tight text-charcoal font-display uppercase">
              VIETMATE.COM
            </span>
          </div>
        </div>
        <div className="text-[9px] tracking-[0.3em] font-black text-charcoal/40 text-center md:text-left">
          <p>© 2026 VIETMATE. ALL RIGHTS RESERVED. ✨</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 items-center text-[9px] tracking-[0.3em] font-black text-charcoal/40">
          <a href="#" className="hover:text-brand-red transition-colors">
            PRIVACY
          </a>
          <span className="opacity-20 hidden md:block">|</span>
          <a href="#" className="hover:text-brand-red transition-colors">
            TERMS
          </a>
          <span className="opacity-20 hidden md:block">|</span>
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-brand-red transition-colors">
              INSTAGRAM
            </a>
            <span className="opacity-20">|</span>
            <a href="#" className="hover:text-brand-red transition-colors">
              FACEBOOK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;