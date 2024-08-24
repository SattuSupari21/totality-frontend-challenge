"use client";

import { guestsOptions, properties } from "@/app/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, CalendarIcon, House, MapPin } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Dispatch, SetStateAction, useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Property } from "@/types/property-type";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "@/state/atoms/cart";
import { userState } from "@/state/atoms/user";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function PropertyDetails({ slug }: { slug: string }) {
  const user = useRecoilValue(userState);
  const [cart, setCart] = useRecoilState(cartState);

  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState<number>();

  const router = useRouter();

  function handleAddToCart(item: Property) {
    if (!user.isLoading) {
      if (!user.name) {
        return router.push("/auth/login");
      }
    }
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    let totalDays = 0;
    let totalPrice = 0;

    if (checkInDate && checkOutDate) {
      totalDays = Math.round(
        (checkOutDate.valueOf() - checkInDate.valueOf()) / oneDay
      );
    }

    if (totalDays > 0 && guests && guests > 0) {
      totalPrice = totalDays * item.price * guests;
      setCart({
        properties: [
          // @ts-ignore
          ...cart.properties,
          // @ts-ignore
          {
            id: item.id,
            title: item.title,
            image: item.image,
            dateFrom: checkInDate,
            dateTo: checkOutDate,
            guests,
            totalPrice,
          },
        ],
        totalAmount: cart.totalAmount + totalPrice,
      });
      toast.success("Added to cart!");
    }
  }

  return (
    <div className="container">
      <section className="container px-0 md:px-6 py-4">
        {properties
          .filter((property) => property.slug === slug)
          .map((item) => (
            <div
              key={item.id}
              className="flex min-[1024px]:flex-row flex-col mx-auto gap-8"
            >
              <img
                src={item.image}
                alt="property_image"
                className="rounded-xl mx-auto h-2/8 w-2/8 md:w-[640px] md:h-[500px]"
              />
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex flex-col gap-4">
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

                <div className="flex flex-col gap-2 md:mt-12 min-[425px]:mt-12">
                  <span className="lg:text-xl md:text-xl min-[425px]:text-lg font-semibold">
                    <span className="text-primary">₹{item.price}</span>/night
                  </span>
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <span>Check-in</span>
                      <DatePicker date={checkInDate} setDate={setCheckInDate} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span>Check-out</span>
                      <DatePicker
                        date={checkOutDate}
                        setDate={setCheckOutDate}
                      />
                    </div>
                  </div>
                  <span>Guests</span>
                  <Select onValueChange={(value) => setGuests(parseInt(value))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Property Type</SelectLabel>
                        {guestsOptions.map((item, index) => (
                          <SelectItem key={index} value={item.value.toString()}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Button
                    className="w-full mt-4"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );

  function DatePicker({
    date,
    setDate,
  }: {
    date: Date | undefined;
    setDate: Dispatch<SetStateAction<Date | undefined>>;
  }) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    );
  }
}
