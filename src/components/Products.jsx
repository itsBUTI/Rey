import { useNavigate } from 'react-router-dom';


import boronic from '../assets/Boronic.png';
import boza from '../assets/Boza.png';
import limonade from '../assets/Limonade.png';
import ujeMeLimon from '../assets/Uje-me-limon.png';


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
      glowColor: 'rgba(251, 191, 36, 0.45)'
    },
    {
      id: 2,
      slug: 'blueberry',
      name: 'Wild Blueberry Beverage',
      desc: 'A flavorful drink that highlights the natural character of wild blueberries.',
      meta: 'Antioxidant Rich • Cold-Pressed',
      image: boronic,
      glowColor: 'rgba(79, 70, 229, 0.30)'
    },
    {
      id: 3,
      slug: 'boza',
      name: 'Traditional Boza',
      desc: 'A heritage-style fermented beverage with an authentic, full-bodied taste.',
      meta: 'Naturally Fermented • Traditional Recipe',
      image: boza,
      glowColor: 'rgba(217, 119, 6, 0.30)'
    },
    {
      id: 4,
      slug: 'lemon-water',
      name: 'Lemon Water',
      desc: 'Clean, crisp hydration with a light and refreshing touch of lemon.',
      meta: 'Zero Calories • Pure Hydration',
      image: ujeMeLimon,
      glowColor: 'rgba(56, 189, 248, 0.30)'
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
            <div
              className="product-card"
              key={product.id}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={100 + idx * 100}
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
                    className="btn-primary"
                    onClick={() => navigate(`/produkte#product-${product.slug}`)}
                  >
                    Discover {getDiscoverText(product.slug)}
                  </button>
                </div>
              </div>
            </div>
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
