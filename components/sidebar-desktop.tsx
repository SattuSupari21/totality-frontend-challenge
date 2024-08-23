"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import SidebarContent from "./sidebar-content";
import { Button } from "./ui/button";
import { propertyState } from "@/state/atoms/property";
import { properties } from "@/app/constants";
import {
  amenitiesState,
  maxPriceState,
  minPriceState,
  selectBedroomsState,
  selectPropertyTypeState,
} from "@/state/atoms/filter";

export default function SidebarDesktop() {
  const [propertyListings, setPropertyListings] = useRecoilState(propertyState);

  const selectBedroomsValue = useRecoilValue(selectBedroomsState);
  const selectPropertyTypeValue = useRecoilValue(selectPropertyTypeState);
  const amenitiesValue = useRecoilValue(amenitiesState);
  const minPriceValue = useRecoilValue(minPriceState);
  const maxPriceValue = useRecoilValue(maxPriceState);

  function clearFilters() {
    setPropertyListings({ items: properties, isLoading: false });
  }

  function handleFilters() {
    const filteredListings = properties.filter((property) => {
      // filtering amenities
      const filteredAmenities =
        amenitiesValue.length >= 1
          ? amenitiesValue.every((amenity) =>
              property.amenities?.includes(amenity)
            )
          : true;
      return (
        (selectPropertyTypeValue
          ? property.type === selectPropertyTypeValue
          : true) &&
        (selectBedroomsValue === 3 ? property.bedrooms >= 3 : true) &&
        (selectBedroomsValue && selectBedroomsValue !== 3
          ? property.bedrooms === selectBedroomsValue
          : true) &&
        filteredAmenities &&
        (minPriceValue !== 0 ? minPriceValue <= property.price : true) &&
        (maxPriceValue !== 0 ? maxPriceValue >= property.price : true)
      );
    });

    setPropertyListings({ items: filteredListings, isLoading: false });

    // let filteredListings = new Array();

    // // property type filter
    // if (selectPropertyTypeValue) {
    //   properties.map((item) => {
    //     if (item.type === selectPropertyTypeValue) {
    //       filteredListings.push(item);
    //     }
    //   });
    //   setPropertyListings({ items: filteredListings, isLoading: false });
    // }

    // // bedrooms filter
    // if (selectBedroomsValue !== 0) {
    //   properties.map((item) => {
    //     if (item.bedrooms >= 3 && selectBedroomsValue === 3) {
    //       filteredListings.push(item);
    //     } else if (item.bedrooms === selectBedroomsValue) {
    //       filteredListings.push(item);
    //     }
    //   });
    //   setPropertyListings({ items: filteredListings, isLoading: false });
    // }
  }

  return (
    <div className="lg:min-w-[280px] md:min-w-[220px] lg:max-w-[280px] md:max-w-[220px] flex flex-col gap-6 pr-8">
      <span className="font-semibold text-xl mr-16">Filters</span>
      <SidebarContent />
      <div className="flex flex-col gap-2">
        <Button onClick={handleFilters}>Apply Filters</Button>
        <Button variant={"secondary"} onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
