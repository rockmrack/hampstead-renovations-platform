import ServicePageTemplate, { generateServiceMetadata } from "@/components/services/ServicePageTemplate";

export const metadata = generateServiceMetadata(
    "Full House Renovation",
    "Complete home transformations in Hampstead and North West London. From planning to handover, we manage every detail."
);

export default function FullHouseRenovationPage() {
    return (
        <ServicePageTemplate
            title="Full House Renovation"
            subtitle="Complete transformation of your home from planning to handover"
            icon="🏠"
            priceFrom="£150,000"
            timeline="16-24 weeks"
            description="A full house renovation transforms every aspect of your home. We take care of everything from initial design and planning applications through to final decoration and handover. Our integrated approach means one team, one point of contact, and complete accountability for your project."
            features={[
                "Comprehensive design development with 3D visualisations",
                "Full project management from start to finish",
                "Planning applications and building control submissions",
                "Structural works and any required underpinning",
                "Complete electrical rewiring to current regulations",
                "Full plumbing and heating system replacement",
                "New kitchen design, supply, and installation",
                "Bathroom and en-suite design and fit-out",
                "Premium plastering and decoration throughout",
                "Flooring throughout including restoration options",
                "Final snagging and comprehensive handover",
            ]}
            process={[
                { step: "1", title: "Survey & Design", desc: "Detailed site survey and design development with 3D visualisations" },
                { step: "2", title: "Planning", desc: "Handle all permissions, party wall, and building control" },
                { step: "3", title: "Build", desc: "Expert trades deliver your renovation with weekly updates" },
                { step: "4", title: "Handover", desc: "Thorough snagging, documentation, and warranty sign-off" },
            ]}
            faqs={[
                { q: "How long does a full renovation take?", a: "Typically 16-24 weeks depending on property size and scope. We provide a detailed programme before works begin." },
                { q: "Can I stay in the property during works?", a: "For full renovations, we generally recommend moving out for your comfort and to speed the works. We can discuss options." },
                { q: "Do you handle planning permission?", a: "Yes, we manage all planning applications, building control submissions, and party wall notices as part of our service." },
                { q: "What warranty do you provide?", a: "All our structural work comes with a 10-year insurance-backed guarantee. Fixtures and appliances carry manufacturer warranties." },
            ]}
        />
    );
}
