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
            <a href="https://facebook.com" aria-label="Facebook" className="footer-social" target="_blank" rel="noreferrer">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/reydrinksofficial/" aria-label="Instagram" className="footer-social" target="_blank" rel="noreferrer">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@reydrinksofficial" aria-label="TikTok" className="footer-social" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.7 6.1c.9.7 2 1.1 3.3 1.1v3.2c-1.7 0-3.1-.5-4.4-1.3v7.2c0 3.2-2.6 5.8-5.8 5.8S4 20.5 4 17.3c0-3.2 2.6-5.8 5.8-5.8.3 0 .6 0 .9.1v3.4c-.3-.1-.6-.2-1-.2-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4V2h3.4c0 1.6.6 2.9 1.8 4.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


