import * as React from 'react'

import Header from './Header'
import Menu from './Menu'
import Works from './Works'
import Footer from './Footer'

interface Props {
  className?: string
}

const Container: React.SFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Header />
      <Menu />
      <Works />
      <Footer />
    </div>
  )
}

export default Container
