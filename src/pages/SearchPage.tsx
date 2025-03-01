import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import AttractionCard from '../components/Attractions/AttractionCard';
import { searchAttractions } from '../data/mockData';
import { Attraction } from '../types';
import { Search, Filter, MapPin } from 'lucide-react';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: '', name: 'All Categories' },
    { id: 'historical', name: 'Historical' },
    { id: 'nature', name: 'Nature' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'adventure', name: 'Adventure' }
  ];

  useEffect(() => {
    // In a real app, this would be an API call with filters
    const results = searchAttractions(searchQuery);
    
    // Apply category filter if selected
    let filteredResults = results;
    if (selectedCategory) {
      filteredResults = results.filter(attraction => 
        attraction.category.some(cat => 
          cat.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );
    }
    
    setAttractions(filteredResults);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The search is already handled by the useEffect
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {initialQuery 
              ? `Search Results for "${initialQuery}"` 
              : initialCategory 
                ? `${categories.find(c => c.id === initialCategory)?.name || 'Category'} Attractions` 
                : 'Search Attractions'}
          </h1>
          
          <form onSubmit={handleSearch} className="flex mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for attractions, cities, or countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full border-gray-300 rounded-l-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
              />
            </div>
            <button 
              type="submit" 
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-r-md"
            >
              Search
            </button>
            <button 
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="ml-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md flex items-center"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </form>
          
          {showFilters && (
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedCategory === category.id
                        ? 'bg-teal-600 text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {attractions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map(attraction => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No attractions found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;