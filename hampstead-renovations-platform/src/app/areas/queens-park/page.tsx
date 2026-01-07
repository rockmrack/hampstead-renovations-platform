import AreaPageTemplate from "@/components/areas/AreaPageTemplate";


export default function QueensParkPage() {
    return (
        <AreaPageTemplate
            areaName="Queen's Park"
            postcode="NW6"
            description="Premium renovations in this charming village neighbourhood"
            highlights={[
                "Beautiful period properties",
                "Village atmosphere with independent shops",
                "Excellent primary schools",
                "Strong sense of community",
                "Popular farmers' market",
            ]}
            propertyTypes={["Victorian Terraces", "Edwardian Houses", "Period Conversions"]}
            planningNotes="Queen's Park has conservation areas with careful controls on external changes. We have experience delivering sympathetic renovations that enhance these characterful properties."
        />
    );
}
