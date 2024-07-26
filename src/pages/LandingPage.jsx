import React from 'react';
import Layout from '../layouts/Layout';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const LandingPage = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      {/* Add more sections here */}
    </Layout>
  );
};

export default LandingPage;
