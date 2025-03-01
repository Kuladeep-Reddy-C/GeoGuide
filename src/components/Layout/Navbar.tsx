import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Search, Menu, X, MapPin, User as UserIcon, LogOut, Home, MessageSquare } from 'lucide-react';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-teal-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8" />
              <span className="text-xl font-bold">GeoGuide</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search attractions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-1 px-3 pr-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search className="h-5 w-5" />
              </button>
            </form>

            <Link to="/" className="hover:text-teal-200 flex items-center space-x-1">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            
            <Link to="/map" className="hover:text-teal-200 flex items-center space-x-1">
              <MapPin className="h-5 w-5" />
              <span>Map</span>
            </Link>

            <Link to="/ask-queries" className="hover:text-teal-200 flex items-center space-x-1">
              <MessageSquare className="h-5 w-5" />
              <span>Ask Queries</span>
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/profile" className="hover:text-teal-200 flex items-center space-x-1">
                  <UserIcon className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="hover:text-teal-200 flex items-center space-x-1"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="bg-white text-teal-600 px-4 py-2 rounded-md font-medium hover:bg-teal-50"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-teal-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-teal-700 pb-4 px-4">
          <form onSubmit={handleSearch} className="pt-4 pb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search attractions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-3 pr-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          <div className="space-y-2">
            <Link to="/ask-queries" className="block px-3 py-2 rounded-md text-white hover:bg-teal-600 flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>Ask Queries</span>
            </Link>

            <Link to="/" className="block px-3 py-2 rounded-md text-white hover:bg-teal-600 flex items-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            
            <Link to="/map" className="block px-3 py-2 rounded-md text-white hover:bg-teal-600 flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Map</span>
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/profile" className="block px-3 py-2 rounded-md text-white hover:bg-teal-600 flex items-center space-x-2">
                  <UserIcon className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left block px-3 py-2 rounded-md text-white hover:bg-teal-600 flex items-center space-x-2"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/login" className="block px-3 py-2 rounded-md bg-white text-teal-600 font-medium hover:bg-teal-50 text-center">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;