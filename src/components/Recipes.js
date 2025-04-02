// src/components/Recipes.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaUtensils, FaFire } from 'react-icons/fa';

const recipesData = [
  {
    id: 1,
    title: 'Classic Chocolate Chip Cookies',
    description: 'Soft and chewy cookies with melty chocolate chips.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    time: '30 mins',
    difficulty: 'Easy',
    calories: 150
  },
  {
    id: 2,
    title: 'Creamy Mushroom Risotto',
    description: 'Rich and creamy Italian rice dish with mushrooms.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
    time: '45 mins',
    difficulty: 'Medium',
    calories: 320
  },
  {
    id: 3,
    title: 'Grilled Salmon with Herbs',
    description: 'Fresh salmon fillet with aromatic herbs and lemon.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
    time: '25 mins',
    difficulty: 'Easy',
    calories: 280
  },
  {
    id: 4,
    title: 'Homemade Margherita Pizza',
    description: 'Classic Italian pizza with fresh basil and mozzarella.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
    time: '40 mins',
    difficulty: 'Medium',
    calories: 250
  },
  {
    id: 5,
    title: 'Quinoa Buddha Bowl',
    description: 'Healthy bowl with quinoa, roasted vegetables, and tahini dressing.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
    time: '35 mins',
    difficulty: 'Easy',
    calories: 380
  },
  {
    id: 6,
    title: 'Spicy Thai Curry',
    description: 'Aromatic coconut curry with vegetables and your choice of protein.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
    time: '50 mins',
    difficulty: 'Medium',
    calories: 420
  }
];

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('all');

  const filteredRecipes = recipesData.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficulty === 'all' || recipe.difficulty.toLowerCase() === difficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="recipes-page">
      <section className="hero-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hero-title">Discover Delicious Recipes</h1>
            <p className="hero-subtitle">
              Explore our collection of mouth-watering recipes from around the world
            </p>
          </motion.div>
          <Row className="justify-content-center">
            <Col md={6} lg={4}>
              <Form.Control
                type="search"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-3"
              />
            </Col>
            <Col md={6} lg={2}>
              <Form.Select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="mb-3"
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-5">
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-decoration-none"
              >
                <Card className="recipe-card h-100">
                  <div className="recipe-image-container">
                    <Card.Img
                      variant="top"
                      src={`${recipe.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={recipe.title}
                      className="recipe-image"
                    />
                  </div>
                  <Card.Body className="recipe-content">
                    <Card.Title className="recipe-title">{recipe.title}</Card.Title>
                    <div className="recipe-meta">
                      <div className="recipe-meta-item">
                        <FaClock />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="recipe-meta-item">
                        <FaUtensils />
                        <span>{recipe.difficulty}</span>
                      </div>
                      <div className="recipe-meta-item">
                        <FaFire />
                        <span>{recipe.calories} cal</span>
                      </div>
                    </div>
                    <Card.Text className="recipe-description">
                      {recipe.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Recipes;

