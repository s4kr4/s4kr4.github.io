import React, { Component } from 'react'

import Menu from './Menu'
import GitHubList from './GitHubList'
import QiitaList from './QiitaList'
import '../../stylesheets/App.scss'
import icon from '../../images/icon-white-250.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={icon} className="App-logo" alt="logo" />
          <h2>S4KR4</h2>
        </div>
        <Menu />
        <div className="flexbox">
          <GitHubList />
          <QiitaList />
        </div>
      </div>
    )
  }
}

export default App
