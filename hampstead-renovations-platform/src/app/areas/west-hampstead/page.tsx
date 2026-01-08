import AreaPageTemplate, { generateAreaMetadata } from "@/components/areas/AreaPageTemplate";

export const metadata = generateAreaMetadata("West Hampstead");

export default function WestHampsteadPage() {
    return (
        <AreaPageTemplate
            areaName="West Hampstead"
            postcode="NW6"
            description="Quality renovations in this vibrant, well-connected neighbourhood"
            avgProjectValue="£165,000"
            highlights={[
                "Excellent transport links (3 stations, 4 lines)",
                "Popular with professionals and young families",
                "Good mix of period and modern properties",
                "Strong rental and resale market",
                "Growing restaurant and independent retail scene",
            ]}
            propertyTypes={["Victorian Terraces", "Edwardian Houses", "Conversion Flats", "New Build Apartments"]}
            planningNotes="West Hampstead offers good potential for extensions and loft conversions, with some areas having fewer restrictions than neighbouring Hampstead. We know what's achievable and can maximize your property's potential."
        />
    );
}
