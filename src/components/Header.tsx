import * as React from 'react'

import * as logo from '../assets/images/icon-white-250.png'
import styled from '../styled-components'

interface IProps {
  className?: string
}

const Header: React.SFC<IProps> = ({ className }) => (
  <div className={className}>
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title">s4kr4</h1>
    </header>
  </div>
)

export default styled(Header)`
  .header {
    background-color: #222;
    color: white;
  }

  .header-logo {
    padding: 20px;
    height: 80px;
  }

  .header-title {
    font-size: 1.5em;
  }
`
