import React, { useState } from 'react';
import { Car, Bus, Train, Bike } from 'lucide-react';
import { getRoutesForDestination } from '../../data/mockData';
import { Route } from '../../types';
import { useAuth } from '../../context/AuthContext';

interface RouteOptionsProps {
  attractionId: string;
}

const RouteOptions: React.FC<RouteOptionsProps> = ({ attractionId }) => {
  const { user } = useAuth();
  const [showEcoOnly, setShowEcoOnly] = useState(user?.preferences.ecoFriendly || false);
  
  const routes = getRoutesForDestination(attractionId);
  const filteredRoutes = showEcoOnly ? routes.filter(route => route.isEcoFriendly) : routes;

  const getTransportIcon = (mode: string) => {
    switch (mode.toLowerCase()) {
      case 'car':
      case 'taxi':
        return <Car className="h-5 w-5" />;
      case 'bus':
        return <Bus className="h-5 w-5" />;
      case 'train':
      case 'public transit':
        return <Train className="h-5 w-5" />;
      case 'bike':
      case 'walking':
        return <Bike className="h-5 w-5" />;
      default:
        return <Car className="h-5 w-5" />;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">Transportation Options</h4>
        <div className="flex items-center">
          <label className="flex items-center text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={showEcoOnly}
              onChange={() => setShowEcoOnly(!showEcoOnly)}
              className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            Eco-friendly only
          </label>
        </div>
      </div>

      {filteredRoutes.length > 0 ? (
        <div className="space-y-3">
          {filteredRoutes.map((route) => (
            <div 
              key={route.id} 
              className={`border rounded-md p-3 ${route.isEcoFriendly ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className={`p-1.5 rounded-full mr-2 ${route.isEcoFriendly ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                    {getTransportIcon(route.transportMode)}
                  </div>
                  <span className="font-medium">{route.transportMode}</span>
                </div>
                {route.isEcoFriendly && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Eco-Friendly
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <div className="flex justify-between">
                  <span>Distance: {route.distance} km</span>
                  <span>Duration: {route.duration} min</span>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                Carbon footprint: {route.carbonFootprint} kg CO₂
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm">No routes available for this criteria.</p>
      )}
    </div>
  );
};

export default RouteOptions;