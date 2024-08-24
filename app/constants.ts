import { Property } from "../types/property-type";

export const properties: Property[] = [
  {
    id: 1,
    title: "Cozy Cabin in the Woods",
    slug: "cozy-cabin-in-the-woods",
    image:
      "https://res.cloudinary.com/dpnmetc7y/image/upload/v1724517401/totality-frontend-challenge/q8gmmbkhqubhobirclar.jpg",
    description:
      "Escape to this charming cabin nestled in the heart of the Blue Ridge Mountains. Enjoy the peaceful surroundings and easy access to hiking trails.",
    location: "Dehradun",
    bedrooms: 4,
    type: "Apartment",
    amenities: ["Gym", "Swimming Pool"],
    price: 10000,
  },
  {
    id: 2,
    title: "Beachfront Condo",
    slug: "beachfront-condo",
    image:
      "https://res.cloudinary.com/dpnmetc7y/image/upload/v1724517401/totality-frontend-challenge/jn8d2meefrfpjxpskzdy.jpg",
    description:
      "Wake up to stunning ocean views in this modern condo just steps from the beach. Perfect for a relaxing getaway or romantic retreat.",
    location: "Pune",
    bedrooms: 6,
    type: "Penthouse",
    price: 25000,
  },
  {
    id: 3,
    title: "Loft Apartment in the City",
    slug: "loft-apartment-in-the-city",
    image:
      "https://res.cloudinary.com/dpnmetc7y/image/upload/v1724517402/totality-frontend-challenge/ue1ksvll58irzd9ydvmt.jpg",
    description:
      "Experience city living in this stylish loft apartment. Centrally located, with easy access to top restaurants, shops, and attractions.",
    location: "Raipur",
    bedrooms: 2,
    type: "Villa",
    amenities: ["Washer/Dryer", "Gym"],
    price: 45000,
  },
  {
    id: 4,
    title: "Countryside Farmhouse",
    slug: "countryside-farmhouse",
    image:
      "https://res.cloudinary.com/dpnmetc7y/image/upload/v1724517402/totality-frontend-challenge/szeuut2nbju7lqamcqkz.jpg",
    description:
      "Unwind in this charming farmhouse surrounded by vineyards and rolling hills. Enjoy the tranquility of the countryside and easy access to world-class wineries.",
    location: "Mumbai",
    bedrooms: 8,
    type: "House",
    amenities: ["Gym", "Parking", "Pet Friendly", "Garden/Yard"],
    price: 16150,
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    slug: "luxury-penthouse",
    image:
      "https://res.cloudinary.com/dpnmetc7y/image/upload/v1724517402/totality-frontend-challenge/wac8adxjj3p7b89hhkxt.jpg",
    description:
      "Experience the height of luxury in this stunning penthouse with panoramic city views. Indulge in the finest amenities and the convenience of a prime location.",
    location: "Delhi",
    bedrooms: 2,
    type: "Penthouse",
    amenities: ["Wi-Fi", "Parking", "Heating", "Air Conditioning"],
    price: 75000,
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
