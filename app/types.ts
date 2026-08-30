export interface Destination {
  id: number;
  city: string;
  country: string;
  population: number;
  image: string;
  description: string;
  tags: string[];
  bestTimeToVisit: string;
  highlights: {label: string, image: string}[];
}