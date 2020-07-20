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
      <div className="review-card-container my-3 mx-auto w-75">
        <h1 className="text-center mb-3">Review Cards</h1>
        <ProgressBar percent={percent} />
        <div className="review-card position-relative d-table" style={{width: '100%', height:'400px'}}>
          <span className={`${this.state.displaySide} text-center d-table-cell align-middle`}
            style={{maxWidth: '95%', fontSize: '2rem', padding: '4rem', borderRadius: '5px'}}
            onClick={this.flipCard}>{qna}</span>
          <a href="#" className="previous position-absolute p-3 text-decoration-none"
            style={{left: 0, top: '33%', fontSize: '4rem', cursor: 'pointer'}}
            onClick={this.previousCard}>&#10094;</a>
          <a href="#" className="next position-absolute p-3 text-decoration-none"
            style={{right: 0, top: '33%', fontSize: '4rem', cursor: 'pointer'}}
            onClick={this.nextCard}>&#10095;</a>
        </div>
      </div>
    )
  }
}
