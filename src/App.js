import React, { Component } from 'react'
import UsernameForm from './UsernameForm'
import Discussions from './Discussions'
import steem from 'steem'
import moment from 'moment'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

class App extends Component {
  constructor() {
    super()
    steem.api.setOptions({ url: 'https://api.steemit.com' })

    this.state = {
      username: '',
      discussionCount: 10,
      discussions: []
    }

    this.handleChangeFor = this.handleChangeFor.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeFor = propName => event => {
    this.setState({[propName]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state)
    steem.api.getDiscussionsByBlog({
      limit: this.state.discussionCount,
      tag: this.state.username,
    }, (err, result) => {
      console.log('result', result)
      this.setState({ 
        discussions: result.filter(x => moment().isBefore(x.cashout_time)).reverse()
      })
    })
  }

  render() {
    return (
      <div className="App">
        <UsernameForm
          username={this.state.username}
          discussionCount={this.state.discussionCount}
          handleChangeFor={this.handleChangeFor}
          handleSubmit={this.handleSubmit}
        />
        <h4>Discussions</h4>
        <Discussions discussions={this.state.discussions} />
      </div>
    )
  }
}

export default App
