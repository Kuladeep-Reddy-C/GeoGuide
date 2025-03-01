export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  points: number;
  visitedLocations: string[];
  savedLocations: string[];
  preferences: {
    ecoFriendly: boolean;
    preferredCategories: string[];
  };
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  location: {
    lat: number;
    lng: number;
    address: string;
    city: string;
    country: string;
  };
  rating: number;
  reviews: Review[];
  category: string[];
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  price: {
    adult: number;
    child: number;
    currency: string;
  };
  ecoFriendly: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface WeatherForecast {
  location: string;
  current: {
    temp: number;
    condition: string;
    icon: string;
    humidity: number;
    windSpeed: number;
  };
  forecast: {
    date: string;
    maxTemp: number;
    minTemp: number;
    condition: string;
    icon: string;
  }[];
}

export interface Route {
  id: string;
  name: string;
  startPoint: {
    name: string;
    lat: number;
    lng: number;
  };
  endPoint: {
    name: string;
    lat: number;
    lng: number;
  };
  distance: number;
  duration: number;
  carbonFootprint: number;
  isEcoFriendly: boolean;
  transportMode: string;
}