//@flow
import * as React from 'react'
import { Component } from 'react'

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
      <li className="item qiita-item">
        <a href={this.props.url} target="_blank">{this.props.title}</a>
      </li>
    )
  }
}
