// src/components/RecipeDetail.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const recipesData = [
  { 
    id: 1, 
    title: 'Classic Strawberry Tart', 
    description: 'Delicious tart with fresh strawberries.', 
    imgSrc: 'https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/470854-1-eng-GB_simple-french-strawberry-tart.jpg', 
    preparationTime: '30 minutes', 
    cookingTime: '20 minutes', 
    chillingTime: '1 hour', 
    servings: '8', 
    ingredients: ['1 1/2 cups flour', '1/2 cup butter', '1/4 cup sugar', '1 egg yolk', '2-3 tbsp cold water', 'pinch of salt', '2 cups milk', '1/2 cup sugar', '1/4 cup cornstarch', '4 egg yolks', '2 tsp vanilla extract', '2 tbsp butter', '1 lb strawberries', '1/4 cup apricot jam', '1 tbsp water']
  },
  { 
    id: 2, 
    title: 'Vegetable Stew', 
    description: 'A hearty and healthy vegetable stew.', 
    imgSrc: 'https://feelgoodfoodie.net/wp-content/uploads/2022/12/Vegetable-Stew-10.jpg', 
    preparationTime: '45 minutes', 
    cookingTime: '1 hour', 
    chillingTime: 'None', 
    servings: '6', 
    ingredients: ['3 cups vegetable broth', '2 cups diced potatoes', '1 cup diced carrots', '1 cup diced celery', '1 cup diced tomatoes', '1 cup green beans', '1 cup corn', '1 cup peas', '1/4 cup chopped parsley', 'Salt and pepper to taste']
  },
  {
    id: 3,
    title: 'Chicken Alfredo',
    description: 'Creamy Alfredo sauce with tender chicken.',
    imgSrc: 'https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21.jpg',
    preparationTime: '20 minutes',
    cookingTime: '30 minutes',
    chillingTime: 'None',
    servings: '4',
    ingredients: ['2 cups heavy cream', '1 cup grated Parmesan cheese', '1/2 cup butter', '2 cloves garlic', '4 chicken breasts', 'Salt and pepper to taste']
  },
  {
    id: 4,
    title: 'Vegan Burger',
    description: 'A tasty and healthy vegan burger.',
    imgSrc: 'https://www.wellplated.com/wp-content/uploads/2016/03/Black-Bean-Vegan-Burger-Recipe.jpg',
    preparationTime: '15 minutes',
    cookingTime: '10 minutes',
    chillingTime: 'None',
    servings: '2',
    ingredients: ['1 can black beans', '1/2 cup breadcrumbs', '1/4 cup onions', '2 cloves garlic', '1 tsp cumin', 'Salt and pepper to taste']
  },
  {
    id: 5,
    title: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake.',
    imgSrc: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg',
    preparationTime: '30 minutes',
    cookingTime: '45 minutes',
    chillingTime: '1 hour',
    servings: '8',
    ingredients: ['1 1/2 cups flour', '1 cup sugar', '1/2 cup cocoa powder', '1 1/2 tsp baking powder', '1 tsp vanilla extract', '1 cup milk', '1/2 cup butter', '2 eggs']
  },
  {
    id: 6,
    title: 'Caesar Salad',
    description: 'Fresh salad with Caesar dressing.',
    imgSrc: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg',
    preparationTime: '10 minutes',
    cookingTime: 'None',
    chillingTime: 'None',
    servings: '4',
    ingredients: ['1 head romaine lettuce', '1/2 cup grated Parmesan cheese', '1/2 cup croutons', '1/4 cup Caesar dressing']
  },
  {
    id: 7,
    title: 'BBQ Ribs',
    description: 'Juicy ribs with BBQ sauce.',
    imgSrc: 'https://www.spendwithpennies.com/wp-content/uploads/2022/06/Oven-Baked-Ribs-SpendWithPennies-4.jpg',
    preparationTime: '15 minutes',
    cookingTime: '2 hours',
    chillingTime: 'None',
    servings: '4',
    ingredients: ['1 rack of ribs', '1 cup BBQ sauce', '1/4 cup brown sugar', '2 cloves garlic', 'Salt and pepper to taste']
  },
  {
    id: 8,
    title: 'Pancakes',
    description: 'Fluffy pancakes with maple syrup.',
    imgSrc: 'https://www.onceuponachef.com/images/2009/08/pancakes-01.jpg',
    preparationTime: '10 minutes',
    cookingTime: '20 minutes',
    chillingTime: 'None',
    servings: '4',
    ingredients: ['1 cup flour', '1 cup milk', '1 egg', '1 tbsp sugar', '1 tsp baking powder', '1/4 tsp salt', 'Maple syrup']
  },
  {
    id: 9,
    title: 'Spaghetti Bolognese',
    description: 'Classic Italian pasta dish.',
    imgSrc: 'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-Bolognese-10.jpg?w=1200&q=82&auto=format&fit=crop&dm=1599767200&s=8aad79e65abacad06578e485c8fc51bc',
    preparationTime: '15 minutes',
    cookingTime: '30 minutes',
    chillingTime: 'None',
    servings: '4',
    ingredients: ['1 lb spaghetti', '1/2 lb ground beef', '1/2 cup tomato sauce', '1/4 cup onions', '2 cloves garlic', '1 tsp oregano', 'Salt and pepper to taste']
  },
  {
    id: 10,
    title: 'Tacos',
    description: 'Spicy and flavorful tacos.',
    imgSrc: 'https://tatyanaseverydayfood.com/wp-content/uploads/2023/05/The-Best-Birria-Tacos-Recipe-2.jpg',
    preparationTime: '15 minutes',
    cookingTime: '10 minutes',
    chillingTime: 'None',
    servings: '4',
    ingredients: ['8 taco shells', '1/2 lb ground beef', '1/4 cup diced tomatoes', '1/4 cup shredded lettuce', '1/4 cup shredded cheese', '1/4 cup salsa', 'Salt and pepper to taste']
  },
];

const RecipeDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const recipe = recipesData.find(r => r.id === parseInt(id));

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={recipe.imgSrc} />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text>{t('preparation_time')}: {recipe.preparationTime}</Card.Text>
              <Card.Text>{t('cooking_time')}: {recipe.cookingTime}</Card.Text>
              <Card.Text>{t('chilling_time')}: {recipe.chillingTime}</Card.Text>
              <Card.Text>{t('servings')}: {recipe.servings}</Card.Text>
              <Card.Text>{t('ingredients')}</Card.Text>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeDetail;


