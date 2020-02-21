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
      <ScrollAnimation animateIn="fadeInUp">
        <div className="quote-two-section w-100">
          <div className="quote-section">
            <h3>
              "Water has been the lifeblood of Val Verde County for thousands of
              years. If we misuse it, we eventually lose it and this region will
              suffer immensely."
            </h3>
          </div>
        </div>
      </ScrollAnimation>
    )
  }
}
