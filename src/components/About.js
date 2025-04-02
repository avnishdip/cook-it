import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUtensils, FaUsers, FaHeart, FaGlobe } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaUtensils />,
      title: 'Quality Recipes',
      description: 'We curate and verify every recipe to ensure the best cooking experience.'
    },
    {
      icon: <FaUsers />,
      title: 'Community First',
      description: 'Our platform thrives on the passion and creativity of our cooking community.'
    },
    {
      icon: <FaHeart />,
      title: 'Passion for Food',
      description: 'We believe in the power of food to bring people together and create memories.'
    },
    {
      icon: <FaGlobe />,
      title: 'Global Cuisine',
      description: 'Explore recipes from around the world and learn about different cultures.'
    }
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: '/images/team/john.jpg',
      bio: 'Passionate about making cooking accessible to everyone.'
    },
    {
      name: 'Jane Smith',
      role: 'Head Chef',
      image: '/images/team/jane.jpg',
      bio: 'Award-winning chef with 15 years of experience.'
    },
    {
      name: 'Mike Johnson',
      role: 'Community Manager',
      image: '/images/team/mike.jpg',
      bio: 'Dedicated to fostering a supportive cooking community.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="about-hero-content"
              >
                <h1 className="display-4 fw-bold mb-4">Our Story</h1>
                <p className="lead mb-4">
                  Cook It was founded with a simple mission: to make cooking accessible,
                  enjoyable, and social for everyone. We believe that everyone deserves
                  to experience the joy of creating delicious meals.
                </p>
                <p>
                  What started as a small community of food enthusiasts has grown into
                  a global platform where people share their culinary experiences,
                  learn from each other, and celebrate the art of cooking.
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="about-hero-image"
              >
                <img
                  src="/images/about-hero.jpg"
                  alt="Our Story"
                  className="img-fluid rounded-3 shadow-lg"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values-section py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-4">Our Values</h2>
            <p className="lead">
              These core values guide everything we do at Cook It.
            </p>
          </motion.div>
          <Row>
            {values.map((value, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="value-card"
                  whileHover={{ y: -10 }}
                >
                  <div className="value-icon mb-3">
                    {value.icon}
                  </div>
                  <h3 className="h5 mb-3">{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-4">Meet Our Team</h2>
            <p className="lead">
              The passionate people behind Cook It.
            </p>
          </motion.div>
          <Row>
            {team.map((member, index) => (
              <Col md={4} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="team-card"
                  whileHover={{ y: -10 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image rounded-circle mb-3"
                  />
                  <h3 className="h5 mb-2">{member.name}</h3>
                  <p className="text-muted mb-2">{member.role}</p>
                  <p>{member.bio}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mission-content"
              >
                <h2 className="display-5 fw-bold mb-4">Our Mission</h2>
                <p className="lead mb-4">
                  We're on a mission to democratize cooking and make it accessible to everyone.
                  Through our platform, we aim to:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Inspire</strong> people to discover their inner chef
                  </li>
                  <li className="mb-3">
                    <strong>Connect</strong> food enthusiasts worldwide
                  </li>
                  <li className="mb-3">
                    <strong>Educate</strong> through easy-to-follow recipes and tutorials
                  </li>
                  <li>
                    <strong>Celebrate</strong> the diversity of global cuisine
                  </li>
                </ul>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mission-image"
              >
                <img
                  src="/images/mission.jpg"
                  alt="Our Mission"
                  className="img-fluid rounded-3 shadow-lg"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About; 