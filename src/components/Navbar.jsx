import { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/Logo.png';


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const scrollThreshold = 10; // minimum px delta before reacting

  const onScroll = useCallback(() => {
    if (ticking.current) return;

    ticking.current = true;
    requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // Only react after passing a small threshold to avoid jitter
      if (Math.abs(delta) > scrollThreshold) {
        // Scrolling down → hide (only if past the navbar height)
        if (delta > 0 && currentY > 100 && !menuOpen) {
          setHidden(true);
        }
        // Scrolling up → show
        if (delta < 0) {
          setHidden(false);
        }
        lastScrollY.current = currentY;
      }

      // Scrolled state for background glass effect
      setScrolled(currentY > 50);

      // If at the very top, always show
      if (currentY <= 10) {
        setHidden(false);
      }

      ticking.current = false;
    });
  }, [menuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  // Close menu on route change
  useEffect(() => {
    setTimeout(() => {
      setMenuOpen(false);
    }, 0);
  }, [location.pathname]);

  // When menu is open, always show navbar
  useEffect(() => {
    if (menuOpen) {
      setHidden(false);
    }
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path;

  const navClasses = [
    'navbar',
    scrolled ? 'scrolled' : '',
    hidden ? 'navbar--hidden' : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClasses}>
      <div className="container nav-container">
        <div className="nav-logo">
          <Link to="/" className="nav-logo-link" aria-label="Rey Home">
            <img src={logo} alt="Logo Rey" />
            <span>Rey.</span>
          </Link>
        </div>

        <button
          type="button"
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="nav-hamburger-bar" />
          <span className="nav-hamburger-bar" />
          <span className="nav-hamburger-bar" />
        </button>

        <div
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link
            to="/produkte"
            className={`nav-link ${isActive('/produkte') ? 'active' : ''}`}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
