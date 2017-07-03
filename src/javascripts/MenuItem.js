'use strict'

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class MenuItem extends Component {
  render() {
    return (
      <span className="menu-item">
        <a href={this.props.site.url} target="_blank">
          <FontAwesome
            className="menu-item-icon"
            name={this.props.site.name}
            size="4x"
            tag="i"
            title={this.props.site.text}
          />
        </a>
      </span>
    )
  }
}

MenuItem.propTypes = {
  site: React.PropTypes.object.isRequired,
}

