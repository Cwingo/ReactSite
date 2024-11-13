import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      {/* Show Hero only on the home page (/) */}
      {location.pathname === '/' && <Hero />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
