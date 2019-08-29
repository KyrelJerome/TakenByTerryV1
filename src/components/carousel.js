import PropTypes from "prop-types"
import React from "react"

const Carousel = ({ siteTitle, imageURLs }) => (
  <div class="" style={imageURLs} />
)

Carousel.propTypes = {
  siteTitle: PropTypes.string,
}

Carousel.defaultProps = {
  siteTitle: ``,
  imageURLs: {
    "background-image":
      "url(https://live.staticflickr.com/65535/47856049872_ac67730cdd_h.jpg)",
    "height": "100vh"
  },
}

export default Carousel
