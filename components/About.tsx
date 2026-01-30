import React from 'react';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section className="stage bg-[#F2F2F2] texture-overlay" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter text-charcoal text-center md:text-left">
            Who We Are
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-5/12 relative group">
            <div className="overflow-hidden rounded-3xl bg-transparent transition-all duration-500 group-hover:shadow-vibrant">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDji86QRu_zM2_Grmi3gP8QemwLP1qI6BbUJSVprjwKUF1XwcYdUZ9eks-hfj0gPRW68Mfvbn8nfHjkJaG0o_gxeEpQ8KXWY8QRiCprOGw3zS2ibQP59jxeozumdW-X5B58Xj-TvmY1mR5PSUZJ1hYDnKj07byQvxQuu3qz-IS6IPPkIvUImdB6IZkK9ssi-xCCtpjFfnQ19J28Hmj_qDfh-oYWvlTTSREJ-aF66Hp8OKy0apz4WbIXBjjkTe_cGPUIOtp_5y-f56_K"
                alt="Minh and Tam founders"
                className="w-full h-auto object-contain vivid-img scale-105 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 bg-white p-8 max-w-[340px] rounded-3xl shadow-premium border border-slate-100 transition-transform group-hover:scale-105 duration-300">
              <span className="material-symbols-outlined text-brand-red text-3xl mb-4 block">
                format_quote
              </span>
              <p className="text-sm mb-4 font-bold italic leading-relaxed text-charcoal">
                "Authentic travel isn't just about the places you visit; it's about the people who
                welcome you and the stories you carry home. We build bridges, not just itineraries."
              </p>
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-[2px] bg-brand-red"></span>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal">
                    — MINH & TAM 🇻🇳
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-7/12 flex flex-col justify-center">
            <div className="space-y-10">
              <div>
                <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                  Our Origin Story
                </span>
                <h3 className="font-display text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter text-charcoal">
                  Two Worlds, One Passion
                </h3>
                <p className="text-muted-gray leading-relaxed text-base font-bold mb-4">
                  Minh, born in Australia to Vietnamese parents, returned to his roots with a global
                  perspective on service. Tam, a native Hanoian with deep local ties, holds the keys
                  to Vietnam's hidden soul.
                </p>
              </div>
              <div>
                <h4 className="font-display text-xl font-black mb-4 uppercase tracking-tight text-charcoal">
                  Why We Do This
                </h4>
                <p className="text-muted-gray leading-relaxed text-base font-bold mb-6">
                  We founded Vietmate because we saw travelers missing the heartbeat of our country.
                  Our mission is to simplify the complex while amplifying the authentic, ensuring
                  every traveler experiences the Vietnam we know and love.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">workspace_premium</span>
                    </div>
                    <span className="font-black text-sm uppercase tracking-tight text-charcoal">
                      12+ Years Industry Experience
                    </span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">language</span>
                    </div>
                    <span className="font-black text-sm uppercase tracking-tight text-charcoal">
                      Hanoi Native & Global Perspective Duo
                    </span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">location_on</span>
                    </div>
                    <span className="font-black text-sm uppercase tracking-tight text-charcoal">
                      100% On-The-Ground Operations
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-brand-red text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all text-center inline-block"
                  >
                    CONNECT WITH MINH & TAM
                  </a>
                  <a
                    href="#stories"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-charcoal border-2 border-slate-200 px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:border-brand-red hover:text-brand-red transition-all text-center inline-block"
                  >
                    View Guest Stories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 pointer-events-none">
        <span className="text-charcoal text-[10px] font-black tracking-[0.3em] uppercase font-sans">
          Traveler Stories
        </span>
        <span className="material-symbols-outlined text-charcoal animate-scroll-indicator text-lg">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
};

export default About;