// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail';
import SubmitRecipe from './components/SubmitRecipe';
import Professionals from './components/Professionals';
import Events from './components/Events';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/submit" element={<SubmitRecipe />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


