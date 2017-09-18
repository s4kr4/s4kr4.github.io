// @flow

import * as React from 'react'
import { Component } from 'react'
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
    this.repoIcon = this.repoIcon.bind(this)
  }

  repoIcon() {
    return (
      <FontAwesome
        className="repo-icon"
        name="book"
        size="lg"
        tag="i"
      />
    )
  }

  forkIcon() {
    return (
      <FontAwesome
        className="repo-icon"
        name="code-fork"
        size="lg"
        tag="i"
      />
    )
  }

  render() {
    return (
      <li className="item github-item">
        {this.props.fork
          ? this.forkIcon()
          : this.repoIcon()
        }
        <a href={this.props.url} target="_blank">{this.props.name}</a>
      </li>
    )
  }
}
