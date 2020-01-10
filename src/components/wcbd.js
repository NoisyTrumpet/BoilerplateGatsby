import React from "react"
// import "../scss/components/_wcbd.scss"

export default class WhatCanBeDone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div className="what-can-be-done row" id="what-can-be-done">
            <div className="col-12">
              <h3>What can be done?</h3>
            </div>
            <div className="col-4">
              <img src="images/capitol.svg" />
              <h4>Contact your legislator</h4>
              <p>
                Demand that your representative has the right stance on these
                important water issues.
              </p>
              <button>Contact</button>
            </div>
            <div className="col-4">
              <img src="images/partner.svg" />
              <h4>Attend Community Events</h4>
              <p>
                Implore your legislator to support groundwater management and
                protection.
              </p>
              <button>Events</button>
            </div>
            <div className="col-4">
              <img src="images/charity.svg" />
              <h4>Become an Advocate</h4>
              <p>
                To learn more about the Devils River Conservancy and ways to
                suport mindful water conservation efforts, please visit{" "}
                <a>devilsriverconservancy.org</a>
              </p>
              <button>DRC</button>
            </div>
          </div>
        )
    }
}