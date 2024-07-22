// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="/" style={{ fontFamily: 'Kaushan Script', fontSize: '2rem' }}>{t('welcome')}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/recipes">{t('recipes')}</Nav.Link>
          <Nav.Link href="/events">{t('events')}</Nav.Link>
          <Nav.Link href="/submit">{t('submit_yours')}</Nav.Link>
          <Nav.Link href="/professionals">{t('meet_professionals')}</Nav.Link>
          <Nav.Link href="/cart">{t('cart')}</Nav.Link>
          <Nav.Link onClick={() => changeLanguage('en')}>EN</Nav.Link>
          <Nav.Link onClick={() => changeLanguage('fr')}>FR</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;




