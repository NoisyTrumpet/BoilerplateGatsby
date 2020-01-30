import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"

export default class QuoteOne extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <ScrollAnimation animateIn="fadeInUp">
        <div className="quote-one-section w-100">
          <div className="quote-section">
            <h3>"Did you know the lower Rio Grande gets about 1/3 of<br/> its water from springs located in Val Verde County?"</h3>
          </div>
        </div>
      </ScrollAnimation>
    )
  }
}
