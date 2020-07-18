import React from 'react'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.setView(event.target.id)
  }

  render() {
    const viewClassName = (this.props.currentView === "view-cards" ? "active " : "") + "nav-link"
    const reviewClassName = (this.props.currentView === "review-cards" ? "active " : "") + "nav-link"
    const createClassName = (this.props.currentView === "create-card" ? "active " : "") + "nav-link"

    return (
      <div className="mt-3 mr-3">
        <ul className="nav nav-pills justify-content-end">
          <li className="nav-item">
            <a className={viewClassName} href="#" id="view-cards" onClick={this.handleClick}>View Cards</a>
          </li>
          <li className="nav-item">
            <a className={reviewClassName} href="#" id="review-cards" onClick={this.handleClick}>Review</a>
          </li>
          <li className="nav-item">
            <a className={createClassName} href="#" id="create-card" onClick={this.handleClick}>Create Card</a>
          </li>
        </ul>
      </div>
    )
  }
}
