import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getAttractionById } from '../../data/mockData';
import { Award, MapPin, Heart, Settings, Leaf } from 'lucide-react';
import AttractionCard from '../Attractions/AttractionCard';

const UserProfile: React.FC = () => {
  const { user, updatePreferences } = useAuth();
  const [activeTab, setActiveTab] = useState('visited');
  
  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Please log in to view your profile.</p>
      </div>
    );
  }

  const visitedAttractions = user.visitedLocations.map(id => getAttractionById(id)).filter(Boolean);
  const savedAttractions = user.savedLocations.map(id => getAttractionById(id)).filter(Boolean);

  const toggleEcoPreference = () => {
    updatePreferences({
      ecoFriendly: !user.preferences.ecoFriendly
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-48 relative">
          <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 px-8 flex">
            <div className="bg-white rounded-full p-1 shadow-lg">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="pt-16 px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full">
                <Award className="h-5 w-5 mr-2" />
                <span className="font-medium">{user.points} Points</span>
              </div>
              <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="mt-8 border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('visited')}
                className={`pb-4 font-medium text-sm flex items-center ${
                  activeTab === 'visited'
                    ? 'border-b-2 border-teal-500 text-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <MapPin className="h-5 w-5 mr-2" />
                Visited Places ({user.visitedLocations.length})
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`pb-4 font-medium text-sm flex items-center ${
                  activeTab === 'saved'
                    ? 'border-b-2 border-teal-500 text-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Heart className="h-5 w-5 mr-2" />
                Saved Places ({user.savedLocations.length})
              </button>
              <button
                onClick={() => setActiveTab('preferences')}
                className={`pb-4 font-medium text-sm flex items-center ${
                  activeTab === 'preferences'
                    ? 'border-b-2 border-teal-500 text-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Settings className="h-5 w-5 mr-2" />
                Preferences
              </button>
            </div>
          </div>
          
          <div className="mt-6">
            {activeTab === 'visited' && (
              <>
                {visitedAttractions.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visitedAttractions.map(attraction => (
                      <AttractionCard key={attraction?.id} attraction={attraction!} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No visited places yet</h3>
                    <p className="text-gray-600">
                      Start exploring and mark attractions as visited to track your journey.
                    </p>
                  </div>
                )}
              </>
            )}
            
            {activeTab === 'saved' && (
              <>
                {savedAttractions.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedAttractions.map(attraction => (
                      <AttractionCard key={attraction?.id} attraction={attraction!} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No saved places yet</h3>
                    <p className="text-gray-600">
                      Save attractions to your favorites for easy access later.
                    </p>
                  </div>
                )}
              </>
            )}
            
            {activeTab === 'preferences' && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Travel Preferences</h3>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Leaf className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Eco-Friendly Travel</h4>
                        <p className="text-sm text-gray-600">Prioritize low-carbon transportation options</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={user.preferences.ecoFriendly}
                        onChange={toggleEcoPreference}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                    </label>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Preferred Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Historical', 'Nature', 'Architecture', 'Cultural', 'Adventure'].map((category) => (
                      <label key={category} className="inline-flex items-center">
                        <input 
                          type="checkbox"
                          checked={user.preferences.preferredCategories.includes(category)}
                          className="rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                        />
                        <span className="ml-2 text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md">
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;