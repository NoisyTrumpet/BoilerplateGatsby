import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import ScrollAnimation from "react-animate-on-scroll";

export default class RegionalImpacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div className="regional-impacts-section row" id="regional-impacts">
            <div className="regional-1 col-xs-12 col-sm-12 col-md-12 col-lg-6 pt-5 mx-auto d-none d-lg-block text-center">
              <ScrollAnimation animateIn="slideInLeft">
                <img
                  src="https://via.placeholder.com/600x350/c2dffc/808080"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/600x350/c2dffc/808080"
                  alt=""
                />
              </ScrollAnimation>
            </div>
            <div className="regional-2 col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <ScrollAnimation animateIn="slideInRight">
                <h1>Regional Impact</h1>
                <p>
                  If a high-volume of groundwater pumping would occur near the
                  Amistad Reservoir, this could affect the San Felipe Springs,
                  the only surface water resource for the City of Del Rio. The
                  San Felipe Springs also supports water flow in the San Felipe
                  Creek and the Rio Grande River.
                </p>
                <p>
                  This would create a domino effect, leaving Eagle Pass and
                  Laredo with little to no water. Tourism in Val Verde County{" "}
                  <span>generates $25 million</span> per year. More than 1
                  million people visit Val Verde County's state and federal
                  parks for hunting, fishing, paddling, and bird watching.
                </p>
                <p>
                  If water is depleted from these rivers, it can severely impact
                  overall tourism in the region and leave many residents without
                  jobs.
                </p>
                <img
                  src="https://via.placeholder.com/400x400/c2dffc/808080"
                  alt="regional placeholder one mobile" className="regional-map-img"
                />
              </ScrollAnimation>
            </div>
            <div className="regional-mobile col-xs-12 col-sm-12 col-md-12 col-lg-6 pt-5 d-lg-none d-xl-none">
              <img
                src="https://via.placeholder.com/600x350/c2dffc/808080"
                alt="regional placeholder one mobile"
              />
              <img
                src="https://via.placeholder.com/600x350/c2dffc/808080"
                alt="regional placeholder two mobile"
              />
            </div>
          </div>
        )
    }
}
