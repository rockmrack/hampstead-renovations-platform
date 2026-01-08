import AreaPageTemplate, { generateAreaMetadata } from "@/components/areas/AreaPageTemplate";

export const metadata = generateAreaMetadata("Swiss Cottage");

export default function SwissCottagePage() {
    return (
        <AreaPageTemplate
            areaName="Swiss Cottage"
            postcode="NW3"
            description="Quality renovations in this well-connected central London neighbourhood"
            avgProjectValue="£145,000"
            highlights={[
                "Excellent transport links to central London",
                "Strong cultural amenities (Hampstead Theatre, library)",
                "Mix of period and modern properties",
                "Good schools nearby",
                "Easy access to Hampstead Heath and Regent's Park",
            ]}
            propertyTypes={["Mansion Blocks", "Purpose-Built Flats", "Victorian Houses", "Modern Apartments"]}
            planningNotes="Swiss Cottage offers a mix of planning contexts. Modern blocks may have fewer restrictions while period properties require more careful consideration. We're experienced with Camden's requirements across all property types."
        />
    );
}
