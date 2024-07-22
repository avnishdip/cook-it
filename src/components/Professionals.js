// src/components/Professionals.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const professionalsData = [
  { name: 'Skyler', specialty: 'Pastry Lover', imgSrc: 'https://i.pinimg.com/736x/79/fe/b1/79feb1611dddcbce7910e0c1081df6e2.jpg' },
  { name: 'HighZenberg', specialty: 'Cook', imgSrc: 'https://metro.co.uk/wp-content/uploads/2013/08/750x100010.jpg?quality=90&strip=all' },
  { name: 'Pascale Patrick', specialty: 'Chocolatier', imgSrc: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/01/16/female-chef-1.jpg?width=1200' },
  { name: 'Robert Kili', specialty: 'Chef', imgSrc: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/06/restaurant-chef.jpg?quality=82&strip=1' },
  { name: 'Pastek Lauren', specialty: 'Chef', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gordon_Ramsay.jpg/800px-Gordon_Ramsay.jpg' },
  { name: 'Omega La', specialty: 'Chef', imgSrc: 'https://static01.nyt.com/newsgraphics/2019/07/08/chefs/assets/images/diptych01-480_x2.jpg' },
  { name: 'Alex Wann', specialty: 'Head Chef', imgSrc: 'https://static.vecteezy.com/system/resources/previews/030/727/298/large_2x/beautiful-young-female-chef-in-the-kitchen-created-with-generative-ai-photo.jpeg' },

];

const Professionals = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>{t('meet_our_professionals')}</h2>
        </Col>
      </Row>
      <Row>
        {professionalsData.map((professional, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src={professional.imgSrc} />
              <Card.Body>
                <Card.Title>{professional.name}</Card.Title>
                <Card.Text>{professional.specialty}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Professionals;

