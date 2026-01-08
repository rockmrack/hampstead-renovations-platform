import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | Hampstead Renovations",
    description: "View our portfolio of renovation projects across North West London. Before/after photos, budgets, and timelines.",
};

const caseStudies = [
    { id: 1, title: "Victorian Full Refurbishment", area: "Hampstead", type: "Full Renovation", budget: "£285,000", duration: "18 weeks", sqm: 220, valueAdded: "+15%", image: "🏠" },
    { id: 2, title: "Rear Extension & Kitchen", area: "Belsize Park", type: "Extension", budget: "£145,000", duration: "14 weeks", sqm: 35, valueAdded: "+12%", image: "🔨" },
    { id: 3, title: "Loft Suite with En-Suite", area: "West Hampstead", type: "Loft Conversion", budget: "£78,000", duration: "10 weeks", sqm: 42, valueAdded: "+18%", image: "🏗️" },
    { id: 4, title: "Complete Flat Renovation", area: "St John's Wood", type: "Full Renovation", budget: "£165,000", duration: "12 weeks", sqm: 120, valueAdded: "+10%", image: "🏢" },
    { id: 5, title: "Kitchen & Two Bathrooms", area: "Primrose Hill", type: "Kitchen & Bath", budget: "£72,000", duration: "8 weeks", sqm: 45, valueAdded: "+8%", image: "🍳" },
    { id: 6, title: "Side Return Extension", area: "Highgate", type: "Extension", budget: "£92,000", duration: "12 weeks", sqm: 28, valueAdded: "+14%", image: "🏡" },
];

export default function CaseStudiesPage() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1>Our Work</h1>
                    <p>250+ successful projects across North West London</p>
                </div>
            </section>

            <section className="content section">
                <div className="container">
                    <div className="grid">
                        {caseStudies.map((study) => (
                            <div key={study.id} className="card">
                                <div className="card-image">{study.image}</div>
                                <div className="card-body">
                                    <div className="card-header">
                                        <span className="badge">{study.area}</span>
                                        <span className="type">{study.type}</span>
                                    </div>
                                    <h3>{study.title}</h3>
                                    <div className="stats-row">
                                        <div className="stat">
                                            <span className="label">Budget</span>
                                            <span className="value">{study.budget}</span>
                                        </div>
                                        <div className="stat">
                                            <span className="label">Duration</span>
                                            <span className="value">{study.duration}</span>
                                        </div>
                                        <div className="stat">
                                            <span className="label">Value Added</span>
                                            <span className="value highlight">{study.valueAdded}</span>
                                        </div>
                                    </div>
                                    <button className="btn btn-outline full-width">View Project →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta section section-dark">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Create Your Own Success Story?</h2>
                        <p>Book a free survey to discuss your project.</p>
                        <Link href="/contact" className="btn btn-primary btn-lg pulse-gold">Book Free Survey</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero { background: linear-gradient(135deg, var(--navy-950), var(--navy-800)); padding: 160px 0 80px; text-align: center; }
        .hero h1 { color: white; margin-bottom: 1rem; }
        .hero p { font-size: 1.25rem; color: var(--navy-300); }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .card { background: white; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg); transition: all var(--transition-base); }
        .card:hover { transform: translateY(-8px); box-shadow: var(--shadow-xl); }
        .card-image { height: 200px; background: linear-gradient(135deg, var(--navy-100), var(--cream-100)); display: flex; align-items: center; justify-content: center; font-size: 5rem; }
        .card-body { padding: 1.5rem; }
        .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .badge { padding: 0.25rem 0.75rem; background: var(--gold-100); color: var(--gold-600); font-size: 0.75rem; font-weight: 600; border-radius: 9999px; }
        .type { font-size: 0.75rem; color: var(--navy-400); }
        .card h3 { font-size: 1.25rem; margin-bottom: 1rem; font-family: var(--font-sans); }
        .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
        .stat { text-align: center; }
        .stat .label { display: block; font-size: 0.6875rem; color: var(--navy-400); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
        .stat .value { font-weight: 600; color: var(--navy-800); font-size: 0.875rem; }
        .stat .value.highlight { color: var(--gold-600); }
        .full-width { width: 100%; }
        .cta-content { text-align: center; max-width: 600px; margin: 0 auto; }
        .cta-content h2 { color: white; margin-bottom: 1rem; }
        .cta-content p { color: var(--navy-300); margin-bottom: 2rem; }
        @media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
}
