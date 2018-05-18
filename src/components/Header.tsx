import * as React from 'react'

import styled from '../styled-components'
import * as logo from '../images/icon-white-250.png'

interface Props {
  className?: string
}

const Header: React.SFC<Props> = ({ className }) => (
  <div className={className}>
    <img src={logo} className="logo" alt="logo" />
    <h2>s4kr4</h2>
  </div>
)

export default styled(Header)`
  height: 150px;
  padding: 20px;
  background: #222;
  color: white;

  h2 {
    margin: 1em 0;
    font-size: 1.5em;
    font-weight: bold;
  }

  .logo {
    animation: logo-spin infinite 20s linear;
    height: 80px;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
