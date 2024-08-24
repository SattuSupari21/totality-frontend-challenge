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
import { MapPin, PlusIcon } from "lucide-react";
import { useRecoilValue } from "recoil";
import { Input } from "./ui/input";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import Link from "next/link";

export default function PropertyItems() {
  const isDesktop = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
  });

  const propertyListings = useRecoilValue(propertyState);

  const [query, setQuery] = useState("");

  return propertyListings.items.length < 1 ? (
    <div className="w-full text-center">No Content to show</div>
  ) : (
    <div className="flex flex-1 flex-col gap-2">
      {isDesktop && (
        <div className="flex gap-2">
          <Input
            placeholder="Search for properties..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link href="/new" className="flex gap-2">
            <Button>
              <PlusIcon className="w-4 h-4 mr-1" />
              <span>Add new property</span>
            </Button>
          </Link>
        </div>
      )}
      <main className="grid lg:grid-cols-3 grid-rows-2 md:grid-cols-2 gap-4">
        {propertyListings.items
          .filter((val) => val.title.toLocaleLowerCase().includes(query))
          .map((item) => (
            <Card
              key={item.id}
              className="flex flex-col justify-between shadow-lg hover:bg-accent transition-all"
            >
              <CardHeader>
                <img
                  src={item.image}
                  alt="property_image"
                  className="rounded-xl"
                />
                <CardTitle className="pt-2 text-xl">{item.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">₹{item.price}/night</span>
                  <span className="font-bold text-sm">
                    {item.bedrooms} bedroom(s)
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-2">
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
                <Link href={`/property/${item.slug}`}>
                  <Button className="w-full mt-4">Book Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
      </main>
    </div>
  );
}
