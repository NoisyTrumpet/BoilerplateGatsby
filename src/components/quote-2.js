import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"

export default class QuoteTwo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="quote-two-section w-100">
        <div className="quote-section">
          <h3>
            "If we pump too much water from our aquifers, our rivers and streams
            can go dry."
          </h3>
        </div>
      </div>
    )
  }
}
