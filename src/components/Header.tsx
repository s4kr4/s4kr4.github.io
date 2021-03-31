import Link from 'next/link'
import * as React from 'react'

import styled from 'styled-components'

const Header: React.FC<IProps> = ({ className }) => (
  <div className={className}>
    <header>
      <img
        src="/images/icon-white-250.png"
        alt="icon"
        className="header-logo"
        width={80}
        height={80}
      />
      <h1>s4kr4</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/skills">
          <a>Skills</a>
        </Link>{' '}
        |{' '}
        <Link href="/works">
          <a>Works</a>
        </Link>
      </nav>
    </header>
  </div>
)

export default styled(Header)`
  width: 100%;
  background-color: #222;

  header {
    padding: 20px 20px 5px;
    color: #aaa;
  }

  h1 {
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
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
