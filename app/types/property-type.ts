export type Property = {
  id: number;
  title: string;
  images: string[];
  description: string;
  location: string;
  bedrooms: number;
  amenities?: string[];
  price: number;
};
