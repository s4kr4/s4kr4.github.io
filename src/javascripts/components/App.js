import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import GitHubList from './GitHubList'
import QiitaList from './QiitaList'
import '../../stylesheets/App.scss'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Menu />
        <div className="flexbox">
          <GitHubList />
          <QiitaList />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
