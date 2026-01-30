import React from 'react';

interface SideNavProps {
  activeSection: string;
}

const SideNav: React.FC<SideNavProps> = ({ activeSection }) => {
  const sections = ['hero', 'regions', 'about', 'stories', 'contact'];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
      <div className="text-[10px] font-black uppercase tracking-[0.2em] -rotate-90 origin-center -translate-y-24 mb-4 opacity-70 text-charcoal">
        Your Journey
      </div>
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          className={`w-1.5 rounded-full transition-all duration-300 hover:bg-brand-red ${
            activeSection === id ? 'bg-brand-red h-10' : 'bg-slate-300 h-4'
          }`}
          aria-label={`Scroll to ${id}`}
        ></a>
      ))}
    </div>
  );
};

export default SideNav;