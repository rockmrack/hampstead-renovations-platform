import ServicePageTemplate, { generateServiceMetadata } from "@/components/services/ServicePageTemplate";

export const metadata = generateServiceMetadata(
    "Extensions",
    "Rear, side return, and wraparound extensions in London. Expert design and build from planning to completion."
);

export default function ExtensionsPage() {
    return (
        <ServicePageTemplate
            title="Extensions"
            subtitle="Add valuable living space with a beautifully designed extension"
            icon="🔨"
            priceFrom="£80,000"
            timeline="10-16 weeks"
            description="Extensions are one of the most cost-effective ways to add space and value to London homes. Whether you need a rear extension to create an open-plan kitchen, a side return to maximise a Victorian terrace, or a wraparound to transform your ground floor, we design and build extensions that seamlessly blend with your existing home."
            features={[
                "Architectural design with planning feasibility assessment",
                "All planning applications and permitted development checks",
                "Structural engineering and calculations",
                "Party wall notices and negotiation",
                "Groundworks and foundations",
                "Structural steel and construction",
                "Glazing and skylights installation",
                "Electrics, plumbing, and heating integration",
                "Plastering, decoration, and flooring",
                "Kitchen installation if required",
            ]}
            process={[
                { step: "1", title: "Feasibility", desc: "Site visit and assessment of what's possible under permitted development or planning" },
                { step: "2", title: "Design", desc: "Architectural drawings and 3D visualisations for your approval" },
                { step: "3", title: "Permissions", desc: "Handle all planning, building control, and party wall requirements" },
                { step: "4", title: "Build", desc: "Construction phase with weekly updates and clear timeline" },
            ]}
            faqs={[
                { q: "Do I need planning permission?", a: "Many extensions can be built under permitted development rights. We'll assess your specific situation and advise accordingly." },
                { q: "What about party wall issues?", a: "We handle all party wall notices and can recommend surveyors. Most neighbours are accommodating when approached professionally." },
                { q: "How much value will an extension add?", a: "Extensions typically add 10-15% to property value in London, often exceeding the cost of works. We can provide ROI estimates." },
                { q: "Can you match the existing building?", a: "Yes, we're experienced in matching brickwork, roofing, and period details to create a seamless extension." },
            ]}
        />
    );
}
