export interface PG {
  id: string;
  name: string;
  type: 'Boys' | 'Girls' | 'Co-living';
  price: string;
  location: string;
  description: string;
  amenities: string[];
  rating: number;
  image: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  pgProperty: string;
  roomCategory: string;
  message: string;
}
