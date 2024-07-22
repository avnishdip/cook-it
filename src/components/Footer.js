// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col>
            <h5 className="text-uppercase" style={{ fontFamily: 'Kaushan Script' }}>Cook it!</h5>
            <ul className="list-unstyled">
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;



