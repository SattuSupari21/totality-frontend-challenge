import Header from "@/components/header";
import PropertyDetails from "@/components/property-details";

export default function PropertyPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header />
      <PropertyDetails slug={params.slug} />
    </>
  );
}
