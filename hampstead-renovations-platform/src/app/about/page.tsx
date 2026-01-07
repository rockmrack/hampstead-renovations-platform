"use client";

import Link from "next/link";


export default function AboutPage() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1>About Hampstead Renovations</h1>
                    <p>Premium renovation specialists serving North West London since 2010</p>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <div className="intro">
                        <div className="gold-accent"></div>
                        <h2>Our Story</h2>
                        <p>Founded in Hampstead over a decade ago, we&apos;ve built our reputation on delivering exceptional renovation projects for discerning homeowners across North West London. From complete house transformations to carefully crafted extensions, every project receives our full attention and expertise.</p>
                    </div>

                    <div className="values-grid">
                        <div className="value">
                            <h3>Quality First</h3>
                            <p>We never compromise on materials or workmanship. Every detail matters.</p>
                        </div>
                        <div className="value">
                            <h3>Transparency</h3>
                            <p>Clear pricing, honest timelines, and regular communication throughout.</p>
                        </div>
                        <div className="value">
                            <h3>Local Expertise</h3>
                            <p>Deep knowledge of Camden planning, conservation areas, and period properties.</p>
                        </div>
                        <div className="value">
                            <h3>Reliability</h3>
                            <p>We deliver on our promises. On time, on budget, every time.</p>
                        </div>
                    </div>

                    <div className="team-section">
                        <h2>Our Approach</h2>
                        <div className="approach-grid">
                            <div className="approach">
                                <span className="num">1</span>
                                <h3>Listen</h3>
                                <p>We take time to understand your vision, lifestyle, and priorities.</p>
                            </div>
                            <div className="approach">
                                <span className="num">2</span>
                                <h3>Plan</h3>
                                <p>Detailed planning prevents surprises and keeps projects on track.</p>
                            </div>
                            <div className="approach">
                                <span className="num">3</span>
                                <h3>Execute</h3>
                                <p>Skilled craftsmen deliver exceptional results with minimal disruption.</p>
                            </div>
                            <div className="approach">
                                <span className="num">4</span>
                                <h3>Perfect</h3>
                                <p>Thorough snagging ensures every detail meets our high standards.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-box">
                        <h2>Ready to Start?</h2>
                        <p>Book a free survey to discuss your project with our team.</p>
                        <Link href="/contact" className="btn btn-primary btn-lg">Book a Survey</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero { background: linear-gradient(135deg, var(--navy-900), var(--navy-800)); padding: 140px 0 80px; text-align: center; }
        .hero h1 { color: white; margin-bottom: 16px; }
        .hero p { font-size: 1.25rem; color: var(--navy-200); }
        .content { padding: 60px 0 100px; background: var(--cream-50); }
        .intro { max-width: 700px; margin: 0 auto 60px; text-align: center; }
        .intro h2 { margin-bottom: 20px; }
        .intro p { font-size: 1.125rem; line-height: 1.8; }
        .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 60px; }
        .value { background: white; padding: 32px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); text-align: center; }
        .value h3 { font-size: 1.125rem; margin-bottom: 12px; font-family: var(--font-inter), sans-serif; }
        .value p { font-size: 0.9375rem; color: var(--slate-500); margin: 0; }
        .team-section { margin-bottom: 60px; }
        .team-section h2 { text-align: center; margin-bottom: 32px; }
        .approach-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .approach { background: white; padding: 32px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); text-align: center; }
        .num { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: var(--gold-500); color: white; border-radius: 50%; font-weight: 700; margin-bottom: 16px; }
        .approach h3 { font-size: 1.125rem; margin-bottom: 8px; font-family: var(--font-inter), sans-serif; }
        .approach p { font-size: 0.9375rem; color: var(--slate-500); margin: 0; }
        .cta-box { background: var(--navy-900); padding: 48px; border-radius: var(--radius-xl); text-align: center; }
        .cta-box h2 { color: white; margin-bottom: 12px; }
        .cta-box p { color: var(--navy-200); margin-bottom: 24px; }
        @media (max-width: 1024px) { .values-grid, .approach-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .values-grid, .approach-grid { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
}
