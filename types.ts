
export interface Review {
  id: number;
  reviewerName: string;
  reviewerImage: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Guide {
  id: string;
  name: string;
  email?: string;
  city: string;
  country: string;
  pricePerHour: number;
  rating: number;
  reviewCount: number;
  languages: string[];
  specialties: string[];
  bio: string;
  profileImage: string;
  coverImage: string;
  isFeatured?: boolean;
  reviews: Review[];
}

export interface Destination {
    name: string;
    image: string;
    description: string;
    popularSpots: {
        name: string;
        image: string;
    }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  role: 'user' | 'guide' | 'admin';
  avatar: string;
}

export interface ChatMessage {
  id: number;
  sender: 'user' | 'guide';
  text: string;
  timestamp: string;
}