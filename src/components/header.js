import { Link } from "gatsby"
import React from "react"

// Bootstrap imports
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

// i18n import
import { withTrans } from '../i18n/withTrans'

const Header = ({ t, i18n }) => (
  <Container>
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">Toughlife</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/about-us/" activeClassName="navitem-active">{t('navbar.about-us')}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/server-info/" activeClassName="navitem-active">{t('navbar.info')}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/vote-sites/" activeClassName="navitem-active">{t('navbar.vote-sites')}</Nav.Link>
          </Nav.Item>
          <NavDropdown title={t('i18n.selector.label')} id="langselector">
            <NavDropdown.Item onClick={()=>i18n.changeLanguage("en")}>English</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>i18n.changeLanguage("hk")}>繁體中文 (香港)</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
)

export default withTrans(Header)