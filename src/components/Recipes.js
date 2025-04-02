// src/components/Recipes.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaClock, FaUtensils, FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', label: 'All Recipes' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'lunch', label: 'Lunch' },
    { id: 'dinner', label: 'Dinner' },
    { id: 'dessert', label: 'Dessert' },
    { id: 'snacks', label: 'Snacks' },
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'vegan', label: 'Vegan' }
  ];

  const sortOptions = [
    { id: 'popular', label: 'Most Popular' },
    { id: 'newest', label: 'Newest First' },
    { id: 'rating', label: 'Highest Rated' },
    { id: 'time', label: 'Quickest to Make' }
  ];

  // Mock data for recipes
  const recipes = [
    {
      id: 1,
      title: 'Classic Chocolate Chip Cookies',
      category: 'dessert',
      image: '/images/recipes/cookies.jpg',
      time: '30 mins',
      difficulty: 'easy',
      rating: 4.8,
      calories: 150
    },
    {
      id: 2,
      title: 'Mediterranean Quinoa Bowl',
      category: 'lunch',
      image: '/images/recipes/quinoa-bowl.jpg',
      time: '25 mins',
      difficulty: 'medium',
      rating: 4.6,
      calories: 450
    },
    {
      id: 3,
      title: 'Spicy Thai Curry',
      category: 'dinner',
      image: '/images/recipes/thai-curry.jpg',
      time: '45 mins',
      difficulty: 'medium',
      rating: 4.9,
      calories: 550
    },
    // Add more mock recipes as needed
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      case 'rating':
        return b.rating - a.rating;
      case 'time':
        return parseInt(a.time) - parseInt(b.time);
      default:
        return 0;
    }
  });

  return (
    <div className="recipes-page">
      {/* Hero Section */}
      <section className="recipes-hero py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >
            <h1 className="display-4 fw-bold mb-4">Discover Amazing Recipes</h1>
            <p className="lead">
              Explore our collection of delicious recipes from around the world.
              Find inspiration for your next meal!
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Search and Filter Section */}
      <section className="search-filter py-4 bg-light">
        <Container>
          <Row className="g-3">
            <Col md={6} lg={4}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </Form.Group>
            </Col>
            <Col md={6} lg={4}>
              <Form.Group>
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="category-select"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} lg={4}>
              <Form.Group>
                <Form.Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Recipes Grid */}
      <section className="recipes-grid py-5">
        <Container>
          <AnimatePresence>
            <Row>
              {sortedRecipes.map((recipe, index) => (
                <Col md={6} lg={4} key={recipe.id} className="mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="recipe-card"
                    whileHover={{ y: -10 }}
                  >
                    <Link to={`/recipe/${recipe.id}`} className="text-decoration-none">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="recipe-image"
                      />
                      <div className="recipe-content">
                        <h3 className="h5 mb-2">{recipe.title}</h3>
                        <div className="recipe-meta">
                          <span className="me-3">
                            <FaClock className="me-1" />
                            {recipe.time}
                          </span>
                          <span className="me-3">
                            <FaUtensils className="me-1" />
                            {recipe.difficulty}
                          </span>
                          <span>
                            <FaFire className="me-1" />
                            {recipe.calories} cal
                          </span>
                        </div>
                        <div className="recipe-rating mt-2">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`star ${i < Math.floor(recipe.rating) ? 'filled' : ''}`}
                            >
                              ★
                            </span>
                          ))}
                          <span className="ms-2">{recipe.rating}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </AnimatePresence>

          {sortedRecipes.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-5"
            >
              <h3>No recipes found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </motion.div>
          )}
        </Container>
      </section>

      {/* Load More Button */}
      {sortedRecipes.length > 0 && (
        <section className="load-more py-4">
          <Container>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center"
            >
              <Button variant="outline-primary" size="lg">
                Load More Recipes
              </Button>
            </motion.div>
          </Container>
        </section>
      )}
    </div>
  );
};

export default Recipes;

