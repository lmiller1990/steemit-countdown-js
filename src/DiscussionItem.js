import React, { Component } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

export default class DicussionItem extends Component {
  constructor(props) {
    super(props)

    this.getTimeToPayout = this.getTimeToPayout.bind(this)
    this.state = {
      untilPayout: this.getTimeToPayout()
    }
  } 

  componentDidMount() {
    setInterval(() => {
      this.setState({ untilPayout: this.getTimeToPayout() })
    }, 1000)
  }

  getTimeToPayout() {
    return moment.duration(
      moment.utc(this.props.discussion.cashout_time).local()
      .diff(moment().utc().local())
    )
    .format('DD HH:mm:ss')
  }

  render() {
    return(
      <tr>
        <td>
          <a href={'https://steemit.com' + this.props.discussion.url}>{this.props.discussion.title}</a>
        </td>
        <td>
          {moment.utc(this.props.discussion.created).local().format('MMM DD HH:mm a')}
        </td>
        <td>
          {moment.utc(this.props.discussion.cashout_time).local().format('MMM DD HH:mm a')}
        </td>
        <td>
          {this.state.untilPayout}
        </td>
      </tr>
    )
  }
}
