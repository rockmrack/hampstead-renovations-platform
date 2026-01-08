import ServicePageTemplate, { generateServiceMetadata } from "@/components/services/ServicePageTemplate";

export const metadata = generateServiceMetadata(
    "Painting & Decorating",
    "Premium painting and decorating services in London. Expert finish, quality materials, minimal disruption."
);

export default function PaintingDecoratingPage() {
    return (
        <ServicePageTemplate
            title="Painting & Decorating"
            subtitle="Transform your spaces with premium finishes and expert craftsmanship"
            icon="🎨"
            priceFrom="£8,000"
            timeline="1-3 weeks"
            description="Whether you're refreshing a single room or redecorating your entire home, our skilled decorators deliver flawless results. We use premium paints, prepare surfaces meticulously, and protect your furnishings throughout. The result is a beautiful, long-lasting finish."
            features={[
                "Colour consultation and scheme development",
                "Premium paints from Farrow & Ball, Little Greene, Mylands",
                "Careful preparation including filling and sanding",
                "Feature wall and specialist finishes",
                "Woodwork including skirting and doors",
                "Kitchen cabinet repainting",
                "Wallpaper hanging including designer papers",
                "Period property restoration",
                "Commercial and residential projects",
                "Full furniture protection throughout",
            ]}
            process={[
                { step: "1", title: "Consultation", desc: "Discuss colours, finishes, and any special requirements" },
                { step: "2", title: "Preparation", desc: "Protect floors and furniture, prepare all surfaces" },
                { step: "3", title: "Application", desc: "Multiple coats with proper drying between" },
                { step: "4", title: "Finishing", desc: "Final inspection, touch-ups, and clean-up" },
            ]}
            faqs={[
                { q: "What paints do you use?", a: "We primarily use Farrow & Ball, Little Greene, and Mylands for their beautiful colours and lasting finish. Other brands available on request." },
                { q: "How do you protect furniture?", a: "We use dust sheets and plastic sheeting throughout. Larger items can be moved to the centre of rooms or relocated if needed." },
                { q: "Can you paint kitchen cabinets?", a: "Yes, we offer a full kitchen cabinet repainting service with proper preparation and durable finishes." },
                { q: "Do you do wallpaper?", a: "Yes, we hang wallpaper including designer papers and complex patterns requiring pattern matching." },
            ]}
        />
    );
}
