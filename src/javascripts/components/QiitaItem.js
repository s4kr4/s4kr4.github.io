//@flow
import React, { Component } from 'react'

export default class QiitaItem extends Component {
  props: {
    title: string,
    url: string,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="qiita-item">
        <a href={this.props.url} target="_blank">{this.props.title}</a>
      </div>
    )
  }
}