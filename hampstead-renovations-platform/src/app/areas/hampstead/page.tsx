import AreaPageTemplate, { generateAreaMetadata } from "@/components/areas/AreaPageTemplate";

export const metadata = generateAreaMetadata("Hampstead");

export default function HampsteadPage() {
    return (
        <AreaPageTemplate
            areaName="Hampstead"
            postcode="NW3"
            description="Premium renovation services in London's most desirable village"
            avgProjectValue="£285,000"
            highlights={[
                "Historic village character with exceptional transport links",
                "Outstanding mix of Georgian, Victorian, and Edwardian properties",
                "Extensive conservation area protections requiring expert navigation",
                "Highest property values in NW London demanding exceptional workmanship",
                "Our home base – we know the area more intimately than any other builder",
            ]}
            propertyTypes={["Victorian Villas", "Georgian Townhouses", "Period Cottages", "Mansion Blocks", "Arts & Crafts Houses"]}
            planningNotes="Much of Hampstead is within a conservation area with strict planning controls. Many properties are Grade II listed. We have 10+ years experience navigating Camden's requirements and have established relationships with local conservation officers. We know what gets approved and can save you months of frustration."
        />
    );
}
