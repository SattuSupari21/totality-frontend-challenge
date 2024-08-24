import { properties } from "@/app/constants";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, House, MapPin } from "lucide-react";

export default function PropertyPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header />
      <div className="container">
        <section className="container px-0 md:px-6 py-4">
          {properties
            .filter((property) => property.slug === params.slug)
            .map((item) => (
              <div
                key={item.id}
                className="flex min-[1024px]:flex-row flex-col mx-auto gap-8"
              >
                <img
                  src="https://rapidapi.com/blog/wp-content/uploads/2018/10/architecture-1836070_640.jpg"
                  alt="property_image"
                  className="rounded-xl w-2/8"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex flex-col gap-6">
                    <div className="space-y-2">
                      <span className="lg:text-4xl md:text-2xl min-[425px]:text-xl font-bold">
                        {item.title}
                      </span>
                      <span className="flex items-center gap-1 lg:text-lg md:text-lg min-[425px]:text-sm">
                        <MapPin />
                        {item.location}
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex gap-2">
                        <Bed />
                        <span>{item.bedrooms} bedroom(s)</span>
                      </div>
                      <div className="flex gap-2">
                        <House />
                        <span>{item.type}</span>
                      </div>
                    </div>

                    {item.amenities && (
                      <div className="flex flex-wrap gap-2">
                        {item.amenities?.map((amenity, index) => (
                          <Badge variant="outline" key={index}>
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <span className="lg:text-base md:text-base min-[425px]:text-sm">
                      "{item.description}"
                    </span>
                  </div>

                  <div>
                    <span className="lg:text-xl md:text-xl min-[425px]:text-lg font-semibold">
                      ₹{item.price}/night
                    </span>
                    <Button className="w-full mt-4">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </div>
    </>
  );
}
