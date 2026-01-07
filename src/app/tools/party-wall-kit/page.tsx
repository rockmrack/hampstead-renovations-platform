"use client";

import { useState } from "react";
import Link from "next/link";

interface NoticeDetails {
    ownerName: string;
    ownerAddress: string;
    neighbourName: string;
    neighbourAddress: string;
    worksDescription: string;
    startDate: string;
}

export default function PartyWallKit() {
    const [activeTab, setActiveTab] = useState<"generator" | "templates" | "guide">("generator");
    const [formData, setFormData] = useState<NoticeDetails>({
        ownerName: "",
        ownerAddress: "",
        neighbourName: "",
        neighbourAddress: "",
        worksDescription: "",
        startDate: "",
    });
    const [generated, setGenerated] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleGenerate = () => {
        setGenerated(true);
    };

    const handleSubmitEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const templates = [
        { name: "Party Wall Notice (Line of Junction)", description: "For building a new wall on the boundary line" },
        { name: "Party Wall Notice (Section 2)", description: "For works to an existing party wall" },
        { name: "Adjacent Excavation Notice (Section 6)", description: "For excavations within 3-6 metres of neighbours" },
        { name: "Neighbour Introduction Letter", description: "Friendly letter explaining your renovation plans" },
        { name: "Dust & Noise Mitigation Plan", description: "Template for managing disruption during works" },
        { name: "Working Hours Notice", description: "Inform neighbours of construction hours" },
    ];

    return (
        <>
            <section className="tool-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-icon">🏘️</span>
                        <h1>Party Wall Kit</h1>
                        <p className="hero-subtitle">
                            Templates and guidance for party wall notices and neighbour communications
                        </p>
                    </div>
                </div>
            </section>

            <section className="kit-section">
                <div className="container">
                    <div className="disclaimer-banner">
                        <strong>Important:</strong> These templates are for informational purposes only and do not constitute legal advice.
                        For formal Party Wall matters, we recommend engaging a qualified Party Wall Surveyor.
                    </div>

                    <div className="tabs">
                        <button
                            className={`tab ${activeTab === "generator" ? "active" : ""}`}
                            onClick={() => setActiveTab("generator")}
                        >
                            Notice Generator
                        </button>
                        <button
                            className={`tab ${activeTab === "templates" ? "active" : ""}`}
                            onClick={() => setActiveTab("templates")}
                        >
                            Template Library
                        </button>
                        <button
                            className={`tab ${activeTab === "guide" ? "active" : ""}`}
                            onClick={() => setActiveTab("guide")}
                        >
                            Party Wall Guide
                        </button>
                    </div>

                    <div className="tab-content">
                        {/* Generator Tab */}
                        {activeTab === "generator" && (
                            <div className="generator-panel">
                                {!generated ? (
                                    <>
                                        <h2>Generate Party Wall Notice</h2>
                                        <p>Fill in the details below to generate a draft notice</p>

                                        <div className="form-grid">
                                            <div className="form-group">
                                                <label className="label">Your Name (Building Owner)</label>
                                                <input
                                                    type="text"
                                                    className="input"
                                                    value={formData.ownerName}
                                                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                                                    placeholder="John Smith"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="label">Your Property Address</label>
                                                <input
                                                    type="text"
                                                    className="input"
                                                    value={formData.ownerAddress}
                                                    onChange={(e) => setFormData({ ...formData, ownerAddress: e.target.value })}
                                                    placeholder="123 Hampstead Lane, London NW3 6DN"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="label">Neighbour&apos;s Name (Adjoining Owner)</label>
                                                <input
                                                    type="text"
                                                    className="input"
                                                    value={formData.neighbourName}
                                                    onChange={(e) => setFormData({ ...formData, neighbourName: e.target.value })}
                                                    placeholder="Jane Doe"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="label">Neighbour&apos;s Address</label>
                                                <input
                                                    type="text"
                                                    className="input"
                                                    value={formData.neighbourAddress}
                                                    onChange={(e) => setFormData({ ...formData, neighbourAddress: e.target.value })}
                                                    placeholder="125 Hampstead Lane, London NW3 6DN"
                                                />
                                            </div>
                                            <div className="form-group full-width">
                                                <label className="label">Description of Proposed Works</label>
                                                <textarea
                                                    className="input textarea"
                                                    rows={3}
                                                    value={formData.worksDescription}
                                                    onChange={(e) => setFormData({ ...formData, worksDescription: e.target.value })}
                                                    placeholder="Rear extension with excavation for foundations within 3 metres of the party wall..."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="label">Intended Start Date</label>
                                                <input
                                                    type="date"
                                                    className="input"
                                                    value={formData.startDate}
                                                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <button
                                            className="btn btn-primary btn-lg"
                                            onClick={handleGenerate}
                                            disabled={!formData.ownerName || !formData.neighbourName || !formData.worksDescription}
                                        >
                                            Generate Draft Notice
                                        </button>
                                    </>
                                ) : (
                                    <div className="generated-notice">
                                        <h2>Draft Party Wall Notice</h2>
                                        <div className="notice-preview">
                                            <div className="notice-header">
                                                <strong>PARTY WALL ETC. ACT 1996</strong>
                                                <br />NOTICE OF ADJACENT EXCAVATION
                                            </div>
                                            <div className="notice-body">
                                                <p><strong>To:</strong> {formData.neighbourName}</p>
                                                <p><strong>Of:</strong> {formData.neighbourAddress}</p>
                                                <p><strong>From:</strong> {formData.ownerName}</p>
                                                <p><strong>Of:</strong> {formData.ownerAddress}</p>
                                                <hr />
                                                <p>
                                                    I/We hereby give you notice under Section 6 of the Party Wall etc. Act 1996
                                                    of my/our intention to carry out the following works:
                                                </p>
                                                <p><em>{formData.worksDescription}</em></p>
                                                <p>
                                                    The works are intended to commence on or after: <strong>{formData.startDate}</strong>
                                                </p>
                                                <hr />
                                                <p>
                                                    Please indicate your consent or dissent to these works within 14 days.
                                                    If you consent, please sign and return this notice. If you dissent or do not respond,
                                                    surveyors will need to be appointed under the Act.
                                                </p>
                                            </div>
                                        </div>

                                        {!submitted ? (
                                            <div className="email-capture">
                                                <h3>Download Full Pack (PDF)</h3>
                                                <p>Get the complete notice pack including response forms and guidance notes</p>
                                                <form onSubmit={handleSubmitEmail}>
                                                    <input
                                                        type="email"
                                                        className="input"
                                                        placeholder="Your email address"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <button type="submit" className="btn btn-primary">
                                                        Send Pack
                                                    </button>
                                                </form>
                                            </div>
                                        ) : (
                                            <div className="email-success">
                                                <span>✓</span> Pack sent! Check your inbox.
                                            </div>
                                        )}

                                        <div className="action-buttons">
                                            <button className="btn btn-outline" onClick={() => setGenerated(false)}>
                                                Edit Details
                                            </button>
                                            <Link href="/contact" className="btn btn-primary">
                                                Book a Survey
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Templates Tab */}
                        {activeTab === "templates" && (
                            <div className="templates-panel">
                                <h2>Template Library</h2>
                                <p>Download our free templates to help manage your party wall obligations</p>

                                <div className="templates-grid">
                                    {templates.map((template, i) => (
                                        <div key={i} className="template-card">
                                            <div className="template-icon">📄</div>
                                            <div className="template-info">
                                                <h3>{template.name}</h3>
                                                <p>{template.description}</p>
                                            </div>
                                            <button className="btn btn-outline btn-sm">Download</button>
                                        </div>
                                    ))}
                                </div>

                                <div className="templates-cta">
                                    <p>Need help with your party wall obligations?</p>
                                    <Link href="/contact" className="btn btn-primary">
                                        Speak to Our Team
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* Guide Tab */}
                        {activeTab === "guide" && (
                            <div className="guide-panel">
                                <h2>Party Wall Act Guide</h2>

                                <div className="guide-section">
                                    <h3>What is the Party Wall Act?</h3>
                                    <p>
                                        The Party Wall etc. Act 1996 provides a framework for preventing and resolving
                                        disputes related to party walls, boundary walls, and excavations near neighbouring buildings.
                                        If you&apos;re planning building work that affects a shared wall or is close to a neighbour&apos;s property,
                                        you may need to serve a Party Wall Notice.
                                    </p>
                                </div>

                                <div className="guide-section">
                                    <h3>When Do You Need to Serve Notice?</h3>
                                    <ul>
                                        <li>Building on or at the boundary of two properties</li>
                                        <li>Works to an existing party wall or structure</li>
                                        <li>Excavating within 3 metres of a neighbouring building (to a lower depth)</li>
                                        <li>Excavating within 6 metres if the excavation would cut a 45° line from neighbour&apos;s foundations</li>
                                    </ul>
                                </div>

                                <div className="guide-section">
                                    <h3>Timeline</h3>
                                    <div className="timeline">
                                        <div className="timeline-item">
                                            <span className="timeline-period">2 months before</span>
                                            <span className="timeline-desc">Serve notice for building on the line of junction</span>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-period">1-2 months before</span>
                                            <span className="timeline-desc">Serve notice for party wall works or excavation</span>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-period">14 days</span>
                                            <span className="timeline-desc">Neighbour has 14 days to respond with consent or dissent</span>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-period">If dissent</span>
                                            <span className="timeline-desc">Party Wall Award needed (surveyors appointed)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="guide-cta">
                                    <Link href="/contact" className="btn btn-primary btn-lg">
                                        Get Expert Advice
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <style jsx>{`
        .tool-hero {
          background: linear-gradient(135deg, var(--navy-900), var(--navy-800));
          padding: 140px 0 80px;
          text-align: center;
        }

        .hero-icon {
          display: block;
          font-size: 4rem;
          margin-bottom: 24px;
        }

        .hero-content h1 {
          color: white;
          margin-bottom: 16px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--navy-200);
        }

        .kit-section {
          padding: 60px 0 100px;
          background: var(--cream-50);
        }

        .disclaimer-banner {
          background: #fef3c7;
          border: 1px solid #f59e0b;
          border-radius: var(--radius-md);
          padding: 16px 24px;
          margin-bottom: 32px;
          font-size: 0.9375rem;
          color: #92400e;
        }

        .tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
          background: white;
          padding: 8px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }

        .tab {
          flex: 1;
          padding: 14px 24px;
          background: transparent;
          border: none;
          border-radius: var(--radius-md);
          font-weight: 600;
          color: var(--slate-500);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tab:hover {
          color: var(--navy-800);
        }

        .tab.active {
          background: var(--navy-800);
          color: white;
        }

        .tab-content {
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          padding: 48px;
        }

        h2 {
          text-align: center;
          margin-bottom: 12px;
        }

        .tab-content > div > p {
          text-align: center;
          margin-bottom: 32px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        .textarea {
          resize: vertical;
          min-height: 100px;
        }

        .generated-notice h2 {
          margin-bottom: 24px;
        }

        .notice-preview {
          background: white;
          border: 2px solid var(--navy-200);
          border-radius: var(--radius-lg);
          padding: 32px;
          margin-bottom: 32px;
          font-family: Georgia, serif;
        }

        .notice-header {
          text-align: center;
          font-size: 1.125rem;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--navy-200);
        }

        .notice-body p {
          margin-bottom: 12px;
        }

        .notice-body hr {
          border: none;
          border-top: 1px solid var(--navy-200);
          margin: 20px 0;
        }

        .email-capture {
          border: 2px solid var(--navy-100);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 24px;
          text-align: center;
        }

        .email-capture h3 {
          font-size: 1.125rem;
          margin-bottom: 8px;
        }

        .email-capture p {
          margin-bottom: 16px;
        }

        .email-capture form {
          display: flex;
          gap: 12px;
          max-width: 400px;
          margin: 0 auto;
        }

        .email-capture .input {
          flex: 1;
        }

        .email-success {
          background: #059669;
          color: white;
          padding: 16px;
          border-radius: var(--radius-md);
          text-align: center;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .action-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .templates-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .template-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 24px;
          background: var(--navy-50);
          border-radius: var(--radius-lg);
        }

        .template-icon {
          font-size: 2rem;
        }

        .template-info {
          flex: 1;
        }

        .template-info h3 {
          font-size: 1rem;
          margin-bottom: 4px;
          font-family: var(--font-inter), sans-serif;
        }

        .template-info p {
          font-size: 0.875rem;
          color: var(--slate-500);
          margin: 0;
        }

        .btn-sm {
          padding: 8px 16px;
          font-size: 0.875rem;
        }

        .templates-cta {
          text-align: center;
          padding-top: 24px;
          border-top: 1px solid var(--navy-100);
        }

        .templates-cta p {
          margin-bottom: 16px;
        }

        .guide-section {
          margin-bottom: 32px;
        }

        .guide-section h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
        }

        .guide-section ul {
          padding-left: 24px;
        }

        .guide-section li {
          margin-bottom: 8px;
          color: var(--slate-600);
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .timeline-item {
          display: flex;
          gap: 24px;
          padding: 16px;
          background: var(--navy-50);
          border-radius: var(--radius-md);
        }

        .timeline-period {
          font-weight: 600;
          color: var(--gold-600);
          min-width: 140px;
        }

        .timeline-desc {
          color: var(--slate-600);
        }

        .guide-cta {
          text-align: center;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .tabs {
            flex-direction: column;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-group.full-width {
            grid-column: span 1;
          }

          .tab-content {
            padding: 24px;
          }

          .email-capture form {
            flex-direction: column;
          }

          .timeline-item {
            flex-direction: column;
            gap: 4px;
          }

          .timeline-period {
            min-width: auto;
          }
        }
      `}</style>
        </>
    );
}
