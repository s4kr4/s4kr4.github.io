import React, {Component} from 'react'
import axios from 'axios'

import ItemList from './ItemList'

export default class QiitaList extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    axios.get('https://qiita.com/api/v2/users/s4kr4/items')
      .then(res => {
        res.data.map(data => {
          this.setState({
            items: this.state.items.concat({
              id: data.id,
              name: data.title,
              url: data.url,
            })
          })
        })
      })
  }

  render() {
    return <ItemList source="Qiita" items={this.state.items} />
  }
}
