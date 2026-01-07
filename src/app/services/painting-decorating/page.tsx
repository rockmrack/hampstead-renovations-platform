import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
    title: "Painting & Decorating",
    description: "Expert painting and decorating in Hampstead & North West London. Premium materials and meticulous attention to detail.",
};

export default function PaintingDecoratingPage() {
    return (
        <ServicePageTemplate
            title="Painting & Decorating"
            subtitle="Expert finishing work that brings your renovation to life"
            icon="🎨"
            description="The quality of decoration can make or break a renovation. Our decorating team brings years of experience working on high-end properties in Hampstead and North London. We use premium paints from Farrow & Ball, Little Greene, and other leading suppliers, applying them with the care and precision that period and contemporary properties deserve. From complex period mouldings to sleek modern finishes, we deliver flawless results."
            features={[
                "Colour consultation and advice",
                "Full surface preparation",
                "Plaster repairs and making good",
                "Premium paint application",
                "Wallpaper hanging (including specialist papers)",
                "Period detail restoration",
                "Woodwork preparation and painting",
                "External painting and decoration",
                "Protective coatings and treatments",
                "Final touch-ups and snagging",
            ]}
            process={[
                { step: 1, title: "Survey", description: "We assess surfaces, discuss colours, and provide a detailed quote." },
                { step: 2, title: "Preparation", description: "Thorough surface prep including repairs and priming." },
                { step: 3, title: "Application", description: "Multiple coats applied to exacting standards." },
                { step: 4, title: "Inspection", description: "Final review and touch-ups before handover." },
            ]}
            timeline="1-4 weeks"
            priceRange="£5k - £25k+"
        />
    );
}
