import Link from "next/link";
import CostCalculatorWidget from "@/components/tools/CostCalculatorWidget";

export default function HomePage() {
  const stats = [
    { value: "250+", label: "Projects Completed" },
    { value: "£45M+", label: "Project Value Delivered" },
    { value: "4.9★", label: "Average Rating" },
    { value: "10yr", label: "Guarantee" },
  ];

  const services = [
    { name: "Full House Renovation", href: "/services/full-house-renovation", desc: "Complete transformation from planning to handover", icon: "🏠", price: "From £150k" },
    { name: "Extensions", href: "/services/extensions", desc: "Rear, side return, and wraparound extensions", icon: "🔨", price: "From £80k" },
    { name: "Loft Conversions", href: "/services/loft-conversion", desc: "Add valuable living space under your roof", icon: "🏗️", price: "From £55k" },
    { name: "Kitchen Renovation", href: "/services/kitchen-renovation", desc: "Bespoke kitchens designed for your lifestyle", icon: "🍳", price: "From £35k" },
    { name: "Bathroom Renovation", href: "/services/bathroom-renovation", desc: "Luxury bathrooms and wet rooms", icon: "🛁", price: "From £15k" },
    { name: "Painting & Decorating", href: "/services/painting-decorating", desc: "Premium finishes throughout your home", icon: "🎨", price: "From £8k" },
  ];

  const tools = [
    { name: "Cost Calculator", href: "/tools/renovation-cost-calculator", desc: "Get instant budget estimates with ROI projections", icon: "💰" },
    { name: "Planning Checker", href: "/tools/planning-checker", desc: "Check conservation & permitted development status", icon: "📋" },
    { name: "ROI Estimator", href: "/tools/roi-estimator", desc: "See how renovation adds to property value", icon: "📈" },
    { name: "Party Wall Kit", href: "/tools/party-wall-kit", desc: "Free templates and neighbour notices", icon: "🏘️" },
  ];

  const testimonials = [
    { name: "Sarah & James M.", location: "Hampstead", project: "Full Renovation", quote: "Exceptional attention to detail. Our Victorian terrace has been completely transformed while keeping all its period charm.", rating: 5 },
    { name: "Michael R.", location: "Primrose Hill", project: "Kitchen & Extension", quote: "Professional from start to finish. The team managed everything including planning and party wall - we couldn't be happier.", rating: 5 },
    { name: "Charlotte W.", location: "Belsize Park", project: "Loft Conversion", quote: "Added a stunning master suite and bathroom. The finish quality is incredible. Worth every penny.", rating: 5 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">NW London&apos;s Premier Renovation Specialists</span>
            <h1>Transform Your Home With Confidence</h1>
            <p className="hero-subtitle">
              Award-winning renovations in Hampstead, Belsize Park & North West London.
              Premium craftsmanship backed by a 10-year guarantee.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">Book Free Survey</Link>
              <Link href="/case-studies" className="btn btn-outline-white btn-lg">View Our Work</Link>
            </div>
            <div className="hero-trust">
              <span>✓ 10-Year Guarantee</span>
              <span>✓ Fixed-Price Quotes</span>
              <span>✓ 127+ 5-Star Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Calculator Widget */}
      <section className="calculator-section section">
        <div className="container">
          <div className="section-header">
            <div className="gold-accent gold-accent-center"></div>
            <h2>Get Your Instant Renovation Estimate</h2>
            <p>Enter a few details to receive a budget range and ROI projection</p>
          </div>
          <CostCalculatorWidget />
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section section section-cream">
        <div className="container">
          <div className="section-header">
            <div className="gold-accent gold-accent-center"></div>
            <h2>Our Services</h2>
            <p>Comprehensive renovation services for discerning homeowners</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <span className="service-price">{service.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="tools-section section">
        <div className="container">
          <div className="section-header">
            <div className="gold-accent gold-accent-center"></div>
            <h2>Free Planning Tools</h2>
            <p>Helpful resources to plan your renovation project</p>
          </div>
          <div className="tools-grid">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="tool-card">
                <span className="tool-icon">{tool.icon}</span>
                <h3>{tool.name}</h3>
                <p>{tool.desc}</p>
                <span className="tool-cta">Use Free Tool →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="gold-accent gold-accent-center"></div>
            <h2>What Our Clients Say</h2>
            <p>Trusted by homeowners across North West London</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">{"★".repeat(t.rating)}</div>
                <blockquote>&quot;{t.quote}&quot;</blockquote>
                <div className="testimonial-footer">
                  <strong>{t.name}</strong>
                  <span>{t.location} • {t.project}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-cta">
            <Link href="/case-studies" className="btn btn-outline-white btn-lg">View All Case Studies</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Renovation?</h2>
            <p>Book a free, no-obligation survey with our team. We&apos;ll visit your property, discuss your vision, and provide a detailed proposal.</p>
            <Link href="/contact" className="btn btn-primary btn-lg pulse-gold">Book Your Free Survey</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero { position: relative; min-height: 85vh; display: flex; align-items: center; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; background: linear-gradient(135deg, var(--navy-950) 0%, var(--navy-900) 50%, var(--navy-800) 100%); }
        .hero-bg::after { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
        .hero-content { position: relative; z-index: 1; max-width: 800px; padding: 120px 0; }
        .hero-badge { display: inline-block; padding: 0.5rem 1rem; background: rgba(212,168,75,0.15); border: 1px solid rgba(212,168,75,0.3); border-radius: 9999px; color: var(--gold-400); font-size: 0.875rem; font-weight: 500; margin-bottom: 1.5rem; }
        .hero h1 { color: white; margin-bottom: 1.5rem; }
        .hero-subtitle { font-size: 1.25rem; color: var(--navy-300); margin-bottom: 2rem; max-width: 600px; }
        .hero-cta { display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .hero-trust { display: flex; gap: 1.5rem; flex-wrap: wrap; }
        .hero-trust span { color: var(--navy-400); font-size: 0.875rem; }
        .stats-bar { background: white; padding: 2rem 0; box-shadow: var(--shadow-lg); position: relative; z-index: 10; margin-top: -3rem; border-radius: var(--radius-xl); margin-left: 1.5rem; margin-right: 1.5rem; max-width: 1280px; margin-left: auto; margin-right: auto; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; text-align: center; }
        .stat-item { display: flex; flex-direction: column; }
        .section-header { text-align: center; max-width: 600px; margin: 0 auto 3rem; }
        .section-header p { margin-top: 1rem; }
        .calculator-section { padding-top: 6rem; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .service-card { display: flex; flex-direction: column; background: white; padding: 2rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); transition: all var(--transition-base); }
        .service-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-xl); }
        .service-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .service-card h3 { font-size: 1.25rem; margin-bottom: 0.75rem; font-family: var(--font-sans); }
        .service-card p { flex: 1; font-size: 0.9375rem; color: var(--navy-600); margin-bottom: 1rem; }
        .service-price { font-weight: 600; color: var(--gold-600); font-size: 0.875rem; }
        .tools-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .tool-card { background: white; padding: 2rem; border-radius: var(--radius-xl); border: 2px solid var(--navy-100); transition: all var(--transition-base); text-align: center; }
        .tool-card:hover { border-color: var(--gold-500); transform: translateY(-4px); }
        .tool-icon { font-size: 2.5rem; display: block; margin-bottom: 1rem; }
        .tool-card h3 { font-size: 1.125rem; margin-bottom: 0.5rem; font-family: var(--font-sans); }
        .tool-card p { font-size: 0.875rem; color: var(--navy-500); margin-bottom: 1rem; }
        .tool-cta { color: var(--gold-600); font-weight: 600; font-size: 0.875rem; }
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem; }
        .testimonial-card { background: var(--navy-800); padding: 2rem; border-radius: var(--radius-xl); }
        .stars { color: var(--gold-400); font-size: 1.25rem; margin-bottom: 1rem; }
        .testimonial-card blockquote { font-size: 1rem; font-style: italic; color: var(--navy-200); margin-bottom: 1.5rem; line-height: 1.7; }
        .testimonial-footer strong { display: block; color: white; }
        .testimonial-footer span { font-size: 0.8125rem; color: var(--navy-400); }
        .testimonials-cta { text-align: center; }
        .final-cta { background: linear-gradient(135deg, var(--cream-100), var(--cream-50)); }
        .cta-content { text-align: center; max-width: 600px; margin: 0 auto; }
        .cta-content h2 { margin-bottom: 1rem; }
        .cta-content p { margin-bottom: 2rem; }
        @media (max-width: 1024px) { .services-grid, .testimonials-grid { grid-template-columns: repeat(2, 1fr); } .tools-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .services-grid, .tools-grid, .testimonials-grid { grid-template-columns: 1fr; } .stats-grid { grid-template-columns: repeat(2, 1fr); } .hero-cta { flex-direction: column; } .stats-bar { margin-top: -1.5rem; } }
      `}</style>
    </>
  );
}
