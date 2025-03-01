import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../types';
import { currentUser } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserPoints: (points: number) => void;
  addVisitedLocation: (locationId: string) => void;
  toggleSavedLocation: (locationId: string) => void;
  updatePreferences: (preferences: Partial<User['preferences']>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Mock login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would make an API call to authenticate
    // For demo purposes, we'll just check if email contains "test" and password is not empty
    if (email.includes('@') && password.length > 0) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setUser(currentUser);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Mock signup function
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // In a real app, this would make an API call to register a new user
    if (name && email.includes('@') && password.length >= 6) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Create a new user based on the mock user but with the provided details
      const newUser: User = {
        ...currentUser,
        name,
        email,
        points: 0,
        visitedLocations: [],
        savedLocations: []
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  // Update user points
  const updateUserPoints = (points: number) => {
    if (user) {
      setUser({
        ...user,
        points: user.points + points
      });
    }
  };

  // Add a location to visited locations
  const addVisitedLocation = (locationId: string) => {
    if (user && !user.visitedLocations.includes(locationId)) {
      setUser({
        ...user,
        visitedLocations: [...user.visitedLocations, locationId],
        points: user.points + 20 // Award points for visiting a new location
      });
    }
  };

  // Toggle a location in saved locations
  const toggleSavedLocation = (locationId: string) => {
    if (user) {
      const isSaved = user.savedLocations.includes(locationId);
      setUser({
        ...user,
        savedLocations: isSaved
          ? user.savedLocations.filter(id => id !== locationId)
          : [...user.savedLocations, locationId]
      });
    }
  };

  // Update user preferences
  const updatePreferences = (preferences: Partial<User['preferences']>) => {
    if (user) {
      setUser({
        ...user,
        preferences: {
          ...user.preferences,
          ...preferences
        }
      });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      signup,
      logout,
      updateUserPoints,
      addVisitedLocation,
      toggleSavedLocation,
      updatePreferences
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};