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
    padding: 20px;
    background-color: #222;
    color: white;
  }

  .header-logo {
    height: 80px;

    animation: swing-logo 1 0.5s ease;
    animation-delay: 1.5s;
  }

  .header-title {
    font-size: 1.5em;
  }

  @keyframes swing-logo {
    from {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(25deg);
    }
    75% {
      transform: rotate(-25deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`
