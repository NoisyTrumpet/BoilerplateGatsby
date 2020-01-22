import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import logoSVG from "./../images/waterLogo.png"
import twitterIcon from "./../images/003-twitter.svg"
import instagramIcon from "./../images/002-instagram.svg"
import facebookIcon from "./../images/001-facebook.svg"

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div className="footer-section container-fluid" id="footer">
            <div className="row">
              <div className="col-12">
                <img src={logoSVG} id="footer-logo" alt="logo" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <h4>Learn More</h4>
                <p>
                  <a href="#">Devils River Conservancy</a>
                </p>
                <p>
                  <a href="#">Don't Blow It</a>
                </p>
                <p>
                  <a href="#">Membership</a>
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <h4>Reach Out</h4>
                <p>
                  <a href="tel:210-XXX-XXXX">(210)-XXX-XXXX</a>
                </p>
                <p>
                  <a href="mailto:contact@devilsriver.com">
                    contact@devilsriver.com
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 social-section">
                <h4>Stay Social</h4>
                <div className="row social-contact">
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <a href="https://twitter.com/drconservancy?lang=en" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} className="socialIcon" id="twitter-icon" /></a>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <a href="https://www.facebook.com/devilsriverconservancy/" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} className="socialIcon" id="facebook-icon" /></a>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <a href="https://www.instagram.com/devils_river_conservancy/?hl=en" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} className="socialIcon" id="instagram-icon" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}