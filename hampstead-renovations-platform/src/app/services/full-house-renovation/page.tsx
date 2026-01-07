import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
    title: "Full House Renovation",
    description: "Complete house renovation and refurbishment services in Hampstead & North West London. From structural work to finishing touches, we transform homes.",
};

export default function FullHouseRenovationPage() {
    return (
        <ServicePageTemplate
            title="Full House Renovation"
            subtitle="Complete transformation of your home from top to bottom"
            icon="🏠"
            description="A full house renovation is the most comprehensive way to transform your property. Whether you've recently purchased a period home requiring complete modernisation, or you're ready to reimagine your existing space, our team handles every aspect of the project. From structural alterations and rewiring to bespoke joinery and finishing touches, we deliver turnkey solutions that exceed expectations."
            features={[
                "Full structural survey and assessment",
                "Architectural design and planning support",
                "Complete electrical rewiring to current standards",
                "New plumbing and heating systems",
                "Kitchen and bathroom installation",
                "Flooring throughout all rooms",
                "Internal and external decoration",
                "Bespoke joinery and built-in storage",
                "Smart home integration options",
                "Full project management and coordination",
            ]}
            process={[
                { step: 1, title: "Survey & Design", description: "We assess your property, understand your vision, and develop detailed plans." },
                { step: 2, title: "Planning & Approvals", description: "We handle all necessary planning applications and building control." },
                { step: 3, title: "Build Phase", description: "Our skilled team executes the renovation with weekly progress updates." },
                { step: 4, title: "Handover", description: "Final inspection, snagging, and handover with full documentation." },
            ]}
            timeline="12-24 weeks"
            priceRange="£150k - £500k+"
        />
    );
}
