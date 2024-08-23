import { Property } from "../types/property-type";

export const properties: Property[] = [
  {
    id: 1,
    title: "Cozy Cabin in the Woods",
    images: ["asd", "asd2"],
    description:
      "Escape to this charming cabin nestled in the heart of the Blue Ridge Mountains. Enjoy the peaceful surroundings and easy access to hiking trails.",
    location: "Balawala",
    bedrooms: 4,
    amenities: ["Gym", "Swimming Pool"],
    price: 1000000,
  },
  {
    id: 2,
    title: "Beachfront Condo",
    images: ["asd", "asd2"],
    description:
      "Wake up to stunning ocean views in this modern condo just steps from the beach. Perfect for a relaxing getaway or romantic retreat.",
    location: "Doiwala",
    bedrooms: 6,
    price: 55000,
  },
  {
    id: 3,
    title: "Loft Apartment in the City",
    images: ["asd", "asd2"],
    description:
      "Experience city living in this stylish loft apartment. Centrally located, with easy access to top restaurants, shops, and attractions.",
    location: "Raipur",
    bedrooms: 2,
    amenities: ["Casino", "Gym"],
    price: 450000,
  },
  {
    id: 4,
    title: "fourth property",
    images: ["asd", "asd2"],
    description: "this is a description for fourth property",
    location: "Prem Nagar",
    bedrooms: 8,
    price: 267450,
  },
];

export const propertyType = [
  "Apartment",
  "House",
  "Condo",
  "Townhouse",
  "Villa",
  "Studio",
  "Penthouse",
];

export const bedrooms = ["Studio", "1 Bedroom", "2 Bedrooms", "3+ Bedrooms"];

export const amenities = [
  "Wi-Fi",
  "Air Conditioning",
  "Heating",
  "Swimming Pool",
  "Parking",
  "Fitness Center/Gym",
  "Pet Friendly",
  "Balcony/Patio",
  "Garden/Yard",
  "Washer/Dryer",
];
