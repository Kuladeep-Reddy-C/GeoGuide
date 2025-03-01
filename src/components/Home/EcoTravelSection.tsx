import React from 'react';
import { Leaf, TrendingDown, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcoTravelSection: React.FC = () => {
  return (
    <section className="py-12 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <Leaf className="h-4 w-4 mr-1" />
            Eco-Friendly Travel
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">Travel Sustainably</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how to reduce your carbon footprint while exploring the world's most beautiful destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <TrendingDown className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Low-Carbon Routes</h3>
            <p className="text-gray-600 mb-4">
              Choose eco-friendly transportation options that minimize your environmental impact while traveling.
            </p>
            <Link to="/eco-routes" className="text-green-600 font-medium inline-flex items-center">
              Find Routes
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Certified Attractions</h3>
            <p className="text-gray-600 mb-4">
              Visit attractions that are committed to sustainable practices and environmental conservation.
            </p>
            <Link to="/eco-attractions" className="text-green-600 font-medium inline-flex items-center">
              Explore Attractions
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn Green Points</h3>
            <p className="text-gray-600 mb-4">
              Collect points for eco-friendly travel choices and contribute to global conservation efforts.
            </p>
            <Link to="/green-points" className="text-green-600 font-medium inline-flex items-center">
              Learn More
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Eco-Travel Community</h3>
              <p className="text-gray-600 mb-4">
                Connect with like-minded travelers, share sustainable travel tips, and make a positive impact on the planet.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/signup" 
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition duration-300"
                >
                  Sign Up Now
                </Link>
                <Link 
                  to="/eco-pledge" 
                  className="bg-white border border-green-600 text-green-600 hover:bg-green-50 font-medium py-2 px-6 rounded-md shadow-sm transition duration-300"
                >
                  Take the Eco Pledge
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-green-100 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">Did You Know?</span>
                </div>
                <p className="text-sm text-gray-700">
                  Choosing eco-friendly transportation can reduce your travel carbon footprint by up to 90% compared to conventional options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoTravelSection;