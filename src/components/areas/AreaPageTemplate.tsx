"use client";

import Link from "next/link";

interface AreaPageProps {
    areaName: string;
    postcode: string;
    description: string;
    highlights: string[];
    propertyTypes: string[];
    planningNotes: string;
}

export default function AreaPageTemplate({
    areaName,
    postcode,
    description,
    highlights,
    propertyTypes,
    planningNotes,
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
                <div className="container">
                    <span className="badge">{postcode}</span>
                    <h1>Renovations in {areaName}</h1>
                    <p className="subtitle">{description}</p>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <div className="grid">
                        <div className="main">
                            <h2>Why {areaName}?</h2>
                            <ul className="highlights">
                                {highlights.map((h, i) => <li key={i}>{h}</li>)}
                            </ul>

                            <h2>Common Property Types</h2>
                            <div className="property-tags">
                                {propertyTypes.map((p, i) => <span key={i} className="tag">{p}</span>)}
                            </div>

                            <h2>Planning Considerations</h2>
                            <p>{planningNotes}</p>
                        </div>

                        <div className="sidebar">
                            <div className="card">
                                <h3>Our Services in {areaName}</h3>
                                <ul>
                                    {services.map(s => <li key={s.href}><Link href={s.href}>{s.name}</Link></li>)}
                                </ul>
                            </div>
                            <div className="card cta">
                                <h3>Start Your Project</h3>
                                <p>Book a free survey to discuss your renovation.</p>
                                <Link href="/contact" className="btn btn-primary">Book a Survey</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero { background: linear-gradient(135deg, var(--navy-900), var(--navy-800)); padding: 140px 0 80px; text-align: center; }
        .badge { display: inline-block; padding: 8px 20px; background: rgba(184,148,61,0.15); border: 1px solid rgba(184,148,61,0.3); border-radius: 9999px; color: var(--gold-400); font-size: 0.875rem; font-weight: 500; margin-bottom: 20px; }
        .hero h1 { color: white; margin-bottom: 16px; }
        .subtitle { font-size: 1.25rem; color: var(--navy-200); max-width: 600px; margin: 0 auto; }
        .content { padding: 60px 0 100px; background: var(--cream-50); }
        .grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 48px; }
        .main h2 { margin-bottom: 16px; font-size: 1.5rem; }
        .main h2:not(:first-child) { margin-top: 40px; }
        .highlights { padding-left: 24px; }
        .highlights li { margin-bottom: 12px; color: var(--slate-600); }
        .property-tags { display: flex; flex-wrap: wrap; gap: 12px; }
        .tag { padding: 8px 16px; background: white; border: 1px solid var(--navy-100); border-radius: var(--radius-md); font-size: 0.875rem; color: var(--navy-700); }
        .main p { color: var(--slate-600); line-height: 1.7; }
        .sidebar { display: flex; flex-direction: column; gap: 24px; }
        .card { background: white; padding: 28px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
        .card h3 { font-size: 1.125rem; margin-bottom: 16px; }
        .card ul { list-style: none; padding: 0; margin: 0; }
        .card li { padding: 10px 0; border-bottom: 1px solid var(--navy-100); }
        .card li:last-child { border-bottom: none; }
        .card a { color: var(--navy-700); font-size: 0.9375rem; }
        .card a:hover { color: var(--gold-600); }
        .cta { text-align: center; }
        .cta p { margin-bottom: 20px; font-size: 0.9375rem; }
        @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
}
