import React from "react"
import '../scss/style.scss'
import '../scss/main.scss'
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
import BackgroundOne from "../images/background_1.png"
import BackgroundTwo from "../images/background_2.png"

export default class Background extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render () {
        return (
          <ScrollAnimation animateIn="slideInLeft">
            <div className="background-section" id="background">
            <div className="row" >
              
            <div className="background-1 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <div className="background-title">
                    <h1>Background</h1>
                  </div>
                  <div className="background-body">
                    <p>
                      Val Verde County is a diverse and unique region, home to several independent
                      water resources including the Devils River, Rio Grande River, Amistad Reservoir,
                      Pecos River, Goodenough Spring, Cienegas Creek and San Felipe Creek.
                  </p>
                    <p>
                      Fed by underground groundwater from the The Edwards-Trinity Aquifer, these water
                      resources are all interconnected. If you impact one, you will affect another. Did you
                    know the lower Rio Grande gets <span>1/3 of its water</span> from springs located in Val
                      Verde County?
                  </p>
                    <p>
                      Widely considered as abundant and pure, our underground water has drawn attention from
                      several large companies that look to exploit and export our water for commercial use.
                      Unfortunately, there is no regulation in Texas for groundwater pumping due to the "Rule of Capture"
                      law. This allows landowners to pump as much water as they see fit, without any liability
                      for neighboring landowners and communities.
                  </p>
                    <p>Large scale groundwater pumping could deplete our beloved rivers, creeks, and streams.
                        We are asking Val Verde County to consider: "Water. The Consequences?" of over pumping
                      our groundwater. <span>The answer: "Misuse It and Lose It!"</span>
                    </p>
                    <p>
                      Join the Devils River Conservancy in supporting smart groundwater use and the creation
                      of river, creek and spring flow standards to ensure water is conserved for future
                      generations of Texans. If we don’t plan ahead now, we could face serious consequences.
                </p>
                  </div>
            </div>

              <div className="background-2 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mx-auto">
                <ScrollAnimation animateIn="slideInRight" delay="0">
                  <img src={BackgroundOne} alt="" className="background-image-one" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInRight" delay="10">
                  <img src={BackgroundTwo} alt="" className="background-image-two" />
                </ScrollAnimation>
              </div>
            </div>
            </div>
          </ScrollAnimation>
        )
    }
}
