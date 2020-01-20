import React from "react"
// import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/main.scss"
import "../scss/style.scss"
import "../scss/pages/_home.scss"
import Header from "../components/header"
import Background from "../components/background"
import RegionalImpacts from "../components/regional-impacts"
import InternationalImpacts from "../components/international-impacts"
import EcologicalImpacts from "../components/ecological-impacts"
import WCBD from "../components/wcbd"
import Footer from "../components/footer"
import "animate.css/animate.min.css"
import logoSVG from "./../images/waterLogo.svg"
import QuoteOne from "../components/quote-1"
import QuoteTwo from "../components/quote-2"

const IndexPage = () => (
  <div className="water-campaign-page w-100">
    <Header />
    <div className="hero-section container-fluid">
      <img src={logoSVG} alt="logo" />
      <p className="hero-cta">
        Join the Devils River Conservancy in supporting smart groundwater use
        and the creation of river and creek flow standards to ensure water is
        conserved for future generations of Texans.
      </p>
      <p className="tagline fadeInUpBig">
        Understand what is <br /> happening to your water.
      </p>
    </div>
    <div className="components">
        <Background />
        <QuoteOne />
        <RegionalImpacts />
        <InternationalImpacts />
        <QuoteTwo />
        <EcologicalImpacts />
        <WCBD />
        <Footer />
    </div>
  </div>
)

export default IndexPage
