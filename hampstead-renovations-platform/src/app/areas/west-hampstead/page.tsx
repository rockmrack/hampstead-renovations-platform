import AreaPageTemplate from "@/components/areas/AreaPageTemplate";


export default function WestHampsteadPage() {
    return (
        <AreaPageTemplate
            areaName="West Hampstead"
            postcode="NW6"
            description="Quality renovations in this vibrant, well-connected neighbourhood"
            highlights={[
                "Excellent transport links (3 stations)",
                "Popular with professionals and families",
                "Good mix of period and modern properties",
                "Strong rental and resale market",
                "Growing restaurant and café scene",
            ]}
            propertyTypes={["Victorian Terraces", "Edwardian Houses", "Conversion Flats", "New Build Apartments"]}
            planningNotes="West Hampstead offers good potential for extensions and loft conversions, with some areas having fewer planning restrictions than nearby Hampstead."
        />
    );
}
