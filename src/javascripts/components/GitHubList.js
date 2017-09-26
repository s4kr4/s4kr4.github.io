import React, { Component } from 'react'
import axios from 'axios'

import GitHubItem from './GitHubItem'

export default class GitHubList extends Component {
  constructor() {
    super()

    this.state = {
      repos: [],
      marker: 10,
    }

    this.loadMoreList = this.loadMoreList.bind(this)
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/s4kr4/repos', {
      params: {
        sort: 'pushed'
      }
    })
      .then(res => {
        res.data.map(d => {
          this.setState({
            repos: this.state.repos.concat(d)
          })
        })
      })
  }

  render() {
    const items = this.state.repos.map(repo => {
      return(
        <GitHubItem
          className="item"
          key={repo.id}
          name={repo.full_name}
          url={repo.html_url}
          fork={repo.fork}
        />
      )
    })

    return (
      <div className="flexbox-item">
        <div className="flexbox-title">GitHub</div>
        <ul className="item-list github-list">
          {
            items.slice(0, this.state.marker)
          }
          {
            items.length > this.state.marker
              ? <li className="item load-menu" onClick={this.loadMoreList}>MORE</li>
              : ''
          }
        </ul>
      </div>
    )
  }

  loadMoreList() {
    this.setState({
      marker: this.state.marker + 10
    })
  }
}
