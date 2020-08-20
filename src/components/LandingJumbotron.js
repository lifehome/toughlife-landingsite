// import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

// Bootstrap imports
import { Jumbotron, Container } from 'react-bootstrap'

// i18n import
import { Trans } from 'react-i18next'
import { withTrans } from '../i18n/withTrans'

// Styled Components
const LandingContainer = styled(Container)`
  &&& {
    background: url('/images/landing-bg.jpg');
    background-size: cover;
    border-radius: 5px;
  }
`

const BlurryHero = styled(Jumbotron)`
  &&& {
    backdrop-filter: blur(2px);
    background: rgba(0,0,0,.17);
    color: white;
    height: 89vh;
    padding: 144px 21px 233px !important;
    margin: 0;
  }
`

const ServerAddrInput = styled.input`
  &&& {
    border: none;
    border-radius: 8px;
    background: rgba(255,255,255,.21);
    padding: 5px 13px;
    color: white;
    width: 8.9em;
    text-align: center;
  }
`

const LargeH1 = styled.h1`
  &&& {
    font-size: 2.72em
  }
`

// https://stackoverflow.com/questions/36051883
const handleFocus = (event) => event.target.select();

const LandingJumbotron = ({ t }) => (
  <LandingContainer fluid className="px-0">
    <BlurryHero>
      <LargeH1><Trans i18nKey="landingpage.jumbotron.h1">string_a<br/>string_b</Trans></LargeH1>
      <h3>{t('landingpage.jumbotron.srvaddr')}<ServerAddrInput readOnly value="mc.toughlife.info" onFocus={handleFocus}/></h3>
    </BlurryHero>
  </LandingContainer>
)


export default withTrans(LandingJumbotron)