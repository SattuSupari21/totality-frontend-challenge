"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "./ui/checkbox";
import { amenities, bedrooms, propertyType } from "@/app/constants";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  amenitiesState,
  maxPriceState,
  minPriceState,
  selectBedroomsState,
  selectPropertyTypeState,
} from "@/state/atoms/filter";

export default function SidebarContent() {
  const setSelectBedrooms = useSetRecoilState(selectBedroomsState);
  const setSelectPropertyType = useSetRecoilState(selectPropertyTypeState);
  const [amenitiesValue, setAmenitiesValue] = useRecoilState(amenitiesState);
  const setMinPrice = useSetRecoilState(minPriceState);
  const setMaxPrice = useSetRecoilState(maxPriceState);

  return (
    <div className="flex flex-col gap-6">
      {/* Property Type */}
      <div className="flex flex-col gap-2">
        <span className="text-sm">Property Type</span>
        <Select onValueChange={(value) => setSelectPropertyType(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Property Type</SelectLabel>
              {propertyType.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Number of Bedrooms */}
      <div className="flex flex-col gap-2">
        <span className="text-sm">Bedrooms</span>
        <Select onValueChange={(value) => setSelectBedrooms(parseInt(value))}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Bedrooms</SelectLabel>
              {bedrooms.map((item) => (
                <SelectItem key={item.label} value={item.value.toString()}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Amenities */}
      <div className="flex flex-col gap-2">
        <span>Amenities</span>
        {amenities.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox
              id="amenities"
              onCheckedChange={() => {
                // if amenity does not exists, add it
                // @ts-ignore
                if (!amenitiesValue.includes(item)) {
                  // @ts-ignore
                  setAmenitiesValue((prev) => [...prev, item]);
                }
                // if amenity already exists, remove it
                else {
                  setAmenitiesValue(
                    amenitiesValue.filter((val) => val !== item)
                  );
                }
              }}
            />
            <label htmlFor="amenities" className="text-sm">
              {item}
            </label>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="flex flex-col gap-2">
        <span>Price</span>
        <div className="flex gap-2">
          <Input
            defaultValue={0}
            type="number"
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
          <Input
            type="number"
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
        </div>
        {/* <Slider defaultValue={[50]} max={100} step={1} /> */}
      </div>
    </div>
  );

  function SelectDropDown({
    id,
    label,
    items,
  }: {
    id: string;
    label: string;
    items: string[];
  }) {
    return (
      <div className="flex flex-col gap-2">
        <span className="text-sm">{label}</span>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{label}</SelectLabel>
              {items.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  }
}
