"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
    { name: "Full House Renovation", href: "/services/full-house-renovation" },
    { name: "Extensions", href: "/services/extensions" },
    { name: "Loft Conversions", href: "/services/loft-conversion" },
    { name: "Kitchen Renovation", href: "/services/kitchen-renovation" },
    { name: "Bathroom Renovation", href: "/services/bathroom-renovation" },
    { name: "Painting & Decorating", href: "/services/painting-decorating" },
    { name: "Property Maintenance", href: "/services/property-maintenance" },
];

const tools = [
    { name: "Renovation Cost Calculator", href: "/tools/renovation-cost-calculator" },
    { name: "Feasibility Report", href: "/tools/rightmove-feasibility-report" },
    { name: "Planning Risk Checker", href: "/tools/camden-planning-risk-checker" },
    { name: "Party Wall Kit", href: "/tools/party-wall-kit" },
    { name: "Leasehold Toolkit", href: "/tools/leasehold-renovation-permissions" },
    { name: "Logistics Planner", href: "/tools/site-logistics-planner" },
    { name: "Retrofit Planner", href: "/tools/period-home-retrofit-planner" },
];

const areas = [
    { name: "Hampstead", href: "/areas/hampstead" },
    { name: "Belsize Park", href: "/areas/belsize-park" },
    { name: "Primrose Hill", href: "/areas/primrose-hill" },
    { name: "St John's Wood", href: "/areas/st-johns-wood" },
    { name: "West Hampstead", href: "/areas/west-hampstead" },
    { name: "Highgate", href: "/areas/highgate" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    {/* Logo */}
                    <Link href="/" className="logo">
                        <span className="logo-icon">HR</span>
                        <div className="logo-text">
                            <span className="logo-name">Hampstead</span>
                            <span className="logo-tagline">Renovations</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="nav-menu">
                        <li
                            className="nav-item has-dropdown"
                            onMouseEnter={() => setActiveDropdown("services")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <span className="nav-link">Services</span>
                            {activeDropdown === "services" && (
                                <div className="dropdown">
                                    <div className="dropdown-content">
                                        {services.map((item) => (
                                            <Link key={item.href} href={item.href} className="dropdown-item">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>

                        <li
                            className="nav-item has-dropdown"
                            onMouseEnter={() => setActiveDropdown("tools")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <span className="nav-link">Tools</span>
                            {activeDropdown === "tools" && (
                                <div className="dropdown">
                                    <div className="dropdown-content">
                                        {tools.map((item) => (
                                            <Link key={item.href} href={item.href} className="dropdown-item">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className="nav-item">
                            <Link href="/case-studies" className="nav-link">
                                Case Studies
                            </Link>
                        </li>

                        <li
                            className="nav-item has-dropdown"
                            onMouseEnter={() => setActiveDropdown("areas")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <span className="nav-link">Areas</span>
                            {activeDropdown === "areas" && (
                                <div className="dropdown">
                                    <div className="dropdown-content">
                                        {areas.map((item) => (
                                            <Link key={item.href} href={item.href} className="dropdown-item">
                                                {item.name}
                                            </Link>
                                        ))}
                                        <Link href="/areas" className="dropdown-item dropdown-item-all">
                                            View All Areas →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className="nav-item">
                            <Link href="/journal" className="nav-link">
                                Journal
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <div className="nav-cta">
                        <Link href="/contact" className="btn btn-primary">
                            Book a Survey
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${mobileOpen ? "open" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {mobileOpen && (
                    <div className="mobile-nav">
                        <div className="mobile-nav-section">
                            <p className="mobile-nav-label">Services</p>
                            {services.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="mobile-nav-link"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mobile-nav-section">
                            <p className="mobile-nav-label">Tools</p>
                            {tools.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="mobile-nav-link"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mobile-nav-section">
                            <p className="mobile-nav-label">Areas</p>
                            {areas.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="mobile-nav-link"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mobile-nav-section">
                            <Link
                                href="/case-studies"
                                className="mobile-nav-link"
                                onClick={() => setMobileOpen(false)}
                            >
                                Case Studies
                            </Link>
                            <Link
                                href="/journal"
                                className="mobile-nav-link"
                                onClick={() => setMobileOpen(false)}
                            >
                                Journal
                            </Link>
                            <Link
                                href="/about"
                                className="mobile-nav-link"
                                onClick={() => setMobileOpen(false)}
                            >
                                About
                            </Link>
                        </div>

                        <Link
                            href="/contact"
                            className="btn btn-primary btn-lg mobile-cta"
                            onClick={() => setMobileOpen(false)}
                        >
                            Book a Survey
                        </Link>
                    </div>
                )}
            </div>

            <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(253, 252, 250, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--navy-100);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--navy-800), var(--navy-900));
          color: var(--gold-400);
          font-family: var(--font-playfair), serif;
          font-weight: 700;
          font-size: 1.125rem;
          border-radius: 8px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .logo-name {
          font-family: var(--font-playfair), serif;
          font-weight: 600;
          font-size: 1.125rem;
          color: var(--navy-900);
        }

        .logo-tagline {
          font-size: 0.75rem;
          color: var(--gold-600);
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: block;
          padding: 8px 16px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--navy-700);
          cursor: pointer;
          transition: color var(--transition-fast);
          text-decoration: none;
        }

        .nav-link:hover {
          color: var(--gold-600);
        }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding-top: 12px;
        }

        .dropdown-content {
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          padding: 8px;
          min-width: 220px;
          border: 1px solid var(--navy-100);
        }

        .dropdown-item {
          display: block;
          padding: 10px 16px;
          font-size: 0.875rem;
          color: var(--navy-700);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          text-decoration: none;
        }

        .dropdown-item:hover {
          background: var(--navy-50);
          color: var(--gold-600);
        }

        .dropdown-item-all {
          margin-top: 8px;
          padding-top: 12px;
          border-top: 1px solid var(--navy-100);
          color: var(--gold-600);
          font-weight: 500;
        }

        .nav-cta {
          display: flex;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 24px;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: var(--navy-800);
          border-radius: 2px;
          transition: all var(--transition-fast);
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-nav {
          display: none;
          padding: 24px 0;
          border-top: 1px solid var(--navy-100);
        }

        .mobile-nav-section {
          margin-bottom: 24px;
        }

        .mobile-nav-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--slate-400);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .mobile-nav-link {
          display: block;
          padding: 8px 0;
          font-size: 1rem;
          color: var(--navy-700);
          text-decoration: none;
        }

        .mobile-cta {
          width: 100%;
          margin-top: 16px;
        }

        @media (max-width: 1024px) {
          .nav-menu,
          .nav-cta {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .mobile-nav {
            display: block;
          }
        }
      `}</style>
        </header>
    );
}
