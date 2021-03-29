import * as React from 'react'

import styled from 'styled-components'

interface IProps {
  className?: string
}

const Header: React.FC<IProps> = ({ className }) => (
  <div className={className}>
    <header>
      <img src="/images/icon-white-250.png" width={80} height={80} className="header-logo" />
      <h1>s4kr4</h1>
    </header>
  </div>
)

export default styled(Header)`
  width: 100%;
  background-color: #222;

  header {
    padding: 20px;
    color: white;
  }

  .header-logo {
    animation: swing-logo 1 0.5s ease;
    animation-delay: 1.5s;
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
