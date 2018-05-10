import * as React from 'react'

import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

export const Container = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}
