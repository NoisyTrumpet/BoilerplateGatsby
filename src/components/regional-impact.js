import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import { Container } from 'reactstrap'
import ScrollAnimation from "react-animate-on-scroll";
import RegionalOne from "../images/regional_1.png"
import RegionalTwo from "../images/regional_2.png"

export default class RegionalImpact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <Container fluid={true}>
            <div className="regional-impact-section" id="regional-impact">
              <div className="row">
                <div className="regional-1 col-xs-12 col-sm-12 col-md-12 col-lg-6 mx-auto d-none d-lg-block text-center">
                  <ScrollAnimation animateIn="slideInLeft">
                    <img src={RegionalOne} alt="" id="regional-one-img" />
                    <img src={RegionalTwo} alt="" id="regional-two-img" />
                  </ScrollAnimation>
                </div>

                <div className="regional-2 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <ScrollAnimation animateIn="slideInRight">
                    <div class="regional-title text-center">
                      <h1>Regional Impact</h1>
                    </div>
                    <div class="regional-body">
                      <p>
                        If a high-volume of groundwater pumping would occcur near the Amistad
                        Reservoir, this could affect the San Felipe Springs, the only surface
                        water resource for the City of Del Rio.
                      </p>
                      <p>
                        Studies by the Texas Water Development Board state that the lower Rio
                        Grande gets 1/3 of its flow from Val Verde County
                      </p>
                      <ul>
                        <li>The Pecos contributes 195,000 acre feet per year</li>
                        <li>The Devils contributes 263,000 acre feet per year</li>
                        <li>Goodenough Spring contributes 103,000 acre feet per year</li>
                        <li>Cienegas Creek contributes 65,000 acre feet per year</li>
                        <li>San Felipe Creek contributes 65,000 acre feet per year</li>
                      </ul>
                      <p>
                        If any of these water resources are impacted, a domino effect could take place,
                        leaving Eagle Pass and Laredo with little to no water.
                      </p>
                      <p>
                        More than 1 million people visit Val Verde County’s state and federal
                        parks for hunting, fishing, paddling and bird watching — all of which
                        are water dependent. Val Verde’s $25 million per year tourism industry
                        could be at stake if water is depleted from our region, leaving residents
                        without jobs.
                      </p>

                      <div className="regional-mobile text-center col-xs-12 col-sm-12 col-md-12 col-lg-6 pt-5 d-lg-none d-xl-none">
                        <ScrollAnimation animateIn="slideInLeft">
                          <img src={RegionalOne} alt="" id="regional-one-mobile" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="slideInRight">
                          <img src={RegionalTwo} alt="" id="regional-two-mobile" />
                        </ScrollAnimation>
                      </div>

                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </Container>
        )
    }
}
