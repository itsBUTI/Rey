
import allProducts from '../assets/All-products.jpeg';

import { Link } from 'react-router-dom';

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
          <span className="hero-badge">Founded in 1969 — Premium Beverages</span>
          <h1>
            Freshness from nature, delivered in <span className="text-gradient">your bottle.</span>
          </h1>
          <p>
            Experience true purity with Rey. We blend time-tested recipes with the freshest ingredients to deliver drinks that not only quench your thirst, but energize your day.
          </p>
          <div className="hero-actions">
            <Link to="/produkte" className="btn-primary">View Products</Link>
            <Link to="/about" className="btn-secondary">Read Our Story</Link>
          </div>
        </div>

        <div
          className="hero-image-wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img src={allProducts} alt="Koleksioni i produkteve Rey" className="hero-image" />
        </div>
      </div>
    </section>
  );
}


export default Hero;
