import Hero from '../components/Hero';

import Products from '../components/Products';
import Heritage from '../components/Heritage';
import SeoHead from '../components/SeoHead';

function Home() {
  return (
    <>
      <SeoHead
        title="Rey - Premium Beverages Since 1969"
        description="Rey premium beverages since 1969 — natural ingredients, authentic recipes, and refreshing taste in every bottle."
        canonicalPath="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Rey Drinks",
          "url": "https://reydrinks.com/",
"logo": "https://reydrinks.com/Logo.png"

        }}
      />

      <Hero />
      <Products />
      <Heritage />
    </>
  );
}


export default Home;

