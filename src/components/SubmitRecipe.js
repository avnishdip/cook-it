import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';

const SubmitRecipe = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    cookingTime: '',
    difficulty: 'medium',
    servings: '',
    imageUrl: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setFormData(prev => ({
          ...prev,
          imageUrl: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    setShowSuccess(true);
    setFormData({
      title: '',
      description: '',
      ingredients: '',
      instructions: '',
      cookingTime: '',
      difficulty: 'medium',
      servings: '',
      imageUrl: ''
    });
    setPreview(null);
  };

  const removeImage = () => {
    setPreview(null);
    setFormData(prev => ({
      ...prev,
      imageUrl: ''
    }));
  };

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Share Your Recipe</h2>
            <p className="text-center lead">Have a great recipe? Share it with our community!</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                  Thank you for sharing your recipe! Our team will review it and publish it soon.
                </Alert>
              </motion.div>
            )}
            <Form onSubmit={handleSubmit} className="form-container">
              <Form.Group className="mb-4">
                <Form.Label>Recipe Image</Form.Label>
                <div
                  {...getRootProps()}
                  className={`image-upload-container ${isDragActive ? 'active' : ''}`}
                >
                  <input {...getInputProps()} />
                  {preview ? (
                    <div className="position-relative">
                      <img
                        src={preview}
                        alt="Preview"
                        style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
                      />
                      <Button
                        variant="danger"
                        size="sm"
                        className="position-absolute top-0 end-0 m-2"
                        onClick={removeImage}
                      >
                        <FaTimes />
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <FaCloudUploadAlt size={40} className="mb-3" />
                      <p>Drag & drop an image here, or click to select one</p>
                      <small className="text-muted">Supported formats: JPEG, JPG, PNG</small>
                    </div>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Recipe Title</Form.Label>
                <Form.Control 
                  type="text" 
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Classic Chocolate Chip Cookies" 
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your recipe..." 
                  required
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="cookingTime">
                    <Form.Label>Cooking Time (minutes)</Form.Label>
                    <Form.Control 
                      type="number" 
                      name="cookingTime"
                      value={formData.cookingTime}
                      onChange={handleChange}
                      placeholder="30" 
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="servings">
                    <Form.Label>Servings</Form.Label>
                    <Form.Control 
                      type="number" 
                      name="servings"
                      value={formData.servings}
                      onChange={handleChange}
                      placeholder="4" 
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="difficulty">
                <Form.Label>Difficulty Level</Form.Label>
                <Form.Select 
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  required
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="ingredients">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control 
                  as="textarea"
                  rows={5}
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  placeholder="List your ingredients, one per line..." 
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="instructions">
                <Form.Label>Instructions</Form.Label>
                <Form.Control 
                  as="textarea"
                  rows={5}
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  placeholder="Step by step instructions..." 
                  required
                />
              </Form.Group>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="primary" type="submit" className="w-100">
                  Submit Recipe
                </Button>
              </motion.div>
            </Form>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default SubmitRecipe;
