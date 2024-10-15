import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import BusinessSelection from './components/BusinessSelection';
import RestaurantFashion from './components/RestaurantFashion';
import Ecommerce from './components/Ecommerce';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/business-selection" element={<BusinessSelection />} />
        <Route path="/restaurant-fashion" element={<RestaurantFashion />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
      </Routes>
    </Router>
  );
}

export default App;
