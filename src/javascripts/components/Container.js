import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Works from './Works'

const Container = () => {
  return pug`
    .container
      Header
      Menu
      Works
      Footer
  `
}
export default Container
