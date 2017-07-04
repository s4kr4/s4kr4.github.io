import React, { Component } from 'react'
import axios from 'axios'

import OGP from './ogp'
import '../../stylesheets/GitHubList.scss'

export default class GitHubList extends Component {
  constructor() {
    super()

    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/s4kr4/repos')
      .then(res => {
        res.data.map(d => {
          this.setState({
            repos: this.state.repos.concat(d)
          })
        })
      })
  }

  render() {
    return (
      <li className="flexbox-item">
        GitHub
        <ul className="github-list">
          {this.state.repos.map(repo => {
            return(
              <OGP
                key={repo.id}
                url={repo.html_url}
              />
            )
          })}
        </ul>
      </li>
    )
  }
}
