import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
    title: "Extensions",
    description: "Rear and side return extensions in Hampstead & North West London. Expert planning support and seamless builds that transform your living space.",
};

export default function ExtensionsPage() {
    return (
        <ServicePageTemplate
            title="Extensions"
            subtitle="Rear and side return extensions that seamlessly blend with your home"
            icon="🔨"
            description="Extensions are one of the most effective ways to add valuable living space to your London home. Whether you're looking for a rear extension to create an open-plan kitchen-diner, a side return extension to maximise a Victorian terrace, or a wraparound extension for maximum impact, our team brings decades of experience in navigating London's planning requirements and delivering stunning results."
            features={[
                "Feasibility assessment and planning advice",
                "Architectural design and drawings",
                "Structural engineering calculations",
                "Planning application management",
                "Party wall notice handling",
                "Foundation and structural work",
                "Glazing and bifold door installation",
                "Complete internal fit-out",
                "External landscaping coordination",
                "Building control sign-off",
            ]}
            process={[
                { step: 1, title: "Feasibility", description: "We assess your property's extension potential and planning constraints." },
                { step: 2, title: "Design & Planning", description: "Detailed designs and planning submissions with Camden expertise." },
                { step: 3, title: "Construction", description: "Expert build from foundations to final finishes." },
                { step: 4, title: "Completion", description: "Handover with certificates and warranty documentation." },
            ]}
            timeline="10-16 weeks"
            priceRange="£80k - £200k+"
        />
    );
}
