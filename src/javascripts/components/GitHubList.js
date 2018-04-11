import React, { Component } from 'react'
import axios from 'axios'

import ItemList from './ItemList'

export default class GitHubList extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/s4kr4/repos', {
      params: {
        sort: 'pushed'
      }
    })
      .then(res => {
        res.data.map(data => {
          let type = ''
          if (data.fork) {
            type = 'fork'
          } else {
            type = 'repo'
          }

          this.setState({
            items: this.state.items.concat({
              id: data.id,
              name: data.full_name,
              url: data.html_url,
              type: type,
            })
          })
        })
      })
  }

  render() {
    return pug`
      ItemList(source="GitHub" items=this.state.items)
    `
  }
}
