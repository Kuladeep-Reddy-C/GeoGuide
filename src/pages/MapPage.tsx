import React from 'react';
import Layout from '../components/Layout/Layout';
import MapView from '../components/Map/MapView';
import { attractions } from '../data/mockData';

const MapPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore Attractions</h1>
          <p className="text-lg text-gray-600">
            Discover amazing destinations around the world on our interactive map.
          </p>
        </div>
        
        <MapView attractions={attractions} />
      </div>
    </Layout>
  );
};

export default MapPage;