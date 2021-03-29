import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from './Header'
import styled, { createGlobalStyle } from 'styled-components'
import Menu from './Menu'

type Props = {
  children?: ReactNode
  title?: string
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Inconsolata;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  footer {
    margin: 2rem 0 0 0;
  }
`

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GlobalStyle />
    <main>
      <Header />
      {/* <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/test">
          <a>Test Page</a>
        </Link>
      </nav> */}
      <Menu />
      {children}
      <footer>
        <hr />
        <span>© 2021</span>
      </footer>
    </main>
  </div>
)

export default styled(Layout)`
`
