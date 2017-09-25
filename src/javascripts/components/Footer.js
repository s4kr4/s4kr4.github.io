import * as React from 'react'
import { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <hr />
        Hosted on <a href="https://github.com/s4kr4/s4kr4.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>
        <br />
        © 2017 s4kr4
      </div>
    )
  }
}
