export interface Business {
  id: number;
  name: string;
  location: Location;
  revenue: Revenue[];
}

interface Location {
  address: string;
  city: string;
  country: string;
}

export interface Revenue {
  seq: number;
  date: string;
  value: number;
}
