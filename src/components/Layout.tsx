import React, { ReactNode } from 'react'
import Head from 'next/head'

import Header from './Header'
import { createGlobalStyle } from 'styled-components'

type Props = {
  children?: ReactNode
  title?: string
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Inconsolata, "Helvetica Neue", "ヒラギノ角ゴ ProN W3";
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
      {children}
      <footer>
        <hr />
        <span>© 2021</span>
      </footer>
    </main>
  </div>
)

export default Layout
