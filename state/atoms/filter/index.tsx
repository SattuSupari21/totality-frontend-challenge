"use client";

import { atom } from "recoil";

export const selectBedroomsState = atom({
  key: "selectBedroomsState",
  default: 0,
});

export const selectPropertyTypeState = atom({
  key: "selectPropertyTypeState",
  default: "",
});

export const amenitiesState = atom({
  key: "selectAmenitiesState",
  default: [],
});

export const minPriceState = atom({
  key: "minPriceState",
  default: 0,
});

export const maxPriceState = atom({
  key: "maxPriceState",
  default: 0,
});

// export const filterState = atom({
//   key: "filterState", // unique ID (with respect to other atoms/selectors)
//   default: {
//     selectBedrooms: "",
//     selectPropertyType: null,
//     amenities: [],
//     minPrice: 0,
//     maxPrice: null,
//   },
// });
