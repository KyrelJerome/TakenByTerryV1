/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Carousel from "./carousel"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className=" px-0 mx-0 py-0 main" >
          <Row noGutters className="noGutters justify-content-center">
            <Col className="col-3">
              <Container className="mx-0 px-3 py-3 justify-text-left">
                <h2>Terry Manzi</h2>
                <Container className="my-5 px-0">
                  <h2 className="py-0 my-0">Photographer</h2>
                  <h2 className="py-0 my-0">Film-Maker </h2>
                  <h2 className="py-0 my-0">Graphic Editor</h2>
                </Container>
                <Container className="px-0 my-4 mx-0 m">
                  <p className="py-0 my-0">Currently in</p>
                  <h2 className="py-0 my-0">London,</h2>
                  <h2 className="py-0 my-0">Ontario</h2>
                </Container>

                <Container className="px-0 my-4 mx-0">
                          <Row noGutters className="noGutters justify-content-center">

                    <Col className="col-4 px-0 mx-0">
                      <a href="https://www.google.com"> 
                        <h2>
                          <FaInstagram />
                        </h2>
                      </a>
                      <a href="https://www.google.com"> 
                        <h2>
                          <FaYoutube />
                        </h2>
                      </a>
                      <a href="https://www.google.com" > 
                        <h2>
                          <FaEnvelope />
                        </h2>
                      </a>
                    </Col>
                    <Col className="col-8 px-0 mx-0">
                    bob
                    </Col>
                    </Row>
                  </Container>
              </Container>
            </Col>
            <Col className="col-9">
              <Carousel />
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
