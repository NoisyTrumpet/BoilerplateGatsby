import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import scrollTo from "gatsby-plugin-smoothscroll"
import "../styles/main.scss"
import Header from "../components/header"
import Background from "../components/background"
import RegionalImpacts from "../components/regional-impacts"
import InternationalImpacts from "../components/international-impacts"
import EcologicalImpacts from "../components/ecological-impacts"
import WCBD from "../components/wcbd"
import Footer from "../components/footer"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1
  //   style={{
  //     textAlign: `center`,
  //       color: `#4599f4`,
  //       fontSize: `6rem`,
  //   }}
  //   >WATER.</h1>
  //   <h3
  //     style={{
  //       textAlign: `center`,
  //       color: `white`,
  //       fontSize: `3rem`,
  //     }}
  //   >The Consequences?</h3>
  //   <p
  //     style={{
  //       textAlign: `center`,
  //       color: `#4599f4`,
  //       fontSize: `1rem`,
  //       fontFamily: `Helvetica Neue, sans-serif`,
  //       paddingLeft: `50px`,
  //       paddingRight: `50px`,
  //     }}
  //   >Join the Devils River Conservancy in supporting smart groundwater use and the creation of river and creek flow standards to ensure water is conserved for future generations of Texans.</p>
    
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
  <div>
    <Header />
  <div className="hero-section">
    <h1>Water.</h1>
    <h3>The Consequences?</h3>
    <p>Join the Devils River Conservancy in supporting smart groundwater use and the creation of river and creek flow standards to ensure water is conserved for future generations of Texans.</p>
    <p className="tagline">Understand what is <br /> happening to your water.</p>
  </div>
    <Background />
    <RegionalImpacts />
    <InternationalImpacts />
    <EcologicalImpacts />
    <WCBD />
    <Footer />
  </div>
)

export default IndexPage
