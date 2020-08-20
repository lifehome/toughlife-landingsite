import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from "react-bootstrap"

// i18n import
import { withTrans } from '../i18n/withTrans'

// Custom components
import SloganJumbotron from "../components/SloganJumbotron"

const AboutUsPage = ({ t, i18n, data }) => {
  var pageContent, pageSlogan;

  if(i18n.languages[0] === "hk"){
    pageContent = data.hk.html
    pageSlogan  = data.hk.frontmatter.slogan
  } else if(i18n.languages[0] === "en"){
    pageContent = data.en.html
    pageSlogan  = data.en.frontmatter.slogan
  }
  
  return ( <Layout>
            <SEO title="About Us" />
            <SloganJumbotron
              slogan={pageSlogan}
              credit="CoEcho Project // CC-BY-ND-SA 4.0"
              pictureURL="/images/cec-001.png"
              showCredit
            />

            <Container dangerouslySetInnerHTML={{ __html: pageContent}} />
          </Layout> );
}

export const pageQuery = graphql`
  query AboutUsPage {
    hk: markdownRemark(frontmatter: {slug: {eq: "about-us-hk"}}) {
          frontmatter {
            slug
            slogan
          }
          id
          html
          excerpt
    }
    en: markdownRemark(frontmatter: {slug: {eq: "about-us-en"}}) {
          frontmatter {
            slug
            slogan
          }
          id
          html
          excerpt
    }
  }
`

export default withTrans(AboutUsPage)
