import AreaPageTemplate from "@/components/areas/AreaPageTemplate";


export default function PrimroseHillPage() {
    return (
        <AreaPageTemplate
            areaName="Primrose Hill"
            postcode="NW1"
            description="Premium renovations in this iconic London village"
            highlights={[
                "One of London's most prestigious postcodes",
                "Stunning period properties and pastel terraces",
                "Strong celebrity and creative community",
                "Excellent cafes, shops, and village life",
                "Views over the park to the London skyline",
            ]}
            propertyTypes={["Regency Villas", "Victorian Terraces", "Period Cottages", "Mews Houses"]}
            planningNotes="Primrose Hill is a conservation area with strict controls on external alterations. Internal refurbishments and sensitive extensions can still significantly enhance these desirable properties."
        />
    );
}
