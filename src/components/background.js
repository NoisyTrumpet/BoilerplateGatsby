import React from "react"
import bootstrap from "bootstrap"
import '../styles/components/_background.scss'

export default class Background extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render () {
        return (
            <div className="background-section row" id="background">
                <div className="background-1 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h1>Background</h1>
                    <p>White paper effective, correlation, rubric, leverage social enterprise data inspire; inclusive collaborate state of play problem-solvers. Justice, silo families indicators revolutionary academic energize systems thinking ideate. Because; co-creation agile; mobilize technology strategy.</p>
                    <p>Resist energize venture philanthropy think tank, resist social entrepreneurship ecosystem, innovate activate; social return on investment storytelling do-gooder movements. Venture philanthropy radical efficient catalyze, black lives matter program areas targeted fairness. Compassion energize LGBTQ+ best practices, strengthening infrastructure optimism emerging; resilient empathetic effective corporate social responsibility. Impact justice targeted, optimism dynamic families, thought leader indicators. Milestones thought provoking silo, ecosystem impact her body her rights natural resources living a fully ethical life strengthening infrastructure social entrepreneurship.</p>
                    <p>Problem-solvers do-gooder transparent milestones leverage fairness. Because move the needle, social innovation disrupt milestones, sustainable to, strategize; policymaker empower, mass incarceration think tank problem-solvers natural resources. Philanthropy; shine efficient, theory of change social return on investment revolutionary benefit corporation contextualize progress communities parse leverage or.</p>
                    <p>Cultivate the or inclusive, design thinking but global granular communities segmentation incubator policymaker, problem-solvers contextualize. Then game-changer preliminary thinking innovate global thought partnership thought leader. Venture philanthropy, social impact correlation paradigm thought provoking our work, corporate social responsibility benefit corporation society because social innovation transparent strategize.</p>
                </div>

                <div className="background-2 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <img src="https://via.placeholder.com/400/c2dffc/808080" />
                    <img src="https://via.placeholder.com/350/459af4/808080" />                
                </div>

                <div className="background-quote-section row w-100">
                    <h3>
                        "Without water in Val Verde County, what would happen?"
                    </h3>
                </div>
            </div>
        )
    }
}
