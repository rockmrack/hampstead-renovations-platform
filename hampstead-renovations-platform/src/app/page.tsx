"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CostCalculatorWidget from "@/components/tools/CostCalculatorWidget";

// Animated Counter Hook
function useCountUp(end: number, duration: number = 2000, start: boolean = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);
  return count;
}

// Intersection Observer Hook
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const statsRef = useInView();

  const stats = [
    { value: 250, suffix: "+", label: "Projects Completed", icon: "🏠" },
    { value: 45, suffix: "M+", prefix: "£", label: "Project Value", icon: "💎" },
    { value: 4.9, suffix: "", label: "Client Rating", icon: "⭐", decimal: true },
    { value: 10, suffix: "yr", label: "Guarantee", icon: "🛡️" },
  ];

  const projectsCount = useCountUp(stats[0].value, 2000, statsRef.inView);
  const valueCount = useCountUp(stats[1].value, 2000, statsRef.inView);
  const ratingCount = useCountUp(49, 2000, statsRef.inView);
  const guaranteeCount = useCountUp(stats[3].value, 1500, statsRef.inView);

  const services = [
    { name: "Full House Renovation", href: "/services/full-house-renovation", desc: "Complete transformation from planning to handover", icon: "🏠", price: "From £150k", image: "linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)" },
    { name: "Extensions", href: "/services/extensions", desc: "Rear, side return, and wraparound extensions", icon: "🔨", price: "From £80k", image: "linear-gradient(135deg, #2d4a3e 0%, #3d6a5e 100%)" },
    { name: "Loft Conversions", href: "/services/loft-conversion", desc: "Add valuable living space under your roof", icon: "🏗️", price: "From £55k", image: "linear-gradient(135deg, #4a3d2d 0%, #6a5d4d 100%)" },
    { name: "Kitchen Renovation", href: "/services/kitchen-renovation", desc: "Bespoke kitchens designed for your lifestyle", icon: "🍳", price: "From £35k", image: "linear-gradient(135deg, #3d2d4a 0%, #5d4d6a 100%)" },
    { name: "Bathroom Renovation", href: "/services/bathroom-renovation", desc: "Luxury bathrooms and wet rooms", icon: "🛁", price: "From £15k", image: "linear-gradient(135deg, #2d3d4a 0%, #4d5d6a 100%)" },
    { name: "Painting & Decorating", href: "/services/painting-decorating", desc: "Premium finishes throughout your home", icon: "🎨", price: "From £8k", image: "linear-gradient(135deg, #4a2d3d 0%, #6a4d5d 100%)" },
  ];

  const testimonials = [
    { name: "Sarah & James Mitchell", location: "Hampstead, NW3", project: "Full House Renovation • £285,000", quote: "Exceptional attention to detail. Our Victorian terrace has been completely transformed while keeping all its period charm. The team understood our vision from day one.", rating: 5, avatar: "/avatars/1.jpg", before: "🏚️", after: "🏡" },
    { name: "Michael Richardson", location: "Primrose Hill, NW1", project: "Kitchen & Extension • £145,000", quote: "Professional from start to finish. The team managed everything including planning permission and party wall negotiations. We couldn't be happier with the result.", rating: 5, avatar: "/avatars/2.jpg", before: "🏠", after: "✨" },
    { name: "Charlotte Williams", location: "Belsize Park, NW3", project: "Loft Conversion • £78,000", quote: "Added a stunning master suite with en-suite bathroom and walk-in wardrobe. The finish quality is incredible. Genuinely worth every penny.", rating: 5, avatar: "/avatars/3.jpg", before: "📦", after: "🛏️" },
    { name: "David & Emma Chen", location: "St John's Wood, NW8", project: "Complete Refurbishment • £420,000", quote: "We trusted them with our dream home and they delivered beyond expectations. The attention to period details while creating a modern living space is remarkable.", rating: 5, avatar: "/avatars/4.jpg", before: "🔧", after: "💫" },
  ];

  const areas = [
    { name: "Hampstead", postcode: "NW3", projects: 47 },
    { name: "Belsize Park", postcode: "NW3", projects: 32 },
    { name: "Primrose Hill", postcode: "NW1", projects: 28 },
    { name: "St John's Wood", postcode: "NW8", projects: 35 },
    { name: "Highgate", postcode: "N6", projects: 24 },
    { name: "West Hampstead", postcode: "NW6", projects: 41 },
  ];

  const features = [
    { icon: "📐", title: "Design-Led Approach", desc: "Every project starts with detailed design, 3D visualisation, and material selection" },
    { icon: "📋", title: "Fixed-Price Contracts", desc: "No surprises - you know exactly what you're paying from day one" },
    { icon: "👷", title: "In-House Teams", desc: "Our skilled tradespeople work exclusively on our projects" },
    { icon: "🛡️", title: "10-Year Guarantee", desc: "Insurance-backed warranty on all structural work" },
    { icon: "📱", title: "Weekly Updates", desc: "Photo progress reports and clear communication throughout" },
    { icon: "🏆", title: "Award-Winning", desc: "Federation of Master Builders and TrustMark certified" },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <>
      {/* HERO - Cinematic Full-Screen */}
      <section className="hero">
        <div className="hero-video">
          <div className="hero-overlay"></div>
          <div className="hero-particles"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge glass-gold animate-slide-down">
            <span className="badge-pulse"></span>
            <span>NW London&apos;s Premier Renovation Specialists</span>
          </div>
          <h1 className="hero-title animate-slide-up">
            <span className="title-line">Transform Your</span>
            <span className="title-line gradient-text-animated">London Home</span>
          </h1>
          <p className="hero-subtitle animate-fade-in">
            Award-winning renovations trusted by 250+ homeowners across Hampstead,
            Belsize Park & North West London. Premium craftsmanship. 10-year guarantee.
          </p>
          <div className="hero-cta animate-scale-in">
            <Link href="/contact" className="btn btn-primary btn-xl glow-button">
              <span>Book Free Survey</span>
              <span className="btn-icon">→</span>
            </Link>
            <Link href="/case-studies" className="btn btn-glass btn-xl">
              <span className="play-icon">▶</span>
              <span>View Our Work</span>
            </Link>
          </div>
          <div className="hero-trust animate-fade-in-delayed">
            <div className="trust-logos">
              <span className="trust-logo">🏆 FMB</span>
              <span className="trust-logo">✓ TrustMark</span>
              <span className="trust-logo">⭐ 4.9★</span>
              <span className="trust-logo">🛡️ £5M Insured</span>
            </div>
          </div>
        </div>
        <div className="scroll-cta">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* STATS - Animated Counters */}
      <section className="stats-section" ref={statsRef.ref}>
        <div className="container">
          <div className="stats-card glass-premium">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-icon">{stats[0].icon}</span>
                <span className="stat-value">{projectsCount}+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">{stats[1].icon}</span>
                <span className="stat-value">£{valueCount}M+</span>
                <span className="stat-label">Project Value</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">{stats[2].icon}</span>
                <span className="stat-value">{(ratingCount / 10).toFixed(1)}</span>
                <span className="stat-label">Client Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">{stats[3].icon}</span>
                <span className="stat-value">{guaranteeCount}yr</span>
                <span className="stat-label">Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Feature Grid */}
      <section className="features-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2>The Hampstead Renovations <span className="highlight">Difference</span></h2>
            <p>What sets us apart from other London builders</p>
          </div>
          <div className="features-grid">
            {features.map((feature, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="calculator-section section section-dark">
        <div className="container">
          <div className="section-header light">
            <span className="section-eyebrow gold">Free Tool</span>
            <h2>Get Your Instant <span className="gradient-text">Renovation Estimate</span></h2>
            <p>See costs, timelines, and ROI projections in 60 seconds</p>
          </div>
          <CostCalculatorWidget />
        </div>
      </section>

      {/* SERVICES - Premium Cards */}
      <section className="services-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Services</span>
            <h2>Premium Renovation <span className="highlight">Services</span></h2>
            <p>Comprehensive solutions for discerning North West London homeowners</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <Link
                key={service.href}
                href={service.href}
                className="service-card-premium"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="service-image" style={{ background: service.image }}>
                  <span className="service-icon-large">{service.icon}</span>
                </div>
                <div className="service-content">
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                  <div className="service-meta">
                    <span className="service-price">{service.price}</span>
                    <span className="service-link">Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Carousel */}
      <section className="testimonials-section section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Client Stories</span>
            <h2>Trusted by <span className="highlight">250+ Homeowners</span></h2>
            <p>Real transformations from real clients</p>
          </div>
          <div className="testimonial-showcase">
            <div className="testimonial-main">
              <div className="testimonial-rating">
                {"★".repeat(testimonials[activeTestimonial].rating)}
              </div>
              <blockquote className="testimonial-quote">
                &quot;{testimonials[activeTestimonial].quote}&quot;
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[activeTestimonial].name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div className="author-info">
                  <strong>{testimonials[activeTestimonial].name}</strong>
                  <span>{testimonials[activeTestimonial].location}</span>
                  <span className="project-tag">{testimonials[activeTestimonial].project}</span>
                </div>
              </div>
              <div className="transformation-icons">
                <span className="before">{testimonials[activeTestimonial].before}</span>
                <span className="arrow">→</span>
                <span className="after">{testimonials[activeTestimonial].after}</span>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AREAS - Interactive Map Style */}
      <section className="areas-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Coverage</span>
            <h2>Areas We <span className="highlight">Serve</span></h2>
            <p>Deep expertise in North West London&apos;s finest neighbourhoods</p>
          </div>
          <div className="areas-grid">
            {areas.map((area, i) => (
              <Link
                key={area.name}
                href={`/areas/${area.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="area-card-premium"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="area-content">
                  <h3>{area.name}</h3>
                  <span className="area-postcode">{area.postcode}</span>
                </div>
                <div className="area-stats">
                  <span className="area-projects">{area.projects} projects</span>
                  <span className="area-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-card-premium">
            <div className="cta-content">
              <h2>Ready to Transform <span className="gradient-text">Your Home?</span></h2>
              <p>Book a free, no-obligation survey. We&apos;ll visit your property, discuss your vision, and provide a detailed proposal within 48 hours.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-xl glow-button">
                  Book Your Free Survey
                </Link>
                <a href="tel:02071234567" className="btn btn-glass btn-xl">
                  📞 020 7123 4567
                </a>
              </div>
              <div className="cta-guarantee">
                <span>🛡️ 10-Year Guarantee</span>
                <span>💳 0% Finance Available</span>
                <span>📅 Start Within 4 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* HERO */
        .hero { position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-video { position: absolute; inset: 0; background: linear-gradient(135deg, #0a0f1a 0%, #1e293b 50%, #0f172a 100%); }
        .hero-overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 20%, rgba(212,168,75,0.15) 0%, transparent 50%); }
        .hero-particles { position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23d4a84b' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
        .hero-content { position: relative; z-index: 2; text-align: center; max-width: 900px; padding: 0 1.5rem; }
        .hero-badge { display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1.5rem; border-radius: 9999px; margin-bottom: 2rem; background: rgba(212,168,75,0.1); border: 1px solid rgba(212,168,75,0.3); }
        .badge-pulse { width: 10px; height: 10px; background: var(--gold-400); border-radius: 50%; animation: pulse-gold 2s infinite; }
        .hero-title { margin-bottom: 1.5rem; }
        .title-line { display: block; font-size: clamp(3rem, 8vw, 5.5rem); font-weight: 700; color: white; line-height: 1.1; }
        .gradient-text-animated { background: linear-gradient(90deg, var(--gold-300), var(--gold-500), var(--gold-300)); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradient-shift 3s linear infinite; }
        .hero-subtitle { font-size: 1.25rem; color: var(--navy-300); max-width: 700px; margin: 0 auto 2.5rem; line-height: 1.7; }
        .hero-cta { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem; }
        .btn-xl { padding: 1.125rem 2.25rem; font-size: 1.0625rem; }
        .btn-glass { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); color: white; }
        .btn-glass:hover { background: rgba(255,255,255,0.2); }
        .glow-button { box-shadow: 0 0 30px rgba(212,168,75,0.4); }
        .glow-button:hover { box-shadow: 0 0 50px rgba(212,168,75,0.6); }
        .btn-icon { margin-left: 0.5rem; transition: transform 0.3s; }
        .btn:hover .btn-icon { transform: translateX(4px); }
        .play-icon { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: rgba(255,255,255,0.2); border-radius: 50%; margin-right: 0.5rem; font-size: 0.625rem; }
        .hero-trust { margin-top: 1rem; }
        .trust-logos { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; }
        .trust-logo { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(255,255,255,0.05); border-radius: var(--radius-md); font-size: 0.875rem; color: var(--navy-400); }
        .scroll-cta { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); text-align: center; color: var(--navy-400); font-size: 0.75rem; }
        .scroll-arrow { animation: float 2s ease-in-out infinite; margin-top: 0.5rem; }
        
        /* STATS */
        .stats-section { margin-top: -5rem; position: relative; z-index: 10; padding: 0 1.5rem; }
        .stats-card { max-width: 1100px; margin: 0 auto; padding: 3rem; border-radius: var(--radius-2xl); background: rgba(255,255,255,0.95); backdrop-filter: blur(20px); box-shadow: 0 30px 60px -15px rgba(0,0,0,0.2); }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .stat-item { text-align: center; }
        .stat-icon { font-size: 2rem; display: block; margin-bottom: 0.5rem; }
        .stat-value { font-family: var(--font-display); font-size: 3rem; font-weight: 700; background: linear-gradient(135deg, var(--gold-500), var(--gold-600)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; display: block; }
        .stat-label { font-size: 0.875rem; color: var(--navy-500); }
        
        /* SECTION HEADERS */
        .section-header { text-align: center; max-width: 700px; margin: 0 auto 4rem; }
        .section-eyebrow { display: inline-block; padding: 0.375rem 1rem; background: rgba(212,168,75,0.1); border-radius: 9999px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold-600); margin-bottom: 1rem; }
        .section-eyebrow.gold { background: rgba(212,168,75,0.2); color: var(--gold-400); }
        .section-header h2 { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; }
        .section-header.light h2 { color: white; }
        .section-header p { color: var(--navy-500); font-size: 1.125rem; }
        .section-header.light p { color: var(--navy-400); }
        .highlight { color: var(--gold-600); }
        
        /* FEATURES */
        .features-section { padding: 7rem 0; }
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .feature-card { background: white; padding: 2.5rem; border-radius: var(--radius-xl); box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: all 0.4s ease; border: 1px solid transparent; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); border-color: rgba(212,168,75,0.3); }
        .feature-icon { font-size: 2.5rem; margin-bottom: 1.25rem; }
        .feature-card h3 { font-size: 1.25rem; margin-bottom: 0.75rem; font-family: var(--font-sans); font-weight: 600; }
        .feature-card p { color: var(--navy-500); line-height: 1.6; }
        
        /* CALCULATOR */
        .calculator-section { padding: 7rem 0; background: linear-gradient(180deg, var(--navy-900) 0%, var(--navy-950) 100%); }
        
        /* SERVICES */
        .services-section { padding: 7rem 0; background: white; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .service-card-premium { background: white; border-radius: var(--radius-xl); overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); transition: all 0.4s ease; }
        .service-card-premium:hover { transform: translateY(-12px) scale(1.02); box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        .service-image { height: 180px; display: flex; align-items: center; justify-content: center; position: relative; }
        .service-icon-large { font-size: 4rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3)); }
        .service-content { padding: 1.75rem; }
        .service-content h3 { font-size: 1.25rem; margin-bottom: 0.5rem; font-family: var(--font-sans); font-weight: 600; }
        .service-content p { color: var(--navy-500); font-size: 0.9375rem; line-height: 1.6; margin-bottom: 1rem; }
        .service-meta { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--navy-100); }
        .service-price { font-weight: 700; color: var(--gold-600); }
        .service-link { color: var(--navy-400); font-size: 0.875rem; transition: color 0.3s; }
        .service-card-premium:hover .service-link { color: var(--gold-600); }
        
        /* TESTIMONIALS */
        .testimonials-section { padding: 7rem 0; background: var(--cream-100); }
        .testimonial-showcase { max-width: 800px; margin: 0 auto; text-align: center; }
        .testimonial-main { background: white; padding: 3rem; border-radius: var(--radius-2xl); box-shadow: 0 20px 50px rgba(0,0,0,0.08); }
        .testimonial-rating { color: var(--gold-500); font-size: 1.5rem; margin-bottom: 1.5rem; }
        .testimonial-quote { font-size: 1.375rem; font-style: italic; color: var(--navy-700); line-height: 1.7; margin-bottom: 2rem; }
        .testimonial-author { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 1.5rem; }
        .author-avatar { width: 60px; height: 60px; background: var(--navy-900); color: var(--gold-400); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem; }
        .author-info { text-align: left; }
        .author-info strong { display: block; color: var(--navy-800); font-size: 1.125rem; }
        .author-info span { display: block; color: var(--navy-500); font-size: 0.875rem; }
        .project-tag { background: var(--gold-100); color: var(--gold-600); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; margin-top: 0.25rem; display: inline-block; }
        .transformation-icons { display: flex; align-items: center; justify-content: center; gap: 1rem; font-size: 2rem; margin-top: 1rem; }
        .transformation-icons .arrow { font-size: 1.5rem; color: var(--gold-500); }
        .testimonial-dots { display: flex; justify-content: center; gap: 0.5rem; margin-top: 2rem; }
        .dot { width: 12px; height: 12px; border-radius: 50%; background: var(--navy-200); border: none; cursor: pointer; transition: all 0.3s; }
        .dot.active { background: var(--gold-500); transform: scale(1.2); }
        
        /* AREAS */
        .areas-section { padding: 7rem 0; }
        .areas-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .area-card-premium { display: flex; justify-content: space-between; align-items: center; padding: 1.75rem 2rem; background: white; border: 2px solid var(--navy-100); border-radius: var(--radius-xl); transition: all 0.3s ease; }
        .area-card-premium:hover { border-color: var(--gold-500); background: linear-gradient(135deg, white, var(--gold-100)); transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .area-content h3 { font-size: 1.25rem; margin-bottom: 0.25rem; font-family: var(--font-sans); }
        .area-postcode { font-size: 0.875rem; color: var(--navy-400); }
        .area-stats { text-align: right; }
        .area-projects { display: block; font-size: 0.875rem; color: var(--gold-600); font-weight: 600; margin-bottom: 0.25rem; }
        .area-arrow { font-size: 1.25rem; color: var(--navy-300); transition: transform 0.3s; }
        .area-card-premium:hover .area-arrow { transform: translateX(4px); color: var(--gold-600); }
        
        /* FINAL CTA */
        .final-cta-section { padding: 7rem 0; background: linear-gradient(180deg, #fefdfb, #f9f5ed); }
        .cta-card-premium { background: linear-gradient(135deg, var(--navy-900), var(--navy-800)); padding: 5rem; border-radius: var(--radius-2xl); text-align: center; position: relative; overflow: hidden; }
        .cta-card-premium::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 70% 30%, rgba(212,168,75,0.15), transparent 50%); }
        .cta-content { position: relative; z-index: 1; }
        .cta-content h2 { color: white; font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; }
        .cta-content p { color: var(--navy-300); font-size: 1.125rem; max-width: 600px; margin: 0 auto 2rem; }
        .cta-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
        .cta-guarantee { display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; }
        .cta-guarantee span { color: var(--navy-400); font-size: 0.875rem; }
        
        /* ANIMATIONS */
        .animate-slide-down { animation: slideDown 0.8s ease forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease forwards; }
        .animate-fade-in { animation: fadeIn 1s ease forwards; animation-delay: 0.3s; opacity: 0; }
        .animate-scale-in { animation: scaleIn 0.6s ease forwards; animation-delay: 0.5s; opacity: 0; }
        .animate-fade-in-delayed { animation: fadeIn 1s ease forwards; animation-delay: 0.8s; opacity: 0; }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes gradient-shift { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        
        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .features-grid, .services-grid { grid-template-columns: repeat(2, 1fr); }
          .areas-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-cta { flex-direction: column; align-items: center; }
          .cta-buttons { flex-direction: column; }
          .cta-guarantee { flex-direction: column; gap: 0.5rem; }
        }
        @media (max-width: 640px) {
          .features-grid, .services-grid, .areas-grid { grid-template-columns: 1fr; }
          .trust-logos { flex-direction: column; gap: 0.5rem; }
          .cta-card-premium { padding: 3rem 1.5rem; }
        }
      `}</style>
    </>
  );
}
