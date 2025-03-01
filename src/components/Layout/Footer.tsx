import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6 text-teal-400" />
              <span className="text-xl font-bold">GeoGuide</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover the world's most amazing places with GeoGuide. Your ultimate companion for travel adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-400">Home</Link>
              </li>
              <li>
                <Link to="/map" className="text-gray-400 hover:text-teal-400">Explore Map</Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-400 hover:text-teal-400">Search Attractions</Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-teal-400">My Profile</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400">Historical Sites</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400">Natural Wonders</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400">Cultural Attractions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400">Adventure Destinations</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400">Eco-Friendly Travel</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                <span className="text-gray-400">123 Travel Street, Explore City, World</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <span className="text-gray-400">info@geoguide.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} GeoGuide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;