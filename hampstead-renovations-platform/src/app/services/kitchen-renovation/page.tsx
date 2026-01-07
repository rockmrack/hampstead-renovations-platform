import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
    title: "Kitchen Renovation",
    description: "Bespoke kitchen renovations in Hampstead & North West London. From concept to completion, we create stunning kitchens that combine form and function.",
};

export default function KitchenRenovationPage() {
    return (
        <ServicePageTemplate
            title="Kitchen Renovation"
            subtitle="Bespoke kitchen designs that combine functionality with stunning aesthetics"
            icon="🍳"
            description="The kitchen is the heart of your home, and a well-designed kitchen renovation can transform how you live. We work with leading kitchen suppliers and craftsmen to deliver bespoke kitchens that perfectly balance aesthetics, functionality, and durability. From contemporary handleless designs to classic shaker styles, we create kitchens that will be the centrepiece of your home for years to come."
            features={[
                "Kitchen design consultation",
                "3D visualisation and planning",
                "Complete demolition and strip-out",
                "Electrical and plumbing reconfiguration",
                "Bespoke cabinetry installation",
                "Worktop templating and fitting",
                "Appliance supply and installation",
                "Tiling and splashback installation",
                "Underfloor heating (optional)",
                "Final decoration and finishing",
            ]}
            process={[
                { step: 1, title: "Design Brief", description: "We understand your cooking style, storage needs, and aesthetic preferences." },
                { step: 2, title: "Kitchen Design", description: "Detailed 3D designs with appliance and material specifications." },
                { step: 3, title: "Installation", description: "Complete fit-out from first fix to final appliance commissioning." },
                { step: 4, title: "Handover", description: "Walkthrough, appliance training, and warranty registration." },
            ]}
            timeline="4-8 weeks"
            priceRange="£25k - £80k+"
        />
    );
}
