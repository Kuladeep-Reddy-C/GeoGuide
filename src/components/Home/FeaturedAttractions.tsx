import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Attraction } from '../../types';

interface FeaturedAttractionsProps {
  attractions: Attraction[];
}

const FeaturedAttractions: React.FC<FeaturedAttractionsProps> = ({ attractions }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Attractions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover some of the world's most iconic destinations and start planning your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <Link 
              key={attraction.id} 
              to={`/attraction/${attraction.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {attraction.ecoFriendly && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Eco-Friendly
                  </div>
                )}
              </div>
              <div className="p-5">
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
                <p className="text-gray-600 mb-4 line-clamp-2">{attraction.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-600 font-medium">
                    {attraction.price.currency} {attraction.price.adult}
                  </span>
                  <span className="text-sm text-gray-500">
                    {attraction.category[0]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/attractions" 
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-md shadow-md transition duration-300"
          >
            View All Attractions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAttractions;