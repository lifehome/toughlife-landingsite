import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Custom components
import LandingJumbotron from "../components/LandingJumbotron"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingJumbotron />
  </Layout>
)

export default IndexPage
