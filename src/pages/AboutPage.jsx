import './AboutPage.css';


import aboutImage1 from '../assets/Logo copy.JPG';
import aboutImage2 from '../assets/hero-home.png';

import SeoHead from '../components/SeoHead';


function AboutPage() {
  return (
    <div className="about-page-wrapper">
      <SeoHead
        title="About Rey - Premium Beverages Since 1969"
        description="Learn about Rey: a family legacy since 1969, natural ingredients, authentic recipes, and consistent quality in every bottle."
        canonicalPath="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Rey",
          "url": "https://reydrinks.com/about"
        }}
      />
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div
          className="container about-hero-content"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          <h1>
            About <span className="text-gradient">Rey</span>
          </h1>
          <p>
            We craft premium beverages with natural ingredients, honest recipes, and the kind of care you can taste in
            every bottle.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-grid">
          <div className="about-copy" data-aos="fade-up" data-aos-duration="900" data-aos-delay="100">
            <h2>Our Story</h2>
            <p>
              Rey started in 1969 as a family business focused on quality and tradition. What began with simple recipes
              grew into a company known for fresh flavors and dependable standards.
            </p>
            <p>
              Today, we keep the heart of the process: carefully chosen ingredients, time-tested methods, and continuous
              improvement—so every sip delivers a balanced, refreshing experience.
            </p>

            <div className="about-highlights">
              <div
                className="about-highlight"
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="100"
              >
                <div className="about-highlight-icon">✓</div>
                <div>
                  <h3>Natural Ingredients</h3>
                  <p>We prioritize quality fruits, grains, and components chosen for real taste.</p>
                </div>
              </div>

              <div
                className="about-highlight"
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="200"
              >
                <div className="about-highlight-icon">✓</div>
                <div>
                  <h3>Consistent Craft</h3>
                  <p>Every batch follows a reliable process—built to keep flavors stable and clean.</p>
                </div>
              </div>

              <div
                className="about-highlight"
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay="300"
              >
                <div className="about-highlight-icon">✓</div>
                <div>
                  <h3>Made for Everyday Moments</h3>
                  <p>From family gatherings to busy workdays, Rey is designed to fit life.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-images" data-aos="fade-up" data-aos-duration="900" data-aos-delay="100">
            <div className="about-image-card" data-aos="fade-up" data-aos-duration="900" data-aos-delay="100">
              <img src={aboutImage1} alt="Rey brand" />
            </div>
            <div className="about-image-card about-image-card--second" data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
              <img src={aboutImage2} alt="Rey products" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container values-grid">
          <div className="values-card" data-aos="fade-up" data-aos-duration="850" data-aos-delay="100">
            <h2>Vision</h2>
            <p>
              To become one of the most recognized beverage brands in Kosovo and beyond—offering wholesome flavors
              with modern quality.
            </p>
          </div>
          <div className="values-card" data-aos="fade-up" data-aos-duration="850" data-aos-delay="200">
            <h2>Mission</h2>
            <p>
              To create distinctive drinks with dedication and high standards—blending tradition with innovation while
              keeping customer satisfaction at the center.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;





