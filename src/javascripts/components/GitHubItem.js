//@flow
import React, { Component } from 'react'

export default class GitHubItem extends Component {
  props: {
    name: string,
    url: string,
    fork: boolean,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="github-item">
        <a href={this.props.url} target="_blank">{this.props.name}</a>
        {this.props.fork ? "(fork)" : ""}
      </div>
    )
  }
}
