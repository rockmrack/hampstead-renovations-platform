import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
    title: "Loft Conversions",
    description: "Expert loft conversions in Hampstead & North West London. Unlock valuable living space with full structural and planning support.",
};

export default function LoftConversionPage() {
    return (
        <ServicePageTemplate
            title="Loft Conversions"
            subtitle="Unlock valuable living space with expertly designed loft conversions"
            icon="🏗️"
            description="A loft conversion is often the most cost-effective way to add a bedroom, bathroom, or home office to your London property. We specialise in all types of loft conversions, from Velux and dormer conversions to more complex L-shaped and mansard designs. Our team handles everything from structural calculations to building control approval, ensuring your new space is safe, comfortable, and adds significant value to your home."
            features={[
                "Loft feasibility survey and headroom assessment",
                "Architectural drawings and 3D visualisation",
                "Structural engineering and steelwork",
                "Dormer or mansard construction",
                "Staircase design and installation",
                "En-suite bathroom installation",
                "Electrical and heating systems",
                "Skylights and window installation",
                "Insulation to current standards",
                "Fire safety compliance",
            ]}
            process={[
                { step: 1, title: "Loft Survey", description: "We measure headroom, assess structure, and confirm feasibility." },
                { step: 2, title: "Design", description: "Architectural designs tailored to maximise your new space." },
                { step: 3, title: "Build", description: "Structural work, construction, and full fit-out." },
                { step: 4, title: "Sign-off", description: "Building control approval and handover." },
            ]}
            timeline="8-12 weeks"
            priceRange="£55k - £120k+"
        />
    );
}
