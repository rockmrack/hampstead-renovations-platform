import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Renovation Clinic",
    description: "Join our free renovation clinics and learn from London's renovation experts.",
};

export default function ClinicPage() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <span className="icon">🎓</span>
                    <h1>Renovation Clinic</h1>
                    <p>Free monthly sessions with our renovation experts</p>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <div className="grid">
                        <div className="card">
                            <h2>What We Cover</h2>
                            <ul>
                                <li>Planning & permissions in Camden</li>
                                <li>Budgeting for your renovation</li>
                                <li>Party wall obligations</li>
                                <li>Project timelines</li>
                                <li>Q&A with our team</li>
                            </ul>
                        </div>
                        <div className="card signup">
                            <h2>Register Your Interest</h2>
                            <p>We&apos;ll notify you when the next clinic is scheduled.</p>
                            <form>
                                <input type="email" className="input" placeholder="Your email" />
                                <button type="button" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>

                    <div className="course-section">
                        <h2>7-Day Renovation Email Course</h2>
                        <p>Get 7 days of practical renovation advice delivered to your inbox.</p>
                        <Link href="/learn/7-day-renovation-course" className="btn btn-outline">Learn More</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .hero { background: linear-gradient(135deg, var(--navy-900), var(--navy-800)); padding: 140px 0 80px; text-align: center; }
        .icon { font-size: 4rem; display: block; margin-bottom: 24px; }
        .hero h1 { color: white; margin-bottom: 16px; }
        .hero p { font-size: 1.25rem; color: var(--navy-200); }
        .content { padding: 60px 0; background: var(--cream-50); }
        .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; margin-bottom: 60px; }
        .card { background: white; padding: 40px; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); }
        .card h2 { margin-bottom: 20px; }
        .card ul { padding-left: 24px; }
        .card li { margin-bottom: 12px; color: var(--slate-600); }
        .signup form { display: flex; gap: 12px; margin-top: 20px; }
        .signup .input { flex: 1; }
        .course-section { text-align: center; padding: 48px; background: white; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); }
        .course-section h2 { margin-bottom: 12px; }
        .course-section p { margin-bottom: 24px; }
        @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } .signup form { flex-direction: column; } }
      `}</style>
        </>
    );
}
