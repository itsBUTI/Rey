import logo from '../assets/Logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <img src={logo} alt="Rey logo" />
              <span>Rey.</span>
            </div>

            <p className="footer-tagline">
              We bring freshness to your everyday life with absolute quality, natural ingredients, and dedication in
              every detail.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="./about">About Rey</a>
              </li>
              <li>
                <a href="/produkte">Products</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Subscribe for updates</h4>
            <p className="footer-subtitle">
              Get announcements about new products, special offers, and news from Rey—straight to your inbox.
            </p>

            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; {new Date().getFullYear()} Rey Drinks. All rights reserved.</p>

          <div className="footer-socials" aria-label="Social links">
            <a href="#" aria-label="Facebook" className="footer-social">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="footer-social">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="footer-social">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="footer-social">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


