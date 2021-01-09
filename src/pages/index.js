import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <img src="/images/logos/logo.svg" alt="logo" />
      <h1>Build a web app with React Hooks</h1>
      <p>
        Learn how we built the new Design+Code site with React Hooks using
        Gatsby, Netlify, and advanced CSS techniques with Styled Components. .
      </p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
