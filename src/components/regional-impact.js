import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import { Container } from "reactstrap"
import ScrollAnimation from "react-animate-on-scroll"
import RegionalOne from "../images/regional_1.png"
import RegionalTwo from "../images/regional_2.png"

export default class RegionalImpact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container fluid={true}>
        <div className="regional-impact-section" id="regional-impact">
          <ScrollAnimation animateIn="fadeIn">
            <div className="row">
              <div className="regional-1 col-xs-12 col-sm-12 col-md-12 col-lg-6 mx-auto d-none d-lg-block text-center">
                <img src={RegionalOne} alt="" id="regional-one-img" />
                <img src={RegionalTwo} alt="" id="regional-two-img" />
              </div>

              <div className="regional-2 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div class="regional-title text-center">
                  <h1>Regional Impact</h1>
                </div>
                <div class="regional-body">
                  <p>
                    Without a governing body or groundwater management plan in
                    place, groundwater resources in Texas are subject to the
                    “Rule of Capture” law. This law allows landowners to pump as
                    much water as they see fit, without any liability for
                    neighboring landowners and communities. Texas is the only
                    western state where “Rule of Capture” governs groundwater
                    use rather than “Reasonable Use.”
                  </p>
                  <p>
                    If groundwater pumping occurs at a high-volume near the
                    Amistad Reservoir, this could affect the San Felipe Springs,
                    the only surface water resource for the City of Del Rio. The
                    San Felipe Springs also supports water flow in the San
                    Felipe Creek and the Rio Grande River.
                  </p>
                  <p>
                    Downstream populations could be impacted. Val Verde County
                    contributes upwards of ⅓ of the downstream flows to the Rio
                    Grande - the primary water source for many communities south
                    of Del Rio, Texas. If any of these water resources are
                    impacted, a domino effect could take place, leaving Eagle
                    Pass and Laredo with little to no water.
                  </p>
                  <p>
                    More than 1 million people visit Val Verde County’s state
                    and federal parks for hunting, fishing, paddling and bird
                    watching — all of which are water dependent. Val Verde’s{" "}
                    <a href="http://www.drchamber.com/cvb" target="_blank">
                      $52.1 million
                    </a>{" "}
                    per year tourism industry could be at stake if water is
                    depleted from our region, leaving residents without jobs.
                  </p>
                  <p>
                    Amistad Reservoir alone creates 695 jobs in Del Rio, and San
                    Felipe Springs are the main water source for Laughlin AFB
                    which contributes an economic impact of{" "}
                    <span className="emphasis-text">$243,417,834</span> on Del
                    Rio annually.
                  </p>

                  <div className="regional-mobile text-center col-xs-12 col-sm-12 col-md-12 col-lg-6 pt-5 d-lg-none d-xl-none">
                    <img src={RegionalOne} alt="" id="regional-one-mobile" />
                    <img src={RegionalTwo} alt="" id="regional-two-mobile" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    )
  }
}
