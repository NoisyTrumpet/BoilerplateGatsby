import React from "react"
// import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/main.scss"
import Header from "../components/header"
import Background from "../components/background"
import RegionalImpacts from "../components/regional-impacts"
import InternationalImpacts from "../components/international-impacts"
import EcologicalImpacts from "../components/ecological-impacts"
import WCBD from "../components/wcbd"
import Footer from "../components/footer"

const IndexPage = () => (
  <div className="water-campaign-page">
    <Header />
  <div className="hero-section">
    <h1>Water.</h1>
    <h3>The Consequences?</h3>
    <p>Join the Devils River Conservancy in supporting smart groundwater use and the creation of river and creek flow standards to ensure water is conserved for future generations of Texans.</p>
    <p className="tagline">Understand what is <br /> happening to your water.</p>
  </div>
    {/* <Background />
    <RegionalImpacts />
    <InternationalImpacts />
    <EcologicalImpacts />
    <WCBD />
    <Footer /> */}
  </div>
)

export default IndexPage
