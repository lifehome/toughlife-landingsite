import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Bootstrap imports
import { Jumbotron, Container, Button } from 'react-bootstrap'

// i18n import
import { withTrans } from '../i18n/withTrans'

// Styled Components
const PageNotFoundContainer = styled(Container)`
  &&& {
    background: url('/images/pagenotfound-bg.jpg');
    background-size: cover;
    border-radius: 5px;
  }
`

const BlurryHero = styled(Jumbotron)`
  &&& {
    position: relative;
    backdrop-filter: blur(2px);
    background: rgba(0,0,0,.17);
    color: white;
    height: 89vh;
    padding: 144px 21px 233px !important;
    margin: 0;
  }
`

const LargeH1 = styled.h1`
  &&& {
    font-size: 3.4em
  }
`

const LargeH2 = styled.h2`
  &&& {
    font-size: 2.1em
  }
`

const CreditBox = styled.span`
  &&& {
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0,0,0,.55);
    padding: 0 1em 0 0;
    color: white;
    font-size: 13px;
    text-align: right;
    line-height: 2em
  }

  &&& a {
    color: white
  }
`

const NotFoundPage = ({ t }) => (
  <Layout>
    <SEO title={t("404.title")} />
    <PageNotFoundContainer fluid className="px-0">
      <BlurryHero>
        <LargeH1>{t("404.h1")}</LargeH1>
        <LargeH2>{t("404.tagline")}</LargeH2>
        <br/>
        <Button variant="primary" href="/">{t("404.button")}</Button>
        <CreditBox>Background Image Credit: <a href="https://www.facebook.com/appledailykatat/">《蘋果日報》攝影記者：何家達</a></CreditBox>
      </BlurryHero>
    </PageNotFoundContainer>
  </Layout>
)

export default withTrans(NotFoundPage)
