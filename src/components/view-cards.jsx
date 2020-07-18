import React from "react";

export default class ViewCards extends React.Component {
  constructor(props) {
    super(props)
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
            <div className="card-footer bg-secondary">
              <p className="text-center m-0"><i className="fas fa-trash-alt"></i></p>
            </div>
          </div>
        </div>
      )
    )

    return (
      <div className="view-card-container">
        <h1 className="text-center mb-3">My Cards</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {cardDeck}
        </div>
      </div>
    )
  }
}
