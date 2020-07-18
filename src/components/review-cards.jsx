import React from "react";

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = { displaySide: "question" }
    this.nextCard = this.nextCard.bind(this)
    this.previousCard = this.previousCard.bind(this)
  }

  componentDidMount() {
    this.props.setActive(0)
  }

  nextCard() {
    const nextIndex = this.props.setActive.index + 1;
    this.props.setActive(nextIndex)
    this.setState({displaySide: "question"})

  }

  previousCard() {
    const prevIndex = this.props.setActive.index - 1;
    this.props.setActive(prevIndex)
    this.setState({displaySide: "question"})
  }

  render() {
    const qna = this.state.displaySide === "question" ? this.props.activeCard.card.question : this.props.activeCard.card.answer

    return (
      <div className="review-card-container">
        <h1 className="text-center mb-3">Review Cards</h1>
        <div className="review-card">
          <h2>{qna}</h2>
          <a href="#" className="previous" onClick={this.previousCard}>&#10094;</a>
          <a href="#" className="next" onClick={this.nextCard}>&#10095;</a>
        </div>
      </div>
    )
  }
}
