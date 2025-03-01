import { Attraction, User, WeatherForecast, Route, Review } from '../types';

// Mock User Data
export const currentUser: User = {
  id: 'user1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  points: 1980,
  visitedLocations: ['attraction1', 'attraction3', 'attraction5'],
  savedLocations: ['attraction2', 'attraction4'],
  preferences: {
    ecoFriendly: true,
    preferredCategories: ['Historical', 'Nature']
  }
};

// Mock Reviews
const reviews: Review[] = [
  {
    id: 'review1',
    userId: 'user2',
    userName: 'Sarah Miller',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
    rating: 4.5,
    comment: 'Absolutely stunning place! The architecture is breathtaking and the history is fascinating.',
    date: '2023-05-15'
  },
  {
    id: 'review2',
    userId: 'user3',
    userName: 'Michael Chen',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
    rating: 5,
    comment: 'One of the best tourist attractions I\'ve ever visited. Highly recommend spending a full day here.',
    date: '2023-06-22'
  },
  {
    id: 'review3',
    userId: 'user4',
    userName: 'Emma Wilson',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
    rating: 3.5,
    comment: 'Beautiful place but very crowded. Try to visit during off-peak hours.',
    date: '2023-07-10'
  }
];

// Mock Attractions Data
export const attractions: Attraction[] = [
  {
    id: 'attraction1',
    name: 'Eiffel Tower',
    description: 'Iconic iron tower in Paris with panoramic city views',
    longDescription: 'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed from 1887 to 1889 as the entrance to the 1889 World\'s Fair, it was initially criticized by some of France\'s leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognizable structures in the world.',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/170801124318-eiffel-tower-guide-aerial-2.jpg?q=w_1110,c_fill/f_webp',
    location: {
      lat: 48.8584,
      lng: 2.2945,
      address: 'Champ de Mars, 5 Avenue Anatole France',
      city: 'Paris',
      country: 'France'
    },
    rating: 4.7,
    reviews: reviews,
    category: ['Landmark', 'Historical'],
    openingHours: {
      monday: '9:00 AM - 11:45 PM',
      tuesday: '9:00 AM - 11:45 PM',
      wednesday: '9:00 AM - 11:45 PM',
      thursday: '9:00 AM - 11:45 PM',
      friday: '9:00 AM - 11:45 PM',
      saturday: '9:00 AM - 11:45 PM',
      sunday: '9:00 AM - 11:45 PM'
    },
    price: {
      adult: 25,
      child: 12.5,
      currency: 'EUR'
    },
    ecoFriendly: true
  },
  {
    id: 'attraction2',
    name: 'Colosseum',
    description: 'Ancient Roman amphitheater in the center of Rome',
    longDescription: 'The Colosseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff, and brick-faced concrete, it was the largest amphitheatre ever built at the time and held 50,000 to 80,000 spectators. The Colosseum is situated just east of the Roman Forum. Construction began under the emperor Vespasian in AD 72 and was completed in AD 80 under his successor and heir, Titus.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: {
      lat: 41.8902,
      lng: 12.4922,
      address: 'Piazza del Colosseo, 1',
      city: 'Rome',
      country: 'Italy'
    },
    rating: 4.8,
    reviews: reviews,
    category: ['Historical', 'Architecture'],
    openingHours: {
      monday: '8:30 AM - 7:00 PM',
      tuesday: '8:30 AM - 7:00 PM',
      wednesday: '8:30 AM - 7:00 PM',
      thursday: '8:30 AM - 7:00 PM',
      friday: '8:30 AM - 7:00 PM',
      saturday: '8:30 AM - 7:00 PM',
      sunday: '8:30 AM - 7:00 PM'
    },
    price: {
      adult: 16,
      child: 8,
      currency: 'EUR'
    },
    ecoFriendly: true
  },
  {
    id: 'attraction3',
    name: 'Grand Canyon',
    description: 'Steep-sided canyon carved by the Colorado River in Arizona',
    longDescription: 'The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide and attains a depth of over a mile (6,093 feet or 1,857 meters). The canyon and adjacent rim are contained within Grand Canyon National Park, the Kaibab National Forest, Grand Canyon–Parashant National Monument, the Hualapai Indian Reservation, the Havasupai Indian Reservation and the Navajo Nation.',
    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: {
      lat: 36.0544,
      lng: -112.2401,
      address: 'Grand Canyon National Park',
      city: 'Arizona',
      country: 'USA'
    },
    rating: 4.9,
    reviews: reviews,
    category: ['Nature', 'National Park'],
    openingHours: {
      monday: 'Open 24 hours',
      tuesday: 'Open 24 hours',
      wednesday: 'Open 24 hours',
      thursday: 'Open 24 hours',
      friday: 'Open 24 hours',
      saturday: 'Open 24 hours',
      sunday: 'Open 24 hours'
    },
    price: {
      adult: 35,
      child: 0,
      currency: 'USD'
    },
    ecoFriendly: true
  },
  {
    id: 'attraction4',
    name: 'Machu Picchu',
    description: '15th-century Inca citadel situated on a mountain ridge',
    longDescription: 'Machu Picchu is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-metre (7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometres (50 mi) northwest of Cuzco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate.',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: {
      lat: -13.1631,
      lng: -72.5450,
      address: 'Aguas Calientes',
      city: 'Cusco Region',
      country: 'Peru'
    },
    rating: 4.9,
    reviews: reviews,
    category: ['Historical', 'Archaeological', 'Nature'],
    openingHours: {
      monday: '6:00 AM - 5:30 PM',
      tuesday: '6:00 AM - 5:30 PM',
      wednesday: '6:00 AM - 5:30 PM',
      thursday: '6:00 AM - 5:30 PM',
      friday: '6:00 AM - 5:30 PM',
      saturday: '6:00 AM - 5:30 PM',
      sunday: '6:00 AM - 5:30 PM'
    },
    price: {
      adult: 152,
      child: 70,
      currency: 'PEN'
    },
    ecoFriendly: true
  },
  {
    id: 'attraction5',
    name: 'Sydney Opera House',
    description: 'Multi-venue performing arts center in Sydney, Australia',
    longDescription: 'The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour located in Sydney, New South Wales, Australia. It is one of the 20th century\'s most famous and distinctive buildings. Designed by Danish architect Jørn Utzon, but completed by an Australian architectural team headed by Peter Hall, the building was formally opened on 20 October 1973 after a gestation beginning with Utzon\'s 1957 selection as winner of an international design competition.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: {
      lat: -33.8568,
      lng: 151.2153,
      address: 'Bennelong Point',
      city: 'Sydney',
      country: 'Australia'
    },
    rating: 4.7,
    reviews: reviews,
    category: ['Architecture', 'Cultural'],
    openingHours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: '9:00 AM - 5:00 PM'
    },
    price: {
      adult: 42,
      child: 22,
      currency: 'AUD'
    },
    ecoFriendly: false
  },
  {
    id: 'attraction6',
    name: 'Great Wall of China',
    description: 'Ancient fortification system built across the northern borders of China',
    longDescription: 'The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe. Several walls were being built as early as the 7th century BC; these were later joined together and made bigger and stronger, are collectively referred to as the Great Wall.',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    location: {
      lat: 40.4319,
      lng: 116.5704,
      address: 'Huairou District',
      city: 'Beijing',
      country: 'China'
    },
    rating: 4.8,
    reviews: reviews,
    category: ['Historical', 'Architecture', 'Landmark'],
    openingHours: {
      monday: '7:30 AM - 5:30 PM',
      tuesday: '7:30 AM - 5:30 PM',
      wednesday: '7:30 AM - 5:30 PM',
      thursday: '7:30 AM - 5:30 PM',
      friday: '7:30 AM - 5:30 PM',
      saturday: '7:30 AM - 5:30 PM',
      sunday: '7:30 AM - 5:30 PM'
    },
    price: {
      adult: 40,
      child: 20,
      currency: 'CNY'
    },
    ecoFriendly: true
  }
];

// Mock Weather Data
export const weatherForecasts: WeatherForecast[] = [
  {
    location: 'Paris',
    current: {
      temp: 22,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 65,
      windSpeed: 12
    },
    forecast: [
      {
        date: '2023-08-01',
        maxTemp: 24,
        minTemp: 18,
        condition: 'Sunny',
        icon: 'sun'
      },
      {
        date: '2023-08-02',
        maxTemp: 26,
        minTemp: 19,
        condition: 'Partly Cloudy',
        icon: 'cloud-sun'
      },
      {
        date: '2023-08-03',
        maxTemp: 23,
        minTemp: 17,
        condition: 'Rain',
        icon: 'cloud-rain'
      },
      {
        date: '2023-08-04',
        maxTemp: 21,
        minTemp: 16,
        condition: 'Cloudy',
        icon: 'cloud'
      },
      {
        date: '2023-08-05',
        maxTemp: 22,
        minTemp: 17,
        condition: 'Sunny',
        icon: 'sun'
      }
    ]
  },
  {
    location: 'Rome',
    current: {
      temp: 28,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 55,
      windSpeed: 8
    },
    forecast: [
      {
        date: '2023-08-01',
        maxTemp: 30,
        minTemp: 22,
        condition: 'Sunny',
        icon: 'sun'
      },
      {
        date: '2023-08-02',
        maxTemp: 31,
        minTemp: 23,
        condition: 'Sunny',
        icon: 'sun'
      },
      {
        date: '2023-08-03',
        maxTemp: 29,
        minTemp: 21,
        condition: 'Partly Cloudy',
        icon: 'cloud-sun'
      },
      {
        date: '2023-08-04',
        maxTemp: 28,
        minTemp: 20,
        condition: 'Partly Cloudy',
        icon: 'cloud-sun'
      },
      {
        date: '2023-08-05',
        maxTemp: 27,
        minTemp: 19,
        condition: 'Cloudy',
        icon: 'cloud'
      }
    ]
  },
  {
    location: 'Arizona',
    current: {
      temp: 35,
      condition: 'Sunny',
      icon: 'sun',
      humidity: 20,
      windSpeed: 15
    },
    forecast: [
      {
        date: '2023-08-01',
        maxTemp: 37,
        minTemp: 25,
        condition: 'Sunny',
        icon: 'sun'
      },
      {
        date: '2023-08-02',
        maxTemp: 38,
        minTemp: 26,
        condition: 'Sunny',
        icon: 'sun'
      },
      {
        date: '2023-08-03',
        maxTemp: 36,
        minTemp: 24,
        condition: 'Sunny',
        icon: 'sun'
      },
      {
        date: '2023-08-04',
        maxTemp: 34,
        minTemp: 23,
        condition: 'Partly Cloudy',
        icon: 'cloud-sun'
      },
      {
        date: '2023-08-05',
        maxTemp: 33,
        minTemp: 22,
        condition: 'Partly Cloudy',
        icon: 'cloud-sun'
      }
    ]
  },
  {
    location: 'Cusco Region',
    current: {
      temp: 15,
      condition: 'Partly Cloudy',
      icon: 'cloud-sun',
      humidity: 75,
      windSpeed: 10
    },
    forecast: [
      {
        date: '2023-08-01',
        maxTemp: 17,
        minTemp: 8,
        condition: 'Partly Cloudy',
        icon: 'cloud-sun'
      },
      {
        date: '2023-08-02',
        maxTemp: 18,
        minTemp: 9,
        condition: 'Sunny',
        icon: 'sun'
      },
      {
        date: '2023-08-03',
        maxTemp: 16,
        minTemp: 7,
        condition: 'Rain',
        icon: 'cloud-rain'
      },
      {
        date: '2023-08-04',
        maxTemp: 15,
        minTemp: 6,
        condition: 'Rain',
        icon: 'cloud-rain'
      },
      {
        date: '2023-08-05',
        maxTemp: 17,
        minTemp: 8,
        condition: 'Partly Cloudy',
        icon: 'cloud-sun'
      }
    ]
  },
  {
    location: 'Sydney',
    current: {
      temp: 18,
      condition: 'Cloudy',
      icon: 'cloud',
      humidity: 80,
      windSpeed: 18
    },
    forecast: [
      {
        date: '2023-08-01',
        maxTemp: 20,
        minTemp: 14,
        condition: 'Cloudy',
        icon: 'cloud'
      },
      {
        date: '2023-08-02',
        maxTemp: 21,
        minTemp: 15,
        condition: 'Partly Cloudy',
        icon: 'cloud-sun'
      },
      {
        date: '2023-08-03',
        maxTemp: 19,
        minTemp: 13,
        condition: 'Rain',
        icon: 'cloud-rain'
      },
      {
        date: '2023-08-04',
        maxTemp: 18,
        minTemp: 12,
        condition: 'Rain',
        icon: 'cloud-rain'
      },
      {
        date: '2023-08-05',
        maxTemp: 20,
        minTemp: 14,
        condition: 'Partly Cloudy',
        icon: 'cloud-sun'
      }
    ]
  },
  {
    location: 'Beijing',
    current: {
      temp: 25,
      condition: 'Partly Cloudy',
      icon: 'cloud-sun',
      humidity: 60,
      windSpeed: 14
    },
    forecast: [
      {
        date: '2023-08-01',
        maxTemp: 27,
        minTemp: 20,
        condition: 'Partly Cloudy',
        icon: 'cloud-sun'
      },
      {
        date: '2023-08-02',
        maxTemp: 28,
        minTemp: 21,
        condition: 'Sunny',
        icon: 'sun'
      },
      {
        date: '2023-08-03',
        maxTemp: 26,
        minTemp: 19,
        condition: 'Cloudy',
        icon: 'cloud'
      },
      {
        date: '2023-08-04',
        maxTemp: 25,
        minTemp: 18,
        condition: 'Rain',
        icon: 'cloud-rain'
      },
      {
        date: '2023-08-05',
        maxTemp: 24,
        minTemp: 17,
        condition: 'Cloudy',
        icon: 'cloud'
      }
    ]
  }
];

// Mock Routes Data
export const routes: Route[] = [
  {
    id: 'route1',
    name: 'Paris City Center to Eiffel Tower',
    startPoint: {
      name: 'Paris City Center',
      lat: 48.8566,
      lng: 2.3522
    },
    endPoint: {
      name: 'Eiffel Tower',
      lat: 48.8584,
      lng: 2.2945
    },
    distance: 5.2,
    duration: 25,
    carbonFootprint: 0.5,
    isEcoFriendly: true,
    transportMode: 'Public Transit'
  },
  {
    id: 'route2',
    name: 'Paris City Center to Eiffel Tower (Taxi)',
    startPoint: {
      name: 'Paris City Center',
      lat: 48.8566,
      lng: 2.3522
    },
    endPoint: {
      name: 'Eiffel Tower',
      lat: 48.8584,
      lng: 2.2945
    },
    distance: 5.2,
    duration: 15,
    carbonFootprint: 2.1,
    isEcoFriendly: false,
    transportMode: 'Taxi'
  },
  {
    id: 'route3',
    name: 'Rome City Center to Colosseum',
    startPoint: {
      name: 'Rome City Center',
      lat: 41.9028,
      lng: 12.4964
    },
    endPoint: {
      name: 'Colosseum',
      lat: 41.8902,
      lng: 12.4922
    },
    distance: 2.1,
    duration: 12,
    carbonFootprint: 0.2,
    isEcoFriendly: true,
    transportMode: 'Walking'
  },
  {
    id: 'route4',
    name: 'Rome City Center to Colosseum (Bus)',
    startPoint: {
      name: 'Rome City Center',
      lat: 41.9028,
      lng: 12.4964
    },
    endPoint: {
      name: 'Colosseum',
      lat: 41.8902,
      lng: 12.4922
    },
    distance: 2.1,
    duration: 8,
    carbonFootprint: 0.8,
    isEcoFriendly: true,
    transportMode: 'Bus'
  }
];

// Helper function to get weather for a location
export const getWeatherForLocation = (location: string): WeatherForecast | undefined => {
  return weatherForecasts.find(forecast => 
    forecast.location.toLowerCase() === location.toLowerCase() ||
    weatherForecasts.find(w => w.location.includes(location))
  );
};

// Helper function to get routes for a destination
export const getRoutesForDestination = (destinationId: string): Route[] => {
  const destination = attractions.find(attr => attr.id === destinationId);
  if (!destination) return [];
  
  // In a real app, this would filter routes based on the destination
  // For mock data, we'll just return all routes for now
  return routes;
};

// Helper function to get attraction by ID
export const getAttractionById = (id: string): Attraction | undefined => {
  return attractions.find(attr => attr.id === id);
};

// Helper function to search attractions
export const searchAttractions = (query: string): Attraction[] => {
  if (!query) return attractions;
  
  const lowerQuery = query.toLowerCase();
  return attractions.filter(attr => 
    attr.name.toLowerCase().includes(lowerQuery) ||
    attr.description.toLowerCase().includes(lowerQuery) ||
    attr.location.city.toLowerCase().includes(lowerQuery) ||
    attr.location.country.toLowerCase().includes(lowerQuery) ||
    attr.category.some(cat => cat.toLowerCase().includes(lowerQuery))
  );
};