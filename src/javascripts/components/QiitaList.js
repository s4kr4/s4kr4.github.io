import React, { Component } from 'react'
import axios from 'axios'

import QiitaItem from './QiitaItem'
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
        <ul className="qiita-list">
          {this.state.entries.map(entry => {
            return(
              <QiitaItem
                key={entry.id}
                title={entry.title}
                url={entry.url}
              />
            )
          })}
        </ul>
      </li>
    )
  }
}
