import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import ScrollAnimation from "react-animate-on-scroll"
import InternationalMap from "../images/map.png"

export default class InternationalImpact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="international-impact-section" id="international-impact">
        <ScrollAnimation animateIn="fadeIn" duration={1}>
        <div className="row">
          <div className="international-1 col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="international-title">
                <h1>International Impact</h1>
              </div>
              <div className="international-body">
                <p>
                  In 1944, the United States established{" "}
                  <a href="https://www.ibwc.gov/Files/1944Treaty.pdf">
                    a water treaty
                  </a>{" "}
                  with Mexico that authorizes both countries to operate and
                  maintain dams on the main channel of the Rio Grande River.
                </p>
                <p>
                  If the reigning "Rule of Capture" law is not modified or
                  monitored, this may lead to an over pumping of water
                  resources, which could then affect the water levels in Mexico.
                  As a result, this could incite federal action and regulation
                  for noncompliance of the treaty.
                </p>
                <p>
                  For decades, these waters have quenched the thirst and cooled
                  the summer days of Val Verde County’s community, supported by
                  eco-tourism and agriculture industries, and contributed to
                  upwards of one third of the downstream flows to the Rio Grande
                  - the primary water source for any communities south of Del
                  Rio, Texas.
                </p>
              </div>
          </div>

          <div className="international-2 text-center col-xs-12 col-sm-12 col-md-12 col-lg-6 d-none d-md-block d-lg-block d-xl-block">
              <img
                src={InternationalMap}
                alt="Map of the Edward & Trinity aquifer"
                className="international-map-img"
                id="international-map-mobile"
              />
          </div>
        </div>
        </ScrollAnimation>
      </div>
    )
  }
}
