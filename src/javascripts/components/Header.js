import * as React from 'react'
import { Component } from 'react'

import icon from '../../images/icon-white-250.png'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={icon} className="logo" alt="logo" />
        <h2>S4KR4</h2>
      </div>
    )
  }
}
