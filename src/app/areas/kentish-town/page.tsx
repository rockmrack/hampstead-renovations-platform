import AreaPageTemplate from "@/components/areas/AreaPageTemplate";


export default function KentishTownPage() {
    return (
        <AreaPageTemplate
            areaName="Kentish Town"
            postcode="NW5"
            description="Quality renovations in this up-and-coming neighbourhood"
            highlights={[
                "Excellent value compared to neighbouring areas",
                "Strong Victorian housing stock",
                "Great transport links",
                "Creative, diverse community",
                "Popular for young families",
            ]}
            propertyTypes={["Victorian Terraces", "Conversion Flats", "Ex-Council Properties", "New Developments"]}
            planningNotes="Kentish Town offers good potential for renovation projects with generally more flexible planning than conservation-heavy areas nearby."
        />
    );
}
