import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
    title: "Bathroom Renovation",
    description: "Luxury bathroom renovations in Hampstead & North West London. From modern minimalist to classic elegance, we create your perfect bathroom.",
};

export default function BathroomRenovationPage() {
    return (
        <ServicePageTemplate
            title="Bathroom Renovation"
            subtitle="Luxury bathroom transformations from modern minimalist to classic elegance"
            icon="🛁"
            description="A beautifully designed bathroom is a daily luxury. We create bathrooms that combine practical functionality with spa-like relaxation. Whether you're renovating a compact en-suite, transforming a family bathroom, or creating a statement master bathroom, our team delivers exceptional results. We work with premium suppliers to source the finest sanitaryware, tiles, and fittings."
            features={[
                "Bathroom design and layout planning",
                "3D visualisation of your new space",
                "Complete strip-out and disposal",
                "Plumbing reconfiguration and upgrades",
                "Underfloor heating installation",
                "Premium tiling and wet room creation",
                "Sanitaryware and brassware supply",
                "Bespoke vanity units and storage",
                "Lighting design and installation",
                "Final siliconing and finishing",
            ]}
            process={[
                { step: 1, title: "Consultation", description: "We discuss your requirements, style preferences, and budget." },
                { step: 2, title: "Design", description: "Detailed bathroom designs with product specifications." },
                { step: 3, title: "Installation", description: "Expert fit-out by our specialist bathroom team." },
                { step: 4, title: "Completion", description: "Final inspection and handover." },
            ]}
            timeline="2-4 weeks"
            priceRange="£12k - £40k+"
        />
    );
}
