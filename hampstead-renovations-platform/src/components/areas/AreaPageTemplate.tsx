import Link from "next/link";
import { Metadata } from "next";

interface AreaPageProps {
    areaName: string;
    postcode: string;
    description: string;
    highlights: string[];
    propertyTypes: string[];
    planningNotes: string;
    avgProjectValue?: string;
}

export function generateAreaMetadata(area: string): Metadata {
    return {
        title: `Renovations in ${area} | Hampstead Renovations`,
        description: `Expert renovation services in ${area}. Full house refurbishment, extensions, loft conversions and more. Trusted local builders with 10-year guarantee.`,
    };
}

export default function AreaPageTemplate({
    areaName, postcode, description, highlights, propertyTypes, planningNotes, avgProjectValue
}: AreaPageProps) {
    const services = [
        { name: "Full House Renovation", href: "/services/full-house-renovation" },
        { name: "Extensions", href: "/services/extensions" },
        { name: "Loft Conversions", href: "/services/loft-conversion" },
        { name: "Kitchen Renovation", href: "/services/kitchen-renovation" },
        { name: "Bathroom Renovation", href: "/services/bathroom-renovation" },
    ];

    return (
        <>
            <section className="hero">
                <div className="container hero-content">
                    <span className="badge">{postcode}</span>
                    <h1>Renovations in {areaName}</h1>
                    <p className="subtitle">{description}</p>
                    <Link href="/contact" className="btn btn-primary btn-lg">Get Free Quote</Link>
                </div>
            </section>

            <section className="content section">
                <div className="container">
                    <div className="grid">
                        <div className="main">
                            <div className="gold-accent"></div>
                            <h2>Why {areaName}?</h2>
                            <ul className="highlights">
                                {highlights.map((h, i) => <li key={i}><span className="check">✓</span>{h}</li>)}
                            </ul>

                            <h2>Common Property Types</h2>
                            <div className="property-tags">
                                {propertyTypes.map((p, i) => <span key={i} className="tag">{p}</span>)}
                            </div>

                            <h2>Planning Considerations</h2>
                            <p>{planningNotes}</p>
                        </div>

                        <div className="sidebar">
                            <div className="cta-card">
                                <h3>Services in {areaName}</h3>
                                <ul className="service-links">
                                    {services.map(s => <li key={s.href}><Link href={s.href}>{s.name} →</Link></li>)}
                                </ul>
                            </div>
                            {avgProjectValue && (
                                <div className="stat-card">
                                    <span className="stat-label">Avg. Project Value</span>
                                    <span className="stat-value">{avgProjectValue}</span>
                                </div>
                            )}
                            <div className="cta-card dark">
                                <h3>Start Your Project</h3>
                                <p>Book a free survey in {areaName}.</p>
                                <Link href="/contact" className="btn btn-primary">Book Survey</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tools-section section section-cream">
                <div className="container">
                    <div className="section-header">
                        <div className="gold-accent gold-accent-center"></div>
                        <h2>Plan Your {areaName} Renovation</h2>
                        <p>Use our free tools to get started</p>
                    </div>
                    <div className="tools-grid">
                        <Link href="/tools/renovation-cost-calculator" className="tool-card">
                            <span className="tool-icon">💰</span>
                            <h3>Cost Calculator</h3>
                            <p>Get instant budget estimates</p>
                        </Link>
                        <Link href="/tools/planning-checker" className="tool-card">
                            <span className="tool-icon">📋</span>
                            <h3>Planning Checker</h3>
                            <p>Check local constraints</p>
                        </Link>
                        <Link href="/tools/roi-estimator" className="tool-card">
                            <span className="tool-icon">📈</span>
                            <h3>ROI Estimator</h3>
                            <p>See value impact</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="final-cta section section-dark">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your {areaName} Home?</h2>
                        <p>Book a free, no-obligation survey with our team.</p>
                        <Link href="/contact" className="btn btn-primary btn-lg pulse-gold">Book Free Survey</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero { background: linear-gradient(135deg, var(--navy-950), var(--navy-800)); padding: 160px 0 80px; text-align: center; }
        .badge { display: inline-block; padding: 0.5rem 1.25rem; background: rgba(184,148,61,0.15); border: 1px solid rgba(184,148,61,0.3); border-radius: 9999px; color: var(--gold-400); font-size: 0.875rem; font-weight: 600; margin-bottom: 1.5rem; }
        .hero h1 { color: white; margin-bottom: 1rem; }
        .subtitle { font-size: 1.25rem; color: var(--navy-300); max-width: 600px; margin: 0 auto 2rem; }
        .grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; }
        .main h2 { font-size: 1.5rem; margin-bottom: 1rem; }
        .main h2:not(:first-of-type) { margin-top: 2.5rem; }
        .highlights { list-style: none; padding: 0; margin-bottom: 2rem; }
        .highlights li { display: flex; gap: 0.75rem; padding: 0.75rem 0; border-bottom: 1px solid var(--navy-100); }
        .check { color: var(--gold-600); font-weight: 700; }
        .property-tags { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 2rem; }
        .tag { padding: 0.5rem 1rem; background: white; border: 1px solid var(--navy-200); border-radius: var(--radius-md); font-size: 0.875rem; }
        .main > p { color: var(--navy-600); line-height: 1.8; }
        .sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
        .cta-card { background: white; padding: 1.5rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
        .cta-card.dark { background: var(--navy-900); text-align: center; }
        .cta-card.dark h3 { color: white; }
        .cta-card.dark p { color: var(--navy-400); margin-bottom: 1rem; }
        .cta-card h3 { font-size: 1rem; margin-bottom: 1rem; font-family: var(--font-sans); }
        .service-links { list-style: none; padding: 0; margin: 0; }
        .service-links li { padding: 0.5rem 0; border-bottom: 1px solid var(--navy-100); }
        .service-links li:last-child { border-bottom: none; }
        .service-links a { color: var(--navy-700); font-size: 0.9375rem; }
        .service-links a:hover { color: var(--gold-600); }
        .stat-card { background: linear-gradient(135deg, var(--gold-500), var(--gold-600)); padding: 1.5rem; border-radius: var(--radius-lg); text-align: center; }
        .stat-card .stat-label { display: block; color: rgba(255,255,255,0.8); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
        .stat-card .stat-value { font-family: var(--font-display); font-size: 2rem; font-weight: 700; color: white; }
        .section-header { text-align: center; max-width: 600px; margin: 0 auto 3rem; }
        .section-header p { margin-top: 1rem; }
        .tools-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .tool-card { background: white; padding: 2rem; border-radius: var(--radius-xl); text-align: center; border: 2px solid var(--navy-100); transition: all var(--transition-base); }
        .tool-card:hover { border-color: var(--gold-500); transform: translateY(-4px); }
        .tool-icon { font-size: 2.5rem; display: block; margin-bottom: 1rem; }
        .tool-card h3 { font-size: 1.125rem; margin-bottom: 0.5rem; font-family: var(--font-sans); }
        .tool-card p { font-size: 0.875rem; color: var(--navy-500); margin: 0; }
        .cta-content { text-align: center; max-width: 600px; margin: 0 auto; }
        .cta-content h2 { color: white; margin-bottom: 1rem; }
        .cta-content p { color: var(--navy-300); margin-bottom: 2rem; }
        @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } .tools-grid { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
}
