import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { NAV_LINKS } from '../data/content.js';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

  // Add a shadow once the page scrolls and highlight the section in view.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      let current = 'home';
      NAV_LINKS.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section && section.getBoundingClientRect().top <= 120) {
          current = section.id;
        }
      });
      // At the very bottom, the last section is the active one.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = 'contact';
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // While the mobile menu is open: close it on Escape or when resizing to desktop.
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKey = (event) => event.key === 'Escape' && setIsOpen(false);
    const handleResize = () => window.innerWidth > 900 && setIsOpen(false);

    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${isScrolled || isOpen ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main navigation">
        <a href="#home" className="navbar__brand" onClick={closeMenu} aria-label="NexaFlow home">
          <Logo />
        </a>

        <ul id="primary-menu" className={`navbar__links ${isOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className={activeId === href.slice(1) ? 'is-active' : ''}
                aria-current={activeId === href.slice(1) ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="navbar__menu-cta">
            <a href="#contact" className="btn btn--primary btn--block" onClick={closeMenu}>
              Get Started
            </a>
          </li>
        </ul>

        <a href="#contact" className="btn btn--primary navbar__cta">
          Get Started
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
