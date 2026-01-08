import AreaPageTemplate, { generateAreaMetadata } from "@/components/areas/AreaPageTemplate";

export const metadata = generateAreaMetadata("Highgate");

export default function HighgatePage() {
    return (
        <AreaPageTemplate
            areaName="Highgate"
            postcode="N6"
            description="Expert renovations in this historic hilltop village"
            avgProjectValue="£245,000"
            highlights={[
                "Historic village with stunning London views",
                "Adjacent to Hampstead Heath",
                "Mix of grand houses and charming cottages",
                "Strong community and village atmosphere",
                "Popular with families and creative professionals",
            ]}
            propertyTypes={["Georgian Houses", "Victorian Villas", "Arts & Crafts Homes", "Period Cottages"]}
            planningNotes="Highgate includes several conservation areas and listed buildings. Careful, sensitive renovation is essential. We have experience working with both Haringey and Camden planning teams in this area."
        />
    );
}
