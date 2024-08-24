import { Property } from "../types/property-type";

export const properties: Property[] = [
  {
    id: 1,
    title: "Cozy Cabin in the Woods",
    slug: "cozy-cabin-in-the-woods",
    images: ["asd", "asd2"],
    description:
      "Escape to this charming cabin nestled in the heart of the Blue Ridge Mountains. Enjoy the peaceful surroundings and easy access to hiking trails.",
    location: "Balawala",
    bedrooms: 4,
    type: "Apartment",
    amenities: ["Gym", "Swimming Pool"],
    price: 10000,
  },
  {
    id: 2,
    title: "Beachfront Condo",
    slug: "beachfront-condo",
    images: ["asd", "asd2"],
    description:
      "Wake up to stunning ocean views in this modern condo just steps from the beach. Perfect for a relaxing getaway or romantic retreat.",
    location: "Doiwala",
    bedrooms: 6,
    type: "Penthouse",
    price: 25000,
  },
  {
    id: 3,
    title: "Loft Apartment in the City",
    slug: "loft-apartment-in-the-city",
    images: ["asd", "asd2"],
    description:
      "Experience city living in this stylish loft apartment. Centrally located, with easy access to top restaurants, shops, and attractions.",
    location: "Raipur",
    bedrooms: 2,
    type: "Villa",
    amenities: ["Casino", "Gym"],
    price: 45000,
  },
  {
    id: 4,
    title: "fourth property",
    slug: "fourth-property",
    images: ["asd", "asd2"],
    description: "this is a description for fourth property",
    location: "Prem Nagar",
    bedrooms: 8,
    type: "Penthouse",
    price: 16150,
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

export const bedrooms = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3+", value: 3 },
];

export const amenities = [
  "Wi-Fi",
  "Air Conditioning",
  "Heating",
  "Swimming Pool",
  "Parking",
  "Gym",
  "Pet Friendly",
  "Balcony/Patio",
  "Garden/Yard",
  "Washer/Dryer",
];

export const guestsOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "4+", value: 5 },
];
