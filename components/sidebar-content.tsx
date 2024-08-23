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

export default function SidebarContent() {
  return (
    <div className="flex flex-col gap-6">
      <SelectDropDown label={"Property Type"} items={propertyType} />
      <SelectDropDown label={"Bedrooms"} items={bedrooms} />
      <div className="flex flex-col gap-2">
        <span>Amenities</span>
        {amenities.map((item) => (
          <div className="flex items-center gap-2">
            <Checkbox id="amenities" />
            <label htmlFor="amenities" className="text-sm">
              {item}
            </label>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <span>Price</span>
        <div className="flex gap-2">
          <Input defaultValue={0} type="number" />
          <Input type="number" />
        </div>
        {/* <Slider defaultValue={[50]} max={100} step={1} /> */}
      </div>
    </div>
  );
}

function SelectDropDown({ label, items }: { label: string; items: string[] }) {
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
