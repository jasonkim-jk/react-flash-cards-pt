import React from "react";

export default class CreateCards extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="create-card-container">
        <h1 className="text-center">Create New Card</h1>
        <form>
          <div className="form-group">
            <label htmlFor="question">Question:</label>
            <textarea className="form-control" name="question" id="question" cols="30" rows="5"></textarea>
          </div>
          <div className="form-group">
              <label htmlFor="answer">Answer:</label>
            <textarea className="form-control" name="answer" id="answer" cols="30" rows="5"></textarea>
          </div>
          <div className="form-button-container float-right mt-2">
            <button type="reset" className="btn btn-outline-danger mr-3">Cancel</button>
            <button type="submit" className="btn btn-outline-primary">Save Card</button>
          </div>
        </form>
      </div>
    )
  }
}
