import AreaPageTemplate, { generateAreaMetadata } from "@/components/areas/AreaPageTemplate";

export const metadata = generateAreaMetadata("St John's Wood");

export default function StJohnsWoodPage() {
    return (
        <AreaPageTemplate
            areaName="St John's Wood"
            postcode="NW8"
            description="Luxury renovation services in this exclusive neighbourhood"
            highlights={[
                "One of London's most affluent areas",
                "Large detached and semi-detached properties",
                "Close to Regent's Park and Lord's Cricket Ground",
                "Excellent international schools",
                "High demand for premium whole-house renovations",
            ]}
            propertyTypes={["Detached Villas", "Large Semi-Detached", "Purpose-Built Apartments", "Mansion Blocks"]}
            planningNotes="St John's Wood offers more flexibility than some conservation areas, but the high standards expected mean quality and design excellence are paramount. We specialize in high-end finishes."
        />
    );
}
