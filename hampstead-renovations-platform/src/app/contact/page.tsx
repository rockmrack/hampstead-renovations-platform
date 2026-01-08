"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", postcode: "", projectType: "", budget: "", timeline: "", message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const update = (field: string, value: string) => setFormData({ ...formData, [field]: value });

    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1>Book Your Free Survey</h1>
                    <p>Get in touch to discuss your renovation project</p>
                </div>
            </section>

            <section className="content section">
                <div className="container">
                    <div className="grid">
                        <div className="form-section">
                            {!submitted ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="label">Name *</label>
                                            <input type="text" className="input" required value={formData.name} onChange={e => update("name", e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="label">Email *</label>
                                            <input type="email" className="input" required value={formData.email} onChange={e => update("email", e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="label">Phone</label>
                                            <input type="tel" className="input" value={formData.phone} onChange={e => update("phone", e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="label">Postcode *</label>
                                            <input type="text" className="input" required placeholder="e.g. NW3 1AA" value={formData.postcode} onChange={e => update("postcode", e.target.value.toUpperCase())} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="label">Project Type</label>
                                            <select className="input" value={formData.projectType} onChange={e => update("projectType", e.target.value)}>
                                                <option value="">Select...</option>
                                                <option value="full">Full House Renovation</option>
                                                <option value="extension">Extension</option>
                                                <option value="loft">Loft Conversion</option>
                                                <option value="kitchen">Kitchen Renovation</option>
                                                <option value="bathroom">Bathroom Renovation</option>
                                                <option value="decorating">Painting & Decorating</option>
                                                <option value="other">Other / Multiple</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="label">Approximate Budget</label>
                                            <select className="input" value={formData.budget} onChange={e => update("budget", e.target.value)}>
                                                <option value="">Select...</option>
                                                <option value="under50k">Under £50,000</option>
                                                <option value="50-100k">£50,000 - £100,000</option>
                                                <option value="100-200k">£100,000 - £200,000</option>
                                                <option value="200-500k">£200,000 - £500,000</option>
                                                <option value="500k+">Over £500,000</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="label">When would you like to start?</label>
                                        <select className="input" value={formData.timeline} onChange={e => update("timeline", e.target.value)}>
                                            <option value="">Select...</option>
                                            <option value="asap">As soon as possible</option>
                                            <option value="1-3months">Within 1-3 months</option>
                                            <option value="3-6months">Within 3-6 months</option>
                                            <option value="6months+">6+ months / Planning phase</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Tell us about your project</label>
                                        <textarea className="input textarea" rows={4} placeholder="Describe your renovation vision, any specific requirements, or questions you have..." value={formData.message} onChange={e => update("message", e.target.value)}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg full-width pulse-gold">Request Free Survey</button>
                                    <p className="form-note">We&apos;ll respond within 24 hours to arrange your survey.</p>
                                </form>
                            ) : (
                                <div className="success">
                                    <span className="success-icon">✓</span>
                                    <h2>Thank You!</h2>
                                    <p>We&apos;ve received your enquiry and will be in touch within 24 hours to arrange your free survey.</p>
                                    <p className="next-steps">In the meantime, you might like to:</p>
                                    <div className="success-links">
                                        <Link href="/case-studies" className="btn btn-outline">View Our Work</Link>
                                        <Link href="/tools/renovation-cost-calculator" className="btn btn-outline">Try Cost Calculator</Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="info-section">
                            <div className="info-card">
                                <h3>Contact Details</h3>
                                <div className="info-item">
                                    <span className="icon">📍</span>
                                    <div>
                                        <strong>Hampstead Renovations</strong><br />
                                        Unit 3, Palace Court<br />
                                        250 Finchley Rd<br />
                                        London NW3 6DN
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="icon">📞</span>
                                    <a href="tel:+442071234567">020 7123 4567</a>
                                </div>
                                <div className="info-item">
                                    <span className="icon">✉️</span>
                                    <a href="mailto:hello@hampsteadrenovations.co.uk">hello@hampsteadrenovations.co.uk</a>
                                </div>
                                <div className="info-item">
                                    <span className="icon">💬</span>
                                    <a href="https://wa.me/442071234567">WhatsApp Us</a>
                                </div>
                            </div>

                            <div className="info-card">
                                <h3>Office Hours</h3>
                                <p>Monday - Friday: 8am - 6pm<br />Saturday: 9am - 2pm (surveys only)<br />Sunday: Closed</p>
                            </div>

                            <div className="trust-card">
                                <h4>Why Choose Us</h4>
                                <ul>
                                    <li>✓ 10-Year Guarantee</li>
                                    <li>✓ Fixed-Price Quotes</li>
                                    <li>✓ £5M Insured</li>
                                    <li>✓ TrustMark Certified</li>
                                    <li>✓ 4.9★ from 127 reviews</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero { background: linear-gradient(135deg, var(--navy-950), var(--navy-800)); padding: 160px 0 80px; text-align: center; }
        .hero h1 { color: white; margin-bottom: 1rem; }
        .hero p { font-size: 1.25rem; color: var(--navy-300); }
        .content { padding-bottom: 6rem; }
        .grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; }
        .form-section { background: white; padding: 2.5rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); }
        .form-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .form-group { margin-bottom: 1.5rem; }
        .textarea { resize: vertical; min-height: 120px; }
        .full-width { width: 100%; }
        .form-note { text-align: center; font-size: 0.875rem; color: var(--navy-500); margin-top: 1rem; }
        .success { text-align: center; padding: 3rem 0; }
        .success-icon { display: inline-flex; align-items: center; justify-content: center; width: 80px; height: 80px; background: var(--success); color: white; font-size: 2.5rem; border-radius: 50%; margin-bottom: 1.5rem; }
        .success h2 { margin-bottom: 1rem; }
        .next-steps { margin-top: 2rem; margin-bottom: 1rem; font-weight: 600; }
        .success-links { display: flex; gap: 1rem; justify-content: center; }
        .info-section { display: flex; flex-direction: column; gap: 1.5rem; }
        .info-card { background: white; padding: 1.5rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
        .info-card h3 { font-size: 1rem; margin-bottom: 1rem; font-family: var(--font-sans); }
        .info-card p { color: var(--navy-600); margin: 0; line-height: 1.7; }
        .info-item { display: flex; gap: 1rem; margin-bottom: 1rem; }
        .icon { font-size: 1.25rem; }
        .info-item a { color: var(--navy-700); }
        .info-item a:hover { color: var(--gold-600); }
        .trust-card { background: var(--cream-100); padding: 1.5rem; border-radius: var(--radius-lg); }
        .trust-card h4 { font-size: 1rem; margin-bottom: 1rem; font-family: var(--font-sans); }
        .trust-card ul { list-style: none; padding: 0; margin: 0; }
        .trust-card li { padding: 0.5rem 0; color: var(--navy-700); font-size: 0.9375rem; }
        @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } .success-links { flex-direction: column; } }
      `}</style>
        </>
    );
}
