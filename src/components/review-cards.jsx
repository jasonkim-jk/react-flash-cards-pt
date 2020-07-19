import React from "react";
import ProgressBar from './progress-bar'

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = { displaySide: "question" }
    this.nextCard = this.nextCard.bind(this)
    this.previousCard = this.previousCard.bind(this)
    this.flipCard = this.flipCard.bind(this)
  }

  componentDidMount() {
    this.props.setActive(0)
  }

  nextCard() {
    const nextIndex = this.props.activeCard.index + 1;
    this.setState({displaySide: "question"})
    this.props.setActive(nextIndex)

  }

  previousCard() {
    const prevIndex = this.props.activeCard.index - 1;
    this.setState({displaySide: "question"})
    this.props.setActive(prevIndex)
  }

  flipCard() {
    const flip = this.state.displaySide === "question" ? "answer" : "question"
    this.setState({ displaySide: flip})
  }

  render() {
    const qna = this.state.displaySide === "question" ? this.props.activeCard.card.question : this.props.activeCard.card.answer
    const percent = Math.round(((this.props.activeCard.index + 1)/ this.props.cards.length).toFixed(2) * 100) + '%';

    return (
      <div className="review-card-container">
        <h1 className="text-center mb-3">Review Cards</h1>
        <ProgressBar percent={percent} />
        <div className="review-card align-middle">
          <span className={`text-center ${this.state.displaySide}`} onClick={this.flipCard}>{qna}</span>
          <a href="#" className="previous" onClick={this.previousCard}>&#10094;</a>
          <a href="#" className="next" onClick={this.nextCard}>&#10095;</a>
        </div>
      </div>
    )
  }
}
