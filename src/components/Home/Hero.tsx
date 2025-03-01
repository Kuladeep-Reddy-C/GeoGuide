import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <MapPin className="h-16 w-16 text-teal-400 mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Discover Amazing Places
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Explore the world's most breathtaking destinations with GeoGuide. Your journey begins here.
        </p>
        
        <form onSubmit={handleSearch} className="w-full max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for destinations, attractions, or cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-lg"
            />
            <button 
              type="submit" 
              className="absolute right-0 top-0 h-full px-4 rounded-r-full bg-teal-500 text-white hover:bg-teal-600 focus:outline-none"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => navigate('/map')}
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            Explore Map
          </button>
          <button 
            onClick={() => navigate('/attractions')}
            className="bg-white hover:bg-gray-100 text-teal-600 font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            Popular Attractions
          </button>
          <button 
            onClick={() => navigate('/weather')}
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            Check Weather
          </button>
          <button 
            onClick={() => navigate('/translator')}
            className="bg-white hover:bg-gray-100 text-teal-600 font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
            >Translator</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;