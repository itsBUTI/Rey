
import { Link } from 'react-router-dom';

import limonade from '../assets/limonadashishe.png';
import boronic from '../assets/boronicashishe.png';
import boza from '../assets/bozashishe.png';
import lemonWater from '../assets/lemonwatershishe.png';

function Hero() {

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div
          className="hero-text"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          <span className="hero-badge">NATURALLY REFRESHING. MADE FOR REAL LIFE.</span>
          <h1>
            Freshness from nature, <span className="text-gradient">delivered in your bottle.</span>
          </h1>
          <p>
            Real ingredients. Pure taste. No compromises. Drinks that refresh your body and fuel your day.
          </p>
          <div className="hero-actions">
            <Link to="/produkte" className="btn-primary">Explore Products  ➔</Link>
            <Link to="/about" className="btn-secondary">
              <span className="play-icon">▶</span> Our Story
            </Link>
          </div>
        </div>

        {/* ─── Hero 4-Bottle Showcase ─── */}
        <div
          className="hero-3d-scene"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="hero-bottles-arrangement">
            <div className="hero-bottle hero-bottle--back-left">
              <img src={boronic} alt="Wild Blueberry" />
            </div>
            <div className="hero-bottle hero-bottle--back-right">
              <img src={boza} alt="Traditional Boza" />
            </div>
            <div className="hero-bottle hero-bottle--front-left">
              <img src={limonade} alt="Classic Lemonade" />
            </div>
            <div className="hero-bottle hero-bottle--front-right">
              <img src={lemonWater} alt="Lemon Water" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
