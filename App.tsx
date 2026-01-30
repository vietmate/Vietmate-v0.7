import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import FloatingChat from './components/FloatingChat';
import Hero from './components/Hero';
import Regions from './components/Regions';
import About from './components/About';
import Stories from './components/Stories';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: containerRef.current,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll('.stage');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <SideNav activeSection={activeSection} />
      <FloatingChat />
      
      <main ref={containerRef} className="stage-container">
        <Hero id="hero" />
        <Regions id="regions" />
        <About id="about" />
        <Stories id="stories" />
        <Contact id="contact" />
      </main>
    </>
  );
};

export default App;