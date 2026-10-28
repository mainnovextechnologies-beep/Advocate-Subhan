import React, { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Scale,
  Landmark,
  FileCheck,
  House,
  Building2,
  ShieldCheck,
  Menu,
  X,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Shield,
  Gavel,
  ExternalLink,
} from "lucide-react";
import { siteConfig as c } from "./config/siteConfig";

const iconMap = {
  scale: Scale,
  landmark: Landmark,
  "file-check": FileCheck,
  house: House,
  "building-2": Building2,
  "shield-check": ShieldCheck,
};
// Only files whose basename starts with "subhan" are eligible gallery assets.
// The cover portrait subhan001.png is intentionally excluded from the gallery.
const galleryModules = import.meta.glob(
  "./assets/images/subhan*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

// const galleryImages = Object.entries(galleryModules).map(([path, src]) => ({
//   src,
//   name: path.split("/").pop(),
// }));
const galleryImages = [
  '/images/subhan001.png',
  '/images/subhan02.png',
  '/images/subhan03.png',
  '/images/subhan04.png',
  '/images/subhan05.png',
  '/images/subhan06.png',
  '/images/subhan07.png',
  '/images/subhan08.png',
  '/images/subhan09.jpeg'

].map((src) => ({
  src,
  name: src.split('/').pop(),
}));
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "Civil matter",
    details: "",
    contact: "WhatsApp",
  });
  const [formError, setFormError] = useState("");
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.mapQuery || "Near Balaji Colony Nellore Andhra Pradesh 524002")}`;
  const phoneDigits = String(c.phoneWhatsApp || c.phone || c.phoneDisplay || "").replace(/\D/g, "");
  const callHref = phoneDigits ? `tel:+${phoneDigits}` : "";
  const whatsappHref = (message = "") => phoneDigits
    ? `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`
    : "https://wa.me/";
  const nav = [
    ["Practice areas", "#practice"],
    ["About", "#about"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ];
  const submitForm = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.category) {
      setFormError("Please fill in your name, phone number and matter category.");
      return;
    }
    setFormError("");
    const message = [
      "Legal enquiry for Advocate Subhan",
      `Name: ${form.name.trim()}`,
      `Contact number: ${form.phone.trim()}`,
      `Matter: ${form.category}`,
      form.details.trim() ? `Details: ${form.details.trim()}` : "",
      `Preferred contact: ${form.contact}`,
    ].filter(Boolean).join("\\n");
    if (form.contact === "Phone call") {
      if (callHref) window.location.href = callHref;
      else setFormError("Office phone number is not configured. Update phoneWhatsApp or phoneDisplay in config/siteConfig.");
    } else {
      window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    }
  };
  const updateForm = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Advocate Subhan home">
          <span className="brand-mark">
            <Scale size={24} />
          </span>
          <span>
            <strong>ADVOCATE SUBHAN</strong>
            <small>LEGAL PRACTICE · </small>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <button
            className="nav-cta"
            onClick={() => {
              setMenuOpen(false);
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Make an enquiry <ArrowRight size={16} />
          </button>
        </nav>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" /> LEGAL GUIDANCE IN NELLORE
              </div>
              <h1>
                Clarity in law.
                <br />
                <em>Confidence in every step.</em>
              </h1>
              <p className="hero-lead">
                Thoughtful legal guidance and representation for civil,
                criminal, property and related legal matters.
              </p>
              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Discuss your matter <ArrowRight size={17} />
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => (callHref ? (window.location.href = callHref) : document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }))}
                >
                  <Phone size={17} /> Call the office
                </button>
              </div>
              <div className="hero-trust">
                <div className="trust-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <strong>Professional. Clear. Confidential.</strong>
                  <span>Every matter deserves careful attention.</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="portrait-frame">
                <img
                  src={c.profileImage}
                  alt="Advocate Subhan, professional portrait"
                  fetchPriority="high"
                />
                <div className="portrait-caption">
                  <span className="caption-rule" />
                  <span>
                    <strong>ADVOCATE SUBHAN</strong>
                    <small>Criminal Justice Attorney</small>
                  </span>
                </div>
              </div>
              <div className="hero-seal">
                <Scale size={25} />
                <span>
                  LEGAL
                  <br />
                  COUNSEL
                </span>
              </div>
              <div className="visual-note">
                <span className="note-dot" /> NELLORE, ANDHRA PRADESH
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#practice">
            <span>EXPLORE PRACTICE AREAS</span>
            <ArrowDown size={15} />
          </a>
          <div className="hero-watermark">S.</div>
        </section>
        <section className="quick-facts">
          <div className="fact">
            <span className="fact-icon">
              <MapPin size={20} />
            </span>
            <div>
              <small>LOCATION</small>
              <strong>Near Balaji Colony Nellore Andhra Pradesh 524002</strong>
            </div>
          </div>
          <div className="fact">
            <span className="fact-icon">
              <Gavel size={20} />
            </span>
            <div>
              <small>PRACTICE</small>
              <strong>Civil & Criminal Matters</strong>
            </div>
          </div>
          <div className="fact">
            <span className="fact-icon">
              <Star size={20} />
            </span>
            <div>
              <small>CLIENT RATING</small>
              <strong>
                {c.rating} / 5{" "}
                <span className="fact-muted">({c.reviewCount} reviews)</span>
              </strong>
            </div>
          </div>
        </section>
        <section className="section practice-section" id="practice">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW WE CAN HELP</p>
              <h2>
                Legal matters, <em>handled with care.</em>
              </h2>
            </div>
            <p className="section-intro">
              Explore the areas of law for which you can make an enquiry. The
              appropriate service and representation depend on the facts and
              jurisdiction of each matter.
            </p>
          </div>
          <div className="practice-grid">
            {c.practiceAreas.map((area, i) => {
              const Icon = iconMap[area.icon] || Scale;
              return (
                <article className="practice-card" key={area.title}>
                  <div className="card-top">
                    <span className="practice-icon">
                      <Icon size={23} />
                    </span>
                    <span className="card-number">0{i + 1}</span>
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <div className="tag-list">
                    {area.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href="#contact" className="text-link">
                    Enquire about this <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
          <p className="practice-note">
            Court appearances and higher-court matters are subject to applicable
            professional authorization and engagement.
          </p>
        </section>
        <section className="about-section" id="about">
          <div className="about-image-wrap">
            <img src={c.profileImage} alt="Advocate Subhan" loading="lazy" />
            <div className="about-image-label">
              <Scale size={20} />
              <span>
                ADVOCATE SUBHAN<small>NELLORE, ANDHRA PRADESH</small>
              </span>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A CLIENT-CENTRED APPROACH</p>
            <h2>
              Legal guidance that starts with <em>listening.</em>
            </h2>
            <p>
              Every legal matter has its own circumstances. Advocate Subhan is
              based in Nellore and handles enquiries across civil, criminal,
              land and property, cheque bounce, bail and related matters.
            </p>
            <p>
              The focus is on understanding the concern, explaining the legal
              process in clear language, and discussing appropriate next steps
              with professionalism and discretion.
            </p>
            <div className="values-list">
              <div>
                <CheckCircle2 size={19} />
                <span>
                  <strong>Clear communication</strong>
                  <small>Understand the process and possible next steps.</small>
                </span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>
                  <strong>Careful attention</strong>
                  <small>
                    Consideration of the circumstances of each matter.
                  </small>
                </span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>
                  <strong>Respect for privacy</strong>
                  <small>
                    Share only information necessary for an initial enquiry.
                  </small>
                </span>
              </div>
            </div>
            <a href="#contact" className="btn btn-light">
              Get in touch <ArrowRight size={16} />
            </a>
          </div>
        </section>
        {galleryImages.length > 0 && (
          <section className="section gallery-section" id="gallery">
            <div className="section-heading">
              <div>
                <p className="eyebrow">GALLERY</p>
                <h2>
                  Inside the <em>practice.</em>
                </h2>
              </div>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((img) => (
                <figure key={img.name}>
                  <img
                    src={img.src}
                    alt={`Advocate Subhan — ${img.name}`}
                    loading="lazy"
                    onClick={() => setPreviewImage(img)}
                    style={{ cursor: 'zoom-in' }}
                  />
                  <figcaption>{img.name}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
        {previewImage && (
          <div
            className="image-preview-overlay"
            onClick={() => setPreviewImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              type="button"
              className="image-preview-close"
              onClick={() => setPreviewImage(null)}
              aria-label="Close image preview"
            >
              &times;
            </button>

            <img
              src={previewImage.src}
              alt={previewImage.name}
              className="image-preview-full"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
        <section className="reviews-section" id="reviews">
          <div className="reviews-inner">
            <div className="reviews-heading">
              <p className="eyebrow">CLIENT FEEDBACK</p>
              <h2>
                Words that <em>matter.</em>
              </h2>
              <p>
                Client feedback and ratings are displayed as provided by the practice.
              </p>
              <div className="rating-summary">
                <strong>{c.rating}</strong>
                <div>
                  <span className="stars">★★★★★</span>
                  <small>
                    {c.reviewCount} reviews
                  </small>
                </div>
              </div>
              {c.googleBusinessUrl && (
                <a
                  className="text-link"
                  href={c.googleBusinessUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Google reviews <ExternalLink size={15} />
                </a>
              )}
            </div>
            <div className="review-list">
              {c.reviews.map((r, i) => (
                <article className="review-card" key={r.name}>
                  <div className="review-top">
                    <div className="review-avatar">
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <strong>{r.name}</strong>
                      <small>{r.age}</small>
                    </div>
                    <span className="stars">★★★★★</span>
                  </div>
                  <p>“{r.text}”</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section faq-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GOOD TO KNOW</p>
              <h2>
                Frequently asked <em>questions.</em>
              </h2>
            </div>
            <p className="section-intro">
              A few useful details before you make an enquiry.
            </p>
          </div>
          <div className="faq-list">
            {c.faqs.map((faq, i) => (
              <article
                className={"faq-item " + (faqOpen === i ? "active" : "")}
                key={faq.q}
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                  aria-expanded={faqOpen === i}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={19} />
                </button>
                {faqOpen === i && <p>{faq.a}</p>}
              </article>
            ))}
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="contact-heading">
            <p className="eyebrow">START A CONVERSATION</p>
            <h2>
              Tell us how we can <em>help.</em>
            </h2>
            <p>
              Share a brief outline of your enquiry. Avoid sending confidential
              documents or unnecessary sensitive details through the enquiry form.
            </p>
            <div className="contact-detail">
              <span>
                <MapPin size={19} />
              </span>
              <div>
                <small>OFFICE LOCATION</small>
                <strong>{c.address}</strong>
                <a href={mapsUrl} target="_blank" rel="noreferrer">
                  Open directions in Google Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <Phone size={19} />
              </span>
              <div>
                <small>PHONE</small>
                <strong>{callHref ? <a href={callHref}>{c.phoneDisplay}</a> : c.phoneDisplay}</strong>
                <small className="muted">
                  Contact the office directly using the call button.
                </small>
              </div>
            </div>
            <div className="map-card">
              <iframe
  title="Map showing the office area in Nellore"
  src="https://maps.google.com/maps?q=14.4473382,79.967574&z=17&output=embed"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="map-open"
              >
                Open full map <ExternalLink size={14} />
              </a>
            </div>
          </div>
          <form className="enquiry-card" onSubmit={submitForm}>
            <div className="form-heading">
              <span className="form-icon">
                <MessageCircle size={21} />
              </span>
              <div>
                <h3>Enquiry form</h3>
                <p>Send your enquiry directly via your preferred contact method</p>
              </div>
            </div>
            <label>
              Full name
              <input
                name="name"
                value={form.name}
                onChange={updateForm}
                placeholder="Enter your name"
                required
                autoComplete="name"
              />
            </label>
            <div className="form-row">
              <label>
                Phone number
                <input
                  name="phone"
                  value={form.phone}
                  onChange={updateForm}
                  placeholder="Your contact number"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                />
              </label>
              <label>
                Legal matter
                <select
                  name="category"
                  value={form.category}
                  onChange={updateForm}
                >
                  <option>Civil matter</option>
                  <option>Criminal matter</option>
                  <option>Land / Property</option>
                  <option>Cheque bounce</option>
                  <option>Bail matter</option>
                  <option>POCSO matter</option>
                  <option>NDPS matter</option>
                  <option>Domestic violence</option>
                  <option>Appeal / EP</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <label>
              Brief description
              <textarea
                name="details"
                value={form.details}
                onChange={updateForm}
                placeholder="Briefly describe what kind of assistance you need (optional)"
                rows="4"
                maxLength="700"
              />
            </label>
            <label>
              Preferred contact
              <select name="contact" value={form.contact} onChange={updateForm}>
                <option>WhatsApp</option>
                <option>Phone call</option>
              </select>
            </label>
            {formError && (
              <p className="form-error" role="alert">
                {formError}
              </p>
            )}
            <button type="submit" className="btn btn-primary full">
              Prepare enquiry <ArrowRight size={17} />
            </button>
            <p className="form-disclaimer">
              <Shield size={14} /> Your enquiry opens in your selected contact app. Please avoid sharing confidential documents.
            </p>
          </form>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-main">
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark">
              <Scale size={23} />
            </span>
            <span>
              <strong>ADVOCATE SUBHAN</strong>
              <small>LEGAL PRACTICE · </small>
            </span>
          </a>
          <p>
            Professional legal enquiries for civil, criminal, property and
            related matters in , Andhra Pradesh.
          </p>
          <div className="footer-links">
            {nav.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Advocate Subhan. All rights reserved.
          </p>
          <p className="legal-disclaimer">
            This website is for general information only and does not constitute
            legal advice. No outcome is guaranteed.
          </p>
          <div className="made-by">
            <span>Website by</span>
            <img src={c.logo} alt="MA Innovex Technologies logo" />
            <strong>MA Innovex Technologies</strong>
          </div>
        </div>
      </footer>
      <div className="floating-actions">
        <button
          onClick={() => window.open(whatsappHref("Hello Advocate Subhan, I would like to make a legal enquiry."), "_blank", "noopener,noreferrer")}
          aria-label="Contact Advocate Subhan on WhatsApp"
          className="float-whatsapp"
        >
          <MessageCircle size={22} />
          <span>WhatsApp</span>
        </button>
        <button
                  onClick={() => (callHref ? (window.location.href = callHref) : document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }))}
          aria-label="Call Advocate Subhan"
          className="float-call"
        >
          <Phone size={20} />
          <span>Call</span>
        </button>
      </div>
    </>
  );
}
export default App;
