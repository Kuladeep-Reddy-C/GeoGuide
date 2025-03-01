import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import AttractionDetail from '../components/Attractions/AttractionDetail';
import { getAttractionById, getWeatherForLocation } from '../data/mockData';
import { Attraction, WeatherForecast } from '../types';

const AttractionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [attraction, setAttraction] = useState<Attraction | null>(null);
  const [weather, setWeather] = useState<WeatherForecast | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // In a real app, this would be an API call
      const fetchedAttraction = getAttractionById(id);
      
      if (fetchedAttraction) {
        setAttraction(fetchedAttraction);
        
        // Get weather for the attraction's location
        const fetchedWeather = getWeatherForLocation(fetchedAttraction.location.city);
        if (fetchedWeather) {
          setWeather(fetchedWeather);
        }
      }
      
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-gray-600">Loading attraction details...</p>
        </div>
      </Layout>
    );
  }

  if (!attraction) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Attraction Not Found</h2>
          <p className="text-gray-600 mb-8">The attraction you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate(-1)}
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-md"
          >
            Go Back
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AttractionDetail attraction={attraction} weather={weather} />
      </div>
    </Layout>
  );
};

export default AttractionDetailPage;