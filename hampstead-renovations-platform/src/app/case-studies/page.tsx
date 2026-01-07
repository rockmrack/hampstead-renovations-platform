import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Case Studies",
    description: "View our portfolio of renovation projects across North West London.",
};

const caseStudies = [
    { title: "Victorian Full Refurbishment", area: "Hampstead", type: "Full Renovation", budget: "£280k", duration: "16 weeks", image: "🏠" },
    { title: "Rear Extension & Kitchen", area: "Belsize Park", type: "Extension", budget: "£150k", duration: "12 weeks", image: "🔨" },
    { title: "Loft Conversion with En-Suite", area: "West Hampstead", type: "Loft", budget: "£85k", duration: "10 weeks", image: "🏗️" },
    { title: "Complete Flat Renovation", area: "St John's Wood", type: "Full Renovation", budget: "£120k", duration: "8 weeks", image: "🏢" },
    { title: "Kitchen & Two Bathrooms", area: "Primrose Hill", type: "Kitchen & Bath", budget: "£65k", duration: "6 weeks", image: "🍳" },
    { title: "Side Return Extension", area: "Highgate", type: "Extension", budget: "£95k", duration: "10 weeks", image: "🏡" },
];

export default function CaseStudiesPage() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1>Case Studies</h1>
                    <p>Explore our portfolio of renovation projects</p>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <div className="grid">
                        {caseStudies.map((study, i) => (
                            <div key={i} className="card">
                                <div className="card-image">{study.image}</div>
                                <div className="card-body">
                                    <span className="badge">{study.area}</span>
                                    <h3>{study.title}</h3>
                                    <div className="meta">
                                        <span>{study.type}</span>
                                        <span>{study.budget}</span>
                                        <span>{study.duration}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta-section">
                        <h2>Ready to Create Your Own Success Story?</h2>
                        <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Survey</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero { background: linear-gradient(135deg, var(--navy-900), var(--navy-800)); padding: 140px 0 80px; text-align: center; }
        .hero h1 { color: white; margin-bottom: 16px; }
        .hero p { font-size: 1.25rem; color: var(--navy-200); }
        .content { padding: 60px 0 100px; background: var(--cream-50); }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-bottom: 60px; }
        .card { background: white; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg); transition: transform 0.3s; }
        .card:hover { transform: translateY(-8px); }
        .card-image { height: 200px; background: var(--navy-100); display: flex; align-items: center; justify-content: center; font-size: 4rem; }
        .card-body { padding: 24px; }
        .badge { display: inline-block; padding: 4px 12px; background: var(--gold-100); color: var(--gold-600); font-size: 0.75rem; font-weight: 600; border-radius: 9999px; margin-bottom: 12px; }
        .card h3 { font-size: 1.25rem; margin-bottom: 16px; }
        .meta { display: flex; gap: 16px; font-size: 0.8125rem; color: var(--slate-500); }
        .cta-section { text-align: center; padding: 48px; background: white; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .cta-section h2 { margin-bottom: 24px; }
        @media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
}
