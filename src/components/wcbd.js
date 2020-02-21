import React from "react"
import "../scss/style.scss"
import "../scss/main.scss"
import "animate.css/animate.min.css"
import ScrollAnimation from "react-animate-on-scroll"
import legislatorImg from "./../images/legislator.png"
import communityImg from "./../images/community.png"
import advocateImg from "./../images/membership_final.png"

export default class WhatCanBeDone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <ScrollAnimation animateIn="fadeIn">
            <div className="what-can-be-done container-fluid text-center" id="what-can-be-done">
              <div className="row">
                <div className="wcbd-title text-center col-12">
                  <h3>What Can Be Done?</h3>
                </div>
              </div>

              <div className="row">
                <div className="wcbd-cta col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  <img src={legislatorImg} id="legislator-img" />
                  <h4>Contact Your Legislator</h4>
                  <p>
                    Demand that your representative has the right stance on these
                    important water issues.
                  </p>
                  <a href="https://wrm.capitol.texas.gov/home" target="_blank" rel="noreferrer noopener"><button>Contact</button></a>
                </div>
                <div className="wcbd-cta col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  <img src={communityImg} id="community-img" />
                  <h4>Attend Community Events</h4>
                  <p>
                    Implore your legislator to support groundwater management and
                    protection.
                  </p>
                  <a href="https://www.facebook.com/pg/devilsriverconservancy/events/?ref=page_internal" target="_blank" rel="noreferrer noopener"><button>Events</button></a>
                </div>
                <div className="wcbd-cta col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  <img src={advocateImg} id="advocate-img" />
                  <h4>Become an Advocate</h4>
                  <p>
                    To learn more about the Devils River Conservancy and ways to
                    suport mindful water conservation efforts:
                  </p>
                  <a href="https://devilsriverconservancy.org" target="_blank" rel="noreferrer noopener"><button>DRC</button></a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        )
    }
}