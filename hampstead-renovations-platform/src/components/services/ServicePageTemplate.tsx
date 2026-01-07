import Link from "next/link";

interface ServicePageProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    process: { step: number; title: string; description: string }[];
    timeline: string;
    priceRange: string;
    icon: string;
}

export default function ServicePageTemplate({
    title,
    subtitle,
    description,
    features,
    process,
    timeline,
    priceRange,
    icon,
}: ServicePageProps) {
    return (
        <>
            {/* Hero Section */}
            <section className="service-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-icon">{icon}</span>
                        <h1>{title}</h1>
                        <p className="hero-subtitle">{subtitle}</p>
                    </div>
                </div>

                <style jsx>{`
          .service-hero {
            background: linear-gradient(135deg, var(--navy-900), var(--navy-800));
            padding: 140px 0 80px;
            text-align: center;
          }

          .hero-icon {
            display: block;
            font-size: 4rem;
            margin-bottom: 24px;
          }

          .hero-content h1 {
            color: white;
            margin-bottom: 16px;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            color: var(--navy-200);
            max-width: 600px;
            margin: 0 auto;
          }
        `}</style>
            </section>

            {/* Quick Stats */}
            <section className="quick-stats">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-label">Typical Timeline</span>
                            <span className="stat-value">{timeline}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Investment Range</span>
                            <span className="stat-value">{priceRange}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Free Survey</span>
                            <span className="stat-value">Included</span>
                        </div>
                    </div>
                </div>

                <style jsx>{`
          .quick-stats {
            background: white;
            padding: 40px 0;
            border-bottom: 1px solid var(--navy-100);
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            text-align: center;
          }

          .stat-label {
            display: block;
            font-size: 0.875rem;
            color: var(--slate-500);
            margin-bottom: 8px;
          }

          .stat-value {
            font-family: var(--font-playfair), serif;
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--navy-900);
          }

          @media (max-width: 640px) {
            .stats-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
          }
        `}</style>
            </section>

            {/* Description */}
            <section className="service-description">
                <div className="container">
                    <div className="content-grid">
                        <div className="description-content">
                            <div className="gold-accent"></div>
                            <h2>About This Service</h2>
                            <p>{description}</p>
                        </div>
                        <div className="cta-card">
                            <h3>Get Started Today</h3>
                            <p>Book a free survey with our team to discuss your project requirements.</p>
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Book a Free Survey
                            </Link>
                            <Link href="/tools/renovation-cost-calculator" className="btn btn-outline">
                                Get an Instant Quote
                            </Link>
                        </div>
                    </div>
                </div>

                <style jsx>{`
          .service-description {
            padding: 80px 0;
            background: var(--cream-50);
          }

          .content-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 60px;
            align-items: start;
          }

          .description-content h2 {
            margin-bottom: 20px;
          }

          .description-content p {
            font-size: 1.125rem;
            line-height: 1.8;
          }

          .cta-card {
            background: white;
            padding: 40px;
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-lg);
            position: sticky;
            top: 100px;
          }

          .cta-card h3 {
            font-size: 1.375rem;
            margin-bottom: 12px;
          }

          .cta-card p {
            margin-bottom: 24px;
          }

          .cta-card :global(.btn) {
            width: 100%;
            margin-bottom: 12px;
          }

          @media (max-width: 768px) {
            .content-grid {
              grid-template-columns: 1fr;
            }

            .cta-card {
              position: static;
            }
          }
        `}</style>
            </section>

            {/* What's Included */}
            <section className="whats-included">
                <div className="container">
                    <div className="section-title">
                        <div className="gold-accent"></div>
                        <h2>What&apos;s Included</h2>
                        <p>Everything you need for a successful project, handled professionally from start to finish.</p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, i) => (
                            <div key={i} className="feature-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22,4 12,14.01 9,11.01" />
                                </svg>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
          .whats-included {
            padding: 80px 0;
            background: white;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 20px 24px;
            background: var(--navy-50);
            border-radius: var(--radius-lg);
          }

          .feature-item svg {
            color: var(--gold-500);
            flex-shrink: 0;
          }

          .feature-item span {
            font-size: 1rem;
            color: var(--navy-800);
          }

          @media (max-width: 640px) {
            .features-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
            </section>

            {/* Our Process */}
            <section className="our-process">
                <div className="container">
                    <div className="section-title">
                        <div className="gold-accent"></div>
                        <h2>Our Process</h2>
                        <p>A clear, transparent approach from initial consultation to project completion.</p>
                    </div>

                    <div className="process-grid">
                        {process.map((item) => (
                            <div key={item.step} className="process-item">
                                <span className="process-number">{item.step}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
          .our-process {
            padding: 80px 0;
            background: var(--navy-900);
          }

          .our-process :global(.section-title h2),
          .our-process :global(.section-title p) {
            color: white;
          }

          .our-process :global(.section-title p) {
            color: var(--navy-300);
          }

          .process-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
          }

          .process-item {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--radius-lg);
            padding: 32px;
            text-align: center;
          }

          .process-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, var(--gold-500), var(--gold-600));
            color: white;
            font-family: var(--font-playfair), serif;
            font-size: 1.25rem;
            font-weight: 700;
            border-radius: 50%;
            margin-bottom: 20px;
          }

          .process-item h3 {
            color: white;
            font-size: 1.125rem;
            margin-bottom: 12px;
            font-family: var(--font-inter), sans-serif;
          }

          .process-item p {
            color: var(--navy-300);
            font-size: 0.9375rem;
            margin: 0;
          }

          @media (max-width: 1024px) {
            .process-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .process-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
            </section>

            {/* CTA Section */}
            <section className="service-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your {title}?</h2>
                        <p>
                            Book a free, no-obligation survey with our team. We&apos;ll discuss your vision
                            and provide expert guidance on bringing your project to life.
                        </p>
                        <div className="cta-buttons">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Book Your Free Survey
                            </Link>
                            <Link href="/case-studies" className="btn btn-outline btn-lg">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>

                <style jsx>{`
          .service-cta {
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
