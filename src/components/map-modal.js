import React from "react"
import Modal from "react-awesome-modal"

import InternationalMap from "../images/map.png"

export default class MapModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  openModal() {
    this.setState({
      visible: true,
    })
  }

  closeModal() {
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <section className="map-modal-section">
        <input
          type="button"
          value="Expand map"
          onClick={() => this.openModal()}
        />
        <Modal
          visible={this.state.visible}
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <img src={InternationalMap} id="modal-map-img" alt="Map of south Texas water sources" />
        </Modal>
      </section>
    )
  }
}