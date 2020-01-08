import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Starter Gatsby Tempalte</h1>
    <p>For Noisy Trumpet Web Development</p>
    <p>Essential Dependencies installed.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
