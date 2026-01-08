import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Hampstead Renovations",
    description: "Learn about Hampstead Renovations - premium renovation specialists serving North West London since 2010. Meet our team and discover our approach.",
};

export default function AboutPage() {
    const values = [
        { icon: "🏆", title: "Quality First", desc: "We never compromise on materials or workmanship. Every detail matters." },
        { icon: "🤝", title: "Transparency", desc: "Clear pricing, honest timelines, and regular communication throughout." },
        { icon: "📍", title: "Local Expertise", desc: "Deep knowledge of Camden planning, conservation areas, and period properties." },
        { icon: "✓", title: "Reliability", desc: "We deliver on our promises. On time, on budget, every time." },
    ];

    const team = [
        { name: "James Harrison", role: "Founder & MD", bio: "25 years in construction. James founded Hampstead Renovations to bring exceptional quality to NW London homeowners." },
        { name: "Sarah Mitchell", role: "Design Director", bio: "Former interior designer with a passion for transforming period properties while respecting their character." },
        { name: "David Chen", role: "Projects Director", bio: "15 years managing complex renovations. David ensures every project runs smoothly from start to finish." },
    ];

    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1>About Hampstead Renovations</h1>
                    <p>Premium renovation specialists serving North West London since 2010</p>
                </div>
            </section>

            <section className="intro section">
                <div className="container">
                    <div className="intro-content">
                        <div className="gold-accent gold-accent-center"></div>
                        <h2>Our Story</h2>
                        <p className="lead">Founded in Hampstead over a decade ago, we&apos;ve built our reputation on delivering exceptional renovation projects for discerning homeowners across North West London.</p>
                        <p>From complete house transformations to carefully crafted extensions, every project receives our full attention and expertise. We understand that your home is your most valuable asset, and we treat it with the respect it deserves.</p>
                    </div>
                </div>
            </section>

            <section className="values section section-cream">
                <div className="container">
                    <div className="section-header">
                        <div className="gold-accent gold-accent-center"></div>
                        <h2>Our Values</h2>
                        <p>What we stand for and how we work</p>
                    </div>
                    <div className="values-grid">
                        {values.map((v, i) => (
                            <div key={i} className="value-card">
                                <span className="value-icon">{v.icon}</span>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="team section">
                <div className="container">
                    <div className="section-header">
                        <div className="gold-accent gold-accent-center"></div>
                        <h2>Meet the Team</h2>
                        <p>The people behind your renovation</p>
                    </div>
                    <div className="team-grid">
                        {team.map((t, i) => (
                            <div key={i} className="team-card">
                                <div className="team-avatar">{t.name.split(" ").map(n => n[0]).join("")}</div>
                                <h3>{t.name}</h3>
                                <span className="role">{t.role}</span>
                                <p>{t.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="stats section section-dark">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat">
                            <span className="stat-value">250+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">£45M+</span>
                            <span className="stat-label">Project Value</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">4.9★</span>
                            <span className="stat-label">Average Rating</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">14yrs</span>
                            <span className="stat-label">In Business</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Work With Us?</h2>
                        <p>Book a free survey to discuss your renovation project.</p>
                        <Link href="/contact" className="btn btn-primary btn-lg pulse-gold">Book Free Survey</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero { background: linear-gradient(135deg, var(--navy-950), var(--navy-800)); padding: 160px 0 80px; text-align: center; }
        .hero h1 { color: white; margin-bottom: 1rem; }
        .hero p { font-size: 1.25rem; color: var(--navy-300); }
        .intro-content { max-width: 800px; margin: 0 auto; text-align: center; }
        .lead { font-size: 1.25rem; line-height: 1.8; margin-bottom: 1.5rem; }
        .intro-content > p:last-child { font-size: 1.0625rem; color: var(--navy-600); }
        .section-header { text-align: center; max-width: 600px; margin: 0 auto 3rem; }
        .section-header p { margin-top: 1rem; }
        .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .value-card { background: white; padding: 2rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); text-align: center; }
        .value-icon { font-size: 2.5rem; display: block; margin-bottom: 1rem; }
        .value-card h3 { font-size: 1.125rem; margin-bottom: 0.75rem; font-family: var(--font-sans); }
        .value-card p { font-size: 0.9375rem; color: var(--navy-500); margin: 0; }
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .team-card { background: white; padding: 2rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); text-align: center; }
        .team-avatar { width: 80px; height: 80px; background: var(--navy-900); color: var(--gold-400); display: inline-flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; font-size: 1.5rem; border-radius: 50%; margin-bottom: 1.5rem; }
        .team-card h3 { font-size: 1.25rem; margin-bottom: 0.25rem; font-family: var(--font-sans); }
        .role { display: block; color: var(--gold-600); font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem; }
        .team-card p { font-size: 0.9375rem; color: var(--navy-500); margin: 0; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; text-align: center; }
        .stat { display: flex; flex-direction: column; }
        .cta { background: linear-gradient(135deg, var(--cream-100), var(--cream-50)); }
        .cta-content { text-align: center; max-width: 600px; margin: 0 auto; }
        .cta-content h2 { margin-bottom: 1rem; }
        .cta-content p { margin-bottom: 2rem; }
        @media (max-width: 1024px) { .values-grid { grid-template-columns: repeat(2, 1fr); } .team-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; } .stats-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .values-grid, .stats-grid { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
}
