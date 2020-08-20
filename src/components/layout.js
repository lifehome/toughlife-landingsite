/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./header"

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css" // Core import
import { Container } from "react-bootstrap"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
          <Container fluid>{children}</Container>
      </main>
      <footer className="align-middle">
        CC-BY-SA 4.0 // Built with <span role="img" alt="love">♥️</span> by <a href="https://toughlife.info">Toughlife</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
