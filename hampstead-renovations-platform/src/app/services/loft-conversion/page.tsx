import ServicePageTemplate, { generateServiceMetadata } from "@/components/services/ServicePageTemplate";

export const metadata = generateServiceMetadata(
    "Loft Conversions",
    "Add a stunning loft bedroom, office, or suite to your London home. Expert design and build with 10-year guarantee."
);

export default function LoftConversionPage() {
    return (
        <ServicePageTemplate
            title="Loft Conversions"
            subtitle="Transform unused roof space into beautiful living areas"
            icon="🏗️"
            priceFrom="£55,000"
            timeline="8-12 weeks"
            description="A loft conversion is often the most cost-effective way to add a bedroom, office, or whole master suite to your home. With London's premium on space, converting your loft can significantly increase your property's value while providing the extra room your family needs."
            features={[
                "Structural survey and feasibility assessment",
                "Architectural design with multiple layout options",
                "Planning applications (where required) and building control",
                "Structural works including steel beams",
                "Dormer windows or roof lights installation",
                "Staircase design and construction",
                "En-suite bathroom fit-out if required",
                "Full electrics, lighting design, and wiring",
                "Insulation and soundproofing to regulations",
                "Plastering, flooring, and decoration",
            ]}
            process={[
                { step: "1", title: "Survey", desc: "Assess your roof space and discuss design possibilities" },
                { step: "2", title: "Design", desc: "Create detailed plans optimising layout and natural light" },
                { step: "3", title: "Permissions", desc: "Secure building control approval and any planning needed" },
                { step: "4", title: "Build", desc: "Efficient construction minimising disruption to your home" },
            ]}
            faqs={[
                { q: "Is my loft suitable for conversion?", a: "Most lofts can be converted. The key factors are head height (2.2m minimum), roof structure, and access. We assess this at survey." },
                { q: "Do loft conversions need planning permission?", a: "Many loft conversions fall under permitted development. Dormers in conservation areas or on front elevations typically need planning." },
                { q: "What types of loft conversion do you do?", a: "We offer Velux (simplest), dormer (most popular), L-shaped dormer, mansard, and hip-to-gable conversions." },
                { q: "How much value does a loft conversion add?", a: "A well-executed loft conversion typically adds 10-20% to property value, often more than the cost of works." },
            ]}
        />
    );
}
