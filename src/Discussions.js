import React, { Component } from 'react'
import DiscussionItem from './DiscussionItem'

export default class Dicussions extends Component {
  render() {
    return(
      <table>
        <thead>
          <tr>
            <td style={{ width: '300px' }}>Title</td>
            <td>Created</td>
            <td>Cashout Time</td>
            <td>Countdown</td>
          </tr>
        </thead>
        <tbody>
          {this.props.discussions.map(x =>
            <DiscussionItem
              key={x.id}
              discussion={x}
            />
          )}
        </tbody>
      </table>
    )
  }
}
