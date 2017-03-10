import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class MenuItem extends Component {
  render() {
    return (
      <span className="menu-item">
        <a href={this.props.url} target="_blank">
          <FontAwesome
            className="menu-item-icon"
            name={this.props.name}
            size="4x"
            tag="i"
            title={this.props.text}
          />
        </a>
      </span>
    );
  }
}

