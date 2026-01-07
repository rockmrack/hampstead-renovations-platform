"use client";

import Link from "next/link";

const services = [
  {
    title: "Full House Renovation",
    description: "Complete transformation of your home from top to bottom. We handle everything from structural work to finishing touches.",
    href: "/services/full-house-renovation",
    icon: "🏠",
  },
  {
    title: "Extensions",
    description: "Rear and side return extensions that seamlessly blend with your existing home. Planning expertise included.",
    href: "/services/extensions",
    icon: "🔨",
  },
  {
    title: "Loft Conversions",
    description: "Unlock valuable living space with expertly designed loft conversions. Full structural and planning support.",
    href: "/services/loft-conversion",
    icon: "🏗️",
  },
  {
    title: "Kitchen Renovation",
    description: "Bespoke kitchen designs that combine functionality with stunning aesthetics. From concept to completion.",
    href: "/services/kitchen-renovation",
    icon: "🍳",
  },
  {
    title: "Bathroom Renovation",
    description: "Luxury bathroom transformations. From modern minimalist to classic elegance, we create your perfect space.",
    href: "/services/bathroom-renovation",
    icon: "🛁",
  },
  {
    title: "Painting & Decorating",
    description: "Expert finishing work that brings your renovation to life. Premium materials and meticulous attention to detail.",
    href: "/services/painting-decorating",
    icon: "🎨",
  },
];

const tools = [
  {
    title: "Cost Calculator",
    description: "Get an instant budget range for your project",
    href: "/tools/renovation-cost-calculator",
    icon: "💰",
  },
  {
    title: "Planning Checker",
    description: "Check Camden planning constraints for your address",
    href: "/tools/camden-planning-risk-checker",
    icon: "📋",
  },
  {
    title: "Party Wall Kit",
    description: "Templates and guidance for party wall notices",
    href: "/tools/party-wall-kit",
    icon: "🏘️",
  },
  {
    title: "Logistics Planner",
    description: "Plan skips, scaffolds and parking suspensions",
    href: "/tools/site-logistics-planner",
    icon: "🚧",
  },
];

const areas = [
  { name: "Hampstead", postcode: "NW3" },
  { name: "Belsize Park", postcode: "NW3" },
  { name: "Primrose Hill", postcode: "NW1" },
  { name: "St John's Wood", postcode: "NW8" },
  { name: "West Hampstead", postcode: "NW6" },
  { name: "Highgate", postcode: "N6" },
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "15", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "NW3", label: "Local Experts" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge">
            <span>Premium North London Renovations</span>
          </div>
          <h1>Transform Your<br />Hampstead Home</h1>
          <p className="hero-subtitle">
            Expert renovation and refurbishment specialists serving Hampstead, Belsize Park,
            and North West London. From full house renovations to stunning extensions.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book a Free Survey
            </Link>
            <Link href="/case-studies" className="btn btn-outline btn-lg">
              View Our Work
            </Link>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9,12 11,14 15,10" />
              </svg>
              <span>Fully Insured</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <span>On-Time Guarantee</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Fixed Price Quotes</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          .hero {
            position: relative;
            min-height: 90vh;
            display: flex;
            align-items: center;
            padding: 120px 0 80px;
            overflow: hidden;
          }

          .hero-bg {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 50%, var(--navy-700) 100%);
          }

          .hero-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }

          .hero-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 200px;
            background: linear-gradient(to top, var(--cream-50), transparent);
          }

          .hero-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
          }

          .hero-badge {
            display: inline-block;
            margin-bottom: 24px;
          }

          .hero-badge span {
            display: inline-block;
            padding: 8px 20px;
            background: rgba(184, 148, 61, 0.15);
            border: 1px solid rgba(184, 148, 61, 0.3);
            border-radius: 9999px;
            color: var(--gold-400);
            font-size: 0.875rem;
            font-weight: 500;
            letter-spacing: 0.02em;
          }

          .hero h1 {
            font-size: clamp(3rem, 7vw, 5rem);
            color: white;
            margin-bottom: 24px;
            line-height: 1.1;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            color: var(--navy-200);
            max-width: 600px;
            margin-bottom: 40px;
            line-height: 1.7;
          }

          .hero-cta {
            display: flex;
            gap: 16px;
            margin-bottom: 48px;
          }

          .hero-trust {
            display: flex;
            gap: 32px;
          }

          .trust-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--navy-300);
            font-size: 0.875rem;
          }

          .trust-item svg {
            color: var(--gold-400);
          }

          @media (max-width: 768px) {
            .hero {
              min-height: auto;
              padding: 100px 0 60px;
            }

            .hero-cta {
              flex-direction: column;
            }

            .hero-trust {
              flex-direction: column;
              gap: 16px;
            }
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <section className="stats">
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

        <style jsx>{`
          .stats {
            padding: 60px 0;
            background: white;
            border-bottom: 1px solid var(--navy-100);
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
          }

          .stat-item {
            text-align: center;
          }

          .stat-value {
            display: block;
            font-family: var(--font-playfair), serif;
            font-size: 3rem;
            font-weight: 700;
            color: var(--navy-900);
            line-height: 1;
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 0.9375rem;
            color: var(--slate-500);
          }

          @media (max-width: 768px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 32px;
            }

            .stat-value {
              font-size: 2.5rem;
            }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-title">
            <div className="gold-accent"></div>
            <h2>Our Renovation Services</h2>
            <p>
              From full house transformations to individual room renovations,
              we deliver exceptional results in North London's most prestigious areas.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-link">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <style jsx>{`
          .services {
            padding: 100px 0;
            background: var(--cream-50);
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .service-card {
            background: white;
            padding: 40px 32px;
            border-radius: var(--radius-xl);
            border: 1px solid var(--navy-100);
            transition: all var(--transition-base);
            text-decoration: none;
          }

          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-xl);
            border-color: var(--gold-200);
          }

          .service-icon {
            display: block;
            font-size: 2.5rem;
            margin-bottom: 20px;
          }

          .service-card h3 {
            font-size: 1.375rem;
            color: var(--navy-900);
            margin-bottom: 12px;
          }

          .service-card p {
            font-size: 0.9375rem;
            color: var(--slate-500);
            margin-bottom: 20px;
            line-height: 1.7;
          }

          .service-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: var(--gold-600);
            font-weight: 600;
            font-size: 0.875rem;
            transition: gap var(--transition-fast);
          }

          .service-card:hover .service-link {
            gap: 10px;
          }

          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="container">
          <div className="tools-header">
            <div>
              <div className="gold-accent"></div>
              <h2>Free Renovation Tools</h2>
              <p>
                Planning a renovation? Use our free tools to understand costs, check planning
                constraints, and prepare for a smooth build process.
              </p>
            </div>
            <Link href="/tools" className="btn btn-outline">
              View All Tools
            </Link>
          </div>

          <div className="tools-grid">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="tool-card">
                <span className="tool-icon">{tool.icon}</span>
                <div>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                </div>
                <svg className="tool-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        <style jsx>{`
          .tools-section {
            padding: 100px 0;
            background: white;
          }

          .tools-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 48px;
          }

          .tools-header h2 {
            margin-bottom: 12px;
          }

          .tools-header p {
            max-width: 500px;
          }

          .tools-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .tool-card {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 28px 32px;
            background: var(--navy-50);
            border-radius: var(--radius-lg);
            text-decoration: none;
            transition: all var(--transition-base);
            border: 2px solid transparent;
          }

          .tool-card:hover {
            background: white;
            border-color: var(--gold-400);
            box-shadow: var(--shadow-lg);
          }

          .tool-icon {
            font-size: 2rem;
            flex-shrink: 0;
          }

          .tool-card h3 {
            font-size: 1.125rem;
            color: var(--navy-900);
            margin-bottom: 4px;
            font-family: var(--font-inter), sans-serif;
            font-weight: 600;
          }

          .tool-card p {
            font-size: 0.875rem;
            color: var(--slate-500);
            margin: 0;
          }

          .tool-arrow {
            margin-left: auto;
            color: var(--navy-300);
            transition: all var(--transition-fast);
          }

          .tool-card:hover .tool-arrow {
            color: var(--gold-500);
            transform: translateX(4px);
          }

          @media (max-width: 768px) {
            .tools-header {
              flex-direction: column;
              gap: 24px;
            }

            .tools-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Areas Section */}
      <section className="areas-section">
        <div className="container">
          <div className="section-title">
            <div className="gold-accent"></div>
            <h2>Areas We Serve</h2>
            <p>
              Proudly serving Hampstead and the finest neighbourhoods in North West London.
            </p>
          </div>

          <div className="areas-grid">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={`/areas/${area.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="area-card"
              >
                <div className="area-content">
                  <h3>{area.name}</h3>
                  <span className="area-postcode">{area.postcode}</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="areas-cta">
            <Link href="/areas" className="btn btn-secondary">
              View All Areas
            </Link>
          </div>
        </div>

        <style jsx>{`
          .areas-section {
            padding: 100px 0;
            background: linear-gradient(135deg, var(--navy-900) 0%, var(--navy-800) 100%);
          }

          .areas-section :global(.section-title h2),
          .areas-section :global(.section-title p) {
            color: white;
          }

          .areas-section :global(.section-title p) {
            color: var(--navy-300);
          }

          .areas-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 48px;
          }

          .area-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 24px 28px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--radius-lg);
            text-decoration: none;
            transition: all var(--transition-base);
          }

          .area-card:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: var(--gold-500);
            transform: translateY(-4px);
          }

          .area-card h3 {
            color: white;
            font-size: 1.125rem;
            margin-bottom: 4px;
            font-family: var(--font-inter), sans-serif;
            font-weight: 600;
          }

          .area-postcode {
            font-size: 0.8125rem;
            color: var(--gold-400);
            font-weight: 500;
          }

          .area-card svg {
            color: var(--navy-400);
            transition: all var(--transition-fast);
          }

          .area-card:hover svg {
            color: var(--gold-400);
            transform: translateX(4px);
          }

          .areas-cta {
            text-align: center;
          }

          @media (max-width: 768px) {
            .areas-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 480px) {
            .areas-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Home?</h2>
            <p>
              Book a free, no-obligation survey with our team. We&apos;ll discuss your vision,
              assess your property, and provide expert guidance on bringing your renovation to life.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Book Your Free Survey
              </Link>
              <Link href="/tools/renovation-cost-calculator" className="btn btn-outline btn-lg">
                Get an Instant Quote
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          .cta-section {
            padding: 100px 0;
            background: var(--cream-100);
          }

          .cta-content {
            max-width: 700px;
            margin: 0 auto;
            text-align: center;
          }

          .cta-content h2 {
            margin-bottom: 20px;
          }

          .cta-content p {
            font-size: 1.125rem;
            margin-bottom: 40px;
          }

          .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 16px;
          }

          @media (max-width: 640px) {
            .cta-buttons {
              flex-direction: column;
            }
          }
        `}</style>
      </section>
    </>
  );
}
