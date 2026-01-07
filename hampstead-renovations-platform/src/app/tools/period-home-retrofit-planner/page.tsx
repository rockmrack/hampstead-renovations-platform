import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Period Home Retrofit Planner",
    description: "Plan thermal comfort, noise reduction, and energy upgrades for your period property.",
};

const upgrades = [
    { title: "Secondary Glazing", desc: "Improve thermal and acoustic performance without replacing original windows", cost: "£300-600/window", savings: "10-15%" },
    { title: "Internal Wall Insulation", desc: "Heritage-friendly insulation that preserves external appearance", cost: "£80-120/sqm", savings: "15-25%" },
    { title: "Underfloor Insulation", desc: "Reduces draughts and heat loss through suspended floors", cost: "£30-60/sqm", savings: "10-15%" },
    { title: "Draught Proofing", desc: "Seal gaps around windows, doors, and floorboards", cost: "£200-500", savings: "5-10%" },
    { title: "Heating Upgrades", desc: "Modern efficient boilers or heat pumps compatible with period homes", cost: "£3k-15k", savings: "20-40%" },
    { title: "Loft Insulation", desc: "Top up or replace insulation to current standards", cost: "£20-40/sqm", savings: "15-20%" },
];

export default function RetrofitPlannerPage() {
    return (
        <>
            <section className="tool-hero">
                <div className="container">
                    <span className="hero-icon">🏛️</span>
                    <h1>Period Home Retrofit Planner</h1>
                    <p className="hero-subtitle">Heritage-appropriate upgrades for comfort and efficiency</p>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <div className="intro">
                        <h2>Improving Period Properties Sensitively</h2>
                        <p>Period homes present unique challenges for improving thermal comfort, noise reduction, and energy efficiency. The key is using heritage-appropriate solutions that preserve character while enhancing performance.</p>
                    </div>

                    <h2 className="section-heading">Upgrade Options</h2>
                    <div className="upgrades-grid">
                        {upgrades.map((item, i) => (
                            <div key={i} className="upgrade-card">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className="meta">
                                    <span className="cost">Cost: {item.cost}</span>
                                    <span className="savings">Energy saving: {item.savings}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta-box">
                        <h2>Book a Comfort Audit</h2>
                        <p>Our team can assess your period property and recommend appropriate upgrades.</p>
                        <Link href="/contact" className="btn btn-primary btn-lg">Book a Survey</Link>
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
        .section-heading { text-align: center; margin-bottom: 32px; }
        .upgrades-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 60px; }
        .upgrade-card { background: white; padding: 28px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
        .upgrade-card h3 { font-size: 1.125rem; margin-bottom: 12px; }
        .upgrade-card p { color: var(--slate-600); font-size: 0.9375rem; margin-bottom: 16px; }
        .meta { display: flex; flex-direction: column; gap: 6px; font-size: 0.8125rem; }
        .cost { color: var(--slate-500); }
        .savings { color: var(--gold-600); font-weight: 600; }
        .cta-box { background: var(--navy-900); padding: 48px; border-radius: var(--radius-xl); text-align: center; }
        .cta-box h2 { color: white; margin-bottom: 12px; }
        .cta-box p { color: var(--navy-200); margin-bottom: 24px; }
        @media (max-width: 1024px) { .upgrades-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .upgrades-grid { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
}
