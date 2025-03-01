import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import FeaturedAttractions from '../components/Home/FeaturedAttractions';
import Categories from '../components/Home/Categories';
import EcoTravelSection from '../components/Home/EcoTravelSection';
import { attractions } from '../data/mockData';

const HomePage: React.FC = () => {
  const featuredAttractions = attractions.slice(0, 3);

  return (
    <Layout>
      <Hero />
      <FeaturedAttractions attractions={featuredAttractions} />
      <Categories />
      <EcoTravelSection />
    </Layout>
  );
};

export default HomePage;