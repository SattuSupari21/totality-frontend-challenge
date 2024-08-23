import { useRecoilState, useSetRecoilState } from "recoil";
import SidebarContent from "./sidebar-content";
import { Button } from "./ui/button";
import { propertyState } from "@/state/atoms/property";
import PropertyItems from "./property-items";
import { Property } from "@/types/property-type";
import { properties } from "@/app/constants";

export default function SidebarDesktop() {
  const [propertyListings, setPropertyListings] = useRecoilState(propertyState);

  function handleFilters() {
    let filteredListings = new Array();
    propertyListings.items.map((item) => {
      if (item.bedrooms === 2) {
        setPropertyListings({
          items: [...filteredListings, item],
          isLoading: false,
        });
        filteredListings.push(item);
      }
    });
  }

  return (
    <div className="lg:min-w-[280px] md:min-w-[180px] flex flex-col gap-6 pr-8">
      <span className="font-semibold text-xl mr-16">Filters</span>
      <SidebarContent />
      <div className="flex flex-col gap-2">
        <Button onClick={() => handleFilters()}>Apply Filters</Button>
        <Button
          variant={"secondary"}
          onClick={() =>
            setPropertyListings({ items: properties, isLoading: false })
          }
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
