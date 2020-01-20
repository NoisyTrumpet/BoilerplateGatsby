import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import ScrollAnimation from "react-animate-on-scroll"

export default class EcologicalImpacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div className="ecological-impact-section">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
                <img
                  src="https://via.placeholder.com/350/459af4/808080"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/350/459af4/808080"
                  alt=""
                />
                <p className="ecological-quote">
                  "The threat of worsening drought, in concert with a potential
                  boost in groundwater development, could exacerbate the loss of
                  these aquatic habitats, thereby increasing the rate of species
                  decline and leading to critical groundwater problems in the
                  future."
                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h1>Ecological Impact</h1>
                <p>
                  Several threatened and endangered aquatic species call Val
                  Verde County home. These include:
                </p>
                <ul>
                  <li>The Texas Hornshell Mussel</li>
                  <li>The Devils River Minnow</li>
                  <li>Proserpine Shiner</li>
                  <li>Rio Grande Darter</li>
                  <li>The Conchos Pupfish</li>
                  <li>Mexican Blindcat</li>
                </ul>
                <p>
                  Streamwater requirements for these species are linked to
                  spring discharges and groundwater conditions. In accordance
                  with the Endangered Species Act, if we do not protect the
                  required environmental flows in our streams, this could cause
                  federal intervention in local water management and encroach
                  upon private property rights.
                </p>
              </div>
            </div>

            <div className="row comanche-springs">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h4>"It's Happened Before, It Can Happen To Us!"</h4>
                <p>
                  Once referred to as the "Spring City" of Texas, the
                  over-pumping of a prominent water resource has happened before
                  in Fort Stockton. Comanche Springs was one of the biggest
                  springs in West Texas and the 8th largest in Texas.
                </p>
                <p>
                  That came to an abrupt end in the 1950s, when new well
                  developments and excessive groundwater pumping across the
                  Belding Draw caused the springs to run dry. No water in the
                  Comanche Springs meant no water for the irrigation canals.
                  This led to the end of farming efforts for many.
                </p>
                <p className="comanche-quote">
                  Let's make sure history doesn't repeat itself in Val Verde
                  County!
                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
                <h3>Comanche Springs Case Study</h3>
                <img
                  src="https://via.placeholder.com/600x350/c2dffc/808080"
                  alt=""
                />
              </div>
            </div>
          </div>
        )
    }
}