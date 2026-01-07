import Link from "next/link";

const services = [
    { name: "Full House Renovation", href: "/services/full-house-renovation" },
    { name: "Extensions", href: "/services/extensions" },
    { name: "Loft Conversions", href: "/services/loft-conversion" },
    { name: "Kitchen Renovation", href: "/services/kitchen-renovation" },
    { name: "Bathroom Renovation", href: "/services/bathroom-renovation" },
    { name: "Painting & Decorating", href: "/services/painting-decorating" },
];

const tools = [
    { name: "Cost Calculator", href: "/tools/renovation-cost-calculator" },
    { name: "Planning Checker", href: "/tools/camden-planning-risk-checker" },
    { name: "Party Wall Kit", href: "/tools/party-wall-kit" },
    { name: "Logistics Planner", href: "/tools/site-logistics-planner" },
];

const areas = [
    { name: "Hampstead", href: "/areas/hampstead" },
    { name: "Belsize Park", href: "/areas/belsize-park" },
    { name: "Primrose Hill", href: "/areas/primrose-hill" },
    { name: "St John's Wood", href: "/areas/st-johns-wood" },
    { name: "West Hampstead", href: "/areas/west-hampstead" },
    { name: "Highgate", href: "/areas/highgate" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Main Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-company">
                            <div className="footer-logo">
                                <span className="logo-icon">HR</span>
                                <div className="logo-text">
                                    <span className="logo-name">Hampstead</span>
                                    <span className="logo-tagline">Renovations</span>
                                </div>
                            </div>
                            <p className="footer-description">
                                Premium renovation and refurbishment specialists serving Hampstead
                                and North West London since 2010.
                            </p>

                            {/* NAP for SEO */}
                            <address className="footer-address">
                                <strong>Hampstead Renovations</strong><br />
                                Unit 3, Palace Court<br />
                                250 Finchley Rd<br />
                                London NW3 6DN<br />
                                United Kingdom
                            </address>

                            <div className="footer-contact">
                                <a href="tel:+442071234567" className="footer-contact-link">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    020 7123 4567
                                </a>
                                <a href="mailto:enquiries@hampsteadrenovations.co.uk" className="footer-contact-link">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    enquiries@hampsteadrenovations.co.uk
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="footer-links">
                            <h4>Services</h4>
                            <ul>
                                {services.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tools */}
                        <div className="footer-links">
                            <h4>Free Tools</h4>
                            <ul>
                                {tools.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Areas */}
                        <div className="footer-links">
                            <h4>Areas We Serve</h4>
                            <ul>
                                {areas.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="footer-cta">
                            <h4>Start Your Project</h4>
                            <p>
                                Book a free survey with our team to discuss your renovation plans.
                            </p>
                            <Link href="/contact" className="btn btn-primary">
                                Book a Survey
                            </Link>
                            <div className="footer-trust">
                                <div className="trust-badge">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <polyline points="9,12 11,14 15,10" />
                                    </svg>
                                    <span>Fully Insured</span>
                                </div>
                                <div className="trust-badge">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12,6 12,12 16,14" />
                                    </svg>
                                    <span>On-Time Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>© {currentYear} Hampstead Renovations. All rights reserved.</p>
                        <div className="footer-legal">
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/terms">Terms of Service</Link>
                            <Link href="/cookies">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* LocalBusiness Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        name: "Hampstead Renovations",
                        description: "Premium renovation and refurbishment company serving Hampstead and North West London",
                        url: "https://hampsteadrenovations.co.uk",
                        telephone: "+442071234567",
                        email: "enquiries@hampsteadrenovations.co.uk",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Unit 3, Palace Court, 250 Finchley Rd",
                            addressLocality: "London",
                            postalCode: "NW3 6DN",
                            addressCountry: "GB",
                        },
                        geo: {
                            "@type": "GeoCoordinates",
                            latitude: 51.5492,
                            longitude: -0.1806,
                        },
                        openingHoursSpecification: [
                            {
                                "@type": "OpeningHoursSpecification",
                                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                opens: "08:00",
                                closes: "18:00",
                            },
                            {
                                "@type": "OpeningHoursSpecification",
                                dayOfWeek: "Saturday",
                                opens: "09:00",
                                closes: "14:00",
                            },
                        ],
                        areaServed: [
                            { "@type": "Place", name: "Hampstead" },
                            { "@type": "Place", name: "Belsize Park" },
                            { "@type": "Place", name: "Primrose Hill" },
                            { "@type": "Place", name: "St John's Wood" },
                            { "@type": "Place", name: "West Hampstead" },
                            { "@type": "Place", name: "Highgate" },
                        ],
                        priceRange: "£££",
                    }),
                }}
            />

            <style jsx>{`
        .footer {
          background: var(--navy-900);
          color: var(--navy-200);
        }

        .footer-main {
          padding: 80px 0 60px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1.2fr;
          gap: 40px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--gold-500), var(--gold-600));
          color: white;
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
          color: white;
        }

        .logo-tagline {
          font-size: 0.75rem;
          color: var(--gold-400);
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .footer-description {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--navy-300);
          margin-bottom: 24px;
        }

        .footer-address {
          font-style: normal;
          font-size: 0.875rem;
          line-height: 1.8;
          color: var(--navy-300);
          margin-bottom: 20px;
        }

        .footer-address strong {
          color: white;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-contact-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--navy-300);
          font-size: 0.875rem;
          transition: color var(--transition-fast);
        }

        .footer-contact-link:hover {
          color: var(--gold-400);
        }

        .footer-links h4 {
          color: white;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 20px;
          font-family: var(--font-inter), sans-serif;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: var(--navy-300);
          font-size: 0.875rem;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--gold-400);
        }

        .footer-cta h4 {
          color: white;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 12px;
          font-family: var(--font-inter), sans-serif;
        }

        .footer-cta p {
          color: var(--navy-300);
          font-size: 0.875rem;
          margin-bottom: 20px;
        }

        .footer-trust {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--navy-400);
          font-size: 0.8125rem;
        }

        .trust-badge svg {
          color: var(--gold-500);
        }

        .footer-bottom {
          border-top: 1px solid var(--navy-700);
          padding: 24px 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-bottom p {
          color: var(--navy-400);
          font-size: 0.8125rem;
          margin: 0;
        }

        .footer-legal {
          display: flex;
          gap: 24px;
        }

        .footer-legal a {
          color: var(--navy-400);
          font-size: 0.8125rem;
        }

        .footer-legal a:hover {
          color: var(--gold-400);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-company {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .footer-main {
            padding: 60px 0 40px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-company {
            grid-column: span 1;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }

          .footer-legal {
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
          }
        }
      `}</style>
        </footer>
    );
}
