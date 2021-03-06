import React from "react";

export default class UpdateCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { question: this.props.card.question, answer: this.props.card.answer }
    this.reset = this.reset.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  reset() {
    this.setState({ question: "", answer: "" })
    this.props.cancel();
  }

  handleSave(event) {
    event.preventDefault()
    this.props.update(this.state)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <div className="update-card-container my-3 mx-auto w-75">
        <h1 className="text-center">Update Card</h1>
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
            <button type="reset" className="btn btn-outline-danger mr-3 px-4" onClick={this.reset}>Cancel</button>
            <button type="submit" className="btn btn-outline-primary" onClick={this.handleSave}>Save Card</button>
          </div>
        </form>
      </div>
    )
  }
}
