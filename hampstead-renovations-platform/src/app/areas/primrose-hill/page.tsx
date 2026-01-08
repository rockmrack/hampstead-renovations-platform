import AreaPageTemplate, { generateAreaMetadata } from "@/components/areas/AreaPageTemplate";

export const metadata = generateAreaMetadata("Primrose Hill");

export default function PrimroseHillPage() {
    return (
        <AreaPageTemplate
            areaName="Primrose Hill"
            postcode="NW1"
            description="Premium renovations in London's most iconic village"
            avgProjectValue="£320,000"
            highlights={[
                "One of London's most prestigious postcodes",
                "Stunning period properties and famous pastel terraces",
                "Strong celebrity and creative community",
                "Exceptional cafes, boutiques, and village life",
                "Panoramic views over the park to the London skyline",
            ]}
            propertyTypes={["Regency Villas", "Victorian Terraces", "Period Cottages", "Mews Houses"]}
            planningNotes="Primrose Hill is a strict conservation area with rigorous controls on external alterations. Internal transformations and sensitive rear extensions are possible with the right approach. Our experience with Camden and Westminster planning is invaluable here."
        />
    );
}
