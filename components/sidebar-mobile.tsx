import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import SidebarContent from "./sidebar-content";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  amenitiesState,
  maxPriceState,
  minPriceState,
  selectBedroomsState,
  selectPropertyTypeState,
} from "@/state/atoms/filter";
import { propertyState } from "@/state/atoms/property";
import { properties } from "@/app/constants";

export default function SidebarMobile() {
  const setPropertyListings = useSetRecoilState(propertyState);
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
    <div className="flex mb-4 gap-2">
      <Input type="text" placeholder="Search for properties..." />
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant={"outline"}>Filters</Button>
        </DrawerTrigger>
        <Button variant={"secondary"} onClick={clearFilters}>
          Clear Filters
        </Button>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription>Select filters to apply.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <SidebarContent />
          </div>
          <DrawerFooter>
            <div className="flex items-center justify-between gap-2">
              <Button className="flex-1" onClick={handleFilters}>
                Apply Filters
              </Button>
              <DrawerClose className="flex-1" asChild>
                <Button variant={"outline"}>Close</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
