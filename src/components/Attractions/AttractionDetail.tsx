import React from 'react';
import { Star, MapPin, Clock, DollarSign, Calendar, Heart, Share2, Leaf } from 'lucide-react';
import { Attraction } from '../../types';
import { useAuth } from '../../context/AuthContext';
import WeatherWidget from '../Weather/WeatherWidget';
import RouteOptions from '../Routes/RouteOptions';

interface AttractionDetailProps {
  attraction: Attraction;
  weather: any;
}

const AttractionDetail: React.FC<AttractionDetailProps> = ({ attraction, weather }) => {
  const { user, isAuthenticated, toggleSavedLocation, addVisitedLocation } = useAuth();
  
  const isSaved = user?.savedLocations.includes(attraction.id) || false;
  const isVisited = user?.visitedLocations.includes(attraction.id) || false;

  const handleSaveToggle = () => {
    if (isAuthenticated) {
      toggleSavedLocation(attraction.id);
    }
  };

  const handleMarkVisited = () => {
    if (isAuthenticated && !isVisited) {
      addVisitedLocation(attraction.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-96">
        <img 
          src={attraction.image} 
          alt={attraction.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{attraction.name}</h1>
          <div className="flex items-center mb-2">
            <MapPin className="h-5 w-5 mr-1" />
            <span>{attraction.location.city}, {attraction.location.country}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
              <span>{attraction.rating} ({attraction.reviews.length} reviews)</span>
            </div>
            {attraction.ecoFriendly && (
              <div className="flex items-center">
                <Leaf className="h-5 w-5 text-green-400 mr-1" />
                <span>Eco-Friendly</span>
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          {isAuthenticated && (
            <>
              <button 
                onClick={handleSaveToggle}
                className={`p-2 rounded-full ${isSaved ? 'bg-red-500 text-white' : 'bg-white text-gray-700'}`}
              >
                <Heart className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 rounded-full bg-white text-gray-700">
                <Share2 className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-gray-700 mb-4">{attraction.longDescription}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-teal-600 mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Opening Hours</h3>
                    <p className="text-gray-600">Monday: {attraction.openingHours.monday}</p>
                    <p className="text-gray-600">Tuesday: {attraction.openingHours.tuesday}</p>
                    <p className="text-gray-600">Wednesday: {attraction.openingHours.wednesday}</p>
                    <p className="text-gray-600">Thursday: {attraction.openingHours.thursday}</p>
                    <p className="text-gray-600">Friday: {attraction.openingHours.friday}</p>
                    <p className="text-gray-600">Saturday: {attraction.openingHours.saturday}</p>
                    <p className="text-gray-600">Sunday: {attraction.openingHours.sunday}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 text-teal-600 mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Admission</h3>
                    <p className="text-gray-600">Adult: {attraction.price.currency} {attraction.price.adult}</p>
                    <p className="text-gray-600">Child: {attraction.price.currency} {attraction.price.child}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-teal-600 mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Best Time to Visit</h3>
                    <p className="text-gray-600">Weekday mornings for fewer crowds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-teal-600 mt-0.5 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">{attraction.location.address}</p>
                    <p className="text-gray-600">{attraction.location.city}, {attraction.location.country}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              {attraction.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4 mb-4 last:border-0">
                  <div className="flex items-start">
                    <img 
                      src={review.userAvatar} 
                      alt={review.userName} 
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <div className="flex items-center mb-1">
                        <h3 className="font-medium text-gray-900 mr-2">{review.userName}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/3">
            {weather && <WeatherWidget weather={weather} />}

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold mb-3">Getting There</h3>
              <RouteOptions attractionId={attraction.id} />
            </div>

            {isAuthenticated && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold mb-3">Your Visit</h3>
                {isVisited ? (
                  <div className="bg-blue-100 text-blue-800 p-3 rounded-md mb-4">
                    <p className="font-medium">You've visited this attraction!</p>
                    <p className="text-sm">Added to your travel history</p>
                  </div>
                ) : (
                  <button 
                    onClick={handleMarkVisited}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md mb-4"
                  >
                    Mark as Visited
                  </button>
                )}
                <button 
                  onClick={handleSaveToggle}
                  className={`w-full ${isSaved ? 'bg-red-100 text-red-800 hover:bg-red-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} font-medium py-2 px-4 rounded-md flex items-center justify-center`}
                >
                  <Heart className={`h-5 w-5 mr-2 ${isSaved ? 'fill-current' : ''}`} />
                  {isSaved ? 'Saved to Favorites' : 'Save to Favorites'}
                </button>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {attraction.category.map((cat, index) => (
                  <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionDetail;