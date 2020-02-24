import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import "animate.css/animate.min.css"
import InternationalMap from "../images/map.png"
import ScrollAnimation from "react-animate-on-scroll"

export default class QuoteOne extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn">
        <div className="quote-one-section w-100 d-none d-xs-block d-sm-block">
          <div className="quote-section">
            <h3>"Will your grandkids have the opportunity to fill a stock tank, swim in San Felipe Creek, marvel at the turquoise waters of the Devils River, or learn to fish on Lake Amistad?"</h3>
          </div>
        </div>
        <div className="map-mobile d-sm-block d-md-none">
          <img
            src={InternationalMap}
            alt="Map of the Edward & Trinity aquifer"
            className="international-map-mobile"
            id="international-map-mobile"
          />
        </div>
      </ScrollAnimation>
    )
  }
}
