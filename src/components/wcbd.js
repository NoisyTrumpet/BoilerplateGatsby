import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
import legislatorImg from "./../images/capitol.svg"
import communityImg from "./../images/partner.svg"
import advocateImg from "./../images/charity.svg"

export default class WhatCanBeDone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <ScrollAnimation animateIn="fadeIn">
            <div className="what-can-be-done row" id="what-can-be-done">
              <div className="col-12">
                <h3>What can be done?</h3>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <img src={legislatorImg} id="legislator-img" alt="" />
                <h4>Contact your legislator</h4>
                <p>
                  Demand that your representative has the right stance on these
                  important water issues.
                </p>
                <button>Contact</button>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <img src={communityImg} id="community-img" alt="" />
                <h4>Attend Community Events</h4>
                <p>
                  Implore your legislator to support groundwater management and
                  protection.
                </p>
                <button>Events</button>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <img src={advocateImg} id="advocate-img" alt="" />
                <h4>Become an Advocate</h4>
                <p>
                  To learn more about the Devils River Conservancy and ways to
                  suport mindful water conservation efforts, please visit{" "}
                  <a>devilsriverconservancy.org</a>
                </p>
                <button>DRC</button>
              </div>
            </div>
          </ScrollAnimation>
        )
    }
}