export type Property = {
  id: number;
  title: string;
  images: string[];
  description: string;
  location: string;
  bedrooms: number;
  type: string;
  amenities?: string[];
  price: number;
};
