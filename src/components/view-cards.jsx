import React from "react";

export default class ViewCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal : "modal-none", selectedCard: {}, index: -1 }
    this.handleErase = this.handleErase.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  handleErase(event) {
    const id = parseInt(event.target.id);
    if (this.state.showModal === "modal-none") {
      this.setState({ showModal: "modal-show", selectedCard: this.props.cards[id], index: id })
    } else {
      this.setState({ showModal: "modal-none" })
    }
  }

  handleCancel() {
    this.setState({ showModal: "modal-none", selectedCard: {}, index: -1 })
  }

  handleConfirm() {
    this.handleCancel()
    this.props.removeCard(this.state.index)
  }

  render() {
    const cardDeck = (
      this.props.cards.map((card, index) =>
        <div className="col mb-4" key={index}>
          <div className="card text-white text-white h-100">
            <div className="card-header bg-secondary">
              <h5 className="card-title">Question:</h5>
              <p className="card-text">{card.question}</p>
            </div>
            <div className="card-body bg-dark">
              <h5 className="card-title">Answer:</h5>
              <p className="card-text">{card.answer}</p>
            </div>
            <div className="card-footer bg-secondary text-center">
              <span className="text-center m-0 mr-3"><i className="fas fa-edit" id={index}></i></span>
              <span className="text-center m-0"><i className="fas fa-trash-alt" id={index} onClick={this.handleErase}></i></span>
            </div>
          </div>
        </div>
      )
    )

    const modal = (
      <div className={`modal ${this.state.showModal}`}>
        <div className="modal-content">
          <div className="modal-card-container">
            <h3>Are you sure you want to delete this card?</h3>
            <h5 className="pl-3 mt-3"><b>Q: </b>{`${this.state.selectedCard.question}`}</h5>
            <h5 className="pl-3 mt-3"><b>A: </b>{`${this.state.selectedCard.answer}`}</h5>
          </div>
          <div className="button-container mt-2">
            <button className="btn btn-outline-danger btn-sm mr-3" onClick={this.handleCancel}>Cancel</button>
            <button className="btn btn-outline-primary btn-sm mr-3" onClick={this.handleConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    )

    return (
      <div className="view-card-container">
        <h1 className="text-center mb-3">My Cards</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {cardDeck}
        </div>
        {modal}
      </div>
    )
  }
}
