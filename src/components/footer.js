import React from "react"
import "../styles/components/_footer.scss"

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="footer-section">
                <div className="row">
                    <div className="col-12">
                        <h1>WATER.</h1>
                        <h3>The Consequences?</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h4>Learn More</h4>
                        <p>Devils River Conservancy</p>
                        <p>Don't Blow It</p>
                        <p>Membership</p>
                    </div>
                    <div className="col-4">
                        <h4>Reach Out</h4>
                        <p>(210)-XXX-XXXX</p>
                        <p>contact@devilsriver.com</p>
                    </div>
                    <div className="col-4">
                        <h4>Stay Social</h4>
                    </div>
                </div>
            </div>
        )
    }
}