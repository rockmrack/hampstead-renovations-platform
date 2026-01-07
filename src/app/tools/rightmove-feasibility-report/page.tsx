"use client";

import { useState } from "react";
import Link from "next/link";

export default function FeasibilityReportPage() {
    const [url, setUrl] = useState("");
    const [goals, setGoals] = useState<string[]>([]);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const toggleGoal = (goal: string) => {
        setGoals(prev => prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const goalOptions = [
        { id: "bedroom", label: "Add a bedroom", icon: "🛏️" },
        { id: "openplan", label: "Open-plan living", icon: "🏠" },
        { id: "office", label: "Home office", icon: "💻" },
        { id: "extension", label: "Extension potential", icon: "🔨" },
        { id: "loft", label: "Loft conversion", icon: "🏗️" },
        { id: "value", label: "Maximise value", icon: "📈" },
    ];

    return (
        <>
            <section className="tool-hero">
                <div className="container">
                    <span className="hero-icon">🏡</span>
                    <h1>Rightmove Feasibility Report</h1>
                    <p className="hero-subtitle">Get a quick assessment of renovation potential for any property</p>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <div className="form-card">
                        {!submitted ? (
                            <form onSubmit={handleSubmit}>
                                <h2>Property Details</h2>

                                <div className="form-group">
                                    <label className="label">Rightmove or Zoopla URL</label>
                                    <input type="url" className="input" placeholder="https://www.rightmove.co.uk/properties/..." value={url} onChange={e => setUrl(e.target.value)} required />
                                    <span className="hint">Paste the link to the property listing</span>
                                </div>

                                <div className="form-group">
                                    <label className="label">What are your goals?</label>
                                    <div className="goals-grid">
                                        {goalOptions.map(goal => (
                                            <button key={goal.id} type="button" className={`goal-btn ${goals.includes(goal.id) ? "selected" : ""}`} onClick={() => toggleGoal(goal.id)}>
                                                <span>{goal.icon}</span>
                                                <span>{goal.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="label">Your Email</label>
                                    <input type="email" className="input" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg full-width">Get Feasibility Report</button>
                            </form>
                        ) : (
                            <div className="success">
                                <span className="success-icon">✓</span>
                                <h2>Request Received!</h2>
                                <p>We&apos;ll review the property and send your feasibility report within 24 hours.</p>
                                <Link href="/contact" className="btn btn-primary">Book a Survey</Link>
                            </div>
                        )}
                    </div>

                    <div className="info-section">
                        <h2>What You&apos;ll Receive</h2>
                        <div className="info-grid">
                            <div className="info-item">
                                <span>📊</span>
                                <h3>Renovation Potential</h3>
                                <p>Assessment of what&apos;s possible based on the floorplan</p>
                            </div>
                            <div className="info-item">
                                <span>💰</span>
                                <h3>Budget Indication</h3>
                                <p>Rough cost range for your goals</p>
                            </div>
                            <div className="info-item">
                                <span>📋</span>
                                <h3>Key Considerations</h3>
                                <p>Planning, structural, and practical factors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .tool-hero { background: linear-gradient(135deg, var(--navy-900), var(--navy-800)); padding: 140px 0 80px; text-align: center; }
        .hero-icon { font-size: 4rem; display: block; margin-bottom: 24px; }
        .tool-hero h1 { color: white; margin-bottom: 16px; }
        .hero-subtitle { font-size: 1.25rem; color: var(--navy-200); }
        .content { padding: 60px 0 100px; background: var(--cream-50); }
        .form-card { max-width: 600px; margin: 0 auto 60px; background: white; padding: 48px; border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); }
        h2 { margin-bottom: 24px; text-align: center; }
        .form-group { margin-bottom: 24px; }
        .hint { font-size: 0.8125rem; color: var(--slate-400); margin-top: 6px; display: block; }
        .goals-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .goal-btn { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; background: var(--navy-50); border: 2px solid transparent; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s; font-size: 0.875rem; }
        .goal-btn:hover { border-color: var(--navy-200); }
        .goal-btn.selected { background: white; border-color: var(--gold-500); }
        .full-width { width: 100%; }
        .success { text-align: center; padding: 40px 0; }
        .success-icon { display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; background: #059669; color: white; font-size: 2rem; border-radius: 50%; margin-bottom: 24px; }
        .success h2 { margin-bottom: 12px; }
        .success p { margin-bottom: 24px; }
        .info-section { max-width: 900px; margin: 0 auto; }
        .info-section h2 { text-align: center; margin-bottom: 32px; }
        .info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .info-item { background: white; padding: 32px; border-radius: var(--radius-lg); text-align: center; box-shadow: var(--shadow-md); }
        .info-item span { font-size: 2.5rem; display: block; margin-bottom: 16px; }
        .info-item h3 { font-size: 1.125rem; margin-bottom: 8px; font-family: var(--font-inter), sans-serif; }
        .info-item p { font-size: 0.9375rem; color: var(--slate-500); margin: 0; }
        @media (max-width: 768px) { .goals-grid, .info-grid { grid-template-columns: 1fr; } .form-card { padding: 32px 24px; } }
      `}</style>
        </>
    );
}
