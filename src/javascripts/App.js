import React, { Component } from 'react'
import icon from '../images/icon-white-250.png'

import Menu from './Menu.js'
import GitHubList from './components/GitHubList'
import QiitaList from './components/QiitaList'
import '../stylesheets/App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={icon} className="App-logo" alt="logo" />
          <h2>S4KR4</h2>
        </div>
        <Menu />
        <ul className="flexbox">
          <GitHubList />
          <QiitaList />
        </ul>
      </div>
    )
  }
}

export default App
