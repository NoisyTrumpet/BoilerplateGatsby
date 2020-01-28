import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import ScrollAnimation from "react-animate-on-scroll"
import EcologicalOne from "../images/ecological_1.png"
import EcologicalTwo from "../images/ecological_2.png"

export default class EcologicalImpact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div className="ecological-impact-section" id="ecological-impact">
            <div className="row">
              <div className="ecological-1 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center d-none d-lg-block d-xl-block">
                <ScrollAnimation animateIn="slideInLeft">
                  <img src={EcologicalOne} id="ecological-one-img" alt="" />
                  <img src={EcologicalTwo} id="ecological-two-img" alt="" />
                </ScrollAnimation>
              </div>
              <div className="ecological-2 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="ecological-title text-center">
                  <h1>Ecological<br /> Impact</h1>
                </div>
                <div className="ecological-body">
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
                    In accordance with the Endangered Species Act, if we do not
                    protect the required environment and water these animals need
                    to survive, the federal government could intervene in local
                    water management and encroach upon private property rights.
                </p>
                  <div className="text-center">
                    <p className="ecological-quote">
                      "The threat of worsening drought, in concert with a potential
                      boost in groundwater development, could exacerbate the loss of
                      these aquatic habitats, thereby increasing the rate of species
                      decline and leading to critical groundwater problems in the
                      future."
                    </p>
                  </div>
                </div>
              </div>

              <div className="ecological-mobile col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <ScrollAnimation animateIn="slideInLeft">
                  <img src={EcologicalOne} id="ecological-one-mobile" alt="" />
                  <img src={EcologicalTwo} id="ecological-two-mobile" alt="" />
                </ScrollAnimation>
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
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center comanche-video">
                <h3>Comanche Springs Case Study</h3>
                  <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/XkyhB21jPSI" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                  </iframe>
              </div>
            </div>
          </div>
        )
    }
}