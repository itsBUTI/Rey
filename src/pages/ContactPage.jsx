import { useState } from 'react';

import emailjs from 'emailjs-com';
import './ContactPage.css';
import SeoHead from '../components/SeoHead';


function ContactPage() {
  const [form, setForm] = useState({

    name: '',
    email: '',
    phone: '',
    subject: 'General inquiry',
    message: ''
  });

  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!form.name.trim()) {
      setStatus({ type: 'error', text: 'Please enter your name.' });
      return;
    }
    if (!emailOk) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      setStatus({ type: 'error', text: 'Please write a short message (at least 10 characters).' });
      return;
    }

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setStatus({
          type: 'error',
          text: 'Email service is not configured. Please try again later.'
        });
        return;
      }

      setStatus({ type: 'sending', text: '' });

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        from_phone: form.phone,
        subject: form.subject,
        message: form.message
      };

      const res = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('EmailJS send result:', res);

      setStatus({
        type: 'success',
        text: 'Thanks! Your message has been sent successfully.'
      });

      setForm({
        name: '',
        email: '',
        phone: '',
        subject: 'General inquiry',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        text: 'Something went wrong while sending your message. Please try again.'
      });
    }
  };

  return (
    <div className="contact-page-wrapper">
      <SeoHead
        title="Contact - Rey Drinks"
        description="Contact Rey for premium beverages, wholesale requests, and distribution opportunities."
        canonicalPath="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Rey",
          "url": "https://reydrinks.com/contact"
        }}
      />
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="container contact-hero-content" data-aos="fade-up" data-aos-duration="950" data-aos-delay="100">
          <h1>Contact</h1>
          <p>
            Have a question about our drinks, supply opportunities, or distribution? Send us a message and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-layout">
          <div className="contact-card" data-aos="fade-up" data-aos-duration="950" data-aos-delay="100">
            <h2>Send us a message</h2>
            <p className="contact-subtitle">
              We typically respond within 1–2 business days.
            </p>

            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-grid">
                <label className="field">
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="John Smith"
                    autoComplete="name"
                  />
                </label>

                <label className="field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="john@example.com"
                    autoComplete="email"
                  />
                </label>

                <label className="field">
                  <span>Phone (optional)</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+383 ..."
                    autoComplete="tel"
                  />
                </label>

                <label className="field">
                  <span>Subject</span>
                  <select name="subject" value={form.subject} onChange={onChange}>
                    <option>General inquiry</option>
                    <option>Wholesale / Distribution</option>
                    <option>Partnership</option>
                    <option>Press / Media</option>
                  </select>
                </label>
              </div>

              <label className="field">
                <span>Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us what you need..."
                  rows={6}
                />
              </label>

              {status.type === 'error' && (
                <div className="contact-status error" role="status">
                  {status.text}
                </div>
              )}

              <button 
                type="submit" 
                className="btn-primary contact-submit" 
                disabled={status.type === 'sending'}
              >
                {status.type === 'sending' ? 'Sending...' : 'Submit message'}
              </button>
            </form>
          </div>

          {status.type === 'success' && (
            <div className="success-modal-overlay">
              <div className="success-modal">
                <div className="success-icon">✓</div>
                <h3>Message Sent</h3>
                <p>We'll get back to you within 1-2 business days.</p>
                <button className="btn-primary" onClick={() => setStatus({ type: 'idle', text: '' })}>
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="contact-side" data-aos="fade-up" data-aos-duration="950" data-aos-delay="200">
            <div className="contact-info">
              <h2>Business information</h2>
              <div className="info-row">
                <div className="info-label">Email</div>
                <div className="info-value">reydrinks1969@gmail.com</div>
              </div>
              <div className="info-row">
                <div className="info-label">Phone</div>
                <div className="info-value">+383 48 884 221 </div>
              </div>
              <div className="info-row">
                <div className="info-label">Location</div>
                <div className="info-value">Prizren, Kosovo</div>
              </div>

              <div className="info-note">
                For wholesale and distribution requests, please include your city and estimated monthly volume.
              </div>
            </div>

            {/* <div className="contact-map-card">
              <h3>Visit us</h3>
              <p className="map-subtitle">We’re available during business hours.</p>
              <div className="map-placeholder" aria-hidden="true">
                Map preview
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
