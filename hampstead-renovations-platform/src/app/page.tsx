import Link from "next/link";
import CostCalculatorWidget from "@/components/tools/CostCalculatorWidget";

export default function HomePage() {
  const stats = [
    { value: "250+", label: "Projects Completed", icon: "🏠" },
    { value: "£45M+", label: "Project Value Delivered", icon: "💎" },
    { value: "4.9★", label: "Average Rating", icon: "⭐" },
    { value: "10yr", label: "Guarantee", icon: "🛡️" },
  ];

  const services = [
    { name: "Full House Renovation", href: "/services/full-house-renovation", desc: "Complete transformation from planning to handover", icon: "🏠", price: "From £150k", color: "#d4a84b" },
    { name: "Extensions", href: "/services/extensions", desc: "Rear, side return, and wraparound extensions", icon: "🔨", price: "From £80k", color: "#e4bc5e" },
    { name: "Loft Conversions", href: "/services/loft-conversion", desc: "Add valuable living space under your roof", icon: "🏗️", price: "From £55k", color: "#f0d078" },
    { name: "Kitchen Renovation", href: "/services/kitchen-renovation", desc: "Bespoke kitchens designed for your lifestyle", icon: "🍳", price: "From £35k", color: "#b8943d" },
    { name: "Bathroom Renovation", href: "/services/bathroom-renovation", desc: "Luxury bathrooms and wet rooms", icon: "🛁", price: "From £15k", color: "#c9a54a" },
    { name: "Painting & Decorating", href: "/services/painting-decorating", desc: "Premium finishes throughout your home", icon: "🎨", price: "From £8k", color: "#dbb356" },
  ];

  const tools = [
    { name: "Cost Calculator", href: "/tools/renovation-cost-calculator", desc: "Get instant budget estimates with ROI projections", icon: "💰", gradient: "from-amber-500 to-yellow-400" },
    { name: "Planning Checker", href: "/tools/planning-checker", desc: "Check conservation & permitted development status", icon: "📋", gradient: "from-blue-500 to-cyan-400" },
    { name: "ROI Estimator", href: "/tools/roi-estimator", desc: "See how renovation adds to property value", icon: "📈", gradient: "from-green-500 to-emerald-400" },
    { name: "Party Wall Kit", href: "/tools/party-wall-kit", desc: "Free templates and neighbour notices", icon: "🏘️", gradient: "from-purple-500 to-pink-400" },
  ];

  const testimonials = [
    { name: "Sarah & James M.", location: "Hampstead", project: "Full Renovation", quote: "Exceptional attention to detail. Our Victorian terrace has been completely transformed while keeping all its period charm.", rating: 5, avatar: "SJ" },
    { name: "Michael R.", location: "Primrose Hill", project: "Kitchen & Extension", quote: "Professional from start to finish. The team managed everything including planning and party wall - we couldn't be happier.", rating: 5, avatar: "MR" },
    { name: "Charlotte W.", location: "Belsize Park", project: "Loft Conversion", quote: "Added a stunning master suite and bathroom. The finish quality is incredible. Worth every penny.", rating: 5, avatar: "CW" },
  ];

  const areas = ["Hampstead", "Belsize Park", "Primrose Hill", "St John's Wood", "Highgate", "West Hampstead"];

  return (
    <>
      {/* Hero Section - Enhanced with animations */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text animate-slide-up">
            <span className="hero-badge glass-gold">
              <span className="badge-dot"></span>
              NW London&apos;s Premier Renovation Specialists
            </span>
            <h1 className="hero-title">
              Transform Your Home
              <span className="gradient-text"> With Confidence</span>
            </h1>
            <p className="hero-subtitle">
              Award-winning renovations in Hampstead, Belsize Park & North West London.
              Premium craftsmanship backed by a 10-year guarantee.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-lg btn-shine animate-glow">
                Book Free Survey
                <span className="btn-arrow">→</span>
              </Link>
              <Link href="/case-studies" className="btn btn-outline-white btn-lg glass">
                View Our Work
              </Link>
            </div>
            <div className="hero-trust">
              <div className="trust-item glass">
                <span className="trust-check">✓</span>
                10-Year Guarantee
              </div>
              <div className="trust-item glass">
                <span className="trust-check">✓</span>
                Fixed-Price Quotes
              </div>
              <div className="trust-item glass">
                <span className="trust-check">✓</span>
                127+ 5-Star Reviews
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* Stats Bar - Enhanced with glassmorphism */}
      <section className="stats-bar glass">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item count-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="stat-icon">{stat.icon}</span>
                <span className="stat-value gradient-text">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Calculator Widget */}
      <section className="calculator-section section">
        <div className="container">
          <div className="section-header animate-slide-up">
            <span className="section-tag">Free Tool</span>
            <h2>Get Your Instant Renovation Estimate</h2>
            <p>Enter a few details to receive a budget range and ROI projection</p>
          </div>
          <CostCalculatorWidget />
        </div>
      </section>

      {/* Services Grid - Enhanced with 3D effects */}
      <section className="services-section section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Expertise</span>
            <h2>Premium Renovation Services</h2>
            <p>Comprehensive renovation services for discerning homeowners</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <Link
                key={service.href}
                href={service.href}
                className="service-card card-3d glow-border"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="service-icon-wrap" style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)` }}>
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <div className="service-footer">
                  <span className="service-price">{service.price}</span>
                  <span className="service-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="areas-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Local Expertise</span>
            <h2>Areas We Serve</h2>
            <p>Deep knowledge of North West London&apos;s architecture and planning</p>
          </div>
          <div className="areas-grid">
            {areas.map((area, i) => (
              <Link
                key={area}
                href={`/areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                className="area-card"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="area-name">{area}</span>
                <span className="area-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tools Section - Enhanced */}
      <section className="tools-section section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag light">Free Resources</span>
            <h2>Planning Tools</h2>
            <p>Helpful resources to plan your renovation project</p>
          </div>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="tool-card glass"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="tool-icon-wrap">
                  <span className="tool-icon">{tool.icon}</span>
                </div>
                <h3>{tool.name}</h3>
                <p>{tool.desc}</p>
                <span className="tool-cta">Use Free Tool <span>→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Stories</span>
            <h2>What Our Clients Say</h2>
            <p>Trusted by homeowners across North West London</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="testimonial-header">
                  <div className="avatar">{t.avatar}</div>
                  <div className="testimonial-meta">
                    <strong>{t.name}</strong>
                    <span>{t.location} • {t.project}</span>
                  </div>
                </div>
                <div className="stars">{"★".repeat(t.rating)}</div>
                <blockquote>&quot;{t.quote}&quot;</blockquote>
              </div>
            ))}
          </div>
          <div className="testimonials-cta">
            <Link href="/case-studies" className="btn btn-outline btn-lg">View All Case Studies</Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced */}
      <section className="final-cta section">
        <div className="container">
          <div className="cta-card glass-dark">
            <div className="cta-content">
              <h2>Ready to Start Your Renovation?</h2>
              <p>Book a free, no-obligation survey with our team. We&apos;ll visit your property, discuss your vision, and provide a detailed proposal.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-lg btn-shine pulse-gold">
                  Book Your Free Survey
                </Link>
                <a href="tel:02071234567" className="btn btn-outline-white btn-lg glass">
                  📞 020 7123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero - Premium */
        .hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; }
        .hero-gradient { position: absolute; inset: 0; background: linear-gradient(135deg, #0a0f1a 0%, #1e293b 40%, #0f172a 100%); }
        .hero-pattern { position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a84b' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
        .hero-glow { position: absolute; top: 20%; left: 10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(212,168,75,0.15) 0%, transparent 70%); pointer-events: none; }
        .hero-content { position: relative; z-index: 1; max-width: 900px; padding: 140px 0 100px; }
        .hero-badge { display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.625rem 1.25rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; margin-bottom: 2rem; }
        .badge-dot { width: 8px; height: 8px; background: var(--gold-400); border-radius: 50%; animation: pulse-gold 2s infinite; }
        .hero-title { font-size: clamp(3rem, 6vw, 4.5rem); color: white; margin-bottom: 1.5rem; line-height: 1.1; }
        .hero-subtitle { font-size: 1.25rem; color: var(--navy-300); margin-bottom: 2.5rem; max-width: 600px; line-height: 1.7; }
        .hero-cta { display: flex; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap; }
        .btn-arrow { margin-left: 0.5rem; transition: transform 0.3s ease; }
        .btn:hover .btn-arrow { transform: translateX(4px); }
        .hero-trust { display: flex; gap: 1rem; flex-wrap: wrap; }
        .trust-item { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: var(--radius-md); font-size: 0.875rem; color: var(--navy-300); }
        .trust-check { color: var(--gold-400); font-weight: 700; }
        
        /* Stats Bar */
        .stats-bar { position: relative; z-index: 10; margin-top: -4rem; margin-left: auto; margin-right: auto; max-width: 1200px; border-radius: var(--radius-2xl); padding: 2.5rem 2rem; background: rgba(255,255,255,0.95); backdrop-filter: blur(20px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .stat-item { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .stat-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .stat-value { font-family: var(--font-display); font-size: 2.5rem; font-weight: 700; }
        .stat-label { font-size: 0.875rem; color: var(--navy-500); margin-top: 0.25rem; }
        
        /* Section Headers */
        .section-header { text-align: center; max-width: 600px; margin: 0 auto 3.5rem; }
        .section-tag { display: inline-block; padding: 0.375rem 1rem; background: rgba(212,168,75,0.1); border: 1px solid rgba(212,168,75,0.2); border-radius: 9999px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--gold-600); margin-bottom: 1rem; }
        .section-tag.light { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); color: var(--gold-400); }
        .section-header h2 { margin-bottom: 1rem; }
        .section-header p { color: var(--navy-500); }
        .section-dark .section-header p { color: var(--navy-400); }
        
        /* Calculator */
        .calculator-section { padding-top: 7rem; }
        
        /* Services */
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .service-card { display: flex; flex-direction: column; background: white; padding: 2rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); transition: all 0.4s ease; position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, transparent 60%, rgba(212,168,75,0.05)); }
        .service-card:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); }
        .service-icon-wrap { width: 64px; height: 64px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem; }
        .service-icon { font-size: 2rem; }
        .service-card h3 { font-size: 1.25rem; margin-bottom: 0.75rem; font-family: var(--font-sans); font-weight: 600; }
        .service-card p { flex: 1; font-size: 0.9375rem; color: var(--navy-500); margin-bottom: 1.25rem; line-height: 1.6; }
        .service-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--navy-100); }
        .service-price { font-weight: 700; color: var(--gold-600); }
        .service-arrow { font-size: 1.25rem; color: var(--navy-300); transition: transform 0.3s ease; }
        .service-card:hover .service-arrow { transform: translateX(4px); color: var(--gold-500); }
        
        /* Areas */
        .areas-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1rem; }
        .area-card { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem; background: white; border: 2px solid var(--navy-100); border-radius: var(--radius-lg); transition: all 0.3s ease; }
        .area-card:hover { border-color: var(--gold-500); background: var(--gold-100); transform: translateY(-2px); }
        .area-name { font-weight: 600; color: var(--navy-800); }
        .area-arrow { color: var(--navy-300); transition: transform 0.3s ease; }
        .area-card:hover .area-arrow { transform: translateX(4px); color: var(--gold-600); }
        
        /* Tools */
        .tools-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .tool-card { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 2.5rem 1.5rem; border-radius: var(--radius-xl); transition: all 0.4s ease; }
        .tool-card:hover { transform: translateY(-8px); background: rgba(255,255,255,0.15); }
        .tool-icon-wrap { width: 72px; height: 72px; background: rgba(212,168,75,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
        .tool-icon { font-size: 2rem; }
        .tool-card h3 { font-size: 1.125rem; margin-bottom: 0.75rem; font-family: var(--font-sans); color: white; }
        .tool-card p { font-size: 0.875rem; color: var(--navy-400); margin-bottom: 1.25rem; line-height: 1.6; }
        .tool-cta { color: var(--gold-400); font-weight: 600; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; }
        .tool-cta span { transition: transform 0.3s ease; }
        .tool-card:hover .tool-cta span { transform: translateX(4px); }
        
        /* Testimonials */
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 3rem; }
        .testimonial-card { background: white; padding: 2rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); transition: all 0.4s ease; }
        .testimonial-card:hover { transform: translateY(-8px); }
        .testimonial-header { display: flex; gap: 1rem; margin-bottom: 1rem; }
        .avatar { width: 48px; height: 48px; background: var(--navy-900); color: var(--gold-400); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem; }
        .testimonial-meta { display: flex; flex-direction: column; }
        .testimonial-meta strong { color: var(--navy-800); }
        .testimonial-meta span { font-size: 0.8125rem; color: var(--navy-500); }
        .stars { color: var(--gold-500); font-size: 1rem; margin-bottom: 1rem; }
        .testimonial-card blockquote { font-size: 1rem; color: var(--navy-600); line-height: 1.7; margin: 0; font-style: italic; }
        .testimonials-cta { text-align: center; }
        
        /* Final CTA */
        .final-cta { background: linear-gradient(180deg, var(--cream-50) 0%, var(--cream-100) 100%); padding: 6rem 0; }
        .cta-card { padding: 4rem; border-radius: var(--radius-2xl); text-align: center; background: linear-gradient(135deg, var(--navy-900), var(--navy-800)); }
        .cta-content h2 { color: white; margin-bottom: 1rem; }
        .cta-content p { color: var(--navy-300); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .cta-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .services-grid, .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
          .tools-grid { grid-template-columns: repeat(2, 1fr); }
          .areas-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .services-grid, .tools-grid, .testimonials-grid { grid-template-columns: 1fr; }
          .areas-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-cta, .cta-buttons { flex-direction: column; }
          .stats-bar { margin-top: -2rem; }
          .hero-trust { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
