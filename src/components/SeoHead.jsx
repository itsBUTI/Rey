import { useEffect } from 'react';

function setMetaTag(name, content, propName = 'name') {
  if (!content) return;
  const selector = propName === 'name' ? `meta[name="${name}"]` : `meta[property="${name}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(propName, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setOgTag(property, content) {
  setMetaTag(property, content, 'property');
}

function setJsonLd(id, data) {
  const existing = document.head.querySelector(
    `script[type="application/ld+json"][data-seo-jsonld-id="${id}"]`
  );
  const text = JSON.stringify(data);
  if (existing) {
    existing.textContent = text;
    return;
  }
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-seo-jsonld-id', id);
  script.textContent = text;
  document.head.appendChild(script);
}

function useSeoHead({
  title,
  description,
  canonicalPath = '/',
  ogImage,
  ogType = 'website',
  jsonLd,
}) {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || '';
    const normalizedSite = siteUrl.replace(/\/$/, '');

    const canonical = `${normalizedSite}${canonicalPath.startsWith('/') ? '' : '/'}${canonicalPath}`;

    if (title) document.title = title;
    if (description) setMetaTag('description', description, 'name');

    setMetaTag('robots', 'index,follow', 'name');
    setLinkTag('canonical', canonical);

    // OpenGraph
    setOgTag('og:title', title);
    setOgTag('og:description', description);
    setOgTag('og:type', ogType);
    setOgTag('og:url', canonical);
    if (ogImage) {
      setOgTag('og:image', `${normalizedSite}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`);
    }

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image', 'name');
    setMetaTag('twitter:title', title, 'name');
    setMetaTag('twitter:description', description, 'name');
    if (ogImage) {
      setMetaTag(
        'twitter:image',
        `${normalizedSite}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`,
        'name'
      );
    }

    // JSON-LD
    if (jsonLd) {
      if (Array.isArray(jsonLd)) {
        jsonLd.forEach((item, idx) => setJsonLd(`ld-${idx}`, item));
      } else {
        setJsonLd('ld-main', jsonLd);
      }
    }
  }, [title, description, canonicalPath, ogImage, ogType, jsonLd]);
}

export default function SeoHead(props) {
  useSeoHead(props);
  return null;
}


