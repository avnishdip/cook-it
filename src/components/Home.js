// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/recipes');
  };

  return (
    <Container>
      <Row className="text-center my-4">
        <Col>
          <h1>Cooking is easy if you don't over-complicate it!</h1>
          <p>At <strong>Cook it!</strong> we believe in easy recipes.</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <img src="https://www.farmboy.ca/wp-content/uploads/2023/05/Picnic-for-4.jpg" alt="Cooking" className="img-fluid" />
        </Col>
      </Row>

      <Row className="text-center my-4">
        <Col>
          <p>Food is a language of love and we believe in sharing love. At <strong>Cook it!</strong> you are the master of the kitchen. Learn new recipes and share your recipes. There are no limits! We love to learn about new cultures and spread recipes to love!</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>{t('featured_recipes')}</h2>
        </Col>
      </Row>

      <Row>
        {[1, 2, 3, 4].map((recipe, index) => (
          <Col md={3} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://www.eatingwell.com/thmb/tHQnJTQzKASPYcq7uztWrzG7hd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/one-skillet-cheesy-ground-chicken-pasta-571ba976c8934b75bd995a0c0d292af9.jpg" />
              <Card.Body>
                <Card.Title>Creamy Brocolli Penne</Card.Title>
                <Card.Text>Perfect for Date Night</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="text-center my-4">
        <Col>
          <Button variant="primary" onClick={handleDiscoverClick}>Discover</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>{t('home_chefs_reviews')}</h2>
        </Col>
      </Row>

      <Row>
        {[
          { name: 'Levi', review: t('so_easy'), role: 'Stay-at-home husband' },
          { name: 'Mikasa', review: t('wish_found_earlier'), role: 'Retired' },
          { name: 'Armin', review: t('does_not_lack_anything'), role: 'Amateur chef' },
        ].map((review, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text>"{review.review}"</Card.Text>
                <Card.Footer>{review.name} - {review.role}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
