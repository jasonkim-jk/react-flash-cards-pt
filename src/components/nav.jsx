import React from 'react'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { "view-cards": "active", "review-cards": "", "create-card": "" }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ "view-cards": "", "review-cards": "", "create-card": "" })
    this.setState({[event.target.id] : "active"})
  }

  render() {
    const viewClassName = "nav-link " + this.state["view-cards"];
    const reviewClassName = "nav-link " + this.state["review-cards"];
    const createClassName = "nav-link " + this.state["create-card"];

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
