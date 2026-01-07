import AreaPageTemplate from "@/components/areas/AreaPageTemplate";


export default function MaidaValePage() {
    return (
        <AreaPageTemplate
            areaName="Maida Vale"
            postcode="W9"
            description="Expert renovations in this elegant canal-side neighbourhood"
            highlights={[
                "Beautiful mansion blocks and period houses",
                "Little Venice canal frontage",
                "Quiet, residential character",
                "Good transport to central London",
                "Strong rental market",
            ]}
            propertyTypes={["Mansion Blocks", "Period Houses", "Canal-side Properties", "Conversion Flats"]}
            planningNotes="Maida Vale is within Westminster and includes conservation areas. Mansion block renovations often require freeholder consent alongside planning considerations."
        />
    );
}
