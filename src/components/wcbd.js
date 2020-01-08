import React from "react"
import "../styles/components/_wcbd.scss"

export default class WhatCanBeDone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="what-can-be-done row">
                <div className="col-12">
                    <h3>What Can Be Done?</h3>
                </div>
                <div className="col-4">
                    <h4>Contact your legislator</h4>
                    <p>Demand that your representative has the right stance on these important water issues.</p>
                    <button>Contact</button>
                </div>
                <div className="col-4">
                    <h4>Attend Community Events</h4>
                    <p>Implore your legislator to support groundwater management and protection.</p>
                    <button>Events</button>
                </div>
                <div className="col-4">
                    <h4>Become an Advocate</h4>
                    <p>To learn more about the Devils River Conservancy and ways to suport mindful water conservation efforts, please visit <a>devilsriverconservancy.org</a></p>
                    <button>DRC</button>
                </div>
            </div>
        )
    }
}