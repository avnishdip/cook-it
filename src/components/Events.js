// src/components/Events.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

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

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Cooking Events</h2>
          <p className="text-center lead">Join our exciting cooking events and learn from professional chefs!</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          {showSuccess && (
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
              Thank you for your interest! We'll contact you soon with event details.
            </Alert>
          )}
          <Form onSubmit={handleSubmit} className="shadow-sm p-4 rounded">
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
            <Button variant="primary" type="submit" className="w-100">Submit</Button>
          </Form>
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div className="p-4">
            <h3 className="mb-4">Upcoming Events</h3>
            <div className="mb-4">
              <h5>🍳 Cooking Masterclass</h5>
              <p>Join our professional chefs for an exclusive cooking masterclass. Learn advanced techniques and create restaurant-quality dishes.</p>
            </div>
            <div className="mb-4">
              <h5>👨‍🍳 Kids Cooking Workshop</h5>
              <p>Perfect for young aspiring chefs! Fun and educational cooking sessions designed specifically for children.</p>
            </div>
            <div className="mb-4">
              <h5>🍷 Wine & Dine Experience</h5>
              <p>An evening of fine dining and wine pairing, where you'll learn to create perfect food and wine combinations.</p>
            </div>
            <div>
              <h5>🌱 Plant-Based Cooking</h5>
              <p>Discover the art of creating delicious plant-based meals with our expert vegan chefs.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Events;

