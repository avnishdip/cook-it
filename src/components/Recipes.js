// src/components/Recipes.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const recipesData = [
  { id: 1, title: 'Classic Strawberry Tart', description: 'Delicious tart with fresh strawberries.', imgSrc: 'https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/470854-1-eng-GB_simple-french-strawberry-tart.jpg' },
  { id: 2, title: 'Vegetable Stew', description: 'A hearty and healthy vegetable stew.', imgSrc: 'https://feelgoodfoodie.net/wp-content/uploads/2022/12/Vegetable-Stew-10.jpg' },
  { id: 3, title: 'Chicken Alfredo', description: 'Creamy Alfredo sauce with tender chicken.', imgSrc: 'https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21.jpg' },
  { id: 4, title: 'Vegan Burger', description: 'A tasty and healthy vegan burger.', imgSrc: 'https://www.wellplated.com/wp-content/uploads/2016/03/Black-Bean-Vegan-Burger-Recipe.jpg' },
  { id: 5, title: 'Chocolate Cake', description: 'Rich and moist chocolate cake.', imgSrc: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg' },
  { id: 6, title: 'Caesar Salad', description: 'Fresh salad with Caesar dressing.', imgSrc: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg' },
  { id: 7, title: 'BBQ Ribs', description: 'Juicy ribs with BBQ sauce.', imgSrc: 'https://www.spendwithpennies.com/wp-content/uploads/2022/06/Oven-Baked-Ribs-SpendWithPennies-4.jpg' },
  { id: 8, title: 'Pancakes', description: 'Fluffy pancakes with maple syrup.', imgSrc: 'https://www.onceuponachef.com/images/2009/08/pancakes-01.jpg' },
  { id: 9, title: 'Spaghetti Bolognese', description: 'Classic Italian pasta dish.', imgSrc: 'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-Bolognese-10.jpg?w=1200&q=82&auto=format&fit=crop&dm=1599767200&s=8aad79e65abacad06578e485c8fc51bc' },
  { id: 10, title: 'Tacos', description: 'Spicy and flavorful tacos.', imgSrc: 'https://tatyanaseverydayfood.com/wp-content/uploads/2023/05/The-Best-Birria-Tacos-Recipe-2.jpg' },
];

const Recipes = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');

  const filteredRecipes = filter === 'All' ? recipesData : recipesData.filter(recipe => recipe.category === filter);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>{t('recipes')}</h2>
          <Button variant="primary" onClick={() => setFilter('All')}>All</Button>
          <Button variant="secondary" onClick={() => setFilter('Vegan')}>Vegan</Button>
          <Button variant="success" onClick={() => setFilter('Vegetarian')}>Vegetarian</Button>
          <Button variant="warning" onClick={() => setFilter('No Restrictions')}>No Restrictions</Button>
        </Col>
      </Row>
      <Row>
        {filteredRecipes.map((recipe, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src={recipe.imgSrc} />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
                <Link to={`/recipe/${recipe.id}`}>
                  <Button variant="primary">{t('see_more')}</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Recipes;

