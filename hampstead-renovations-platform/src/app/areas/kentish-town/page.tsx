import AreaPageTemplate, { generateAreaMetadata } from "@/components/areas/AreaPageTemplate";

export const metadata = generateAreaMetadata("Kentish Town");

export default function KentishTownPage() {
    return (
        <AreaPageTemplate
            areaName="Kentish Town"
            postcode="NW5"
            description="Quality renovations in this creative, up-and-coming neighbourhood"
            avgProjectValue="£125,000"
            highlights={[
                "Excellent value compared to neighbouring areas",
                "Strong Victorian housing stock with great potential",
                "Great transport links",
                "Creative, diverse community",
                "Popular with young families and professionals",
            ]}
            propertyTypes={["Victorian Terraces", "Conversion Flats", "Ex-Council Properties", "New Developments"]}
            planningNotes="Kentish Town offers good potential for renovation projects with generally more flexible planning than conservation-heavy areas. Extensions and loft conversions are very achievable."
        />
    );
}
