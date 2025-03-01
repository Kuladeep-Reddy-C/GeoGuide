import React from 'react';
import Layout from '../components/Layout/Layout';
import UserProfile from '../components/Profile/UserProfile';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <UserProfile />
    </Layout>
  );
};

export default ProfilePage;