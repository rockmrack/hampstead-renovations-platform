import Link from "next/link";
import { Metadata } from "next";

interface ServicePageProps {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    priceFrom: string;
    timeline: string;
    features: string[];
    process: { step: string; title: string; desc: string }[];
    faqs: { q: string; a: string }[];
}

export function generateServiceMetadata(title: string, description: string): Metadata {
    return {
        title: `${title} | Hampstead Renovations`,
        description,
    };
}

export default function ServicePageTemplate({
    title, subtitle, description, icon, priceFrom, timeline, features, process, faqs
}: ServicePageProps) {
    return (
        <>
            {/* Hero */}
            <section className="hero">
                <div className="container hero-content">
                    <span className="hero-icon">{icon}</span>
                    <h1>{title}</h1>
                    <p className="subtitle">{subtitle}</p>
                    <div className="hero-meta">
                        <span className="meta-item"><strong>From</strong> {priceFrom}</span>
                        <span className="meta-item"><strong>Timeline</strong> {timeline}</span>
                    </div>
                    <Link href="/contact" className="btn btn-primary btn-lg pulse-gold">Get Free Quote</Link>
                </div>
            </section>

            {/* Description + Features */}
            <section className="content section">
                <div className="container">
                    <div className="content-grid">
                        <div className="main-content">
                            <div className="gold-accent"></div>
                            <h2>Overview</h2>
                            <p className="lead">{description}</p>

                            <h3>What&apos;s Included</h3>
                            <ul className="features-list">
                                {features.map((f, i) => <li key={i}><span className="check">✓</span>{f}</li>)}
                            </ul>
                        </div>
                        <aside className="sidebar">
                            <div className="cta-card">
                                <h3>Ready to Start?</h3>
                                <p>Book a free survey to discuss your project and receive a detailed proposal.</p>
                                <Link href="/contact" className="btn btn-primary">Book Free Survey</Link>
                                <Link href="/tools/renovation-cost-calculator" className="btn btn-outline">Get Instant Estimate</Link>
                            </div>
                            <div className="trust-card">
                                <h4>Why Choose Us</h4>
                                <ul>
                                    <li>✓ 10-Year Guarantee</li>
                                    <li>✓ Fixed-Price Quotes</li>
                                    <li>✓ Fully Insured (£5M)</li>
                                    <li>✓ TrustMark Certified</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="process-section section section-cream">
                <div className="container">
                    <div className="section-header">
                        <div className="gold-accent gold-accent-center"></div>
                        <h2>Our Process</h2>
                        <p>A clear, structured approach from start to finish</p>
                    </div>
                    <div className="process-grid">
                        {process.map((p, i) => (
                            <div key={i} className="process-step">
                                <span className="step-num">{p.step}</span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="faq-section section">
                <div className="container">
                    <div className="section-header">
                        <div className="gold-accent gold-accent-center"></div>
                        <h2>Common Questions</h2>
                    </div>
                    <div className="faq-grid">
                        {faqs.map((faq, i) => (
                            <div key={i} className="faq-item">
                                <h4>{faq.q}</h4>
                                <p>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="final-cta section section-dark">
                <div className="container">
                    <div className="cta-content">
                        <h2>Start Your {title} Project</h2>
                        <p>Book a free, no-obligation survey with our team.</p>
                        <Link href="/contact" className="btn btn-primary btn-lg pulse-gold">Book Free Survey</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero { background: linear-gradient(135deg, var(--navy-950), var(--navy-800)); padding: 160px 0 80px; text-align: center; }
        .hero-icon { font-size: 4rem; display: block; margin-bottom: 1.5rem; }
        .hero h1 { color: white; margin-bottom: 1rem; }
        .subtitle { font-size: 1.25rem; color: var(--navy-300); max-width: 600px; margin: 0 auto 2rem; }
        .hero-meta { display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; }
        .meta-item { color: var(--navy-400); font-size: 1rem; }
        .meta-item strong { color: var(--gold-400); display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
        .content-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; }
        .main-content h2 { margin-bottom: 1rem; }
        .lead { font-size: 1.125rem; line-height: 1.8; margin-bottom: 2rem; }
        .main-content h3 { font-size: 1.25rem; margin-bottom: 1rem; }
        .features-list { list-style: none; padding: 0; }
        .features-list li { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.75rem 0; border-bottom: 1px solid var(--navy-100); }
        .check { color: var(--gold-600); font-weight: 700; }
        .sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
        .cta-card { background: var(--navy-900); padding: 2rem; border-radius: var(--radius-xl); text-align: center; }
        .cta-card h3 { color: white; margin-bottom: 0.75rem; font-size: 1.25rem; }
        .cta-card p { color: var(--navy-400); margin-bottom: 1.5rem; font-size: 0.9375rem; }
        .cta-card .btn { width: 100%; margin-bottom: 0.75rem; }
        .trust-card { background: var(--cream-100); padding: 1.5rem; border-radius: var(--radius-lg); }
        .trust-card h4 { font-size: 1rem; margin-bottom: 1rem; font-family: var(--font-sans); }
        .trust-card ul { list-style: none; padding: 0; margin: 0; }
        .trust-card li { padding: 0.5rem 0; color: var(--navy-600); font-size: 0.9375rem; }
        .section-header { text-align: center; max-width: 600px; margin: 0 auto 3rem; }
        .section-header p { margin-top: 1rem; }
        .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .process-step { text-align: center; }
        .step-num { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: var(--gold-500); color: var(--navy-900); font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; border-radius: 50%; margin-bottom: 1rem; }
        .process-step h3 { font-size: 1.125rem; margin-bottom: 0.5rem; font-family: var(--font-sans); }
        .process-step p { font-size: 0.9375rem; color: var(--navy-600); }
        .faq-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; max-width: 1000px; margin: 0 auto; }
        .faq-item { background: white; padding: 1.5rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
        .faq-item h4 { font-size: 1rem; margin-bottom: 0.75rem; font-family: var(--font-sans); }
        .faq-item p { font-size: 0.9375rem; color: var(--navy-600); margin: 0; }
        .cta-content { text-align: center; max-width: 600px; margin: 0 auto; }
        .cta-content h2 { color: white; margin-bottom: 1rem; }
        .cta-content p { color: var(--navy-300); margin-bottom: 2rem; }
        @media (max-width: 1024px) { .process-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr; } .process-grid, .faq-grid { grid-template-columns: 1fr; } .hero-meta { flex-direction: column; gap: 1rem; } }
      `}</style>
        </>
    );
}
