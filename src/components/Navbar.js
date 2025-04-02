import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/recipes', label: 'Recipes' },
    { path: '/submit-recipe', label: 'Submit Recipe' },
    { path: '/events', label: 'Events' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') {
      return false;
    }
    return location.pathname === path;
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      variant={isDarkMode ? 'dark' : 'light'}
      className="navbar-custom sticky-top"
      bg={isDarkMode ? 'dark' : 'light'}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          Cook It
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.path}
                as={NavLink}
                to={item.path}
                className={isActive(item.path) ? 'active' : ''}
                onClick={() => setExpanded(false)}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={isDarkMode ? 'light' : 'dark'}
              onClick={toggleTheme}
              className="theme-toggle-btn"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 