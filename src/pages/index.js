import React from "react"
// import { Link } from "gatsby"

// import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/main.scss"
import "../scss/style.scss"
import "../scss/pages/_home.scss"
import { Container } from "reactstrap"
import Header from "../components/header"
import Background from "../components/background"
import RegionalImpact from "../components/regional-impact"
import InternationalImpact from "../components/international-impact"
import EcologicalImpact from "../components/ecological-impact"
import WCBD from "../components/wcbd"
import Footer from "../components/footer"
import "animate.css/animate.min.css"
import logoSVG from "./../images/waterLogo.png"
import QuoteOne from "../components/quote-1"
import QuoteTwo from "../components/quote-2"

const IndexPage = () => (
    <div className="water-campaign-page container-fluid px-0">
    <Container fluid={true} className="px-0">
      <Header />
      <div className="hero-section">
        <img src={logoSVG} id="campaign-logo" alt="logo" />
        <p className="tagline fadeInUpBig">
          Understand what is <br /> happening to your water.
        </p>
      </div>
      </Container>
      <div className="components">
        <Background />
        <QuoteOne />
        <RegionalImpact />
        <InternationalImpact />
        <QuoteTwo />
        <EcologicalImpact />
        <WCBD />
        <Footer />
      </div>
    </div>
)

export default IndexPage
