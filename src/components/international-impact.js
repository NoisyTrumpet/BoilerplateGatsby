import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import ScrollAnimation from "react-animate-on-scroll";

export default class InternationalImpact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div
            className="international-impact-section"
            id="international-impact"
          >
            <div className="row">
              <div className="international-1 col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <ScrollAnimation animateIn="fadeInLeft">
                  <h1>International Impact</h1>
                  <p>
                    In 1944, the United States established <span>a water treaty</span> with Mexico 
                    that authorizes both countries to operate and maintain dams on the main channel 
                    of the Rio Grande River. If the reigning "Rule of Capture" law is not modified or 
                    monitored, this may lead to an over pumping of water resources, which could then 
                    affect the water levels in Mexico. As a result, 
                    this could incite federal action and regulation for noncompliance of the treaty.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        )
    }
}
