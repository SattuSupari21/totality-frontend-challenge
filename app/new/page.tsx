"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import { amenities, properties, propertyType } from "../constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function AddNewPropertyComponent() {
  const [amenitiesValue, setAmenitiesValue] = useState([]);

  const [newProperty, setNewProperty] = useState({
    title: "",
    image: [],
    description: "",
    location: "",
    bedrooms: 0,
    type: "",
    price: 0,
  });

  const handleNewPropertyChange = (key: any, value: any) => {
    setNewProperty((prevProperty) => ({
      ...prevProperty,
      [key]: value,
    }));
  };

  const handleAddProperty = () => {
    const newId = properties.length + 1;
    const newPropertyData = {
      id: newId,
      amenities: amenitiesValue,
      ...newProperty,
    };
    console.log(newPropertyData);
    setAmenitiesValue([]);
    setNewProperty({
      title: "",
      image: [],
      description: "",
      location: "",
      bedrooms: 0,
      type: "",
      price: 0,
    });
  };

  return (
    <main>
      <RecoilRoot>
        <Header />
        <div className="container">
          <section className="container px-4 md:px-6 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Add New Rental Property
            </h2>
            <form className="grid gap-4" action={handleAddProperty}>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter property title"
                    value={newProperty.title}
                    onChange={(e) =>
                      handleNewPropertyChange("title", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    type="text"
                    placeholder="Enter property description"
                    value={newProperty.description}
                    onChange={(e) =>
                      handleNewPropertyChange("description", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    type="text"
                    placeholder="Enter image URL"
                    value={newProperty.image}
                    onChange={(e) =>
                      handleNewPropertyChange("image", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Enter property location"
                    value={newProperty.location}
                    onChange={(e) =>
                      handleNewPropertyChange("location", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    placeholder="Enter number of bedrooms"
                    value={newProperty.bedrooms}
                    onChange={(e) =>
                      handleNewPropertyChange(
                        "bedrooms",
                        Number(e.target.value)
                      )
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Property Type</Label>
                  <Select
                    value={newProperty.type}
                    onValueChange={(value) =>
                      handleNewPropertyChange("type", value)
                    }
                  >
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
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amenities">Amenities</Label>
                  {amenities.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Checkbox
                        id="amenities"
                        onCheckedChange={() => {
                          // @ts-ignore
                          if (!amenitiesValue.includes(item)) {
                            // @ts-ignore
                            setAmenitiesValue((prev) => [...prev, item]);
                          } else {
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
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Enter price per night"
                    value={newProperty.price}
                    onChange={(e) =>
                      handleNewPropertyChange("price", Number(e.target.value))
                    }
                  />
                </div>
              </div>
              <Button type={"submit"} className="justify-self-end">
                Add Property
              </Button>
            </form>
          </section>
        </div>
      </RecoilRoot>
    </main>
  );
}
