import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Works from './Works'

const Container = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Works />
      <Footer />
    </div>
  )
}
export default Container
