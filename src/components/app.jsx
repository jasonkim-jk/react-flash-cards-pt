import React from 'react'
import ViewCards from './view-cards'
import ReviewCards from "./review-cards";
import CreateCard from "./create-card";
import Nav from './nav'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { view: 'view-cards', cards: [], activeCard: { index: 0, card: {}} }
    this.setView = this.setView.bind(this)
    this.addCard = this.addCard.bind(this)
    this.setActiveCard = this.setActiveCard.bind(this)
  }

  setView(value) {
    this.setState({ view: value })
  }

  getView() {
    switch(this.state.view) {
      case 'create-card':
        return <CreateCard newCard={this.addCard} setPosition={this.setView}/>
      case 'review-cards':
        return <ReviewCards activeCard={this.state.activeCard} setActive={this.setActiveCard}/>
      case 'view-cards':
        return <ViewCards cards={this.state.cards} removeCard={this.deleteCard}/>
      default:
        return null;
    }
  }

  saveCard() {
    localStorage.setItem('flash-cards', JSON.stringify(this.state.cards))
  }

  addCard(card) {
    this.setState({ cards: this.state.cards.concat(card) }, () => this.saveCard())
  }

  deleteCard(card) {
    console.log("remove: ", card)
  }

  setActiveCard(cardIndex) {
    if (this.state.cards.length === 0) return;

    if (cardIndex > this.state.cards.length - 1) {
      cardIndex = 0
    } else if (cardIndex < 0) {
      cardIndex = this.state.cards.length - 1
    }

    this.setState({ activeCard: { index: cardIndex, card: this.state.cards[cardIndex]}})
  }

  render() {
    console.log("Cards From App: ", this.state.cards)
    return (
      <div>
        <Nav setView={this.setView} currentView={this.state.view}/>
        {this.getView()}
      </div>
    )
  }
}
