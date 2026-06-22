import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './ProductsPage.css';

import allProducts from '../assets/All-products.jpeg';
import limonade from '../assets/Limonade copy.png';
import boronic from '../assets/Boronic copy.png';
import boza from '../assets/Boza copy.png';
import ujeMeLimon from '../assets/Uje-me-limon copy.png';

import SeoHead from '../components/SeoHead';

function ProductsPage() {
  const location = useLocation();
  const [shakingProduct, setShakingProduct] = useState(null);
  const [revealedProducts, setRevealedProducts] = useState({});


  const shakeProduct = (slug) => {
    setShakingProduct(null);
    requestAnimationFrame(() => {
      setShakingProduct(slug);
    });
  };

  // If navigation came with a hash (e.g. /produkte#product-boza), smooth scroll to it.
  useEffect(() => {

    if (!location.hash) return;

    const targetId = location.hash.replace('#', '');
    const el = document.getElementById(targetId);
    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.hash]);

  const productsData = [
    {
      id: 1,
      slug: 'lemonade',
      name: 'Classic Lemonade',
      desc: 'Our signature lemonade is crafted from carefully selected lemons and produced according to a tradition built over decades. With its vibrant citrus notes, balanced sweetness, and refreshing finish, it delivers a timeless taste experience that continues to define our commitment to quality.',
      image: limonade,
      bgColor: 'var(--color-limonade)',
      glowColor: 'rgba(251, 191, 36, 0.2)',
      reverse: false
    },
    {
      id: 2,
      slug: 'blueberry',
      name: 'Wild Blueberry Beverage',
      desc: 'Created using premium blueberries, this beverage captures the richness and natural character of the fruit while maintaining a smooth and refreshing profile. Every sip reflects our dedication to exceptional ingredients and carefully developed recipes.',
      image: boronic,
      bgColor: 'var(--color-boronic)',
      glowColor: 'rgba(79, 70, 229, 0.15)',
      reverse: true
    },
    {
      id: 3,
      slug: 'boza',
      name: 'Traditional Boza',
      desc: 'Produced according to a recipe that has been preserved for generations, our Traditional Boza embodies the heritage and craftsmanship upon which our company was founded. Its authentic taste and distinctive texture offer a genuine connection to tradition and culture.',
      image: boza,
      bgColor: 'var(--color-boza)',
      glowColor: 'rgba(217, 119, 6, 0.15)',
      reverse: false
    },
    {
      id: 4,
      slug: 'lemon-water',
      name: 'Lemon Water',
      desc: 'Combining purity and refreshment, our Lemon Water offers a clean, crisp taste enhanced by delicate lemon notes. Light, refreshing, and easy to enjoy, it is crafted for those who value simplicity, quality, and everyday wellbeing.',
      image: ujeMeLimon,
      bgColor: 'var(--color-uje)',
      glowColor: 'rgba(56, 189, 248, 0.15)',
      reverse: true
    }
  ];




  return (
    <div className="products-page-wrapper">
      <SeoHead
        title="Products - Rey Premium Beverages"
        description="Explore Rey drinks: classic lemonade, wild blueberry beverage, traditional boza, and lemon water—crafted with natural ingredients and authentic recipes."
        canonicalPath="/produkte"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Rey products",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Classic Lemonade", "url": "https://reydrinks.com/produkte#product-lemonade" },
            { "@type": "ListItem", "position": 2, "name": "Wild Blueberry Beverage", "url": "https://reydrinks.com/produkte#product-blueberry" },
            { "@type": "ListItem", "position": 3, "name": "Traditional Boza", "url": "https://reydrinks.com/produkte#product-boza" },
            { "@type": "ListItem", "position": 4, "name": "Lemon Water", "url": "https://reydrinks.com/produkte#product-lemon-water" }
          ]
        }}
      />

      {/* Hero with all products background */}

      <section className="products-hero" style={{ backgroundImage: `url(${allProducts})` }}>
        <div className="products-hero-overlay"></div>
        <div className="container products-hero-content" data-aos="fade-up" data-aos-duration="950" data-aos-delay="100">
          <h1>
            Taste the <span className="text-gradient">Difference</span>
          </h1>
          <p>
            Every bottle is crafted with quality ingredients, authentic recipes, and flavors designed to leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Alternating Products */}
      <div className="products-showcase" id="products">
        {productsData.map((prod, idx) => {
          const imageClasses = [
            'showcase-image',
            shakingProduct === prod.slug ? 'is-shaking' : '',
            revealedProducts[prod.slug] ? 'reveal-visible' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
          <section
            key={prod.id}
            id={`product-${prod.slug}`}
            className={`showcase-section ${prod.reverse ? 'reverse' : ''}`}
            data-accent={prod.bgColor}
            data-product-name={prod.name}
            style={{ ['--splash-color']: prod.bgColor }}
          >
            <div className="container showcase-container">
              <div
                className={imageClasses}
                data-aos={prod.reverse ? 'slide-product-right' : 'slide-product-left'}
                data-aos-duration="1450"
                data-aos-delay={100 + idx * 100}
                role="button"
                tabIndex={0}
                aria-label={`Shake ${prod.name}`}
                onClick={() => shakeProduct(prod.slug)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    shakeProduct(prod.slug);
                  }
                }}
                onTransitionEnd={(e) => {
                  if (e.propertyName === 'transform') {
                    setRevealedProducts((prev) => ({ ...prev, [prod.slug]: true }));
                  }
                }}
              >
                <div className="splash-blob" style={{ backgroundColor: prod.bgColor }}></div>
                <div className="splash-ripple" style={{ backgroundColor: prod.bgColor }}></div>
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="product-soda"
                  onAnimationEnd={(e) => {
                    if (e.animationName === 'shakeDrink') {
                      setShakingProduct(null);
                    }
                  }}
                />
              </div>
              <div className="showcase-text" data-aos="fade-up" data-aos-duration="1300" data-aos-delay={100 + idx * 100}>
                <h2>{prod.name}</h2>
                <p>{prod.desc}</p>
              </div>
            </div>
          </section>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
