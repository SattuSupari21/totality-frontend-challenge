import { properties } from "@/app/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { propertyState } from "@/state/atoms/property";
import { MapPin } from "lucide-react";
import { useRecoilValue } from "recoil";

export default function PropertyItems() {
  const propertyListings = useRecoilValue(propertyState);

  return propertyListings.items.length < 1 ? (
    <div className="w-full text-center">No Content to show</div>
  ) : (
    <main className="grid lg:grid-cols-3 grid-rows-2 md:grid-cols-2 gap-4">
      {propertyListings.items.map((item) => (
        <Card key={item.id} className="flex flex-col justify-between shadow-lg">
          <CardHeader>
            <img
              src="https://rapidapi.com/blog/wp-content/uploads/2018/10/architecture-1836070_640.jpg"
              alt="property_image"
              className="rounded-xl"
            />
            <CardTitle className="pt-2 text-xl">{item.title}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {item.location}
            </CardDescription>
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm">Rs. {item.price}</span>
              <span className="font-bold text-sm">
                {item.bedrooms} bedroom(s)
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-2">
              <Badge>{item.type}</Badge>
              {item.amenities?.map((amenity, index) => (
                <Badge variant="outline" key={index}>
                  {amenity}
                </Badge>
              ))}
            </div>
            <CardDescription className=" text-wrap">
              {item.description}
            </CardDescription>
            <Button className="w-full mt-4">Book Now</Button>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}
