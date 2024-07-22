// src/components/SubmitRecipe.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const SubmitRecipe = () => {
  // const { t } = useTranslation();

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>{t('submit_your_recipe')}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>{t('username')}</Form.Label>
              <Form.Control type="text" placeholder={t('username')} />
            </Form.Group>
            <Form.Group controlId="memberID">
              <Form.Label>{t('member_id')}</Form.Label>
              <Form.Control type="text" placeholder={t('member_id')} />
            </Form.Group>
            <Form.Group controlId="recipe">
              <Form.Label>{t('recipe')}</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder={t('recipe')} />
            </Form.Group>
            <Form.Group>
              <Form.File id="uploadImages" label={t('upload_images')} />
            </Form.Group>
            <Button variant="primary" type="submit">{t('submit')}</Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>{t('photo_guidelines')}</h3>
          <p>{t('do')}</p>
          <ul>
            <li>Landscape (horizontal) photos</li>
            <li>Photos including your dish</li>
          </ul>
          <p>{t('dont')}</p>
          <ul>
            <li>No portrait (vertical) photos</li>
            <li>No photos of you or others</li>
            <li>No personal information (name, age, etc.)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default SubmitRecipe;




