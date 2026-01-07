import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Leasehold Renovation Permissions",
    description: "Toolkit for flat and leasehold renovation permissions in London.",
};

const checklist = [
    { category: "Before You Start", items: ["Review lease for restrictions", "Check if works are structural", "Confirm freeholder contact"] },
    { category: "Licence Application", items: ["Complete application form", "Provide scope of works", "Submit drawings", "Pay licence fee"] },
    { category: "Documentation", items: ["Contractor insurance (£5m+)", "Method statement", "Working hours confirmation"] },
    { category: "After Completion", items: ["Building control sign-off", "Update lease if required", "Retain all documents"] },
];

export default function LeaseholdPermissionsPage() {
    return (
        <>
            <section className="tool-hero">
                <div className="container">
                    <span className="hero-icon">📜</span>
                    <h1>Leasehold Renovation Toolkit</h1>
                    <p className="hero-subtitle">Navigate flat renovation permissions with confidence</p>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <div className="intro-card">
                        <h2>Do I Need a Licence to Alter?</h2>
                        <p>If you own a leasehold flat and plan alterations, you almost certainly need freeholder permission via a &quot;Licence to Alter&quot;.</p>
                        <div className="check-grid">
                            <div className="check-box">
                                <h3>✓ Usually Requires Permission</h3>
                                <ul>
                                    <li>Removing/altering walls</li>
                                    <li>Moving kitchen or bathroom</li>
                                    <li>Changing flooring type</li>
                                    <li>Any structural changes</li>
                                </ul>
                            </div>
                            <div className="check-box">
                                <h3>✗ Usually No Permission</h3>
                                <ul>
                                    <li>Repainting same colours</li>
                                    <li>Like-for-like fixtures</li>
                                    <li>Minor decorative changes</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h2 className="section-heading">Permissions Checklist</h2>
                    <div className="checklist-grid">
                        {checklist.map((cat, i) => (
                            <div key={i} className="checklist-card">
                                <h3><span className="num">{i + 1}</span>{cat.category}</h3>
                                <ul>{cat.items.map((item, j) => <li key={j}>☐ {item}</li>)}</ul>
                            </div>
                        ))}
                    </div>

                    <div className="cta-box">
                        <h2>Need Help With Your Flat Renovation?</h2>
                        <p>We have extensive experience renovating leasehold properties across London.</p>
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
        .intro-card { background: white; border-radius: var(--radius-xl); padding: 48px; margin-bottom: 48px; box-shadow: var(--shadow-lg); }
        .intro-card h2 { margin-bottom: 16px; }
        .intro-card > p { font-size: 1.125rem; margin-bottom: 24px; }
        .check-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .check-box { background: var(--navy-50); padding: 24px; border-radius: var(--radius-lg); }
        .check-box h3 { font-size: 1rem; margin-bottom: 12px; font-family: var(--font-inter), sans-serif; }
        .check-box ul { padding-left: 20px; margin: 0; }
        .check-box li { margin-bottom: 6px; color: var(--slate-600); font-size: 0.9375rem; }
        .section-heading { text-align: center; margin-bottom: 32px; }
        .checklist-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 48px; }
        .checklist-card { background: white; padding: 28px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
        .checklist-card h3 { display: flex; align-items: center; gap: 12px; font-size: 1rem; margin-bottom: 16px; }
        .num { width: 28px; height: 28px; background: var(--gold-500); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; }
        .checklist-card ul { list-style: none; padding: 0; margin: 0; }
        .checklist-card li { padding: 8px 0; border-bottom: 1px solid var(--navy-100); font-size: 0.9375rem; color: var(--slate-600); }
        .cta-box { background: var(--navy-900); padding: 48px; border-radius: var(--radius-xl); text-align: center; }
        .cta-box h2 { color: white; margin-bottom: 12px; }
        .cta-box p { color: var(--navy-200); margin-bottom: 24px; }
        @media (max-width: 768px) { .check-grid, .checklist-grid { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
}
