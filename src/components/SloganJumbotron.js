import React from "react"

// Bootstrap imports
import { Jumbotron, Container } from 'react-bootstrap'

const SloganJumbotron = ({ slogan, credit, pictureURL, fluid=false, showCredit=false }) => {
  const LandingBoxStyle = {
    borderRadius: "5px",
    position: "relative",
    backgroundImage: 'url("' + pictureURL + '")',
    backgroundSize: "cover",
    padding: "0"
  }
  
  const LandingBoxJumbotronStyle = {
    borderRadius: "5px",
    background: "rgba(0,0,0,0.13)",
    width: "100%",
    backdropFilter: "blur(5px)"
  }
  
  const LandingBoxInnerStyle = {
    color: "white"
  }
  
  const LandingBoxCreditStyle = {
    borderRadius: "5px",
    position: "absolute",
    bottom: "0",
    width: "100%",
    background: "rgba(0,0,0,.55)",
    padding: "0 1em 0 0",
    color: "white",
    fontSize: "13px",
    textAlign: "right",
    lineHeight: "2em"
  }
  return  <Container fluid={fluid} style={LandingBoxStyle}>
            <Jumbotron fluid style={LandingBoxJumbotronStyle}>
              <Container fluid style={LandingBoxInnerStyle}>
                <h1>{slogan}</h1>
              </Container>
            </Jumbotron>
            { showCredit ? <span style={LandingBoxCreditStyle}>Background Image Credit: {credit}</span> : "" }
          </Container> 
}

export default SloganJumbotron