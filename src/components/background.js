import React from "react"
import '../scss/style.scss'
import '../scss/main.scss'
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
import BackgroundOne from "../images/background_1.png"

export default class Background extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render () {
        return (
          <div className="background-section row" id="background">
            <div className="background-1 col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <ScrollAnimation animateIn="slideInLeft" delay="1">
                <h1>Background</h1>
                <p>
                  Val Verde County is a diverse and unique region that is home to several independent watersheds including the Devils River, Rio Grande River, Amistad Reservoir, Pecos River and San Felipe Creek. These watersheds are fed by groundwater from the Edward-Trinity Aquifer. Widely considered as abudant and pure, this natural resource has drawn attention from several large companies that look to excessively exploit and export our water for commercial use.
                </p>
                <p>
                  Unfortunately, there is no regulation in Texas for groundwater pumping due to the "Rule of Capture" law. This law allows landowners to pump as much water as they see fit, without any liability for neighboring landowners and communities. As a result, this may deplete the supply of water altogether from our rivers, creeks, and streams.
                </p>
                <p>
                  Without water in Val Verde County, what could happen? Join the Devils River Conservancy in supporting smart groundwater use and the creation of river, creek, and spring flow standards to ensure water is conserved for future generations of Texans.
                </p>
                <p>
                  If we neglect to properly conserve and manage this precious resource it could lead to several detrimental impacts such as...
                </p>
              </ScrollAnimation>
            </div>

            <div className="background-2 col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <ScrollAnimation animateIn="slideInRight" delay="0">
                <img
                  src={BackgroundOne}
                  alt="" className="background-image-one"
                />
              </ScrollAnimation>
              <ScrollAnimation animateIn="slideInRight" delay="10">
                <img
                  src="https://via.placeholder.com/350/459af4/808080"
                  alt="" className="background-image-two"
                />
              </ScrollAnimation>
            </div>
          </div>
        )
    }
}
