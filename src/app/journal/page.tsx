"use client";

import Link from "next/link";


const articles = [
    { title: "Planning Permission in Camden: What You Need to Know", category: "Planning", date: "Dec 2024" },
    { title: "Victorian House Renovation: A Complete Guide", category: "Renovation", date: "Nov 2024" },
    { title: "Loft Conversion Costs in London 2025", category: "Costs", date: "Nov 2024" },
    { title: "Party Wall Act Explained for Homeowners", category: "Legal", date: "Oct 2024" },
    { title: "Kitchen Design Trends for Period Homes", category: "Design", date: "Oct 2024" },
    { title: "Extension Ideas for Terraced Houses", category: "Extensions", date: "Sep 2024" },
];

export default function JournalPage() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1>Hampstead Journal</h1>
                    <p>Renovation advice and local insights</p>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <div className="grid">
                        {articles.map((article, i) => (
                            <article key={i} className="card">
                                <span className="badge">{article.category}</span>
                                <h3>{article.title}</h3>
                                <span className="date">{article.date}</span>
                                <Link href="#" className="read-more">Read Article →</Link>
                            </article>
                        ))}
                    </div>

                    <div className="newsletter">
                        <h2>Get Renovation Tips in Your Inbox</h2>
                        <p>Subscribe to our monthly newsletter for advice and inspiration.</p>
                        <form>
                            <input type="email" className="input" placeholder="Your email" />
                            <button type="button" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero { background: linear-gradient(135deg, var(--navy-900), var(--navy-800)); padding: 140px 0 80px; text-align: center; }
        .hero h1 { color: white; margin-bottom: 16px; }
        .hero p { font-size: 1.25rem; color: var(--navy-200); }
        .content { padding: 60px 0 100px; background: var(--cream-50); }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-bottom: 60px; }
        .card { background: white; padding: 32px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
        .badge { display: inline-block; padding: 4px 12px; background: var(--navy-100); color: var(--navy-700); font-size: 0.75rem; font-weight: 600; border-radius: 9999px; margin-bottom: 16px; }
        .card h3 { font-size: 1.125rem; margin-bottom: 12px; line-height: 1.4; }
        .date { display: block; font-size: 0.8125rem; color: var(--slate-400); margin-bottom: 16px; }
        .read-more { color: var(--gold-600); font-weight: 600; font-size: 0.875rem; }
        .newsletter { text-align: center; padding: 48px; background: white; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .newsletter h2 { margin-bottom: 12px; }
        .newsletter p { margin-bottom: 24px; }
        .newsletter form { display: flex; gap: 12px; justify-content: center; max-width: 400px; margin: 0 auto; }
        .newsletter .input { flex: 1; }
        @media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } .newsletter form { flex-direction: column; } }
      `}</style>
        </>
    );
}
