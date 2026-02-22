"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", postcode: "", message: "", projectType: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
                access_key: "9e316736-1844-4817-b5ef-4245ae83e7ce",
                subject: "New Contact Enquiry — Hampstead Renovations",
                ...formData,
            }),
        });
        if (res.ok) setSubmitted(true);
    };

    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1>Book a Free Survey</h1>
                    <p>Get in touch to discuss your renovation project</p>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <div className="grid">
                        <div className="form-section">
                            {!submitted ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="label">Name *</label>
                                            <input type="text" className="input" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label className="label">Email *</label>
                                            <input type="email" className="input" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="label">Phone</label>
                                            <input type="tel" className="input" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label className="label">Postcode *</label>
                                            <input type="text" className="input" required value={formData.postcode} onChange={e => setFormData({ ...formData, postcode: e.target.value.toUpperCase() })} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Project Type</label>
                                        <select className="input" value={formData.projectType} onChange={e => setFormData({ ...formData, projectType: e.target.value })}>
                                            <option value="">Select...</option>
                                            <option value="full-refurb">Full House Refurbishment</option>
                                            <option value="extension">Extension</option>
                                            <option value="loft">Loft Conversion</option>
                                            <option value="kitchen">Kitchen Renovation</option>
                                            <option value="bathroom">Bathroom Renovation</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="label">Tell us about your project</label>
                                        <textarea className="input textarea" rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg full-width">Request a Survey</button>
                                </form>
                            ) : (
                                <div className="success">
                                    <span className="success-icon">✓</span>
                                    <h2>Thank You!</h2>
                                    <p>We&apos;ll be in touch within 24 hours to arrange your free survey.</p>
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
                                        250 Finchley Rd, London NW3 6DN
                                    </div>
                                </div>
                                <div className="info-item">
                                    <span className="icon">📞</span>
                                    <a href="tel:+442071234567">020 7123 4567</a>
                                </div>
                                <div className="info-item">
                                    <span className="icon">✉️</span>
                                    <a href="mailto:enquiries@hampsteadrenovations.co.uk">enquiries@hampsteadrenovations.co.uk</a>
                                </div>
                            </div>

                            <div className="info-card">
                                <h3>Office Hours</h3>
                                <p>Monday - Friday: 8am - 6pm<br />Saturday: 9am - 2pm<br />Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero { background: linear-gradient(135deg, var(--navy-900), var(--navy-800)); padding: 140px 0 80px; text-align: center; }
        .hero h1 { color: white; margin-bottom: 16px; }
        .hero p { font-size: 1.25rem; color: var(--navy-200); }
        .content { padding: 60px 0 100px; background: var(--cream-50); }
        .grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 48px; }
        .form-section { background: white; padding: 40px; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); }
        .form-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .form-group { margin-bottom: 20px; }
        .textarea { resize: vertical; }
        .full-width { width: 100%; }
        .success { text-align: center; padding: 60px 0; }
        .success-icon { display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; background: #059669; color: white; font-size: 2rem; border-radius: 50%; margin-bottom: 24px; }
        .info-section { display: flex; flex-direction: column; gap: 24px; }
        .info-card { background: white; padding: 32px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
        .info-card h3 { margin-bottom: 20px; font-size: 1.125rem; }
        .info-card p { color: var(--slate-600); margin: 0; }
        .info-item { display: flex; gap: 16px; margin-bottom: 16px; }
        .icon { font-size: 1.25rem; }
        .info-item a { color: var(--navy-700); }
        .info-item a:hover { color: var(--gold-600); }
        @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
}
