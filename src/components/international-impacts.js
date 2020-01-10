import React from "react"
// import "../scss/components/_international-impacts.scss"

export default class InternationalImpacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
          <div className="international-impacts-section w-100" id="international-impacts">
            <div className="row">
              <div className="international-1 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h1>International Impacts</h1>
                <p>
                  Shared unit of analysis emerging, B-corp; accessibility social
                  return on investment black lives matter inspiring thought
                  leadership. Technology co-create, sustainable segmentation
                  external partners. To blended value radical the social return
                  on investment living a fully ethical life uplift initiative
                  energize transparent indicators parse. Our work collaborative
                  cities shine revolutionary radical inspirational natural
                  resources think tank. Corporate social responsibility uplift,
                  disrupt LGBTQ+ issue outcomes thought leadership unprecedented
                  challenge unprecedented challenge. Black lives matter,
                  co-creation, collaborative consumption, LGBTQ+ activate deep
                  dive data bandwidth thought leadership bandwidth. Thought
                  leadership, boots on the ground issue outcomes strategize move
                  the needle paradigm impact capacity building greenwashing
                  empathetic black lives matter empower communities.
                </p>
              </div>
              <div className="international-2 col-xs-12 col-sm-12 col-md-6 col-lg-6 pt-5 mx-auto">
                <img src="https://via.placeholder.com/700x350/c2dffc/808080" />
              </div>
            </div>
            <div className="international-quote-section row w-100">
              <h3>
                "If we pump too much water from our aquifers, our rivers and
                streams can go dry."
              </h3>
            </div>
          </div>
        )
    }
}
