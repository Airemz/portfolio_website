import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ModeToggle } from './theme/mode-toggle';
import { cn } from '../lib/utils';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={cn('sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60')}>
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <button
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
            onClick={() => scrollToSection('about')}
          >
            Sadiq Rahman
          </button>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a className="hover:text-primary transition-colors" href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a className="hover:text-primary transition-colors" href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a className="hover:text-primary transition-colors" href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a className="hover:text-primary transition-colors" href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
            {/* <li><a className="hover:text-primary transition-colors" href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a></li> */}
            <li><a className="hover:text-primary transition-colors" href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li>
              <a
                href="https://drive.google.com/file/d/152O9LgDYVpkpavMhuWlvIZRvehS1BgbE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg 
                          border border-transparent bg-background text-foreground transition-all duration-300"
              >
                {/* Glowing gradient border */}
                <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-md opacity-60 -z-10"></span>
                
                {/* Solid crisp border on top of glow */}
                <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 -z-10"></span>

                Resume
              </a>
            </li>
            <li><ModeToggle /></li>
          </ul>
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <button className="text-xl" onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4">
            <ul className="flex flex-col gap-3 text-sm">
              <li><a className="block hover:text-primary" href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a className="block hover:text-primary" href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a className="block hover:text-primary" href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a className="block hover:text-primary" href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a className="block hover:text-primary" href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
              {/* <li><a className="block hover:text-primary" href="#certifications" onClick={() => scrollToSection('certifications')}>Certifications</a></li> */}
              <li><a className="block hover:text-primary" href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
              <li>
                <a
                href="https://drive.google.com/file/d/152O9LgDYVpkpavMhuWlvIZRvehS1BgbE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg 
                          border border-transparent bg-background text-foreground transition-all duration-300"
              >
                {/* Glowing gradient border */}
                <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-md opacity-60 -z-10"></span>
                
                {/* Solid crisp border on top of glow */}
                <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 -z-10"></span>

                Resume
              </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
