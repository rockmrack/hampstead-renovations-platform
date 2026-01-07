import AreaPageTemplate from "@/components/areas/AreaPageTemplate";

export default function HampsteadPage() {
  return (
    <AreaPageTemplate
      areaName="Hampstead"
      postcode="NW3"
      description="Premium renovation services in one of London's most desirable villages"
      highlights={[
        "Historic village character with excellent transport links",
        "Mix of Georgian, Victorian, and Edwardian properties",
        "Strong conservation area protections",
        "High property values demanding quality workmanship",
        "Our home base - we know the area intimately",
      ]}
      propertyTypes={["Victorian Villas", "Georgian Houses", "Period Cottages", "Mansion Blocks", "Modern Apartments"]}
      planningNotes="Much of Hampstead is within a conservation area with strict planning controls. Many properties are listed. We have extensive experience navigating Camden's planning requirements and have established relationships with local conservation officers."
    />
  );
}
