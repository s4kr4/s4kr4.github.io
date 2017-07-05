import React, { Component } from 'react'
import axios from 'axios'

import GitHubItem from './GitHubItem'
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
      <div className="flexbox-item github">
        GitHub
        <div className="github-list">
          {this.state.repos.map(repo => {
            return(
              <GitHubItem
                key={repo.id}
                name={repo.full_name}
                url={repo.html_url}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
