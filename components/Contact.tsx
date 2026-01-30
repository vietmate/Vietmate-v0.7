import React from 'react';
import Footer from './Footer';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section className="stage bg-slate-50 texture-overlay" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-16">
        <div className="bg-white flex flex-col md:flex-row shadow-3xl rounded-[40px] overflow-hidden border-8 border-white min-h-[600px]">
          {/* Left Panel */}
          <div className="md:w-5/12 p-8 md:p-14 bg-brand-red text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block text-white/70">
                Start Your Adventure
              </span>
              <h2 className="font-display text-4xl lg:text-6xl font-black mb-10 uppercase tracking-tighter leading-none">
                PLAN YOUR JOURNEY
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">verified_user</span>
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest text-white">
                      Direct Local Access
                    </p>
                    <p className="text-white/70 text-[11px] font-bold mt-1">
                      Chat directly with experts based in Hanoi and Saigon.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-3xl">headset_mic</span>
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest text-white">
                      24/7 Local Support
                    </p>
                    <p className="text-white/70 text-[11px] font-bold mt-1">
                      Travel with peace of mind knowing we are just a local phone call away.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">edit_calendar</span>
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest text-white">
                      100% Tailored
                    </p>
                    <p className="text-white/70 text-[11px] font-bold mt-1">
                      Designed around your pace, budget, and unique interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="md:w-7/12 p-8 md:p-10 bg-white flex flex-col justify-center overflow-y-auto max-h-[90vh]">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-1 px-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Liam Nguyen"
                    className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-brand-red rounded-xl p-3 text-sm font-semibold placeholder:text-slate-300 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-1 px-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="hello@travel.com"
                    className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-brand-red rounded-xl p-3 text-sm font-semibold placeholder:text-slate-300 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-1 px-1">
                      Travelers
                    </label>
                    <input
                      type="number"
                      placeholder="2"
                      className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-brand-red rounded-xl p-3 text-sm font-semibold placeholder:text-slate-300 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-1 px-1">
                      Days
                    </label>
                    <input
                      type="number"
                      placeholder="12"
                      className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-brand-red rounded-xl p-3 text-sm font-semibold placeholder:text-slate-300 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-2 px-1">
                  Select Regions
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { val: 'north', icon: 'landscape', label: 'North' },
                    { val: 'central', icon: 'temple_buddhist', label: 'Central' },
                    { val: 'south', icon: 'waves', label: 'South' },
                  ].map((item) => (
                    <label key={item.val} className="cursor-pointer group">
                      <input type="checkbox" name="region" value={item.val} className="hidden styled-toggle" />
                      <div className="toggle-card flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-slate-100 bg-white transition-all">
                        <span className="material-symbols-outlined text-lg toggle-icon text-muted-gray/40">
                          {item.icon}
                        </span>
                        <span className="text-[9px] font-black uppercase tracking-widest toggle-text">
                          {item.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-2 px-1">
                  Travel Style (Pick Multiple)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { val: 'culture', icon: 'local_library', label: 'Cultural Immersion' },
                    { val: 'adventure', icon: 'hiking', label: 'Adventure & Active' },
                    { val: 'luxury', icon: 'diamond', label: 'Luxury & Comfort' },
                    { val: 'culinary', icon: 'restaurant', label: 'Culinary Focus' },
                    { val: 'family', icon: 'family_restroom', label: 'Family-Friendly' },
                  ].map((item) => (
                    <label key={item.val} className="cursor-pointer group">
                      <input type="checkbox" name="style" value={item.val} className="hidden styled-toggle" />
                      <div className="toggle-card flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-slate-100 bg-white transition-all h-full">
                        <span className="material-symbols-outlined text-lg toggle-icon text-muted-gray/40">
                          {item.icon}
                        </span>
                        <span className="text-[9px] font-black uppercase tracking-widest toggle-text">
                          {item.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-1 px-1">
                  Your Vision
                </label>
                <textarea
                  className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-brand-red rounded-xl p-3 text-sm font-semibold placeholder:text-slate-300 min-h-[60px] outline-none"
                  placeholder="Share more about your dream trip..."
                ></textarea>
              </div>

              <div className="pt-1">
                <button className="w-full py-4 bg-brand-red text-white font-black text-sm uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] transition-all shadow-xl shadow-red-600/30">
                  SEND TRIP REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;