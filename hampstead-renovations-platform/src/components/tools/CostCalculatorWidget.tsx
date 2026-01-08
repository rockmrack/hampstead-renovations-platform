"use client";

import { useState } from "react";
import Link from "next/link";

type ScopeType = "full" | "extension" | "loft" | "kitchen" | "bathroom";
type SpecLevel = "standard" | "premium" | "luxury";

interface Result {
    minCost: number;
    maxCost: number;
    timeline: string;
    valueAdded: { min: number; max: number };
    roi: { min: number; max: number };
}

const pricing: Record<ScopeType, { perSqm: { min: number; max: number }; weeks: string; valueMultiplier: number }> = {
    full: { perSqm: { min: 1200, max: 2200 }, weeks: "12-20 weeks", valueMultiplier: 0.85 },
    extension: { perSqm: { min: 2000, max: 3500 }, weeks: "10-16 weeks", valueMultiplier: 0.9 },
    loft: { perSqm: { min: 1800, max: 2800 }, weeks: "8-12 weeks", valueMultiplier: 1.1 },
    kitchen: { perSqm: { min: 800, max: 1800 }, weeks: "4-8 weeks", valueMultiplier: 0.7 },
    bathroom: { perSqm: { min: 600, max: 1400 }, weeks: "2-4 weeks", valueMultiplier: 0.5 },
};

const specMultipliers: Record<SpecLevel, number> = { standard: 1, premium: 1.35, luxury: 1.85 };
const zoneMultipliers: Record<string, number> = { central: 1.25, inner: 1, outer: 0.85 };

function formatCurrency(value: number): string {
    return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);
}

export default function CostCalculatorWidget() {
    const [step, setStep] = useState(1);
    const [scope, setScope] = useState<ScopeType | "">("");
    const [sqm, setSqm] = useState("");
    const [spec, setSpec] = useState<SpecLevel>("premium");
    const [zone, setZone] = useState("inner");
    const [result, setResult] = useState<Result | null>(null);

    const calculate = () => {
        if (!scope || !sqm) return;
        const area = parseFloat(sqm);
        const base = pricing[scope];
        const specMult = specMultipliers[spec];
        const zoneMult = zoneMultipliers[zone];

        const minCost = Math.round(base.perSqm.min * area * specMult * zoneMult);
        const maxCost = Math.round(base.perSqm.max * area * specMult * zoneMult);
        const avgCost = (minCost + maxCost) / 2;

        const valueAdded = {
            min: Math.round(avgCost * base.valueMultiplier * 0.85),
            max: Math.round(avgCost * base.valueMultiplier * 1.15),
        };

        const roi = {
            min: Math.round((valueAdded.min / avgCost) * 100),
            max: Math.round((valueAdded.max / avgCost) * 100),
        };

        setResult({ minCost, maxCost, timeline: base.weeks, valueAdded, roi });
        setStep(3);
    };

    return (
        <div className="calculator">
            {step === 1 && (
                <div className="calc-step">
                    <h3>What type of renovation?</h3>
                    <div className="scope-grid">
                        {[
                            { id: "full", label: "Full Renovation", icon: "🏠" },
                            { id: "extension", label: "Extension", icon: "🔨" },
                            { id: "loft", label: "Loft Conversion", icon: "🏗️" },
                            { id: "kitchen", label: "Kitchen", icon: "🍳" },
                            { id: "bathroom", label: "Bathroom", icon: "🛁" },
                        ].map((s) => (
                            <button key={s.id} className={`scope-btn ${scope === s.id ? "selected" : ""}`} onClick={() => setScope(s.id as ScopeType)}>
                                <span className="scope-icon">{s.icon}</span>
                                <span>{s.label}</span>
                            </button>
                        ))}
                    </div>
                    <button className="btn btn-primary btn-lg" onClick={() => scope && setStep(2)} disabled={!scope}>Continue</button>
                </div>
            )}

            {step === 2 && (
                <div className="calc-step">
                    <h3>Project Details</h3>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="label">Approximate Size (sqm)</label>
                            <input type="number" className="input" placeholder="e.g. 80" value={sqm} onChange={(e) => setSqm(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="label">London Zone</label>
                            <select className="input" value={zone} onChange={(e) => setZone(e.target.value)}>
                                <option value="central">Central (Zones 1-2)</option>
                                <option value="inner">Inner (Zones 3-4)</option>
                                <option value="outer">Outer (Zones 5-6)</option>
                            </select>
                        </div>
                        <div className="form-group full-width">
                            <label className="label">Specification Level</label>
                            <div className="spec-options">
                                {[
                                    { id: "standard", label: "Standard", desc: "Good quality, practical finishes" },
                                    { id: "premium", label: "Premium", desc: "High-quality materials, attention to detail" },
                                    { id: "luxury", label: "Luxury", desc: "Bespoke design, top-tier finishes" },
                                ].map((s) => (
                                    <button key={s.id} className={`spec-btn ${spec === s.id ? "selected" : ""}`} onClick={() => setSpec(s.id as SpecLevel)}>
                                        <strong>{s.label}</strong>
                                        <span>{s.desc}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="step-buttons">
                        <button className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
                        <button className="btn btn-primary btn-lg" onClick={calculate} disabled={!sqm}>Get Estimate</button>
                    </div>
                </div>
            )}

            {step === 3 && result && (
                <div className="calc-step result">
                    <h3>Your Estimate</h3>
                    <div className="result-main">
                        <div className="result-cost">
                            <span className="result-label">Estimated Budget</span>
                            <span className="result-value">{formatCurrency(result.minCost)} – {formatCurrency(result.maxCost)}</span>
                        </div>
                        <div className="result-details">
                            <div className="result-item">
                                <span className="detail-label">Timeline</span>
                                <span className="detail-value">{result.timeline}</span>
                            </div>
                            <div className="result-item">
                                <span className="detail-label">Value Added</span>
                                <span className="detail-value highlight">{formatCurrency(result.valueAdded.min)} – {formatCurrency(result.valueAdded.max)}</span>
                            </div>
                            <div className="result-item">
                                <span className="detail-label">Est. ROI</span>
                                <span className="detail-value highlight">{result.roi.min}% – {result.roi.max}%</span>
                            </div>
                        </div>
                    </div>
                    <p className="result-note">This is an indicative range based on typical London renovation costs. Your actual quote will depend on site conditions and design complexity.</p>
                    <div className="result-cta">
                        <Link href="/contact" className="btn btn-primary btn-lg">Get Accurate Quote</Link>
                        <button className="btn btn-outline" onClick={() => { setStep(1); setResult(null); setScope(""); setSqm(""); }}>Start Over</button>
                    </div>
                </div>
            )}

            <style jsx>{`
        .calculator { background: white; border-radius: var(--radius-2xl); box-shadow: var(--shadow-xl); padding: 3rem; max-width: 800px; margin: 0 auto; }
        .calc-step h3 { text-align: center; margin-bottom: 2rem; font-size: 1.5rem; }
        .scope-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; margin-bottom: 2rem; }
        .scope-btn { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 1.25rem 1rem; background: var(--navy-50); border: 2px solid transparent; border-radius: var(--radius-lg); cursor: pointer; transition: all var(--transition-fast); }
        .scope-btn:hover { border-color: var(--navy-200); }
        .scope-btn.selected { background: white; border-color: var(--gold-500); box-shadow: var(--shadow-md); }
        .scope-icon { font-size: 2rem; }
        .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem; }
        .form-group.full-width { grid-column: span 2; }
        .spec-options { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .spec-btn { display: flex; flex-direction: column; align-items: flex-start; padding: 1rem; background: var(--navy-50); border: 2px solid transparent; border-radius: var(--radius-md); cursor: pointer; text-align: left; transition: all var(--transition-fast); }
        .spec-btn:hover { border-color: var(--navy-200); }
        .spec-btn.selected { background: white; border-color: var(--gold-500); }
        .spec-btn strong { color: var(--navy-800); }
        .spec-btn span { font-size: 0.8125rem; color: var(--navy-500); }
        .step-buttons { display: flex; gap: 1rem; justify-content: center; }
        .result-main { background: linear-gradient(135deg, var(--navy-900), var(--navy-800)); border-radius: var(--radius-xl); padding: 2rem; margin-bottom: 1.5rem; }
        .result-cost { text-align: center; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--navy-700); }
        .result-label { display: block; font-size: 0.875rem; color: var(--navy-400); margin-bottom: 0.5rem; }
        .result-value { font-family: var(--font-display); font-size: 2.5rem; font-weight: 700; color: var(--gold-400); }
        .result-details { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center; }
        .detail-label { display: block; font-size: 0.75rem; color: var(--navy-400); margin-bottom: 0.25rem; }
        .detail-value { font-weight: 600; color: white; }
        .detail-value.highlight { color: var(--gold-400); }
        .result-note { font-size: 0.875rem; color: var(--navy-500); text-align: center; margin-bottom: 1.5rem; }
        .result-cta { display: flex; gap: 1rem; justify-content: center; }
        @media (max-width: 768px) { .scope-grid { grid-template-columns: repeat(3, 1fr); } .form-grid { grid-template-columns: 1fr; } .form-group.full-width { grid-column: span 1; } .spec-options { grid-template-columns: 1fr; } .result-details { grid-template-columns: 1fr; } .result-cta { flex-direction: column; } }
      `}</style>
        </div>
    );
}
