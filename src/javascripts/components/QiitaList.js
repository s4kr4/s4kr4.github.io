import React, {Component} from 'react'
import axios from 'axios'

import ListItem from './ListItem'

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
    if (this.state.entries.length !== 0) {
      return (
        <div className="flexbox-item">
          <div className="flexbox-title">Qiita</div>
          <ul className="item-list qiita-list">
            {this.state.entries.map(entry => {
              return(
                <ListItem
                  key={entry.id}
                  name={entry.title}
                  url={entry.url}
                />
              )
            })}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }
}
