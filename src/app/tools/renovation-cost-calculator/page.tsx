"use client";

import { useState } from "react";
import Link from "next/link";

type PropertyType = "flat" | "terrace" | "semi" | "detached";
type ScopeType = "refurb" | "loft" | "extension" | "kitchen-bathroom";
type SpecLevel = "standard" | "premium" | "high-end";

interface FormData {
    postcode: string;
    propertyType: PropertyType | "";
    scope: ScopeType | "";
    specLevel: SpecLevel | "";
    sqm: string;
    hasConstraints: boolean;
}

interface PriceBreakdown {
    baseCost: { min: number; max: number };
    specMultiplier: number;
    constraintPremium: number;
    timeline: { min: number; max: number };
    totalMin: number;
    totalMax: number;
}

const basePrices: Record<ScopeType, { perSqm: { min: number; max: number }; weeks: { min: number; max: number } }> = {
    refurb: { perSqm: { min: 1200, max: 2000 }, weeks: { min: 12, max: 24 } },
    loft: { perSqm: { min: 1800, max: 2500 }, weeks: { min: 8, max: 12 } },
    extension: { perSqm: { min: 2200, max: 3500 }, weeks: { min: 10, max: 16 } },
    "kitchen-bathroom": { perSqm: { min: 800, max: 1500 }, weeks: { min: 4, max: 8 } },
};

const specMultipliers: Record<SpecLevel, number> = {
    standard: 1,
    premium: 1.35,
    "high-end": 1.8,
};

function calculateCosts(data: FormData): PriceBreakdown | null {
    if (!data.scope || !data.specLevel || !data.sqm) return null;

    const sqm = parseFloat(data.sqm);
    if (isNaN(sqm) || sqm <= 0) return null;

    const base = basePrices[data.scope as ScopeType];
    const baseCost = {
        min: base.perSqm.min * sqm,
        max: base.perSqm.max * sqm,
    };

    const specMultiplier = specMultipliers[data.specLevel as SpecLevel];
    const constraintPremium = data.hasConstraints ? 1.15 : 1;

    const totalMin = Math.round(baseCost.min * specMultiplier * constraintPremium);
    const totalMax = Math.round(baseCost.max * specMultiplier * constraintPremium);

    return {
        baseCost,
        specMultiplier,
        constraintPremium,
        timeline: base.weeks,
        totalMin,
        totalMax,
    };
}

function formatCurrency(value: number): string {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        maximumFractionDigits: 0,
    }).format(value);
}

export default function RenovationCostCalculator() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        postcode: "",
        propertyType: "",
        scope: "",
        specLevel: "",
        sqm: "",
        hasConstraints: false,
    });
    const [result, setResult] = useState<PriceBreakdown | null>(null);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            const costs = calculateCosts(formData);
            setResult(costs);
            setStep(5);
        }
    };

    const handleSubmitEmail = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would send to your API
        setSubmitted(true);
    };

    return (
        <>
            <section className="tool-hero">
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-icon">💰</span>
                        <h1>Renovation Cost Calculator</h1>
                        <p className="hero-subtitle">
                            Get an instant budget range for your London renovation project
                        </p>
                    </div>
                </div>
            </section>

            <section className="calculator-section">
                <div className="container">
                    <div className="calculator-wrapper">
                        {/* Progress Bar */}
                        <div className="progress-bar">
                            {[1, 2, 3, 4].map((s) => (
                                <div key={s} className={`progress-step ${step >= s ? "active" : ""} ${step > s ? "complete" : ""}`}>
                                    <span className="step-number">{s}</span>
                                    <span className="step-label">
                                        {s === 1 && "Location"}
                                        {s === 2 && "Property"}
                                        {s === 3 && "Scope"}
                                        {s === 4 && "Details"}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Step 1: Location */}
                        {step === 1 && (
                            <div className="step-content">
                                <h2>Where is your property?</h2>
                                <p>We focus on North West London (NW1-NW11, N1-N20)</p>

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

                                <button className="btn btn-primary btn-lg" onClick={handleNext} disabled={!formData.postcode}>
                                    Continue
                                </button>
                            </div>
                        )}

                        {/* Step 2: Property Type */}
                        {step === 2 && (
                            <div className="step-content">
                                <h2>What type of property?</h2>

                                <div className="option-grid">
                                    {[
                                        { value: "flat", label: "Flat / Apartment", icon: "🏢" },
                                        { value: "terrace", label: "Terraced House", icon: "🏘️" },
                                        { value: "semi", label: "Semi-Detached", icon: "🏠" },
                                        { value: "detached", label: "Detached", icon: "🏡" },
                                    ].map((option) => (
                                        <button
                                            key={option.value}
                                            className={`option-card ${formData.propertyType === option.value ? "selected" : ""}`}
                                            onClick={() => setFormData({ ...formData, propertyType: option.value as PropertyType })}
                                        >
                                            <span className="option-icon">{option.icon}</span>
                                            <span className="option-label">{option.label}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="step-buttons">
                                    <button className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
                                    <button className="btn btn-primary btn-lg" onClick={handleNext} disabled={!formData.propertyType}>
                                        Continue
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Scope */}
                        {step === 3 && (
                            <div className="step-content">
                                <h2>What work do you need?</h2>

                                <div className="option-grid">
                                    {[
                                        { value: "refurb", label: "Full Refurbishment", icon: "🏠", desc: "Complete renovation" },
                                        { value: "loft", label: "Loft Conversion", icon: "🏗️", desc: "New loft room" },
                                        { value: "extension", label: "Extension", icon: "🔨", desc: "Rear/side extension" },
                                        { value: "kitchen-bathroom", label: "Kitchen & Bathroom", icon: "🍳", desc: "Wet rooms only" },
                                    ].map((option) => (
                                        <button
                                            key={option.value}
                                            className={`option-card ${formData.scope === option.value ? "selected" : ""}`}
                                            onClick={() => setFormData({ ...formData, scope: option.value as ScopeType })}
                                        >
                                            <span className="option-icon">{option.icon}</span>
                                            <span className="option-label">{option.label}</span>
                                            <span className="option-desc">{option.desc}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="step-buttons">
                                    <button className="btn btn-outline" onClick={() => setStep(2)}>Back</button>
                                    <button className="btn btn-primary btn-lg" onClick={handleNext} disabled={!formData.scope}>
                                        Continue
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Details */}
                        {step === 4 && (
                            <div className="step-content">
                                <h2>A few more details</h2>

                                <div className="form-group">
                                    <label className="label">Approximate area (sqm)</label>
                                    <input
                                        type="number"
                                        className="input"
                                        placeholder="e.g. 80"
                                        value={formData.sqm}
                                        onChange={(e) => setFormData({ ...formData, sqm: e.target.value })}
                                    />
                                    <span className="input-hint">For lofts, estimate the new floor area. For extensions, the extension footprint.</span>
                                </div>

                                <div className="form-group">
                                    <label className="label">Specification Level</label>
                                    <div className="spec-options">
                                        {[
                                            { value: "standard", label: "Standard", desc: "Good quality, practical finishes" },
                                            { value: "premium", label: "Premium", desc: "High-quality materials, attention to detail" },
                                            { value: "high-end", label: "High-End", desc: "Bespoke, luxury finishes throughout" },
                                        ].map((option) => (
                                            <button
                                                key={option.value}
                                                className={`spec-card ${formData.specLevel === option.value ? "selected" : ""}`}
                                                onClick={() => setFormData({ ...formData, specLevel: option.value as SpecLevel })}
                                            >
                                                <span className="spec-label">{option.label}</span>
                                                <span className="spec-desc">{option.desc}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={formData.hasConstraints}
                                            onChange={(e) => setFormData({ ...formData, hasConstraints: e.target.checked })}
                                        />
                                        <span>Property has constraints (conservation area, listed, difficult access)</span>
                                    </label>
                                </div>

                                <div className="step-buttons">
                                    <button className="btn btn-outline" onClick={() => setStep(3)}>Back</button>
                                    <button className="btn btn-primary btn-lg" onClick={handleNext} disabled={!formData.sqm || !formData.specLevel}>
                                        Get My Estimate
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 5: Results */}
                        {step === 5 && result && (
                            <div className="step-content results">
                                <div className="results-header">
                                    <span className="results-icon">✨</span>
                                    <h2>Your Estimated Budget</h2>
                                </div>

                                <div className="results-main">
                                    <div className="price-range">
                                        <span className="price-label">Estimated Range</span>
                                        <span className="price-value">
                                            {formatCurrency(result.totalMin)} – {formatCurrency(result.totalMax)}
                                        </span>
                                    </div>

                                    <div className="results-details">
                                        <div className="detail-item">
                                            <span className="detail-label">Timeline</span>
                                            <span className="detail-value">{result.timeline.min}–{result.timeline.max} weeks</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Spec Level</span>
                                            <span className="detail-value" style={{ textTransform: "capitalize" }}>{formData.specLevel}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Location</span>
                                            <span className="detail-value">{formData.postcode}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="results-disclaimer">
                                    <p>
                                        <strong>Note:</strong> This is an indicative range based on typical London renovation costs.
                                        Your actual quote will depend on specific site conditions, design complexity, and material choices.
                                    </p>
                                </div>

                                {!submitted ? (
                                    <div className="email-capture">
                                        <h3>Get the Full Breakdown PDF</h3>
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
                                                Send My Report
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

        .calculator-section {
          padding: 60px 0 100px;
          background: var(--cream-50);
        }

        .calculator-wrapper {
          max-width: 700px;
          margin: 0 auto;
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          padding: 48px;
        }

        .progress-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 48px;
          position: relative;
        }

        .progress-bar::before {
          content: '';
          position: absolute;
          top: 16px;
          left: 40px;
          right: 40px;
          height: 2px;
          background: var(--navy-100);
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .step-number {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--navy-100);
          color: var(--navy-400);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          margin-bottom: 8px;
          transition: all var(--transition-base);
        }

        .progress-step.active .step-number {
          background: var(--gold-500);
          color: white;
        }

        .progress-step.complete .step-number {
          background: var(--navy-800);
          color: white;
        }

        .step-label {
          font-size: 0.75rem;
          color: var(--slate-500);
          font-weight: 500;
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
          margin-top: 6px;
        }

        .option-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .option-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px;
          background: var(--navy-50);
          border: 2px solid transparent;
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .option-card:hover {
          border-color: var(--navy-200);
        }

        .option-card.selected {
          background: white;
          border-color: var(--gold-500);
          box-shadow: var(--shadow-md);
        }

        .option-icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .option-label {
          font-weight: 600;
          color: var(--navy-800);
        }

        .option-desc {
          font-size: 0.8125rem;
          color: var(--slate-500);
          margin-top: 4px;
        }

        .spec-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .spec-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 16px 20px;
          background: var(--navy-50);
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }

        .spec-card:hover {
          border-color: var(--navy-200);
        }

        .spec-card.selected {
          background: white;
          border-color: var(--gold-500);
        }

        .spec-label {
          font-weight: 600;
          color: var(--navy-800);
        }

        .spec-desc {
          font-size: 0.8125rem;
          color: var(--slate-500);
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

        .step-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .results-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .results-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 16px;
        }

        .results-main {
          background: linear-gradient(135deg, var(--navy-900), var(--navy-800));
          border-radius: var(--radius-lg);
          padding: 32px;
          margin-bottom: 24px;
        }

        .price-range {
          text-align: center;
          margin-bottom: 24px;
        }

        .price-label {
          display: block;
          font-size: 0.875rem;
          color: var(--navy-300);
          margin-bottom: 8px;
        }

        .price-value {
          font-family: var(--font-playfair), serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--gold-400);
        }

        .results-details {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          text-align: center;
        }

        .detail-label {
          display: block;
          font-size: 0.75rem;
          color: var(--navy-400);
          margin-bottom: 4px;
        }

        .detail-value {
          font-weight: 600;
          color: white;
        }

        .results-disclaimer {
          background: var(--navy-50);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 24px;
        }

        .results-disclaimer p {
          font-size: 0.875rem;
          margin: 0;
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
          .calculator-wrapper {
            padding: 24px;
          }

          .option-grid {
            grid-template-columns: 1fr;
          }

          .results-details {
            grid-template-columns: 1fr;
          }

          .email-capture form {
            flex-direction: column;
          }

          .price-value {
            font-size: 1.75rem;
          }

          .results-cta {
            flex-direction: column;
          }
        }
      `}</style>
        </>
    );
}
