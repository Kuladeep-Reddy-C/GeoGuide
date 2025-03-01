import React from 'react';
import Layout from '../components/Layout/Layout';
import SignupForm from '../components/Auth/SignupForm';

const SignupPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SignupForm />
      </div>
    </Layout>
  );
};

export default SignupPage;