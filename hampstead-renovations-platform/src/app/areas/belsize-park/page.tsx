import AreaPageTemplate, { generateAreaMetadata } from "@/components/areas/AreaPageTemplate";

export const metadata = generateAreaMetadata("Belsize Park");

export default function BelsizeParkPage() {
    return (
        <AreaPageTemplate
            areaName="Belsize Park"
            postcode="NW3"
            description="Expert renovation services in this leafy, family-friendly neighbourhood"
            avgProjectValue="£195,000"
            highlights={[
                "Tree-lined streets and village atmosphere",
                "Excellent schools making it popular with families",
                "Strong mix of Victorian and Edwardian terraces",
                "High demand for whole-house refurbishments and extensions",
                "Easy access to Hampstead Heath and central London",
            ]}
            propertyTypes={["Victorian Terraces", "Edwardian Semis", "Mansion Block Flats", "Period Conversions"]}
            planningNotes="Parts of Belsize Park are within conservation areas requiring careful design. Extensions and loft conversions are popular but need to respect the neighbourhood's architectural character. We have deep experience with Camden planning requirements."
        />
    );
}
