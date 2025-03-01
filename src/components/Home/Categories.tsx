import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Mountain, Building, Compass, Leaf } from 'lucide-react';

const Categories: React.FC = () => {
  const categories = [
    {
      id: 'historical',
      name: 'Historical',
      icon: <Landmark className="h-8 w-8 text-amber-600" />,
      description: 'Explore ancient ruins, monuments, and historical landmarks',
      color: 'bg-amber-100 border-amber-200',
      textColor: 'text-amber-800',
      count: 42
    },
    {
      id: 'nature',
      name: 'Nature',
      icon: <Mountain className="h-8 w-8 text-emerald-600" />,
      description: 'Discover breathtaking landscapes, parks, and natural wonders',
      color: 'bg-emerald-100 border-emerald-200',
      textColor: 'text-emerald-800',
      count: 38
    },
    {
      id: 'architecture',
      name: 'Architecture',
      icon: <Building className="h-8 w-8 text-blue-600" />,
      description: 'Marvel at stunning buildings, bridges, and urban design',
      color: 'bg-blue-100 border-blue-200',
      textColor: 'text-blue-800',
      count: 29
    },
    {
      id: 'adventure',
      name: 'Adventure',
      icon: <Compass className="h-8 w-8 text-red-600" />,
      description: 'Seek thrilling experiences and adrenaline-pumping activities',
      color: 'bg-red-100 border-red-200',
      textColor: 'text-red-800',
      count: 24
    },
    {
      id: 'eco',
      name: 'Eco-Friendly',
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      description: 'Travel sustainably with low-carbon footprint options',
      color: 'bg-green-100 border-green-200',
      textColor: 'text-green-800',
      count: 18
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find attractions based on your interests and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/search?category=${category.id}`}
              className={`flex flex-col p-6 rounded-lg border ${category.color} hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${category.textColor}`}>{category.name}</h3>
                  <span className="text-sm text-gray-500">{category.count} attractions</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="mt-auto">
                <span className={`inline-flex items-center font-medium ${category.textColor}`}>
                  Explore {category.name}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;