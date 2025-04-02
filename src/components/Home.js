// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUtensils, FaBookOpen, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaUtensils />,
      title: 'Discover Recipes',
      description: 'Explore our collection of delicious recipes from around the world.',
      link: '/recipes'
    },
    {
      icon: <FaBookOpen />,
      title: 'Learn Cooking',
      description: 'Master cooking techniques with our step-by-step guides and tutorials.',
      link: '/tutorials'
    },
    {
      icon: <FaUsers />,
      title: 'Join Community',
      description: 'Connect with fellow food enthusiasts and share your culinary journey.',
      link: '/community'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Attend Events',
      description: 'Participate in cooking workshops and food festivals.',
      link: '/events'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-content"
              >
                <h1 className="display-4 fw-bold mb-4">
                  Discover the Joy of Cooking
                </h1>
                <p className="lead mb-4">
                  Your ultimate destination for exploring, learning, and sharing amazing recipes.
                  Join our community of food enthusiasts and start your culinary journey today!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    as={Link}
                    to="/recipes"
                    variant="primary"
                    size="lg"
                    className="me-3"
                  >
                    Explore Recipes
                  </Button>
                  <Button
                    as={Link}
                    to="/submit-recipe"
                    variant="outline-primary"
                    size="lg"
                  >
                    Share Your Recipe
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-image"
              >
                <img
                  src="/images/hero-image.jpg"
                  alt="Cooking"
                  className="img-fluid rounded-3 shadow-lg"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-4">Why Choose Cook It?</h2>
            <p className="lead">
              We provide everything you need to enhance your cooking skills and share your passion for food.
            </p>
          </motion.div>
          <Row>
            {features.map((feature, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="feature-card"
                  whileHover={{ y: -10 }}
                >
                  <div className="feature-icon mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="h5 mb-3">{feature.title}</h3>
                  <p className="mb-4">{feature.description}</p>
                  <Button
                    as={Link}
                    to={feature.link}
                    variant="outline-primary"
                    className="w-100"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Recipes Section */}
      <section className="featured-recipes py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-4">Featured Recipes</h2>
            <p className="lead">
              Check out some of our most popular recipes from our community.
            </p>
          </motion.div>
          <Row>
            {[1, 2, 3].map((recipe, index) => (
              <Col md={4} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="recipe-card"
                  whileHover={{ y: -10 }}
                >
                  <img
                    src={`/images/recipe-${index + 1}.jpg`}
                    alt={`Recipe ${index + 1}`}
                    className="recipe-image"
                  />
                  <div className="recipe-content">
                    <h3 className="h5 mb-2">Delicious Recipe {index + 1}</h3>
                    <p className="mb-3">
                      A mouthwatering recipe that will delight your taste buds.
                    </p>
                    <Button
                      as={Link}
                      to={`/recipe/${index + 1}`}
                      variant="primary"
                      className="w-100"
                    >
                      View Recipe
                    </Button>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="display-5 fw-bold mb-4">Stay Updated</h2>
                <p className="lead mb-4">
                  Subscribe to our newsletter to receive the latest recipes, cooking tips, and event updates.
                </p>
                <form className="newsletter-form">
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <Button variant="primary" type="submit">
                      Subscribe
                    </Button>
                  </div>
                </form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
