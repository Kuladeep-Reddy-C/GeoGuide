import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Heart } from 'lucide-react';
import { Attraction } from '../../types';
import { useAuth } from '../../context/AuthContext';

interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  const { user, isAuthenticated, toggleSavedLocation } = useAuth();
  
  const isSaved = user?.savedLocations.includes(attraction.id) || false;
  const isVisited = user?.visitedLocations.includes(attraction.id) || false;

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAuthenticated) {
      toggleSavedLocation(attraction.id);
    }
  };

  return (
    <Link 
      to={`/attraction/${attraction.id}`}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={attraction.image} 
          alt={attraction.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {attraction.ecoFriendly && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            Eco-Friendly
          </div>
        )}
        {isAuthenticated && (
          <button 
            onClick={handleSaveToggle}
            className={`absolute top-3 right-3 p-2 rounded-full ${isSaved ? 'bg-red-500 text-white' : 'bg-white text-gray-600'}`}
          >
            <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        )}
        {isVisited && (
          <div className="absolute bottom-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
            Visited
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{attraction.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-700">{attraction.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{attraction.location.city}, {attraction.location.country}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{attraction.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-teal-600 font-medium">
            {attraction.price.currency} {attraction.price.adult}
          </span>
          <div className="flex flex-wrap gap-1">
            {attraction.category.slice(0, 2).map((cat, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AttractionCard;