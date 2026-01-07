"use client";

import { useState } from "react";
import Link from "next/link";

interface FormData {
    postcode: string;
    propertyType: string;
    isListedBuilding: boolean;
    isConservationArea: boolean;
    proposedWorks: string[];
}

interface RiskResult {
    level: "low" | "medium" | "high";
    score: number;
    factors: { factor: string; risk: string; description: string }[];
    recommendations: string[];
}

function assessRisk(data: FormData): RiskResult {
    let score = 0;
    const factors: { factor: string; risk: string; description: string }[] = [];
    const recommendations: string[] = [];

    // Listed building check
    if (data.isListedBuilding) {
        score += 40;
        factors.push({
            factor: "Listed Building",
            risk: "High",
            description: "Listed Building Consent required for most alterations. Early consultation with Camden's conservation team recommended.",
        });
        recommendations.push("Apply for Listed Building Consent before any works");
        recommendations.push("Engage a conservation-accredited architect");
    }

    // Conservation area check
    if (data.isConservationArea) {
        score += 25;
        factors.push({
            factor: "Conservation Area",
            risk: "Medium-High",
            description: "Additional scrutiny on external changes. Permitted development rights may be restricted.",
        });
        recommendations.push("Check for Article 4 directions that remove permitted development rights");
        recommendations.push("Consider pre-application advice from Camden Planning");
    }

    // Proposed works assessment
    if (data.proposedWorks.includes("extension")) {
        score += 15;
        factors.push({
            factor: "Extension",
            risk: "Medium",
            description: "Planning permission likely required. Consider impact on neighbours and garden coverage.",
        });
        recommendations.push("Submit householder planning application");
    }

    if (data.proposedWorks.includes("loft")) {
        score += 10;
        factors.push({
            factor: "Loft Conversion",
            risk: "Low-Medium",
            description: "May be permitted development if within limits. Dormer windows require careful design in conservation areas.",
        });
        recommendations.push("Check permitted development limits for roof alterations");
    }

    if (data.proposedWorks.includes("basement")) {
        score += 30;
        factors.push({
            factor: "Basement",
            risk: "High",
            description: "Camden has strict basement policies. Structural method statement and Construction Management Plan required.",
        });
        recommendations.push("Commission Basement Impact Assessment");
        recommendations.push("Allow 6+ months for planning process");
    }

    if (data.proposedWorks.includes("windows")) {
        if (data.isConservationArea || data.isListedBuilding) {
            score += 20;
            factors.push({
                factor: "Window Replacement",
                risk: "Medium-High",
                description: "Like-for-like replacement usually required in heritage settings. uPVC generally not acceptable.",
            });
            recommendations.push("Specify timber or approved heritage aluminium windows");
        }
    }

    // Add default recommendation
    if (recommendations.length === 0) {
        recommendations.push("Your project appears relatively straightforward from a planning perspective");
    }
    recommendations.push("Book a survey for site-specific advice");

    let level: "low" | "medium" | "high" = "low";
    if (score >= 50) level = "high";
    else if (score >= 25) level = "medium";

    return { level, score, factors, recommendations };
}

export default function CamdenPlanningRiskChecker() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        postcode: "",
        propertyType: "",
        isListedBuilding: false,
        isConservationArea: false,
        proposedWorks: [],
    });
    const [result, setResult] = useState<RiskResult | null>(null);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const toggleWork = (work: string) => {
        setFormData((prev) => ({
            ...prev,
            proposedWorks: prev.proposedWorks.includes(work)
                ? prev.proposedWorks.filter((w) => w !== work)
                : [...prev.proposedWorks, work],
        }));
    };

    const handleCalculate = () => {
        const riskResult = assessRisk(formData);
        setResult(riskResult);
        setStep(3);
    };

    const handleSubmitEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <section className="tool-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-icon">📋</span>
                        <h1>Camden Planning Risk Checker</h1>
                        <p className="hero-subtitle">
                            Check planning constraints and heritage considerations for your NW3 property
                        </p>
                    </div>
                </div>
            </section>

            <section className="checker-section">
                <div className="container">
                    <div className="checker-wrapper">
                        {/* Step 1: Property Details */}
                        {step === 1 && (
                            <div className="step-content">
                                <h2>Tell us about your property</h2>

                                <div className="form-group">
                                    <label className="label">Postcode</label>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="e.g. NW3 6DN"
                                        value={formData.postcode}
                                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value.toUpperCase() })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="label">Property Type</label>
                                    <select
                                        className="input"
                                        value={formData.propertyType}
                                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                    >
                                        <option value="">Select property type</option>
                                        <option value="flat">Flat / Apartment</option>
                                        <option value="terrace">Terraced House</option>
                                        <option value="semi">Semi-Detached House</option>
                                        <option value="detached">Detached House</option>
                                        <option value="mansion-block">Mansion Block Flat</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="label">Heritage Status</label>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={formData.isListedBuilding}
                                                onChange={(e) => setFormData({ ...formData, isListedBuilding: e.target.checked })}
                                            />
                                            <span>Listed Building (Grade I, II*, or II)</span>
                                        </label>
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={formData.isConservationArea}
                                                onChange={(e) => setFormData({ ...formData, isConservationArea: e.target.checked })}
                                            />
                                            <span>Located in a Conservation Area</span>
                                        </label>
                                    </div>
                                    <span className="input-hint">
                                        Not sure? Check the <a href="https://www.camden.gov.uk/conservation-areas" target="_blank" rel="noopener noreferrer">Camden Conservation Areas map</a>
                                    </span>
                                </div>

                                <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => setStep(2)}
                                    disabled={!formData.postcode || !formData.propertyType}
                                >
                                    Continue
                                </button>
                            </div>
                        )}

                        {/* Step 2: Proposed Works */}
                        {step === 2 && (
                            <div className="step-content">
                                <h2>What work are you planning?</h2>
                                <p>Select all that apply</p>

                                <div className="works-grid">
                                    {[
                                        { id: "extension", label: "Rear/Side Extension", icon: "🔨" },
                                        { id: "loft", label: "Loft Conversion", icon: "🏗️" },
                                        { id: "basement", label: "Basement Extension", icon: "⬇️" },
                                        { id: "windows", label: "Window Replacement", icon: "🪟" },
                                        { id: "internal", label: "Internal Alterations", icon: "🏠" },
                                        { id: "external", label: "External Changes", icon: "🎨" },
                                    ].map((work) => (
                                        <button
                                            key={work.id}
                                            className={`work-card ${formData.proposedWorks.includes(work.id) ? "selected" : ""}`}
                                            onClick={() => toggleWork(work.id)}
                                        >
                                            <span className="work-icon">{work.icon}</span>
                                            <span className="work-label">{work.label}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="step-buttons">
                                    <button className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
                                    <button
                                        className="btn btn-primary btn-lg"
                                        onClick={handleCalculate}
                                        disabled={formData.proposedWorks.length === 0}
                                    >
                                        Check Planning Risk
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Results */}
                        {step === 3 && result && (
                            <div className="step-content results">
                                <div className="risk-indicator">
                                    <div className={`risk-badge risk-${result.level}`}>
                                        {result.level === "low" && "✓ Low Risk"}
                                        {result.level === "medium" && "⚠ Medium Risk"}
                                        {result.level === "high" && "⚠ High Risk"}
                                    </div>
                                    <p className="risk-summary">
                                        {result.level === "low" && "Your project appears relatively straightforward from a planning perspective."}
                                        {result.level === "medium" && "Some planning considerations apply. Professional advice recommended."}
                                        {result.level === "high" && "Significant planning hurdles expected. Early professional involvement essential."}
                                    </p>
                                </div>

                                {result.factors.length > 0 && (
                                    <div className="factors-section">
                                        <h3>Key Factors</h3>
                                        <div className="factors-list">
                                            {result.factors.map((factor, i) => (
                                                <div key={i} className="factor-item">
                                                    <div className="factor-header">
                                                        <span className="factor-name">{factor.factor}</span>
                                                        <span className={`factor-risk risk-tag-${factor.risk.toLowerCase().replace("-", "")}`}>
                                                            {factor.risk}
                                                        </span>
                                                    </div>
                                                    <p className="factor-desc">{factor.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="recommendations-section">
                                    <h3>Recommended Next Steps</h3>
                                    <ul className="recommendations-list">
                                        {result.recommendations.map((rec, i) => (
                                            <li key={i}>{rec}</li>
                                        ))}
                                    </ul>
                                </div>

                                {!submitted ? (
                                    <div className="email-capture">
                                        <h3>Get the Full Report PDF</h3>
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
                                                Send Report
                                            </button>
                                        </form>
                                    </div>
                                ) : (
                                    <div className="email-success">
                                        <span>✓</span> Report sent! Check your inbox.
                                    </div>
                                )}

                                <div className="results-cta">
                                    <Link href="/contact" className="btn btn-primary btn-lg">
                                        Book a Free Survey
                                    </Link>
                                    <button className="btn btn-outline" onClick={() => { setStep(1); setResult(null); setSubmitted(false); }}>
                                        Start Over
                                    </button>
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

        .checker-section {
          padding: 60px 0 100px;
          background: var(--cream-50);
        }

        .checker-wrapper {
          max-width: 700px;
          margin: 0 auto;
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          padding: 48px;
        }

        .step-content h2 {
          margin-bottom: 12px;
          text-align: center;
        }

        .step-content > p {
          text-align: center;
          margin-bottom: 32px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .input-hint {
          display: block;
          font-size: 0.8125rem;
          color: var(--slate-400);
          margin-top: 8px;
        }

        .input-hint a {
          color: var(--gold-600);
        }

        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .checkbox-label input {
          width: 20px;
          height: 20px;
          accent-color: var(--gold-500);
        }

        .works-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .work-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background: var(--navy-50);
          border: 2px solid transparent;
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .work-card:hover {
          border-color: var(--navy-200);
        }

        .work-card.selected {
          background: white;
          border-color: var(--gold-500);
          box-shadow: var(--shadow-md);
        }

        .work-icon {
          font-size: 2rem;
          margin-bottom: 8px;
        }

        .work-label {
          font-weight: 500;
          color: var(--navy-800);
          font-size: 0.875rem;
          text-align: center;
        }

        .step-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .risk-indicator {
          text-align: center;
          margin-bottom: 32px;
        }

        .risk-badge {
          display: inline-block;
          padding: 12px 32px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 16px;
        }

        .risk-low {
          background: #dcfce7;
          color: #166534;
        }

        .risk-medium {
          background: #fef3c7;
          color: #92400e;
        }

        .risk-high {
          background: #fee2e2;
          color: #991b1b;
        }

        .risk-summary {
          font-size: 1.125rem;
          color: var(--slate-600);
          margin: 0;
        }

        .factors-section {
          margin-bottom: 32px;
        }

        .factors-section h3 {
          font-size: 1.125rem;
          margin-bottom: 16px;
        }

        .factor-item {
          background: var(--navy-50);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 12px;
        }

        .factor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .factor-name {
          font-weight: 600;
          color: var(--navy-800);
        }

        .factor-risk {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .risk-tag-low, .risk-tag-lowmedium {
          background: #dcfce7;
          color: #166534;
        }

        .risk-tag-medium, .risk-tag-mediumhigh {
          background: #fef3c7;
          color: #92400e;
        }

        .risk-tag-high {
          background: #fee2e2;
          color: #991b1b;
        }

        .factor-desc {
          font-size: 0.9375rem;
          color: var(--slate-600);
          margin: 0;
        }

        .recommendations-section h3 {
          font-size: 1.125rem;
          margin-bottom: 16px;
        }

        .recommendations-list {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
        }

        .recommendations-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid var(--navy-100);
        }

        .recommendations-list li::before {
          content: "→";
          color: var(--gold-500);
          font-weight: 700;
        }

        .email-capture {
          border: 2px solid var(--navy-100);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 24px;
        }

        .email-capture h3 {
          font-size: 1.125rem;
          margin-bottom: 16px;
          text-align: center;
        }

        .email-capture form {
          display: flex;
          gap: 12px;
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

        .results-cta {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        @media (max-width: 640px) {
          .checker-wrapper {
            padding: 24px;
          }

          .works-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .email-capture form {
            flex-direction: column;
          }

          .results-cta {
            flex-direction: column;
          }
        }
      `}</style>
        </>
    );
}
