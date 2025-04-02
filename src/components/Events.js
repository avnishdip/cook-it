// src/components/Events.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUtensils, FaChild, FaWineGlassAlt, FaLeaf } from 'react-icons/fa';

const Events = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    locationPreferences: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    setShowSuccess(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      locationPreferences: ''
    });
  };

  const events = [
    {
      icon: <FaUtensils />,
      title: 'Cooking Masterclass',
      description: 'Join our professional chefs for an exclusive cooking masterclass. Learn advanced techniques and create restaurant-quality dishes.',
      color: '#ff6b6b'
    },
    {
      icon: <FaChild />,
      title: 'Kids Cooking Workshop',
      description: 'Perfect for young aspiring chefs! Fun and educational cooking sessions designed specifically for children.',
      color: '#4ecdc4'
    },
    {
      icon: <FaWineGlassAlt />,
      title: 'Wine & Dine Experience',
      description: 'An evening of fine dining and wine pairing, where you\'ll learn to create perfect food and wine combinations.',
      color: '#45b7d1'
    },
    {
      icon: <FaLeaf />,
      title: 'Plant-Based Cooking',
      description: 'Discover the art of creating delicious plant-based meals with our expert vegan chefs.',
      color: '#96ceb4'
    }
  ];

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Cooking Events</h2>
            <p className="text-center lead">Join our exciting cooking events and learn from professional chefs!</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                  Thank you for your interest! We'll contact you soon with event details.
                </Alert>
              </motion.div>
            )}
            <Form onSubmit={handleSubmit} className="form-container">
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Gordon" 
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Ramsay" 
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="gordonramsay@sandwich.com" 
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="locationPreferences">
                <Form.Label>Location Preferences</Form.Label>
                <Form.Control 
                  as="textarea"
                  rows={3}
                  name="locationPreferences"
                  value={formData.locationPreferences}
                  onChange={handleChange}
                  placeholder="Please let us know in which province and town you prefer attending!" 
                  required
                />
              </Form.Group>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="primary" type="submit" className="w-100">Submit</Button>
              </motion.div>
            </Form>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="p-4">
              <h3 className="mb-4">Upcoming Events</h3>
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className="event-card"
                    style={{ borderLeft: `4px solid ${event.color}` }}
                  >
                    <div className="event-icon" style={{ color: event.color }}>
                      {event.icon}
                    </div>
                    <h5>{event.title}</h5>
                    <p>{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default Events;

