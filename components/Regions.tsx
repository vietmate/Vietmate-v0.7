import React from 'react';

interface RegionsProps {
  id: string;
}

const RegionCard: React.FC<{
  title: string;
  subtitle: string;
  desc: string;
  imgSrc: string;
  link: string;
}> = ({ title, subtitle, desc, imgSrc, link }) => (
  <a
    href={link}
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="group relative block overflow-hidden rounded-[2.5rem] bg-charcoal aspect-[4/5] lg:aspect-[3/4] shadow-subtle-card border border-gray-100 hover:shadow-vibrant transition-all duration-700 mx-2"
  >
    <img
      src={imgSrc}
      alt={title}
      className="absolute inset-0 h-full w-full object-cover vivid-img transition-transform duration-1000 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
    <div className="absolute inset-0 p-10 flex flex-col justify-end transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
      <h3 className="font-display text-3xl font-black text-white uppercase tracking-tighter mb-2">
        {title}
      </h3>
      <p className="text-white/80 text-[11px] font-black uppercase tracking-[0.2em]">{subtitle}</p>
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 region-card-description transition-all duration-500 p-8">
      <h3 className="font-display text-4xl font-black text-white uppercase tracking-tighter mb-4">
        {title}
      </h3>
      <p className="text-white text-base font-bold leading-relaxed mb-8 max-w-[260px]">{desc}</p>
      <span className="inline-block py-3 px-8 bg-brand-red text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl">
        View Itineraries
      </span>
    </div>
  </a>
);

const Regions: React.FC<RegionsProps> = ({ id }) => {
  return (
    <section className="stage bg-white texture-overlay" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center h-full py-24">
        <div className="text-center mb-16">
          <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">
            Discovery Stage
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter text-charcoal leading-tight">
            Journey Through Vietnam
          </h2>
          <p className="text-muted-gray text-sm font-bold mt-2 max-w-2xl mx-auto opacity-70">
            Explore our regions to find your perfect rhythm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
          <RegionCard
            title="Northern"
            subtitle="Hanoi • Ha Long • Sapa"
            desc="Experience Hanoi's ancient soul and the emerald peaks of Sapa."
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCeNFIoS-_pts3qQvujVoymeXfDT6sABz973C8WIuQF7-QLu2ZVO51SrXtFcrz899aeQ9fmdnSqjPIk-qeCwnRRJywYw-_E0EYRE38yhxpvF0oC1dow0dXJBLWZMkUVHefJuaXvEPvBU41Bt8exfEiSHJZUdQfBbhGeWLe5ufo7Km7EiXofr3gifRc5CVZgA1Drb9tNwNRRpKkt8-hAQdp1WoqWAglxlJaekCapkNoeqTi6BeL6e0tRCdwJnd6st_Ve1Um48igjRwh6"
            link="#contact"
          />
          <RegionCard
            title="Central"
            subtitle="Da Nang • Hoi An • Hue"
            desc="Wander through golden lantern streets and explore imperial legacies."
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDLDfYeq2SI2quEtpkVzza8me8NVsnijBAJDz_LkxRbt0W0HfTl2EtZ72mZK_26A8kLqvRx-8dQ6pG9sQYxl7SvKyfrVd9Cx9vXApvsp6xmRvd1e_h0nyzr8JVIPQjJ7mPMzawuGz9M9j59Wevph4vgFY7fXxGFtUVS-AU_geTYILfdVTD_UgFxuS_WJ6CXHhc0XJvt7NxZ-_9plEphETQWbtFIGF-Krsu6mfOmDtHkZhun5kHEKtkFATLnkHUyS_VEIiBC2uUGa6lz"
            link="#contact"
          />
          <RegionCard
            title="Southern"
            subtitle="Saigon • Mekong • Phu Quoc"
            desc="Saigon's energy, Mekong Delta's rhythm, and pristine islands."
            imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBAg-XK2P_1r6LJLqGmLMzSowVrBwSa7oiDzd2JDnFF98mv5ha9F4a2TRP3RbBvEeldRWeBvdw40nRP1Xmo0qctaylR36mcbDx_WHnQ_yNhmAYZbazgU5xli_pndA1sJs7MeaqatrBBKZZq6_FeqFdHdBS3YiZqiurxcc3rfWRQWMWG3EZ37Qsb-1ZxmIKLA3sXc96bUA0OMihpGO-EdrkMTPVhPKFw6lXDOMoHVsDSs0LpIxFqqHDqQpyCL1CQD72LiczBVZDsJfQs"
            link="#contact"
          />
        </div>

        <div className="relative bg-brand-red rounded-[2.5rem] p-12 lg:p-16 text-center shadow-elevated-red overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 20 L20 0 M40 60 L60 40 M80 100 L100 80" stroke="white" strokeWidth="0.5"></path>
            </svg>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left">
              <h2 className="font-display text-2xl lg:text-4xl font-black text-white mb-3 uppercase tracking-tighter">
                Looking for something bespoke?
              </h2>
              <p className="text-white text-base font-bold">
                Let our local experts craft a completely unique itinerary for your group.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-brand-red px-14 py-6 rounded-full font-black text-sm uppercase tracking-[0.25em] hover:scale-105 hover:bg-slate-50 active:scale-95 transition-all shadow-2xl whitespace-nowrap"
            >
              DESIGN MY CUSTOM TRIP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regions;