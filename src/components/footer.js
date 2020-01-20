import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import logoSVG from "./../images/waterLogo.svg"

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div className="footer-section blue-background container-fluid" id="footer">
            <div className="row">
              <div className="col-12">
                <img src={logoSVG} alt="logo" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <h4>Learn More</h4>
                <p><a href="#">Devils River Conservancy</a></p>
                <p><a href="#">Don't Blow It</a></p>
                <p><a href="#">Membership</a></p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <h4>Reach Out</h4>
                <p><a href="#">(210)-XXX-XXXX</a></p>
                <p><a href="#">contact@devilsriver.com</a></p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <h4>Stay Social</h4>
              </div>
            </div>
          </div>
        )
    }
}