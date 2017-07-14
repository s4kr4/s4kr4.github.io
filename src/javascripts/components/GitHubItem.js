//@flow
import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class GitHubItem extends Component {
  props: {
    name: string,
    url: string,
    fork: boolean,
  }

  constructor(props) {
    super(props)

    this.forkIcon = this.forkIcon.bind(this)
  }

  forkIcon() {
    return (
      <FontAwesome
        className="repo-fork-icon"
        name="code-fork"
        size="lg"
        tag="i"
      />
    )
  }

  render() {
    return (
      <li className="item github-item">
        <a href={this.props.url} target="_blank">{this.props.name}</a>
        {this.props.fork
          ? this.forkIcon()
          : ""
        }
      </li>
    )
  }
}
