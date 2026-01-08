import ServicePageTemplate, { generateServiceMetadata } from "@/components/services/ServicePageTemplate";

export const metadata = generateServiceMetadata(
    "Bathroom Renovation",
    "Luxury bathroom and wet room design and installation in London. Premium fixtures, expert craftsmanship."
);

export default function BathroomRenovationPage() {
    return (
        <ServicePageTemplate
            title="Bathroom Renovation"
            subtitle="Transform your bathroom into a luxury retreat"
            icon="🛁"
            priceFrom="£15,000"
            timeline="2-4 weeks"
            description="A beautifully designed bathroom can transform your daily routine into a spa-like experience. We create stunning bathrooms and wet rooms with premium fixtures, beautiful tiling, and expert craftsmanship. From compact en-suites to grand family bathrooms, we deliver exceptional results."
            features={[
                "Bespoke design and 3D visualisation",
                "Premium sanitaryware from leading brands",
                "Brassware in various finishes",
                "Full tiling including feature walls",
                "Underfloor heating installation",
                "Walk-in showers and wet room conversions",
                "Freestanding or built-in baths",
                "Vanity units and storage solutions",
                "Mirror cabinets and lighting design",
                "Ventilation and extraction systems",
            ]}
            process={[
                { step: "1", title: "Design", desc: "Consultation and 3D visual of your new bathroom" },
                { step: "2", title: "Selection", desc: "Choose sanitaryware, tiles, and brassware finishes" },
                { step: "3", title: "Strip Out", desc: "Remove existing bathroom and prepare for new installation" },
                { step: "4", title: "Fit Out", desc: "Plumbing, tiling, installation, and finishing" },
            ]}
            faqs={[
                { q: "How long does a bathroom take?", a: "A standard bathroom renovation takes 2-4 weeks. Complex layouts or wet room conversions may take longer." },
                { q: "Can you convert to a wet room?", a: "Yes, we can convert any bathroom to a wet room with proper tanking and drainage. This is popular for en-suites and smaller spaces." },
                { q: "What sanitaryware brands do you use?", a: "We work with premium brands including Duravit, Villeroy & Boch, Laufen, Victoria + Albert, and Crosswater." },
                { q: "Do you do underfloor heating?", a: "Yes, electric underfloor heating is standard in our bathroom renovations and makes a huge difference to comfort." },
            ]}
        />
    );
}
