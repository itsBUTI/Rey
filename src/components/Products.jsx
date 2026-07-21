import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import boronic from '../assets/boronicashishe.png';
import boza from '../assets/bozashishe.png';
import limonade from '../assets/limonadashishe.png';
import ujeMeLimon from '../assets/lemonwatershishe.png';


function ProductCard({ product, idx, navigate, getDiscoverText }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((y / rect.height) - 0.5) * -18;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="product-card"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay={100 + idx * 100}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHovered ? {
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: 'transform 0.1s ease-out',
        transformStyle: 'preserve-3d',
        zIndex: 20,
      } : {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        transformStyle: 'preserve-3d',
        zIndex: 1,
      }}
    >
      <div className="product-bg-glow" style={{ background: product.glowColor }}></div>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.desc}</p>
        <div className="product-meta">
          <span className="meta-item">{product.meta}</span>
        </div>

        <div className="product-actions" style={{ marginTop: '1.25rem' }}>
          <button
            type="button"
            className="btn-product"
            data-product={product.slug}
            onClick={() => navigate(`/produkte#product-${product.slug}`)}
          >
            Discover {getDiscoverText(product.slug)}
          </button>
        </div>
      </div>
    </div>
  );
}

function Products() {
  const navigate = useNavigate();

  const productsList = [
    {
      id: 1,
      slug: 'lemonade',
      name: 'Classic Lemonade',
      desc: 'A bright, well-balanced lemonade made with carefully selected lemons.',
      meta: '100% Natural • No Preservatives',
      image: limonade,
      glowColor: 'rgba(251, 191, 36, 0.45)',
    },
    {
      id: 2,
      slug: 'blueberry',
      name: 'Wild Blueberry Beverage',
      desc: 'A flavorful drink that highlights the natural character of wild blueberries.',
      meta: 'Antioxidant Rich • Cold-Pressed',
      image: boronic,
      glowColor: 'rgba(79, 70, 229, 0.30)',
    },
    {
      id: 3,
      slug: 'boza',
      name: 'Traditional Boza',
      desc: 'A heritage-style fermented beverage with an authentic, full-bodied taste.',
      meta: 'Naturally Fermented • Traditional Recipe',
      image: boza,
      glowColor: 'rgba(217, 119, 6, 0.30)',
    },
    {
      id: 4,
      slug: 'lemon-water',
      name: 'Lemon Water',
      desc: 'Clean, crisp hydration with a light and refreshing touch of lemon.',
      meta: 'Zero Calories • Pure Hydration',
      image: ujeMeLimon,
      glowColor: 'rgba(56, 189, 248, 0.30)',
    }
  ];

  const featured = productsList;

  const getDiscoverText = (slug) => {
    switch (slug) {
      case 'lemonade': return 'Lemonade';
      case 'blueberry': return 'Blueberry';
      case 'boza': return 'Boza';
      case 'lemon-water': return 'Lemon Water';
      default: return 'Product';
    }
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up" data-aos-duration="900" data-aos-delay="100">
          <h2>Featured Drinks</h2>
          <p>
            Fresh, crafted beverages designed for real everyday moments. Discover flavors that make each sip feel intentionally made.
          </p>
        </div>

        <div className="products-grid">
          {featured.map((product, idx) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              idx={idx} 
              navigate={navigate} 
              getDiscoverText={getDiscoverText} 
            />
          ))}
        </div>

        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >
          <button type="button" className="btn-primary" onClick={() => navigate('/produkte')}>
            See All Drinks
          </button>
        </div>
      </div>
    </section>
  );
}


export default Products;
