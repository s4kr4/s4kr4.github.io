import React, { Component } from 'react'
import axios from 'axios'

import OGP from './ogp'
import '../../stylesheets/QiitaList.scss'

export default class QiitaList extends Component {
  constructor() {
    super()

    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    axios.get('https://qiita.com/api/v2/users/s4kr4/items')
      .then(res => {
        res.data.map(d => {
          this.setState({
            entries: this.state.entries.concat(d)
          })
        })
      })
  }

  render() {
    return (
      <li className="flexbox-item">
        Qiita
        <ul className="qiita-list">
          {this.state.entries.map(entry => {
            return(
              <OGP
                key={entry.id}
                url={entry.url}
              />
            )
          })}
        </ul>
      </li>
    )
  }
}
