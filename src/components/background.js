import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
import BackgroundOne from "../images/background_1.png"
import BackgroundTwo from "../images/studerLandscape.png"

export default class Background extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" duration={1}>
        <div className="background-section" id="background">
          <div className="row">
            <div className="background-1 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="background-title">
                <h1>Background</h1>
              </div>
              <div className="background-body">
                <p>
                  Val Verde County is home to several unique watersheds,
                  including the Devils River, Rio Grande, Amistad Reservoir,
                  Pecos River and San Felipe Creek. These surface waters are fed
                  by groundwater from the complex Edwards-Trinity Aquifer.
                </p>
                <p>
                  There are 6 significant spring systems in the unique
                  watersheds of Val Verde County: Pecan Springs, San Felipe
                  Springs, Goodenough Spring, Indian Head Spring, Finegan
                  Springs and Dead Man Spring. These spring systems are jewels
                  in Val Verde’s crown and indicators of groundwater levels for
                  each unique watershed.
                </p>
                <p>
                  By 2070, the{" "}
                  <span className="emphasis-text">
                    Texas population is expected to increase by more than 70
                    percent
                  </span>
                  . With that increase, so will the demand for water.
                </p>
                <p className="emphasis-center-text text-center">
                  Unlike surrounding counties, Val Verde County does not have a
                  water management plan.
                </p>
                <p className="emphasis-center-text text-center">
                  Without a plan, the future of Val Verde’s water is unknown.
                </p>
                <p>
                  <span className="emphasis-text">"Water. The Consequences?"</span> shows the risk of not
                  planning for the future of Val Verde County’s water resources
                  and advocates for a water management strategy that protects
                  private property rights, stream flows, recreational values,
                  and municipal water supplies.
                </p>
                <p>
                  Join the Devils River Conservancy in supporting smart
                  groundwater use and the creation of river, creek and spring
                  flow standards to ensure water is conserved for future
                  generations of Texans.
                </p>
              </div>
            </div>
            <div className="background-2 text-center col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mx-auto">
            
                <img
                  src={BackgroundOne}
                  alt=""
                  className="background-image-one"
                  id="background-one-img"
                />
          
                <img
                  src={BackgroundTwo}
                  alt=""
                  className="background-image-two"
                  id="background-two-img"
                />
              
            </div>
          </div>
        </div>
      </ScrollAnimation>
    )
  }
}
