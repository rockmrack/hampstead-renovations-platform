import ServicePageTemplate, { generateServiceMetadata } from "@/components/services/ServicePageTemplate";

export const metadata = generateServiceMetadata(
    "Kitchen Renovation",
    "Bespoke kitchen design and installation in North London. Premium finishes, expert fitting."
);

export default function KitchenRenovationPage() {
    return (
        <ServicePageTemplate
            title="Kitchen Renovation"
            subtitle="Create your dream kitchen with bespoke design and premium finishes"
            icon="🍳"
            priceFrom="£35,000"
            timeline="4-8 weeks"
            description="The kitchen is the heart of your home. We design and build stunning kitchens that combine beautiful aesthetics with perfect functionality. From contemporary handleless designs to classic shaker styles, our team delivers kitchens that work for your lifestyle."
            features={[
                "Bespoke design consultation and 3D visualisation",
                "Premium cabinetry from leading manufacturers",
                "Worktops in quartz, granite, or solid surface",
                "Integrated appliance selection and installation",
                "Full plumbing including boiling water taps",
                "Electrical work including under-cabinet lighting",
                "Flooring and tiling installation",
                "Plastering and decoration",
                "Storage solutions and pantry design",
                "Final styling and accessory recommendations",
            ]}
            process={[
                { step: "1", title: "Design", desc: "Detailed consultation and 3D kitchen visualisation" },
                { step: "2", title: "Selection", desc: "Choose cabinetry, worktops, appliances, and finishes" },
                { step: "3", title: "Preparation", desc: "First fix plumbing and electrics, any structural work" },
                { step: "4", title: "Installation", desc: "Kitchen fitting, tiling, decoration, and finishing" },
            ]}
            faqs={[
                { q: "How long does a kitchen renovation take?", a: "Most kitchen renovations take 4-8 weeks depending on scope. Layout changes or structural work may extend this." },
                { q: "Can you help with design?", a: "Absolutely. We work with experienced kitchen designers to create layouts that maximise your space and suit your cooking style." },
                { q: "What brands do you use?", a: "We work with premium brands including Nobilia, Schuller, and bespoke cabinet makers. Appliances from Miele, Siemens, Bosch, and Sub-Zero." },
                { q: "What about worktops?", a: "We offer a full range including quartz (Silestone, Caesarstone), granite, marble, Corian, and solid wood options." },
            ]}
        />
    );
}
