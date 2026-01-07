import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
    title: "Property Maintenance",
    description: "Reliable property maintenance services in Hampstead & North West London. From repairs to preventive care for your home.",
};

export default function PropertyMaintenancePage() {
    return (
        <ServicePageTemplate
            title="Property Maintenance"
            subtitle="Reliable maintenance services to keep your home in perfect condition"
            icon="🔧"
            description="Owning a property in London requires ongoing care and attention. Our property maintenance service provides reliable, high-quality support for all your home maintenance needs. From emergency repairs to planned preventive maintenance, we help you protect your investment and keep your home running smoothly. Our maintenance clients benefit from priority scheduling and preferential rates."
            features={[
                "Emergency repair callouts",
                "Planned preventive maintenance",
                "Plumbing repairs and servicing",
                "Electrical fault finding and repairs",
                "Carpentry and joinery repairs",
                "Window and door adjustments",
                "Gutter cleaning and repairs",
                "Damp investigation and treatment",
                "Seasonal property checks",
                "Snagging and touch-up work",
            ]}
            process={[
                { step: 1, title: "Report", description: "Report the issue by phone, email, or online." },
                { step: 2, title: "Assessment", description: "We diagnose the problem and provide a quote." },
                { step: 3, title: "Repair", description: "Swift, professional repair work." },
                { step: 4, title: "Follow-up", description: "Confirmation and ongoing support." },
            ]}
            timeline="Same day - 1 week"
            priceRange="£150 - £2k+"
        />
    );
}
