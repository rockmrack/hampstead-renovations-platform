import Link from "next/link";

export default function Footer() {
    const services = [
        { name: "Full House Renovation", href: "/services/full-house-renovation" },
        { name: "Extensions", href: "/services/extensions" },
        { name: "Loft Conversions", href: "/services/loft-conversion" },
        { name: "Kitchen Renovation", href: "/services/kitchen-renovation" },
        { name: "Bathroom Renovation", href: "/services/bathroom-renovation" },
    ];

    const areas = [
        "Hampstead", "Belsize Park", "Primrose Hill", "St John's Wood",
        "West Hampstead", "Highgate"
    ];

    const tools = [
        { name: "Cost Calculator", href: "/tools/renovation-cost-calculator" },
        { name: "Planning Checker", href: "/tools/planning-checker" },
        { name: "ROI Estimator", href: "/tools/roi-estimator" },
        { name: "Party Wall Kit", href: "/tools/party-wall-kit" },
    ];

    return (
        <footer className="footer">
            {/* Trust Badges Row */}
            <div className="trust-section">
                <div className="container">
                    <div className="trust-grid">
                        <div className="trust-badge-large">
                            <span className="badge-icon">🏆</span>
                            <div>
                                <strong>Federation of Master Builders</strong>
                                <span>Vetted Member</span>
                            </div>
                        </div>
                        <div className="trust-badge-large">
                            <span className="badge-icon">✓</span>
                            <div>
                                <strong>TrustMark</strong>
                                <span>Government Endorsed</span>
                            </div>
                        </div>
                        <div className="trust-badge-large">
                            <span className="badge-icon">🛡️</span>
                            <div>
                                <strong>10-Year Guarantee</strong>
                                <span>Insurance Backed</span>
                            </div>
                        </div>
                        <div className="trust-badge-large">
                            <span className="badge-icon">⭐</span>
                            <div>
                                <strong>4.9/5 Rating</strong>
                                <span>127+ Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-col footer-company">
                            <div className="footer-logo">
                                <span className="logo-mark">HR</span>
                                <span className="logo-text">Hampstead Renovations</span>
                            </div>
                            <p>Premium renovation specialists serving North West London since 2010.</p>

                            {/* NAP for Local SEO */}
                            <address className="nap">
                                <strong>Hampstead Renovations</strong><br />
                                Unit 3, Palace Court<br />
                                250 Finchley Rd<br />
                                London NW3 6DN<br />
                                <a href="tel:02071234567">020 7123 4567</a><br />
                                <a href="mailto:hello@hampsteadrenovations.co.uk">hello@hampsteadrenovations.co.uk</a>
                            </address>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                {services.map((s) => (
                                    <li key={s.href}><Link href={s.href}>{s.name}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Areas */}
                        <div className="footer-col">
                            <h4>Areas We Serve</h4>
                            <ul>
                                {areas.map((a) => (
                                    <li key={a}><Link href={`/areas/${a.toLowerCase().replace(/\s+/g, "-")}`}>{a}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Tools & Resources */}
                        <div className="footer-col">
                            <h4>Free Tools</h4>
                            <ul>
                                {tools.map((t) => (
                                    <li key={t.href}><Link href={t.href}>{t.name}</Link></li>
                                ))}
                            </ul>
                            <h4 style={{ marginTop: "1.5rem" }}>Company</h4>
                            <ul>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/case-studies">Our Work</Link></li>
                                <li><Link href="/journal">Journal</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>© {new Date().getFullYear()} Hampstead Renovations Ltd. Company No. 12345678. VAT No. GB123456789</p>
                    <div className="legal-links">
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/terms">Terms</Link>
                        <Link href="/cookies">Cookies</Link>
                    </div>
                </div>
            </div>

            {/* LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Hampstead Renovations",
                        "image": "https://hampsteadrenovations.co.uk/logo.png",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Unit 3, Palace Court, 250 Finchley Rd",
                            "addressLocality": "London",
                            "postalCode": "NW3 6DN",
                            "addressCountry": "GB"
                        },
                        "telephone": "+442071234567",
                        "email": "hello@hampsteadrenovations.co.uk",
                        "url": "https://hampsteadrenovations.co.uk",
                        "priceRange": "£££",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "127"
                        },
                        "areaServed": ["Hampstead", "Belsize Park", "Primrose Hill", "St John's Wood", "NW3", "NW6", "NW8"],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Renovation Services",
                            "itemListElement": [
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full House Renovation" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Extensions" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Loft Conversions" } }
                            ]
                        }
                    })
                }}
            />

            <style jsx>{`
        .footer { background: var(--navy-900); color: var(--navy-300); }
        .trust-section { background: var(--navy-800); padding: 2rem 0; }
        .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .trust-badge-large { display: flex; align-items: center; gap: 1rem; }
        .badge-icon { font-size: 2rem; }
        .trust-badge-large strong { display: block; color: white; font-size: 0.9375rem; }
        .trust-badge-large span { font-size: 0.8125rem; color: var(--navy-400); }
        .footer-main { padding: 4rem 0; }
        .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 3rem; }
        .footer-logo { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
        .logo-mark { width: 40px; height: 40px; background: var(--gold-500); color: var(--navy-900); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; border-radius: var(--radius-md); }
        .logo-text { font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: white; }
        .footer-company p { margin-bottom: 1.5rem; line-height: 1.6; }
        .nap { font-style: normal; font-size: 0.875rem; line-height: 1.8; }
        .nap a { color: var(--gold-400); }
        .footer-col h4 { color: white; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem; font-family: var(--font-sans); text-transform: uppercase; letter-spacing: 0.05em; }
        .footer-col ul { list-style: none; padding: 0; margin: 0; }
        .footer-col li { margin-bottom: 0.5rem; }
        .footer-col a { color: var(--navy-400); font-size: 0.9375rem; transition: color var(--transition-fast); }
        .footer-col a:hover { color: var(--gold-400); }
        .footer-bottom { border-top: 1px solid var(--navy-700); padding: 1.5rem 0; }
        .footer-bottom-content { display: flex; justify-content: space-between; align-items: center; }
        .footer-bottom p { font-size: 0.8125rem; color: var(--navy-500); margin: 0; }
        .legal-links { display: flex; gap: 1.5rem; }
        .legal-links a { font-size: 0.8125rem; color: var(--navy-500); }
        .legal-links a:hover { color: var(--navy-300); }
        @media (max-width: 1024px) { .trust-grid { grid-template-columns: repeat(2, 1fr); } .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) { .trust-grid, .footer-grid { grid-template-columns: 1fr; } .footer-bottom-content { flex-direction: column; gap: 1rem; text-align: center; } }
      `}</style>
        </footer>
    );
}
