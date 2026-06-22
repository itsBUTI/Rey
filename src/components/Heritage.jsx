
import logo from '../assets/Logo.png';

function Heritage() {
  return (
    <section id="heritage" className="split-section">
      <div className="container split-content">
        <div
          className="split-image-wrapper"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          <div className="split-image-inner animate-float">
            <img
              src={logo}
              alt="Emblema Rey"
              style={{ borderRadius: '50%', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
        <div
          className="split-text"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >
          <h2><span >Our story</span> & Values</h2>
          <p>
            What began as a simple family recipe has grown into a standard of quality for refreshing beverages. At Rey, we believe great taste should never compromise on health.
          </p>
          <p>
            Our process is rooted in natural ingredients. We use only the best fruits and grains to ensure every bottle delivers authentic flavor—just as nature intended.
          </p>

          <div className="feature-list">
            <div className="feature-item" data-aos="fade-up" data-aos-duration="850" data-aos-delay="100">
              <div className="feature-icon-wrapper">✓</div>
              <div>
                <h4>Since 1969</h4>
                <p>
                  Our story started in 1969 with the opening of a confectionery shop, after our family transitioned from a rural village to the city.
                </p>
              </div>
            </div>
            <div className="feature-item" data-aos="fade-up" data-aos-duration="850" data-aos-delay="200">
              <div className="feature-icon-wrapper">✓</div>
              <div>
                <h4>Mission</h4>
                <p>
                  To create beverages with distinctive flavors, crafted with dedication and high standards—by blending tradition with modern innovation, with customer satisfaction as our top priority.
                </p>
              </div>
            </div>
            <div className="feature-item" data-aos="fade-up" data-aos-duration="850" data-aos-delay="300">
              <div className="feature-icon-wrapper">✓</div>
              
              <div>
                <h4>Vision</h4>
                <p>
                  To become one of the most recognized brands in Kosovo and beyond—offering healthy desserts and beverages of the highest quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Heritage;
