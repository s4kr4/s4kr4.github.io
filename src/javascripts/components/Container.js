import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import GitHubList from './GitHubList'
import QiitaList from './QiitaList'

export default class Container extends Component {
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
