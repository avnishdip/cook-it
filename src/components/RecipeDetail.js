// src/components/RecipeDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Form, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaClock, FaUtensils, FaFire, FaUser, FaHeart, FaShare, FaBookmark, FaPrint, FaCalculator, FaComment } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RecipeDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [scale, setScale] = useState(1);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'John Doe',
      text: 'These cookies are amazing! I made them for my family and they loved them.',
      date: '2024-02-15',
      rating: 5
    },
    {
      id: 2,
      user: 'Jane Smith',
      text: 'Great recipe! I added some walnuts for extra crunch.',
      date: '2024-02-14',
      rating: 4
    }
  ]);

  // Mock data for recipe details
  const recipe = {
    id: parseInt(id),
    title: 'Classic Chocolate Chip Cookies',
    author: 'Jane Smith',
    image: '/images/recipes/cookies.jpg',
    time: '30 mins',
    difficulty: 'easy',
    servings: 24,
    calories: 150,
    rating: 4.8,
    reviews: 128,
    description: 'These classic chocolate chip cookies are soft, chewy, and absolutely delicious. Perfect for any occasion!',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 cup butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup packed brown sugar',
      '2 large eggs',
      '1 teaspoon vanilla extract',
      '1 teaspoon baking soda',
      '1/2 teaspoon salt',
      '2 cups semi-sweet chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.',
      'In a medium bowl, whisk together flour, baking soda, and salt. Set aside.',
      'In a large bowl, beat butter and both sugars until light and fluffy, about 2-3 minutes.',
      'Add eggs one at a time, beating well after each addition. Stir in vanilla extract.',
      'Gradually stir the dry ingredients into the wet mixture until just combined.',
      'Fold in chocolate chips.',
      'Drop rounded tablespoons of dough onto prepared baking sheets.',
      'Bake for 10-12 minutes or until edges are lightly browned and centers are still soft.',
      'Let cookies cool on baking sheets for 5 minutes before transferring to wire racks.'
    ],
    tags: ['dessert', 'cookies', 'baking', 'chocolate'],
    nutrition: {
      calories: 150,
      protein: 2,
      carbs: 18,
      fat: 8,
      fiber: 1
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Recipe unliked' : 'Recipe liked!');
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? 'Recipe removed from saved' : 'Recipe saved!');
  };

  const handleShare = () => {
    // Implement share functionality
    toast.info('Share functionality coming soon!');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleScaleChange = (e) => {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: comments.length + 1,
      user: 'Current User',
      text: comment,
      date: new Date().toISOString().split('T')[0],
      rating: 5
    };

    setComments([newComment, ...comments]);
    setComment('');
    toast.success('Comment added successfully!');
  };

  const scaledIngredients = recipe.ingredients.map(ingredient => {
    const match = ingredient.match(/^(\d+(?:\.\d+)?)\s+(.+)$/);
    if (match) {
      const [_, amount, unit] = match;
      return `${(parseFloat(amount) * scale).toFixed(1)} ${unit}`;
    }
    return ingredient;
  });

  return (
    <div className="recipe-detail">
      {/* Hero Section */}
      <section className="recipe-hero">
        <Container fluid className="px-0">
          <Row className="g-0">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="recipe-image-container"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="recipe-hero-image"
                />
              </motion.div>
            </Col>
            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="recipe-info-container"
              >
                <h1 className="display-4 fw-bold mb-4">{recipe.title}</h1>
                <div className="recipe-meta mb-4">
                  <span className="me-3">
                    <FaClock className="me-1" />
                    {recipe.time}
                  </span>
                  <span className="me-3">
                    <FaUtensils className="me-1" />
                    {recipe.difficulty}
                  </span>
                  <span>
                    <FaFire className="me-1" />
                    {recipe.calories} cal
                  </span>
                </div>
                <div className="recipe-author mb-4">
                  <FaUser className="me-2" />
                  By {recipe.author}
                </div>
                <div className="recipe-rating mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`star ${i < Math.floor(recipe.rating) ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="ms-2">{recipe.rating}</span>
                  <span className="ms-2 text-muted">({recipe.reviews} reviews)</span>
                </div>
                <div className="recipe-actions mb-4">
                  <Button
                    variant={isLiked ? 'danger' : 'outline-danger'}
                    className="me-2"
                    onClick={handleLike}
                  >
                    <FaHeart className="me-1" />
                    {isLiked ? 'Liked' : 'Like'}
                  </Button>
                  <Button
                    variant={isSaved ? 'primary' : 'outline-primary'}
                    className="me-2"
                    onClick={handleSave}
                  >
                    <FaBookmark className="me-1" />
                    {isSaved ? 'Saved' : 'Save'}
                  </Button>
                  <Button variant="outline-secondary" onClick={handleShare} className="me-2">
                    <FaShare className="me-1" />
                    Share
                  </Button>
                  <Button variant="outline-secondary" onClick={handlePrint}>
                    <FaPrint className="me-1" />
                    Print
                  </Button>
                </div>
                <div className="recipe-tags mb-4">
                  {recipe.tags.map((tag, index) => (
                    <Badge key={index} bg="secondary" className="me-2">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="recipe-scale">
                  <Form.Group>
                    <Form.Label>
                      <FaCalculator className="me-1" />
                      Scale Recipe
                    </Form.Label>
                    <Form.Select value={scale} onChange={handleScaleChange}>
                      <option value="0.5">Half Batch</option>
                      <option value="1">Original</option>
                      <option value="2">Double Batch</option>
                      <option value="3">Triple Batch</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Recipe Content */}
      <section className="recipe-content py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-4">Description</h2>
                <p className="lead mb-5">{recipe.description}</p>

                <h2 className="mb-4">Ingredients</h2>
                <ul className="ingredients-list mb-5">
                  {scaledIngredients.map((ingredient, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {ingredient}
                    </motion.li>
                  ))}
                </ul>

                <h2 className="mb-4">Instructions</h2>
                <ol className="instructions-list mb-5">
                  {recipe.instructions.map((instruction, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="mb-4"
                    >
                      {instruction}
                    </motion.li>
                  ))}
                </ol>

                {/* Comments Section */}
                <div className="comments-section">
                  <h2 className="mb-4">
                    <FaComment className="me-2" />
                    Comments
                  </h2>
                  <Form onSubmit={handleCommentSubmit} className="mb-4">
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Share your thoughts about this recipe..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </Form.Group>
                    <Button type="submit" variant="primary">
                      Post Comment
                    </Button>
                  </Form>

                  <div className="comments-list">
                    {comments.map((comment) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="mb-3">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <h5 className="card-title mb-0">{comment.user}</h5>
                              <small className="text-muted">{comment.date}</small>
                            </div>
                            <div className="mb-2">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`star ${i < comment.rating ? 'filled' : ''}`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <p className="card-text">{comment.text}</p>
                          </Card.Body>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="nutrition-card"
              >
                <h3 className="mb-4">Nutrition Facts</h3>
                <div className="nutrition-info">
                  <div className="nutrition-item">
                    <span>Calories</span>
                    <span>{recipe.nutrition.calories}</span>
                  </div>
                  <div className="nutrition-item">
                    <span>Protein</span>
                    <span>{recipe.nutrition.protein}g</span>
                  </div>
                  <div className="nutrition-item">
                    <span>Carbs</span>
                    <span>{recipe.nutrition.carbs}g</span>
                  </div>
                  <div className="nutrition-item">
                    <span>Fat</span>
                    <span>{recipe.nutrition.fat}g</span>
                  </div>
                  <div className="nutrition-item">
                    <span>Fiber</span>
                    <span>{recipe.nutrition.fiber}g</span>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default RecipeDetail;


