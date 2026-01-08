"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const services = [
        { name: "Full House Renovation", href: "/services/full-house-renovation", desc: "Complete transformation" },
        { name: "Extensions", href: "/services/extensions", desc: "Rear & side return" },
        { name: "Loft Conversions", href: "/services/loft-conversion", desc: "Add valuable space" },
        { name: "Kitchen Renovation", href: "/services/kitchen-renovation", desc: "Heart of the home" },
        { name: "Bathroom Renovation", href: "/services/bathroom-renovation", desc: "Luxury wet rooms" },
        { name: "Painting & Decorating", href: "/services/painting-decorating", desc: "Premium finishes" },
    ];

    const tools = [
        { name: "Cost Calculator", href: "/tools/renovation-cost-calculator", desc: "Instant estimate" },
        { name: "Planning Checker", href: "/tools/planning-checker", desc: "Check constraints" },
        { name: "ROI Estimator", href: "/tools/roi-estimator", desc: "Property value impact" },
        { name: "Party Wall Kit", href: "/tools/party-wall-kit", desc: "Free templates" },
    ];

    const areas = [
        "Hampstead", "Belsize Park", "Primrose Hill", "St John's Wood",
        "West Hampstead", "Highgate", "Kentish Town", "Swiss Cottage"
    ];

    return (
        <header className="header">
            {/* Trust Bar */}
            <div className="trust-bar">
                <div className="container trust-bar-content">
                    <div className="trust-signals">
                        <span className="trust-item">✓ 10-Year Guarantee</span>
                        <span className="trust-item">✓ £5M Insured</span>
                        <span className="trust-item">✓ TrustMark Certified</span>
                    </div>
                    <div className="trust-contact">
                        <a href="tel:02071234567" className="trust-phone">📞 020 7123 4567</a>
                        <span className="trust-live">🟢 Currently managing 5 projects in NW London</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="nav">
                <div className="container nav-content">
                    {/* Logo */}
                    <Link href="/" className="logo">
                        <span className="logo-mark">HR</span>
                        <span className="logo-text">Hampstead<br />Renovations</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="nav-links">
                        {/* Services Dropdown */}
                        <div className="nav-dropdown" onMouseEnter={() => setActiveDropdown("services")} onMouseLeave={() => setActiveDropdown(null)}>
                            <button className="nav-link">Services <span className="chevron">▼</span></button>
                            {activeDropdown === "services" && (
                                <div className="dropdown-menu dropdown-wide">
                                    <div className="dropdown-grid">
                                        {services.map((s) => (
                                            <Link key={s.href} href={s.href} className="dropdown-item">
                                                <span className="dropdown-name">{s.name}</span>
                                                <span className="dropdown-desc">{s.desc}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Tools Dropdown */}
                        <div className="nav-dropdown" onMouseEnter={() => setActiveDropdown("tools")} onMouseLeave={() => setActiveDropdown(null)}>
                            <button className="nav-link">Free Tools <span className="chevron">▼</span></button>
                            {activeDropdown === "tools" && (
                                <div className="dropdown-menu">
                                    {tools.map((t) => (
                                        <Link key={t.href} href={t.href} className="dropdown-item">
                                            <span className="dropdown-name">{t.name}</span>
                                            <span className="dropdown-desc">{t.desc}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Areas Dropdown */}
                        <div className="nav-dropdown" onMouseEnter={() => setActiveDropdown("areas")} onMouseLeave={() => setActiveDropdown(null)}>
                            <button className="nav-link">Areas <span className="chevron">▼</span></button>
                            {activeDropdown === "areas" && (
                                <div className="dropdown-menu dropdown-grid-areas">
                                    {areas.map((a) => (
                                        <Link key={a} href={`/areas/${a.toLowerCase().replace(/\s+/g, "-")}`} className="dropdown-area">{a}</Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/case-studies" className="nav-link">Our Work</Link>
                        <Link href="/about" className="nav-link">About</Link>
                    </div>

                    {/* CTA */}
                    <div className="nav-cta">
                        <Link href="/contact" className="btn btn-primary pulse-gold">Book Free Survey</Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <div className="container">
                        {services.map((s) => <Link key={s.href} href={s.href} className="mobile-link">{s.name}</Link>)}
                        <hr />
                        {tools.map((t) => <Link key={t.href} href={t.href} className="mobile-link">{t.name}</Link>)}
                        <hr />
                        <Link href="/case-studies" className="mobile-link">Our Work</Link>
                        <Link href="/about" className="mobile-link">About</Link>
                        <Link href="/contact" className="btn btn-primary" style={{ marginTop: "1rem", width: "100%" }}>Book Free Survey</Link>
                    </div>
                </div>
            )}

            <style jsx>{`
        .header { position: sticky; top: 0; z-index: 1000; background: white; box-shadow: var(--shadow-md); }
        .trust-bar { background: var(--navy-900); color: white; padding: 0.5rem 0; font-size: 0.8125rem; }
        .trust-bar-content { display: flex; justify-content: space-between; align-items: center; }
        .trust-signals { display: flex; gap: 1.5rem; }
        .trust-item { opacity: 0.9; }
        .trust-contact { display: flex; gap: 1.5rem; align-items: center; }
        .trust-phone { color: var(--gold-400); font-weight: 600; }
        .trust-live { color: var(--navy-300); font-size: 0.75rem; }
        .nav { padding: 1rem 0; }
        .nav-content { display: flex; align-items: center; justify-content: space-between; }
        .logo { display: flex; align-items: center; gap: 0.75rem; }
        .logo-mark { width: 48px; height: 48px; background: var(--navy-900); color: var(--gold-400); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; border-radius: var(--radius-md); }
        .logo-text { font-family: var(--font-display); font-size: 0.875rem; font-weight: 600; color: var(--navy-900); line-height: 1.2; }
        .nav-links { display: flex; gap: 0.5rem; align-items: center; }
        .nav-link { padding: 0.75rem 1rem; font-weight: 500; color: var(--navy-700); background: none; border: none; cursor: pointer; font-size: 0.9375rem; display: flex; align-items: center; gap: 0.25rem; }
        .nav-link:hover { color: var(--navy-900); }
        .chevron { font-size: 0.625rem; opacity: 0.6; }
        .nav-dropdown { position: relative; }
        .dropdown-menu { position: absolute; top: 100%; left: 0; background: white; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); padding: 1rem; min-width: 240px; }
        .dropdown-wide { min-width: 480px; }
        .dropdown-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }
        .dropdown-grid-areas { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; min-width: 280px; }
        .dropdown-item { display: flex; flex-direction: column; padding: 0.75rem 1rem; border-radius: var(--radius-md); transition: background var(--transition-fast); }
        .dropdown-item:hover { background: var(--navy-50); }
        .dropdown-name { font-weight: 600; color: var(--navy-800); }
        .dropdown-desc { font-size: 0.8125rem; color: var(--navy-500); }
        .dropdown-area { padding: 0.5rem 0.75rem; color: var(--navy-700); font-size: 0.875rem; border-radius: var(--radius-sm); }
        .dropdown-area:hover { background: var(--navy-50); color: var(--navy-900); }
        .nav-cta { display: flex; gap: 0.75rem; }
        .mobile-toggle { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; }
        .mobile-menu { display: none; background: white; border-top: 1px solid var(--navy-100); padding: 1rem 0; }
        .mobile-link { display: block; padding: 0.75rem 0; color: var(--navy-700); font-weight: 500; }
        .mobile-menu hr { border: none; border-top: 1px solid var(--navy-100); margin: 0.75rem 0; }
        @media (max-width: 1024px) {
          .nav-links, .nav-cta { display: none; }
          .mobile-toggle { display: block; }
          .mobile-menu { display: block; }
          .trust-signals { display: none; }
        }
      `}</style>
        </header>
    );
}
