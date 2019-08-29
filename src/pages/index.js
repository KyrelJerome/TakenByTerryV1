import React from "react"
//import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`photographer`, `Terry`, `Manzi`]} />

    <Layout pageInfo={{ pageName: "Terry Manzi - Creator" }} />
  </>
)

export default IndexPage
