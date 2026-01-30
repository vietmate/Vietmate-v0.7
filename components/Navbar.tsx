import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navLinks = [
    { id: 'hero', label: 'Start' },
    { id: 'regions', label: 'Regions' },
    { id: 'about', label: 'Story' },
    { id: 'stories', label: 'Reviews' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 blur-nav bg-brand-red shadow-header-depth transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center">
              <svg className="w-10 h-10 fill-white" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 18.5C19 18.2239 19.2239 18 19.5 18H54.5C54.7761 18 55 18.2239 55 18.5V30.5C55 30.7761 54.7761 31 54.5 31H37L50.25 61.5L74.5 18.5C74.611 18.3188 74.8082 18 75.1 18H84.5C84.7761 18 85 18.2239 85 18.5V19.5L53 82.5C52.88 82.72 52.65 83 52.3 83H47.7C47.35 83 47.12 82.72 47 82.5L15.1 19.5V18.5C15.1 18.5 19 18.5 19 18.5Z"></path>
              </svg>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-black tracking-tight text-white font-display">VIETMATE.COM</span>
            </div>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex space-x-6 text-[11px] font-black tracking-widest uppercase">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    isActive ? 'text-white opacity-100' : 'text-white/70 hover:text-white hover:opacity-100'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      isActive ? 'bg-white' : 'bg-white/40'
                    }`}
                  ></span>
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-white text-brand-red px-6 py-2.5 text-xs rounded-full font-black hover:scale-105 transition-all tracking-widest uppercase shadow-lg"
            >
              Plan Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;