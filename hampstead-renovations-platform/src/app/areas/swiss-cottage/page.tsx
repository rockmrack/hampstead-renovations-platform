import AreaPageTemplate from "@/components/areas/AreaPageTemplate";


export default function SwissCottagePage() {
    return (
        <AreaPageTemplate
            areaName="Swiss Cottage"
            postcode="NW3"
            description="Quality renovations in this well-connected central London neighbourhood"
            highlights={[
                "Excellent transport links",
                "Strong cultural amenities (Hampstead Theatre, library)",
                "Mix of period and modern properties",
                "Good schools nearby",
                "Easy access to Hampstead Heath",
            ]}
            propertyTypes={["Mansion Blocks", "Purpose-Built Flats", "Victorian Houses", "Modern Apartments"]}
            planningNotes="Swiss Cottage offers a mix of planning contexts. Modern blocks may have fewer restrictions while period properties require more careful consideration."
        />
    );
}
