import SeoHead from '../components/SeoHead';
import './FaqPage.css';

function FaqPage() {
  const faqs = [
    {
      q: 'What products does Rey offer?',
      a: 'Rey offers a curated lineup of premium beverages including Classic Lemonade, Wild Blueberry Beverage, Traditional Boza, and Lemon Water.'
    },
    {
      q: 'Are Rey drinks made with natural ingredients?',
      a: 'Yes. We focus on natural ingredients and authentic recipes so each bottle delivers fresh, balanced flavor.'
    },
    {
      q: 'Do you offer wholesale or distribution?',
      a: 'Yes. If you’re interested in wholesale or distribution, use the Contact page and include your city and estimated monthly volume.'
    },
    {
      q: 'How can I contact Rey?',
      a: 'Send us a message through the Contact page form, or use the business information shown on that page.'
    },
    {
      q: 'Where are you located?',
      a: 'Rey is based in Prizren, Kosovo. We serve customers and distribution partners locally and beyond.'
    }
  ];

  return (
    <div className="faq-page-wrapper">
      <SeoHead
        title="FAQ - Rey Drinks"
        description="Frequently asked questions about Rey products, ingredients, and wholesale/distribution."
        canonicalPath="/faq"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a
            }
          }))
        }}
      />

      <section className="faq-hero">
        <div className="faq-hero-overlay" />
        <div className="container faq-hero-content" data-aos="fade-up" data-aos-duration="950" data-aos-delay="100">
          <h1>Frequently Asked Questions</h1>
          <p>Quick answers about Rey beverages, ingredients, and wholesale/distribution.</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-grid">
          <div className="faq-list" data-aos="fade-up" data-aos-duration="950" data-aos-delay="100">
            {faqs.map((item, idx) => (
              <article key={idx} className="faq-item">
                <h2 className="faq-question">{item.q}</h2>
                <p className="faq-answer">{item.a}</p>
              </article>
            ))}
          </div>

          <aside className="faq-aside" data-aos="fade-up" data-aos-duration="950" data-aos-delay="200">
            <h2>Still have a question?</h2>
            <p>
              Send us a message and our team will get back to you as soon as possible.
            </p>
            <a className="btn-primary" href="/contact">
              Contact Rey
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default FaqPage;

