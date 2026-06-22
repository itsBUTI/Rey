
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import './App.css';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';

function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [location.pathname, location.hash]);

  return null;
}

function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll('[data-aos]'));
    const frameIds = [];
    const timeoutIds = [];

    const revealElement = (el) => {
      if (el.classList.contains('reveal-visible')) return;

      const timeoutId = window.setTimeout(() => {
        const frameId = requestAnimationFrame(() => {
          el.classList.add('reveal-visible');
        });

        frameIds.push(frameId);
      }, 80);

      timeoutIds.push(timeoutId);
    };

    revealEls.forEach((el) => {
      const duration = el.getAttribute('data-aos-duration') || '900';
      const delay = el.getAttribute('data-aos-delay') || '0';

      el.classList.remove('reveal-visible');
      el.style.setProperty('--reveal-duration', `${duration}ms`);
      el.style.setProperty('--reveal-delay', `${delay}ms`);
    });

    if (!('IntersectionObserver' in window)) {
      const frameId = requestAnimationFrame(() => {
        revealEls.forEach((el) => revealElement(el));
      });

      return () => cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          revealElement(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -16% 0px',
      }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      frameIds.forEach((frameId) => cancelAnimationFrame(frameId));
    };
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <ScrollToTop />
        <ScrollReveal />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/produkte" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
