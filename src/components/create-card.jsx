import React from "react";

export default class CreateCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = { question: "", answer:"" }
    this.reset = this.reset.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  reset() {
    this.setState({ question: "", answer: "" })
    this.props.setPosition("view-cards")
  }

  handleSave(event) {
    event.preventDefault()
    this.props.newCard(this.state)
    this.reset()
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <div className="create-card-container">
        <h1 className="text-center">Create New Card</h1>
        <form>
          <div className="form-group">
            <label htmlFor="question">Question:</label>
            <textarea className="form-control" name="question" id="question" cols="30" rows="5" value={this.state.question} onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
              <label htmlFor="answer">Answer:</label>
            <textarea className="form-control" name="answer" id="answer" cols="30" rows="5" value={this.state.answer} onChange={this.handleChange}></textarea>
          </div>
          <div className="form-button-container float-right mt-2">
            <button type="reset" className="btn btn-outline-danger mr-3" onClick={this.reset}>Cancel</button>
            <button type="submit" className="btn btn-outline-primary" onClick={this.handleSave}>Save Card</button>
          </div>
        </form>
      </div>
    )
  }
}
