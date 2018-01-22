// @flow

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

type Props = {
  name: string,
  text: string,
  url: string,
  class: string,
}

export default class MenuItem extends Component<Props> {
  constructor() {
    super()
  }

  render() {
    return (
      <span className="menu-item">
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          <FontAwesome
            className={"menu-item-icon " + this.props.class}
            name={this.props.name}
            size="4x"
            tag="i"
            title={this.props.text}
          />
        </a>
      </span>
    )
  }
}
