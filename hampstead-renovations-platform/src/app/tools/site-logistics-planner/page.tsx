import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Site Logistics Planner",
    description: "Plan skip licences, scaffolding, and parking suspensions for your London renovation.",
};

const logistics = [
    { title: "Skip Licence", icon: "🗑️", leadTime: "5-10 days", cost: "£50-100/week", desc: "Required for skips on public highway. Apply to Camden Council." },
    { title: "Scaffold Licence", icon: "🏗️", leadTime: "10-15 days", cost: "£100-300/week", desc: "Required if scaffolding encroaches on pavement or road." },
    { title: "Parking Suspension", icon: "🚗", leadTime: "7-14 days", cost: "£30-50/day", desc: "Reserve kerb space for deliveries or crane access." },
    { title: "Hoarding Licence", icon: "🚧", leadTime: "10-20 days", cost: "£150-400/week", desc: "For major works requiring site enclosure on public land." },
];

const tips = [
    { title: "Book Early", desc: "Apply 2-3 weeks before works start" },
    { title: "Check Restrictions", desc: "Some streets have parking/loading restrictions" },
    { title: "Notify Neighbours", desc: "Inform neighbours of delivery schedules" },
    { title: "Deliveries", desc: "Schedule large deliveries for less busy periods" },
];

export default function SiteLogisticsPlannerPage() {
    return (
        <>
            <section className="tool-hero">
                <div className="container">
                    <span className="hero-icon">🚧</span>
                    <h1>Site Logistics Planner</h1>
                    <p className="hero-subtitle">Plan skips, scaffolds, and parking for your London renovation</p>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <h2 className="section-heading">London Logistics Requirements</h2>
                    <div className="logistics-grid">
                        {logistics.map((item, i) => (
                            <div key={i} className="logistics-card">
                                <span className="icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className="meta">
                                    <span><strong>Lead time:</strong> {item.leadTime}</span>
                                    <span><strong>Typical cost:</strong> {item.cost}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="section-heading">Planning Tips</h2>
                    <div className="tips-grid">
                        {tips.map((tip, i) => (
                            <div key={i} className="tip-card">
                                <h3>{tip.title}</h3>
                                <p>{tip.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="cta-box">
                        <h2>Need Help Planning Your Build?</h2>
                        <p>Our team handles all logistics as part of our full project management service.</p>
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
        .section-heading { text-align: center; margin-bottom: 32px; }
        .logistics-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 60px; }
        .logistics-card { background: white; padding: 32px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
        .icon { font-size: 2.5rem; display: block; margin-bottom: 16px; }
        .logistics-card h3 { font-size: 1.25rem; margin-bottom: 12px; }
        .logistics-card p { color: var(--slate-600); margin-bottom: 16px; }
        .meta { display: flex; flex-direction: column; gap: 4px; font-size: 0.875rem; color: var(--slate-500); }
        .tips-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 60px; }
        .tip-card { background: white; padding: 24px; border-radius: var(--radius-lg); text-align: center; box-shadow: var(--shadow-sm); }
        .tip-card h3 { font-size: 1rem; margin-bottom: 8px; font-family: var(--font-inter), sans-serif; }
        .tip-card p { font-size: 0.875rem; color: var(--slate-500); margin: 0; }
        .cta-box { background: var(--navy-900); padding: 48px; border-radius: var(--radius-xl); text-align: center; }
        .cta-box h2 { color: white; margin-bottom: 12px; }
        .cta-box p { color: var(--navy-200); margin-bottom: 24px; }
        @media (max-width: 1024px) { .tips-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .logistics-grid, .tips-grid { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
}
