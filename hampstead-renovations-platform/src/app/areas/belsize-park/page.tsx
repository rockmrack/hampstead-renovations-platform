import AreaPageTemplate, { generateAreaMetadata } from "@/components/areas/AreaPageTemplate";

export const metadata = generateAreaMetadata("Belsize Park");

export default function BelsizeParkPage() {
    return (
        <AreaPageTemplate
            areaName="Belsize Park"
            postcode="NW3"
            description="Expert renovation services in this leafy, family-friendly neighbourhood"
            highlights={[
                "Tree-lined streets and village atmosphere",
                "Excellent schools and family appeal",
                "Strong mix of Victorian and Edwardian properties",
                "Popular location for whole-house refurbishments",
                "Close to Hampstead Heath",
            ]}
            propertyTypes={["Victorian Terraces", "Edwardian Semis", "Mansion Block Flats", "Period Conversions"]}
            planningNotes="Parts of Belsize Park are within conservation areas. Extensions and loft conversions are popular but require careful design to respect the neighbourhood character."
        />
    );
}
