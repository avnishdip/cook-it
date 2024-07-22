// src/components/Events.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Events</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Gordon" />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Ramsay" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="gordonramsay@sandwich.com" />
            </Form.Group>
            <Form.Group controlId="locationPreferences">
              <Form.Label>Location Preferences</Form.Label>
              <Form.Control type="text" placeholder="Please let us know in which province and town you prefer attending!" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Events Information</h3>
          <p>Cook it! organizes events where people can learn to cook with professionals. Please fill in your information and you will be notified by email with the latest and greatest news about our events.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Events;

