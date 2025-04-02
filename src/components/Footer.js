// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { path: '/about', label: 'About Us' },
      { path: '/contact', label: 'Contact' },
      { path: '/careers', label: 'Careers' },
      { path: '/press', label: 'Press' }
    ],
    resources: [
      { path: '/recipes', label: 'Recipes' },
      { path: '/events', label: 'Events' },
      { path: '/blog', label: 'Blog' },
      { path: '/faq', label: 'FAQ' }
    ],
    legal: [
      { path: '/privacy', label: 'Privacy Policy' },
      { path: '/terms', label: 'Terms of Service' },
      { path: '/cookies', label: 'Cookie Policy' }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'contact@cookit.com' },
    { icon: <FaPhone />, text: '+1 (555) 123-4567' },
    { icon: <FaMapMarkerAlt />, text: '123 Cooking Street, Food City, FC 12345' }
  ];

  return (
    <footer className="footer mt-auto py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h5 className="mb-4">Cook It</h5>
              <p className="mb-4">
                Your ultimate destination for discovering, sharing, and learning about amazing recipes.
                Join our community of food enthusiasts and start your culinary journey today!
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={2} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h6 className="mb-4">Company</h6>
              <ul className="list-unstyled">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          <Col lg={2} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h6 className="mb-4">Resources</h6>
              <ul className="list-unstyled">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          <Col lg={2} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h6 className="mb-4">Legal</h6>
              <ul className="list-unstyled">
                {footerLinks.legal.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          <Col lg={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h6 className="mb-4">Contact</h6>
              <ul className="list-unstyled">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="me-2">{info.icon}</span>
                    {info.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <hr className="footer-divider" />
              <p className="mb-0">
                © {currentYear} Cook It. All rights reserved.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;



