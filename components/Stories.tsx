import React, { useRef, useState, useEffect } from 'react';

interface StoriesProps {
  id: string;
}

const Stories: React.FC<StoriesProps> = ({ id }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "SARAH & MARK",
      location: "London, UK",
      initials: "SM",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGmTs10ULqovZXpmAZbhrmiDWogL_ONeD9YpffgE7uppcBDwux3d59DinE21r7XDw4Lwf2M31ZSbzfH2J20XvM1iBRPXq0n-IkhMrEMUWWSVhdPhWCg4ActDUPLlcQxMkhtmPE6ThuO8eFe7NuysNNv6bnYwlkOzujWjAoPbazAGV8M0ITvkWDtcfsCGozoTwyRuG7UauHKHRrwqmExNDf0ZEySCe0i69TdIpJPPswHoC8cohsY3kk8f1Qwfksk5OTLy39wbrkTwIj",
      quote: "\"Our trip felt so personal, from the specific food recommendations to the hidden spots our guide took us to in Hanoi. Vietmate truly simplified everything.\""
    },
    {
      name: "DAVID CHEN",
      location: "Singapore",
      initials: "DC",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPpYttrpnV5CEDv0GOLxAeRnL2Wgg9T38hAhO8eyubmEcj-eyaKB6oL0DAGeamlZ7v1b28NkoW0RyHnMuxVLHsQzFiLmSqEJc57_QbteZqXSNk4sJbCSfVtRkOk2H4wloV2A-8GeUoOA59nYX95ZD6Tjz0DE-eO14vjr6zq-PKwKe18yhEmxS5lFx6VUQQsKtGwsfq8NwXJBy87kiUa0u-TT3xar5VsbLwSM7WX2hMB7ZlotNc6zGHt2kt7YhQ5V0Jt3cgBdDimQOy",
      quote: "\"Traveling as a solo photographer, I wanted access to places off the tourist map. Vietmate's connections got me into remote villages in Sapa.\""
    },
    {
      name: "SOPHIE & THOMAS",
      location: "Paris, France",
      initials: "ST",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXajvFWMz2VPyJriyFwDmvGU4pZqrStoVkildhbWBFfFLq_9_Nnm20YeWhBDbo8D8Q_0WCx_iinmaRt6q5LkFreGodyJYGvEAoszvk3VMOjygNpUWU_Y_PzOXm0Oru4_kr9kDXD9OnwGs78YbTZn4ih5AEh3AjgLPwMv05W_w1Q5Xm_F6Q6MJ5lNwFuG4G1h6QvlNJPNmwhC8kYYTO5yc37lrfErK_d3ErwXU-hfZZ1hvuXMFw52JyCMo25QzlhUheEzt1Xv444lo1",
      quote: "\"We've traveled all over Asia, but this was our most seamless experience yet. Perfectly balanced and incredibly memorable.\""
    }
  ];

  const handleScroll = () => {
    if (trackRef.current) {
      const scrollLeft = trackRef.current.scrollLeft;
      const width = trackRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (trackRef.current) {
      const width = trackRef.current.offsetWidth;
      trackRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener('scroll', handleScroll);
      return () => track.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="stage relative overflow-hidden" id={id}>
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGmTs10ULqovZXpmAZbhrmiDWogL_ONeD9YpffgE7uppcBDwux3d59DinE21r7XDw4Lwf2M31ZSbzfH2J20XvM1iBRPXq0n-IkhMrEMUWWSVhdPhWCg4ActDUPLlcQxMkhtmPE6ThuO8eFe7NuysNNv6bnYwlkOzujWjAoPbazAGV8M0ITvkWDtcfsCGozoTwyRuG7UauHKHRrwqmExNDf0ZEySCe0i69TdIpJPPswHoC8cohsY3kk8f1Qwfksk5OTLy39wbrkTwIj"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-5 vivid-img"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background-light via-background-light/95 to-background-light"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full pt-16 pb-24">
        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
          Traveler Voices
        </span>
        <h2 className="font-display text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-charcoal">
          Travelers' Stories
        </h2>
        <p className="text-muted-gray mb-12 text-lg font-bold">
          Real feedback from people we've welcomed.
        </p>

        <div className="relative group max-w-full mx-auto px-12">
          {/* Controls */}
          <button
            onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white shadow-vibrant border border-slate-100 flex items-center justify-center text-charcoal hover:bg-brand-red hover:text-white transition-all active:scale-95"
          >
            <span className="material-symbols-outlined font-black">chevron_left</span>
          </button>
          <button
            onClick={() => scrollTo(Math.min(testimonials.length - 1, activeIndex + 1))}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white shadow-vibrant border border-slate-100 flex items-center justify-center text-charcoal hover:bg-brand-red hover:text-white transition-all active:scale-95"
          >
            <span className="material-symbols-outlined font-black">chevron_right</span>
          </button>

          {/* Carousel Track */}
          <div
            ref={trackRef}
            className="carousel-container flex gap-8 overflow-x-auto pb-12 pt-6 px-4 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
          >
            {testimonials.map((item, idx) => (
              <div key={idx} className="carousel-item w-full flex-shrink-0 lg:w-[calc(33.333%-1.333rem)]" style={{ scrollSnapAlign: 'start' }}>
                <div className="bg-white h-full rounded-[40px] p-8 text-left shadow-premium border border-slate-50 flex flex-col gap-6">
                  <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden shadow-md">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex gap-1 text-brand-red mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined star-filled text-sm">star</span>
                      ))}
                    </div>
                    <blockquote className="text-sm font-bold mb-6 italic text-charcoal leading-relaxed line-clamp-4">
                      {item.quote}
                    </blockquote>
                    <div className="mt-auto flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white font-black text-[9px]">
                        {item.initials}
                      </div>
                      <div>
                        <div className="text-[10px] font-black tracking-widest uppercase text-charcoal">
                          {item.name}
                        </div>
                        <div className="text-[8px] font-bold text-muted-gray uppercase tracking-widest">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all shadow-sm ${
                  idx === activeIndex ? 'bg-brand-red' : 'bg-slate-300 hover:bg-brand-red/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 pointer-events-none">
        <span className="text-charcoal text-[10px] font-black tracking-[0.3em] uppercase font-sans">
          CONTACT US
        </span>
        <span className="material-symbols-outlined text-charcoal animate-scroll-indicator text-xl">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
};

export default Stories;