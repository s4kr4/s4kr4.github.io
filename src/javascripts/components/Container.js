import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import GitHubList from './GitHubList'
import QiitaList from './QiitaList'

const Container = () => {
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
export default Container
