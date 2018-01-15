import React, { Component } from 'react'

export default class UsernameForm extends Component {
  render() {
    return(
      <form 
        onSubmit={this.props.handleSubmit}
        className={"col s12"}
      >
        <div className={"row"}>
          <div className={"input-field col s6"}>
            <label>
              Enter Username:
            </label>
            <input 
              type="text" 
              value={this.props.username} 
              onChange={this.props.handleChangeFor('username')} 
            />
          </div>
          <div className={"input-field col s6"}>
            <label>
              Number of Discussion 
            </label>
            <input
              type="number"
              value={this.props.discussionCount}
              onChange={this.props.handleChangeFor('discussionCount')}
            />
          </div>
        </div>
        <div className={"row"} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            className={"btn waves-effect waves-light"} 
            type="submit" 
            name="action"
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}
