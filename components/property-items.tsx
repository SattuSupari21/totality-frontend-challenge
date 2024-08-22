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

export default function PropertyItems() {
  return (
    <main className="container grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {properties.map((item) => (
        <Card key={item.id} className="flex flex-col justify-between shadow-lg">
          <CardHeader>
            <img
              src="https://rapidapi.com/blog/wp-content/uploads/2018/10/architecture-1836070_640.jpg"
              alt="property_image"
              className="rounded-xl"
            />
            <CardTitle className="pt-2">{item.title}</CardTitle>
            <CardDescription>{item.location}</CardDescription>
            <div className="flex items-center justify-between">
              <span className="font-bold">Rs. {item.price}</span>
              <span className="font-bold">{item.bedrooms} bedroom(s)</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-2">
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
