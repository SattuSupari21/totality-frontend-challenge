"use client";

import { properties } from "@/app/constants";
import { atom } from "recoil";
export const propertyState = atom({
  key: "propertyState", // unique ID (with respect to other atoms/selectors)
  default: {
    items: properties,
    isLoading: false,
  },
});
