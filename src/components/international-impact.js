import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import ScrollAnimation from "react-animate-on-scroll";
import InternationalMap from "../images/map.jpeg"

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
                  <div className="international-title">
                    <h1>International<br /> Impact</h1>
                  </div>
                  <div className="international-body">
                    <p>
                      In 1944, the United States established <span>a water treaty</span> with Mexico 
                      that authorizes both countries to operate and maintain dams on the main channel 
                      of the Rio Grande River. If the reigning "Rule of Capture" law is not modified or 
                      monitored, this may lead to an over pumping of water resources, which could then 
                      affect the water levels in Mexico. As a result, 
                      this could incite federal action and regulation for noncompliance of the treaty.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="international-2 col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <ScrollAnimation animateIn="slideInRight">
                  <img src={InternationalMap} alt="Map of the Edward & Trinity aquifer"
                    className="international-map-img" id="international-map-img" />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        )
    }
}
