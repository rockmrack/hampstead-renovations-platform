"use client";

import Link from "next/link";


const features = [
    { title: "Weekly Reports", icon: "📊", desc: "Detailed progress updates with photos, milestones, and next steps" },
    { title: "Project Schedule", icon: "📅", desc: "Clear timeline with key dates and dependencies tracked" },
    { title: "Budget Tracking", icon: "💰", desc: "Transparent cost management with variation logging" },
    { title: "Document Hub", icon: "📁", desc: "All drawings, specs, and certificates in one place" },
    { title: "Quality Control", icon: "✓", desc: "Stage inspections and snagging management" },
    { title: "Direct Communication", icon: "💬", desc: "Single point of contact for all project queries" },
];

export default function ClientPortalDemoPage() {
    return (
        <>
            <section className="tool-hero">
                <div className="container">
                    <span className="hero-icon">📋</span>
                    <h1>How We Manage Your Project</h1>
                    <p className="hero-subtitle">Transparent, professional project management from start to finish</p>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <div className="intro">
                        <h2>Project Management You Can Trust</h2>
                        <p>We believe in complete transparency. Every client receives structured project management with regular reporting, clear communication, and professional documentation.</p>
                    </div>

                    <div className="features-grid">
                        {features.map((f, i) => (
                            <div key={i} className="feature-card">
                                <span className="icon">{f.icon}</span>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="sample-section">
                        <h2>What Our Reports Include</h2>
                        <div className="sample-grid">
                            <div className="sample-item">
                                <h3>Weekly Progress Summary</h3>
                                <ul>
                                    <li>Work completed this week</li>
                                    <li>Photo documentation</li>
                                    <li>Issues and resolutions</li>
                                    <li>Upcoming milestones</li>
                                </ul>
                            </div>
                            <div className="sample-item">
                                <h3>Financial Tracking</h3>
                                <ul>
                                    <li>Budget vs actual spend</li>
                                    <li>Variation orders logged</li>
                                    <li>Payment schedule status</li>
                                    <li>Remaining contingency</li>
                                </ul>
                            </div>
                            <div className="sample-item">
                                <h3>Quality Assurance</h3>
                                <ul>
                                    <li>Stage sign-off checklist</li>
                                    <li>Inspection photographs</li>
                                    <li>Snagging tracker</li>
                                    <li>Handover documentation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="cta-box">
                        <h2>Experience Our Professional Approach</h2>
                        <p>Book a survey to discuss your project and see how we can deliver it with full transparency.</p>
                        <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Survey</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .tool-hero { background: linear-gradient(135deg, var(--navy-900), var(--navy-800)); padding: 140px 0 80px; text-align: center; }
        .hero-icon { font-size: 4rem; display: block; margin-bottom: 24px; }
        .tool-hero h1 { color: white; margin-bottom: 16px; }
        .hero-subtitle { font-size: 1.25rem; color: var(--navy-200); }
        .content { padding: 60px 0 100px; background: var(--cream-50); }
        .intro { max-width: 700px; margin: 0 auto 48px; text-align: center; }
        .intro h2 { margin-bottom: 16px; }
        .intro p { font-size: 1.125rem; }
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 60px; }
        .feature-card { background: white; padding: 32px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); text-align: center; }
        .icon { font-size: 2.5rem; display: block; margin-bottom: 16px; }
        .feature-card h3 { font-size: 1.125rem; margin-bottom: 8px; font-family: var(--font-inter), sans-serif; }
        .feature-card p { font-size: 0.9375rem; color: var(--slate-500); margin: 0; }
        .sample-section { margin-bottom: 60px; }
        .sample-section h2 { text-align: center; margin-bottom: 32px; }
        .sample-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .sample-item { background: white; padding: 28px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
        .sample-item h3 { font-size: 1rem; margin-bottom: 16px; }
        .sample-item ul { padding-left: 20px; margin: 0; }
        .sample-item li { color: var(--slate-600); font-size: 0.9375rem; margin-bottom: 8px; }
        .cta-box { background: var(--navy-900); padding: 48px; border-radius: var(--radius-xl); text-align: center; }
        .cta-box h2 { color: white; margin-bottom: 12px; }
        .cta-box p { color: var(--navy-200); margin-bottom: 24px; }
        @media (max-width: 1024px) { .features-grid, .sample-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .features-grid, .sample-grid { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
}
